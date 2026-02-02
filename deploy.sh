#!/bin/bash

# Configuration
PROJECT_ID="cdlayer"
REGION="us-east1"
IMAGE_NAME="frontend-react-headless-moodle"
VERSION="${1:-latest}"
K8S_NAMESPACE="${2:-default}"
USE_INGRESS="${3:-false}"

# Full image path
IMAGE_TAG="${REGION}-docker.pkg.dev/${PROJECT_ID}/${IMAGE_NAME}/${IMAGE_NAME}:${VERSION}"

echo "Deploying to Kubernetes..."
echo "Image: ${IMAGE_TAG}"
echo "Namespace: ${K8S_NAMESPACE}"
echo "Use Ingress: ${USE_INGRESS}"

# Update the deployment with the new image tag
sed -i.bak "s|image:.*|image: ${IMAGE_TAG}|g" k8s/deployment.yaml

# Apply Kubernetes manifests
kubectl apply -f k8s/deployment.yaml -n ${K8S_NAMESPACE}
kubectl apply -f k8s/service.yaml -n ${K8S_NAMESPACE}

# Optionally apply Ingress for HTTP(S) Load Balancer
if [ "${USE_INGRESS}" = "true" ]; then
  echo "Applying Ingress for HTTP(S) Load Balancer..."
  kubectl apply -f k8s/ingress.yaml -n ${K8S_NAMESPACE}
fi

# Restore the original file
mv k8s/deployment.yaml.bak k8s/deployment.yaml 2>/dev/null || true

echo "Deployment complete!"
echo "Check status with: kubectl get pods -n ${K8S_NAMESPACE}"
echo "Check service with: kubectl get svc -n ${K8S_NAMESPACE}"
if [ "${USE_INGRESS}" = "true" ]; then
  echo "Check ingress with: kubectl get ingress -n ${K8S_NAMESPACE}"
  echo "Get load balancer IP: kubectl get ingress frontend-react-headless-moodle-ingress -n ${K8S_NAMESPACE} -o jsonpath='{.status.loadBalancer.ingress[0].ip}'"
fi
