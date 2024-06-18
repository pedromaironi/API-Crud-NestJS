provider "google" {
  credentials = file("keyfile.json")
  project = "ecstatic-galaxy-407119"
  region  = var.region
  zone    = "us-east1-a"
}
variable "region" {
  description = "La región de Google Cloud donde se creará el clúster"
  type        = string
  default     = "us-east1"  
}


resource "google_container_cluster" "primary" {
  name     = "my-cluster-pedro"
  location = var.region

  node_config {
    machine_type = "e2-micro"  # Utiliza una máquina de tipo e2-micro (más económica y con recursos limitados)
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform",
    ]

    # Configuración adicional para minimizar el uso de recursos
    disk_size_gb = 10  # Tamaño del disco en GB
    disk_type    = "pd-standard"  # Tipo de disco estándar

    metadata = {
      disable-legacy-endpoints = "true"  # Desactiva los endpoints heredados
    }

    # Configuración de red
    labels = {
      environment = "dev"
    }

    tags = ["k8s-cluster"]
  }

  # Número inicial de nodos
  initial_node_count = 1

  # Configuración adicional del clúster
  remove_default_node_pool = false  # Elimina el grupo de nodos predeterminado para personalización total
  logging_service          = "logging.googleapis.com/kubernetes"
  monitoring_service       = "monitoring.googleapis.com/kubernetes"
}