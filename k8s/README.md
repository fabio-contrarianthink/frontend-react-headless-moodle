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
- `service.yaml`: Kubernetes Service manifest (LoadBalancer type with GCP annotations)
- `ingress.yaml`: Ingress resource for HTTP(S) Load Balancer (recommended for HTTP traffic)
- `ingress-https.yaml`: Ingress with HTTPS configuration (requires SSL certificate)

## Load Balancer Options

### Option 1: Network Load Balancer (Service Type: LoadBalancer)

The service is configured as `LoadBalancer` which creates a GCP Network Load Balancer. This is simpler but provides basic load balancing.

**Deploy:**
```bash
./deploy.sh [VERSION] [NAMESPACE]
```

**Get Load Balancer IP:**
```bash
kubectl get svc frontend-react-headless-moodle-service -n [NAMESPACE]
```

### Option 2: HTTP(S) Load Balancer (Ingress) - Recommended

For HTTP traffic, an Ingress resource creates a GCP HTTP(S) Load Balancer with better features:
- Better HTTP handling
- SSL/TLS termination
- Path-based routing
- More cost-effective for HTTP traffic

**Deploy with Ingress:**
```bash
./deploy.sh [VERSION] [NAMESPACE] true
```

Or manually:
```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

**Get Load Balancer IP:**
```bash
kubectl get ingress frontend-react-headless-moodle-ingress -n [NAMESPACE]
```

**For HTTPS (requires SSL certificate):**
1. Create a managed certificate:
   ```bash
   kubectl apply -f - <<EOF
   apiVersion: networking.gke.io/v1
   kind: ManagedCertificate
   metadata:
     name: frontend-ssl-cert
   spec:
     domains:
       - your-domain.com
   EOF
   ```

2. Update `ingress-https.yaml` with your domain and certificate name
3. Apply: `kubectl apply -f k8s/ingress-https.yaml`

## Configuration

You can customize the deployment by editing:
- Replica count in `deployment.yaml`
- Resource limits/requests in `deployment.yaml`
- Service type and annotations in `service.yaml`
- Ingress rules and annotations in `ingress.yaml`

## Troubleshooting

- Check pod status: `kubectl get pods -l app=frontend-react-headless-moodle`
- View logs: `kubectl logs -l app=frontend-react-headless-moodle`
- Describe service: `kubectl describe svc frontend-react-headless-moodle-service`
- Describe ingress: `kubectl describe ingress frontend-react-headless-moodle-ingress`
- Check load balancer status: `kubectl get ingress -o wide`
