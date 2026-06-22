interface ContentEditorProps {
  content: string;
  fontFamily: string;
  fontSize: number;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  textAlign: 'left' | 'center' | 'right' | 'justify';
  onChange: (value: string) => void;
}

export default function ContentEditor({
  content,
  fontFamily,
  fontSize,
  bold,
  italic,
  underline,
  textAlign,
  onChange,
}: ContentEditorProps) {
  return (
    <div className="flex-1 overflow-auto bg-white p-8">
      <div
        contentEditable
        suppressContentEditableWarning
        onChange={(e: React.ChangeEvent<HTMLDivElement>) => onChange(e.target.innerText)}
        className="min-h-[500px] outline-none whitespace-pre-wrap"
        style={{
          fontFamily,
          fontSize: `${fontSize}px`,
          fontWeight: bold ? 'bold' : 'normal',
          fontStyle: italic ? 'italic' : 'normal',
          textDecoration: underline ? 'underline' : 'none',
          textAlign,
          lineHeight: 1.8,
          color: '#333',
        }}
      >
        {content}
      </div>
    </div>
  );
}