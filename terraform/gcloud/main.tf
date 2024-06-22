
provider "google" {
  project     = var.project_id
  credentials = file("keyfile.json")
  region      = "us-west1"
}

data "google_container_cluster" "existing_cluster" {
  name     = "app-crud"
  location = "us-west1"
}

resource "kubernetes_deployment" "nestjs" {
  metadata {
    name = "backend"
    labels = {
      app = "backend"
    }
  }

  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "backend"
      }
    }
    template {
      metadata {
        labels = {
          app = "backend"
        }
      }
      spec {
        container {
          image = "pedromaironi/nestjs:1.0"
          name  = "backend"
          port {
            container_port = 3000
          }
          env {
            name  = "MONGODB_URI"
            value = "mongodb+srv://pedromaironi:<password>@appcrudclustermongo.tbzzw.mongodb.net/?retryWrites=true&w=majority&appName=AppCrudClusterMongo"
          }
          env {
            name  = "PORT"
            value = "3000"
          }
          env {
            name  = "DATABASE_NAME"
            value = "utesa"
          }
          env {
            name  = "DATABASE_USER"
            value = "pedromaironi"
          }
          env {
            name  = "DATABASE_PASS"
            value = "2171983"
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "nestjs" {
  metadata {
    name = "backend"
  }
  spec {
    selector = {
      app = "backend"
    }
    port {
      protocol = "TCP"
      port     = 80
      target_port = 3000
    }
  }
}

resource "kubernetes_deployment" "nestjs-bff" {
  metadata {
    name = "bff"
    labels = {
      app = "bff"
    }
  }

  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "bff"
      }
    }
    template {
      metadata {
        labels = {
          app = "bff"
        }
      }
      spec {
        container {
          image = "pedromaironi/nestjs-bff:latest"
          name  = "bff"
          port {
            container_port = 4000
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "nestjs-bff" {
  metadata {
    name = "bff"
  }
  spec {
    selector = {
      app = "bff"
    }
    port {
      protocol = "TCP"
      port     = 80
      target_port = 4000
    }
  }
}

output "kubernetes_cluster_name" {
  value = data.google_container_cluster.existing_cluster.name
}

output "kubernetes_cluster_endpoint" {
  value = data.google_container_cluster.existing_cluster.endpoint
}

output "kubernetes_cluster_ca_certificate" {
  value = base64decode(data.google_container_cluster.existing_cluster.master_auth.0.cluster_ca_certificate)
}

output "kubernetes_client_certificate" {
  value = base64decode(data.google_container_cluster.existing_cluster.master_auth.0.client_certificate)
}

output "kubernetes_client_key" {
  value = base64decode(data.google_container_cluster.existing_cluster.master_auth.0.client_key)
}