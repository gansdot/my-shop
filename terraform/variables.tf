variable "project_id" {
  description = "Google Cloud project ID"
  type        = string
}

variable "region" {
  description = "Cloud Run region"
  type        = string
}

variable "service_name" {
  description = "Cloud Run service name"
  type        = string
}

variable "image" {
  description = "Docker image from Artifact Registry"
  type        = string
}

variable "secret_name" {
  description = "Secret Manager secret containing DATABASE_URL"
  type        = string
}