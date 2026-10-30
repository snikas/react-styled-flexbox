// Smoke test: the built ESM and CJS bundles must both load in plain Node and export a styled component.
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';

const require = createRequire(import.meta.url);
const esm = await import('../dist/index.js');
const cjs = require('../dist/index.cjs');

for (const [name, mod] of [['esm', esm], ['cjs', cjs]]) {
  assert.ok(mod.default, `${name} bundle has no default export`);
  assert.equal(mod.default.$$typeof, Symbol.for('react.forward_ref'), `${name} default export is not a component`);
}
console.log('dist ok');
