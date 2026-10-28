import { serviceDictionary } from "akanjs/dictionary";

import type { SandboxEndpoint } from "./sandbox.signal";

export const dictionary = serviceDictionary(["en", "ko"])
  .endpoint<SandboxEndpoint>((fn) => ({}))
  .translate({});
