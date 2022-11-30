import * as digitalocean from "@pulumi/digitalocean";
import *  as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();

export const cluster = new digitalocean.KubernetesCluster("do-cluster", {
  region: digitalocean.Region.SFO3,
  version: "latest",
  nodePool: {
      name: "default",
      size: digitalocean.DropletSlug.DropletS2VCPU2GB,
      nodeCount: 3,
  },
});

export const kubeconfig = cluster.kubeConfigs[0].rawConfig;

export const registry = new digitalocean.ContainerRegistry("do-registry", {
  subscriptionTierSlug: "starter",
});

export const registryEndpoint = registry.endpoint;
export const registryUrl = registry.serverUrl;
export const registryName = registry.name;

export const registryUser = config.requireSecret("registryUser");
export const registryPassword = config.requireSecret("registryPassword");