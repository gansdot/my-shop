output "cloud_run_url" {
  description = "Deployed Cloud Run URL"
  value       = google_cloud_run_v2_service.my_shop.uri
}