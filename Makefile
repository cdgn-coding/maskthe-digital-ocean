kubeconfigFile = D:\Proyectos\Personales\MaskThe\kubeconfig.yaml

deploy:
	pulumi up -y

get-kubeconfig:
	pulumi stack output kubeconfig > ${kubeconfigFile} --show-secrets