data "google_secret_manager_secret" "database_url" {
  secret_id = var.secret_name
}

resource "google_cloud_run_v2_service" "my_shop" {
  name     = var.service_name
  location = var.region

  deletion_protection = true

  template {
    scaling {
      min_instance_count = 0
      max_instance_count = 1
    }

    containers {
      image = var.image

      ports {
        container_port = 8080
      }

      resources {
        limits = {
          cpu    = "1"
          memory = "512Mi"
        }
        cpu_idle = true
      }

      env {
        name = "DATABASE_URL"

        value_source {
          secret_key_ref {
            secret  = data.google_secret_manager_secret.database_url.name
            version = "1"
          }
        }
      }
    }
  }
}

resource "google_cloud_run_v2_service_iam_member" "public_access" {
  name     = google_cloud_run_v2_service.my_shop.name
  location = google_cloud_run_v2_service.my_shop.location

  role   = "roles/run.invoker"
  member = "allUsers"
}