import { DocumentContent } from '../types/print';

interface PrintContentProps {
  document: DocumentContent;
}

export default function PrintContent({ document }: PrintContentProps) {
  return (
    <div className="print-content">
      <div
        className="min-h-[297mm] p-[15mm]"
        style={{
          fontFamily: document.fontFamily,
          fontSize: `${document.fontSize}px`,
          fontWeight: document.bold ? 'bold' : 'normal',
          fontStyle: document.italic ? 'italic' : 'normal',
          textDecoration: document.underline ? 'underline' : 'none',
          textAlign: document.textAlign,
          lineHeight: 1.8,
          color: '#333',
        }}
      >
        {document.content.split('\n').map((line, index) => (
          <p key={index} className={line === '' ? 'h-6' : ''}>
            {line || '\u00A0'}
          </p>
        ))}
      </div>
    </div>
  );
}