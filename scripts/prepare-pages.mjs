import { cp, mkdir, readdir } from 'node:fs/promises';
import { join, relative, extname } from 'node:path';

const clientRoot = join(process.cwd(), 'dist', 'client');

async function copyRouteIndexes(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const source = join(directory, entry.name);
    if (entry.isDirectory()) {
      await copyRouteIndexes(source);
      continue;
    }
    if (extname(entry.name) !== '.html' || entry.name === '404.html' || entry.name === 'index.html') continue;
    const routeName = entry.name.slice(0, -'.html'.length);
    const targetDirectory = join(directory, routeName);
    await mkdir(targetDirectory, { recursive: true });
    await cp(source, join(targetDirectory, 'index.html'));
    console.log(`Prepared /${relative(clientRoot, targetDirectory)}/ from ${relative(clientRoot, source)}`);
  }
}

await copyRouteIndexes(clientRoot);
