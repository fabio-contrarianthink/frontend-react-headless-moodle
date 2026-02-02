#!/bin/bash

# Configuration
PROJECT_ID="cdlayer"
REGION="us-east1"
IMAGE_NAME="frontend-react-headless-moodle"
VERSION="${1:-latest}"

# Full image path for Artifact Registry
IMAGE_TAG="${REGION}-docker.pkg.dev/${PROJECT_ID}/${IMAGE_NAME}/${IMAGE_NAME}:${VERSION}"

echo "Building Docker image..."
docker build -t ${IMAGE_TAG} .

if [ $? -ne 0 ]; then
    echo "Docker build failed!"
    exit 1
fi

echo "Tagging image as latest..."
docker tag ${IMAGE_TAG} ${REGION}-docker.pkg.dev/${PROJECT_ID}/${IMAGE_NAME}/${IMAGE_NAME}:latest

echo "Pushing image to GCP Artifact Registry..."
docker push ${IMAGE_TAG}
docker push ${REGION}-docker.pkg.dev/${PROJECT_ID}/${IMAGE_NAME}/${IMAGE_NAME}:latest

if [ $? -ne 0 ]; then
    echo "Docker push failed! Make sure you're authenticated with:"
    echo "  gcloud auth configure-docker ${REGION}-docker.pkg.dev"
    exit 1
fi

echo "Successfully pushed ${IMAGE_TAG}"
echo "Image ready for deployment: ${IMAGE_TAG}"
