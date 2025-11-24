const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

if (!FIGMA_FILE_KEY) throw new Error('Set FIGMA_FILE_KEY');
if (!FIGMA_TOKEN) throw new Error('Set FIGMA_TOKEN');

const headers = {
  'X-Figma-Token': FIGMA_TOKEN,
};

export const fetchComponents = async () => {
  const res = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`, { headers });
  if (!res.ok) throw new Error(`Figma request failed: ${res.status}`);
  return res.json();
};

export const fetchStyles = async () => {
  const res = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/styles`, { headers });
  if (!res.ok) throw new Error(`Figma request failed: ${res.status}`);
  return res.json();
};
