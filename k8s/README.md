# Kubernetes Deployment

This directory contains Kubernetes manifests for deploying the frontend application.

## Prerequisites

1. **GCP Authentication**: Make sure you're authenticated with GCP and have access to the `cdlayer` project
   ```bash
   gcloud auth login
   gcloud config set project cdlayer
   gcloud auth configure-docker us-east1-docker.pkg.dev
   ```

2. **Kubernetes Access**: Ensure you have kubectl configured to access your GKE cluster
   ```bash
   gcloud container clusters get-credentials CLUSTER_NAME --region us-east1 --project cdlayer
   ```

3. **Artifact Registry Repository**: Create the repository if it doesn't exist
   ```bash
   gcloud artifacts repositories create frontend-react-headless-moodle \
     --repository-format=docker \
     --location=us-east1 \
     --project=cdlayer
   ```

## Deployment Steps

### 1. Build and Push Docker Image

From the project root:
```bash
./build-and-push.sh [VERSION]
```

Example:
```bash
./build-and-push.sh v1.0.0
```

### 2. Deploy to Kubernetes

```bash
./deploy.sh [VERSION] [NAMESPACE]
```

Example:
```bash
./deploy.sh v1.0.0 production
```

Or manually:
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

## Files

- `deployment.yaml`: Kubernetes Deployment manifest
- `service.yaml`: Kubernetes Service manifest (LoadBalancer type)

## Configuration

You can customize the deployment by editing:
- Replica count in `deployment.yaml`
- Resource limits/requests in `deployment.yaml`
- Service type in `service.yaml` (currently LoadBalancer)

## Troubleshooting

- Check pod status: `kubectl get pods -l app=frontend-react-headless-moodle`
- View logs: `kubectl logs -l app=frontend-react-headless-moodle`
- Describe service: `kubectl describe svc frontend-react-headless-moodle-service`
