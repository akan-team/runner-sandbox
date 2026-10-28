import { endpoint, internal } from "akanjs/signal";

import * as srv from "../srv";

export class SandboxInternal extends internal(srv.sandbox, () => ({})) {}

export class SandboxEndpoint extends endpoint(srv.sandbox, () => ({})) {}
