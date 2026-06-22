import { useState } from 'react';
import Toolbar from '../components/Toolbar';
import ContentEditor from '../components/ContentEditor';
import { usePrint } from '../components/PrintProvider';
import { DocumentContent, defaultDocumentContent } from '../types/print';

export default function Home() {
  const [document, setDocument] = useState<DocumentContent>(defaultDocumentContent);
  const { openPrintPanel } = usePrint();

  const handleContentChange = (content: string) => {
    setDocument({ ...document, content });
  };

  const handleFontFamilyChange = (fontFamily: string) => {
    setDocument({ ...document, fontFamily });
  };

  const handleFontSizeChange = (fontSize: number) => {
    setDocument({ ...document, fontSize });
  };

  const handleBoldChange = (bold: boolean) => {
    setDocument({ ...document, bold });
  };

  const handleItalicChange = (italic: boolean) => {
    setDocument({ ...document, italic });
  };

  const handleUnderlineChange = (underline: boolean) => {
    setDocument({ ...document, underline });
  };

  const handleTextAlignChange = (textAlign: 'left' | 'center' | 'right' | 'justify') => {
    setDocument({ ...document, textAlign });
  };

  const handlePrint = () => {
    openPrintPanel(document);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Toolbar
        fontFamily={document.fontFamily}
        fontSize={document.fontSize}
        bold={document.bold}
        italic={document.italic}
        underline={document.underline}
        textAlign={document.textAlign}
        onFontFamilyChange={handleFontFamilyChange}
        onFontSizeChange={handleFontSizeChange}
        onBoldChange={handleBoldChange}
        onItalicChange={handleItalicChange}
        onUnderlineChange={handleUnderlineChange}
        onTextAlignChange={handleTextAlignChange}
        onPrint={handlePrint}
      />
      <ContentEditor
        content={document.content}
        fontFamily={document.fontFamily}
        fontSize={document.fontSize}
        bold={document.bold}
        italic={document.italic}
        underline={document.underline}
        textAlign={document.textAlign}
        onChange={handleContentChange}
      />
    </div>
  );
}
