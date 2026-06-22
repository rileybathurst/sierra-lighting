interface CaniuseLiteAgentData {
  versions: Array<string | null>;
}

interface CaniuseLiteFeatureData {
  stats: Record<string, Record<string, string>>;
}

declare module "caniuse-lite" {
  export interface AgentData {
    versions: Array<string | null>;
  }

  export interface FeatureData {
    stats: Record<string, Record<string, string>>;
  }

  export const agents: Record<string, AgentData>;
  export const features: Record<string, unknown>;
  export function feature(data: unknown): FeatureData;
}

declare module "caniuse-lite/dist/unpacker/index.js" {
  export const agents: Record<string, CaniuseLiteAgentData>;
  export const features: Record<string, unknown>;
  export function feature(data: unknown): CaniuseLiteFeatureData;
}
