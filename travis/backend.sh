# Desplegar Backend en Google Cloud
echo "Desplegando Backend en Google Cloud..."

# Autenticación en Google Cloud
#echo $GCLOUD_SERVICE_KEY | base64 --decode > $HOME/gcloud-service-key.json
#gcloud auth activate-service-account --key-file=$HOME/gcloud-service-key.json
#gcloud config set project $GCLOUD_PROJECT_ID

# Desplegar usando Terraform y kubectl
cd terraform
terraform init
terraform apply -auto-approve

# Aplicar configuraciones de Kubernetes
kubectl apply -f Kubernetes/back-deployment.yaml
kubectl apply -f Kubernetes/backend-service.yaml

echo "Despliegue del Backend completado."