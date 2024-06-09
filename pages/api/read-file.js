import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'trailLog.txt');
  const content = fs.readFileSync(filePath, 'utf-8');
  const paragraphs = content.split('\r\n\r\n');
  res.status(200).json(paragraphs);
}