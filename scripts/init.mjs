// Replace the placeholders in this starter with your real values.
// Usage: npm run init -- <github-org> <repo-name> "<Site Name>"
// Example: npm run init -- contoso product-docs "Contoso Docs"
import {readdirSync, readFileSync, writeFileSync, statSync} from 'node:fs';
import {join, extname} from 'node:path';

const [org, repo, name] = process.argv.slice(2);
if (!org || !repo) {
  console.error('Usage: npm run init -- <github-org> <repo-name> "<Site Name>"');
  process.exit(1);
}
const siteName = name || 'My Docs';

const SKIP = new Set(['init.mjs', 'node_modules', '.git', 'build', '.docusaurus', 'package-lock.json']);
const EXT = new Set(['.js', '.mjs', '.md', '.mdx', '.json', '.jsonc', '.yml', '.yaml', '.example', '.css', '.svg', '.txt', '.ini']);
const NAMES = new Set(['CODEOWNERS']);

let changed = 0;
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP.has(entry)) continue;
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) { walk(path); continue; }
    if (!EXT.has(extname(entry)) && !NAMES.has(entry)) continue;
    const before = readFileSync(path, 'utf8');
    const after = before
      .replaceAll('YOUR-ORG', org)
      .replaceAll('YOUR-REPO', repo)
      .replaceAll('Acme Docs', siteName);
    if (after !== before) { writeFileSync(path, after); changed++; console.log('updated', path); }
  }
}
walk('.');
console.log(`Done. ${changed} file(s) updated. Review with: git diff`);
