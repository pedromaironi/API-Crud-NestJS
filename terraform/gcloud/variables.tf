variable "region" {
  description = "The AWS region to create resources in."
  default     = "us-west1"
}

variable "cluster_name" {
  description = "The name of the EKS cluster."
  default     = "my-eks-cluster"
}

variable "vpc_cidr" {
  description = "CIDR block for the VPC."
  default     = "10.0.0.0/16"
}

variable "project_id" {
  description = "The ID of your Google Cloud project"
  default     = "ecstatic-galaxy-407119"
}

variable "credentials_path" {
  description = "The path to your Google Cloud service account credentials JSON file"
  default     = "./keyfile.json"
}