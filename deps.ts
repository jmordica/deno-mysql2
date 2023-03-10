
export { Buffer } from "node:buffer";
export {
  Socket,
  connect,
  Stream,
} from "node:net";
export { EventEmitter } from "node:events";
export { Readable } from "node:stream";
export {
  createSecureContext,
  TLSSocket,
} from "node:tls";
import zlib from "node:zlib";
export { URL } from "node:url";
export {
  createHash,
  publicEncrypt,
  // createCredentials,
  randomBytes,
} from "node:crypto";
export type { ErrnoException } from "https://deno.land/std/node/internal/errors.ts";
export { nextTick } from "node:process";
export { createServer } from "node:net";

// node
import * as iconv_lite from "https://deno.land/x/jmordica_iconv_lite@v1.0.3/mod.ts";
import { genfun } from "https://deno.land/x/jmordica_generate_function@v1.0.1/mod.ts";
import * as seq_queue from "https://deno.land/x/seq_queue/mod.ts";
// node

// not-node
export { Denque } from "https://deno.land/x/sail_denque/mod.ts";
import * as sqlstring from "https://deno.land/x/sail_sqlstring/mod.ts";
export { LRUCache } from "https://deno.land/x/sail_lru_cache/mod.ts";
import * as named_placeholders from "https://deno.land/x/named_placeholders/mod.ts";
import Long from "https://deno.land/x/long/mod.ts";
// not-node

export { Long, iconv_lite, sqlstring, named_placeholders, genfun, zlib, seq_queue };
