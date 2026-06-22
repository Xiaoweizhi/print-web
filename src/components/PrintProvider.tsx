import { createContext, useContext, useState, ReactNode } from 'react';
import PrintPanel from './PrintPanel';
import PrintContent from './PrintContent';
import { PrintSettings, DocumentContent, defaultPrintSettings } from '../types/print';

interface PrintContextType {
  openPrintPanel: (document: DocumentContent) => void;
}

const PrintContext = createContext<PrintContextType | undefined>(undefined);

export function PrintProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [document, setDocument] = useState<DocumentContent>({
    content: '',
    fontFamily: 'Microsoft YaHei',
    fontSize: 16,
    bold: false,
    italic: false,
    underline: false,
    textAlign: 'left',
  });
  const [settings, setSettings] = useState<PrintSettings>(defaultPrintSettings);

  const openPrintPanel = (doc: DocumentContent) => {
    setDocument(doc);
    setIsOpen(true);
  };

  const handlePrint = () => {
    setIsOpen(false);
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <PrintContext.Provider value={{ openPrintPanel }}>
      {children}
      
      <PrintPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        settings={settings}
        onSettingsChange={setSettings}
        document={document}
        onPrint={handlePrint}
      />

      <div className="hidden">
        <PrintContent document={document} />
      </div>
    </PrintContext.Provider>
  );
}

export function usePrint() {
  const context = useContext(PrintContext);
  if (context === undefined) {
    throw new Error('usePrint must be used within a PrintProvider');
  }
  return context;
}

export { PrintContent };
export { PrintPanel };
export { defaultPrintSettings };
export type { PrintSettings, DocumentContent };