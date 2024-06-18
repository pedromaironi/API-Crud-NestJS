provider "kubernetes" {
  host                   = google_container_cluster.primary.endpoint
  client_certificate     = base64decode(google_container_cluster.primary.master_auth.0.client_certificate)
  client_key             = base64decode(google_container_cluster.primary.master_auth.0.client_key)
  cluster_ca_certificate = base64decode(google_container_cluster.primary.master_auth.0.cluster_ca_certificate)
}

resource "kubernetes_deployment" "bff" {
  metadata {
    name      = "bff-deployment"
    namespace = "default"
    labels = {
      app = "bff"
    }
  }

  spec {
    replicas = 2
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
          image = "gcr.io/ecstatic-galaxy-407119/bff-repo:latest"
          name  = "bff"
          ports {
            container_port = 4000
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "bff" {
  metadata {
    name      = "bff-service"
    namespace = "default"
  }

  spec {
    selector = {
      app = "bff"
    }
    port {
      port        = 80
      target_port = 4000
    }
    type = "LoadBalancer"
  }
}

resource "kubernetes_deployment" "back" {
  metadata {
    name      = "back-deployment"
    namespace = "default"
    labels = {
      app = "back"
    }
  }

  spec {
    replicas = 2
    selector {
      match_labels = {
        app = "back"
      }
    }
    template {
      metadata {
        labels = {
          app = "back"
        }
      }
      spec {
        container {
          image = "gcr.io/ecstatic-galaxy-407119/back-repo:latest"
          name  = "back"
          ports {
            container_port = 3000
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "back" {
  metadata {
    name      = "back-service"
    namespace = "default"
  }

  spec {
    selector = {
      app = "back"
    }
    port {
      port        = 80
      target_port = 3000
    }
    type = "LoadBalancer"
  }
}