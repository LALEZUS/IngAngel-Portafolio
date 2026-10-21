import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import mammoth from 'mammoth';
import { PDFParse } from 'pdf-parse';

const configured = process.env.CV_SOURCE_DIR || path.resolve('private/cv-source');
const root = path.resolve(configured);
const supported = new Set(['.pdf','.docx','.txt','.md','.html','.htm']);
const files: string[] = [];
async function scan(dir: string) {
  let entries;
  try { entries = await readdir(dir, { withFileTypes: true }); } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return;
    throw error;
  }
  for (const entry of entries) {
    const full = path.resolve(dir, entry.name);
    if (!full.startsWith(root + path.sep) && full !== root) continue;
    if (entry.isDirectory()) await scan(full);
    else if (supported.has(path.extname(entry.name).toLowerCase())) files.push(full);
  }
}
const stripHtml = (text: string) => text.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const excerpt = (text: string, pattern: RegExp) => { const match = text.match(pattern); return match?.[0]?.slice(0,240) ?? null; };
await scan(root);
const records: {file:string;text:string;error?:string}[]=[];
for (const file of files) {
  try {
    const ext = path.extname(file).toLowerCase(); let text='';
    if (ext === '.pdf') { const parser = new PDFParse({ data: await readFile(file) }); const result = await parser.getText(); text = result.text; await parser.destroy(); }
    else if (ext === '.docx') text = (await mammoth.extractRawText({ buffer: await readFile(file) })).value;
    else { const raw=await readFile(file,'utf8'); text=ext==='.html'||ext==='.htm'?stripHtml(raw):raw; }
    records.push({file:path.relative(root,file),text:text.replace(/\s+/g,' ').trim()});
  } catch (error) { records.push({file:path.relative(root,file),text:'',error:String(error)}); }
}
const combined=records.map(r=>r.text).join('\n');
const report = [
  '# Informe local de análisis de CV', '',
  `Carpeta revisada: \`${root}\``,
  `Archivos compatibles detectados: ${records.length}`,
  ...records.map(r=>`- \`${r.file}\`: ${r.error?'error de extracción: '+r.error:`texto extraído (${r.text.length} caracteres)`}`),
  '', '## Señales detectadas (requieren revisión humana)',
  `- Nombre detectado: ${excerpt(combined,/Angel Eduardo Dom[ií]nguez Mart[ií]nez/i) ?? 'no detectado'}`,
  `- Puestos/fechas visibles: ${[...new Set(combined.match(/(?:Desarrollador Web|Practicante de Instalaciones y Configuraci[oó]n TI|Soporte en el Departamento de Sistemas)[^.;]{0,100}/gi) ?? [])].join('; ') || 'no detectados'}`,
  `- Perfil: ${excerpt(combined,/Desarrollador web e Ingeniero en Redes y Telecomunicaciones[^.]{0,280}/i) ?? 'no detectado'}`,
  '', '## Posibles inconsistencias y privacidad',
  '- La extracción automática identifica menciones, pero no decide contradicciones de fechas ni estatus de certificaciones. Contrasta los originales y actualiza `src/data/profile.json` manualmente.',
  '- No se publica correo, teléfono, domicilio ni referencias. Revisa enlaces y datos de contacto antes de autorizarlos.',
  '- No copies CV originales a `public/`; `private/cv-source/` está excluida de Git.',
  '', '## Archivos no procesados',
  '- Formatos compatibles: PDF, DOCX, TXT, Markdown y HTML. DOC/ODT y otros formatos deben convertirse localmente a uno compatible.',
].join('\n');
await mkdir('private/cv-source',{recursive:true});
await mkdir('src/data',{recursive:true});
await writeFile('analysis-report.md',report,'utf8');
console.log(`Analizados ${records.length} archivos. Informe: analysis-report.md`);
if (!records.length) console.log('Coloca copias locales de los CV en private/cv-source o define CV_SOURCE_DIR.');
