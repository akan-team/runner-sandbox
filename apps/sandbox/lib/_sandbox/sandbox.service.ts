import { serve } from "akanjs/service";

export class SandboxService extends serve("sandbox" as const, { serverMode: "batch" }, () => ({})) {}
