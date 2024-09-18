import { join } from 'path';
import { readFileSync } from 'fs';

export default function handler(req, res) {
  try {
    const filePath = join(process.cwd(), 'public', 'trailLog.txt');
    console.log('Attempting to read file from:', filePath);
    
    const content = readFileSync(filePath, 'utf-8');
    const paragraphs = content.split('\r\n\r\n');
    
    console.log('File read successfully. Paragraphs:', paragraphs.length);
    
    res.status(200).json(paragraphs);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ error: 'Failed to read file' });
  }
}