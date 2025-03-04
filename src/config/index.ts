import { parseSchema, RecursivePartial } from './parse.js';
import { FromSchema } from 'json-schema-to-ts';
import { Schema } from './schema.js';

export type ConfigInterface = FromSchema<typeof Schema>;
export type SyncOptionsV5 = ConfigInterface['sync']['v5'];
export type SyncOptionsV6 = ConfigInterface['sync']['v6'];
export type PiholeVersion = 'auto' | 'v5' | 'v6';

export function Config(
  overrides: RecursivePartial<ConfigInterface> = {}
): ConfigInterface {
  // @ts-expect-error - Type instantiation is excessively deep and possibly infinite
  return parseSchema(Schema, { overrides });
}
