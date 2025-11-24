import fs from 'node:fs';
import path from 'node:path';

const payload = {
  ts: new Date().toISOString(),
  agent: 'Brand-Gen-0',
};

const beaconPath = path.join(process.cwd(), 'public', 'sig.beacon.json');

fs.mkdirSync(path.dirname(beaconPath), { recursive: true });
fs.writeFileSync(beaconPath, JSON.stringify(payload, null, 2));
console.log('sig.beacon.json updated');
