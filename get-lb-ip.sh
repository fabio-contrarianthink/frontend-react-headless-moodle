#!/bin/bash

# Configuration
K8S_NAMESPACE="${1:-default}"
USE_INGRESS="${2:-false}"

if [ "${USE_INGRESS}" = "true" ]; then
  echo "Getting HTTP(S) Load Balancer IP from Ingress..."
  INGRESS_NAME="frontend-react-headless-moodle-ingress"
  IP=$(kubectl get ingress ${INGRESS_NAME} -n ${K8S_NAMESPACE} -o jsonpath='{.status.loadBalancer.ingress[0].ip}' 2>/dev/null)
  
  if [ -z "$IP" ]; then
    echo "Load balancer IP not yet assigned. It may take a few minutes to provision."
    echo "Check status with: kubectl get ingress ${INGRESS_NAME} -n ${K8S_NAMESPACE}"
  else
    echo "Load Balancer IP: ${IP}"
    echo "Access your application at: http://${IP}"
  fi
else
  echo "Getting Network Load Balancer IP from Service..."
  SERVICE_NAME="frontend-react-headless-moodle-service"
  IP=$(kubectl get svc ${SERVICE_NAME} -n ${K8S_NAMESPACE} -o jsonpath='{.status.loadBalancer.ingress[0].ip}' 2>/dev/null)
  
  if [ -z "$IP" ]; then
    echo "Load balancer IP not yet assigned. It may take a few minutes to provision."
    echo "Check status with: kubectl get svc ${SERVICE_NAME} -n ${K8S_NAMESPACE}"
  else
    echo "Load Balancer IP: ${IP}"
    echo "Access your application at: http://${IP}"
  fi
fi
