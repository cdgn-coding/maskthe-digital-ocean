import * as digitalocean from "@pulumi/digitalocean";

const cluster = new digitalocean.KubernetesCluster("do-cluster", {
  region: digitalocean.Region.SFO3,
  version: "latest",
  nodePool: {
      name: "default",
      size: digitalocean.DropletSlug.DropletS2VCPU2GB,
      nodeCount: 3,
  },
});

export const kubeconfig = cluster.kubeConfigs[0].rawConfig;