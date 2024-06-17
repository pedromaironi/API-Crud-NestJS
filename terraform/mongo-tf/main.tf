terraform {
  required_providers {
    mongodbatlas = {
      source  = "mongodb/mongodbatlas"
      version = "1.17.1"
    }
  }
}

provider "mongodbatlas" {
  public_key  = var.mongodb_atlas_public_key
  private_key = var.mongodb_atlas_private_key
}

resource "mongodbatlas_project" "project" {
  org_id = var.org_id
  name   = "AppCrud"
}

resource "mongodbatlas_cluster" "cluster" {
  project_id   = mongodbatlas_project.project.id
  name         = "AppCrudClusterMongo"
  cluster_type = "REPLICASET"
  provider_instance_size_name = "M10" 
  provider_name = "AWS"

  replication_specs {
    num_shards   = 1
    regions_config {
      region_name     = "US_EAST_1"
      electable_nodes = 3
      read_only_nodes = 0
      priority        = 7
    }
  }
}