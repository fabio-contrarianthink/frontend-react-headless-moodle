#!/bin/bash

# Configuration
PROJECT_ID="cdlayer"
REGION="us-east1"
IMAGE_NAME="frontend-react-headless-moodle"
VERSION="${1:-latest}"
K8S_NAMESPACE="${2:-default}"

# Full image path
IMAGE_TAG="${REGION}-docker.pkg.dev/${PROJECT_ID}/${IMAGE_NAME}/${IMAGE_NAME}:${VERSION}"

echo "Deploying to Kubernetes..."
echo "Image: ${IMAGE_TAG}"
echo "Namespace: ${K8S_NAMESPACE}"

# Update the deployment with the new image tag
sed -i.bak "s|image:.*|image: ${IMAGE_TAG}|g" k8s/deployment.yaml

# Apply Kubernetes manifests
kubectl apply -f k8s/deployment.yaml -n ${K8S_NAMESPACE}
kubectl apply -f k8s/service.yaml -n ${K8S_NAMESPACE}

# Restore the original file
mv k8s/deployment.yaml.bak k8s/deployment.yaml 2>/dev/null || true

echo "Deployment complete!"
echo "Check status with: kubectl get pods -n ${K8S_NAMESPACE}"
echo "Check service with: kubectl get svc -n ${K8S_NAMESPACE}"
