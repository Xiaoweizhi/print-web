import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, Printer } from 'lucide-react';
import { fontFamilies } from '../types/print';

interface ToolbarProps {
  fontFamily: string;
  fontSize: number;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  textAlign: 'left' | 'center' | 'right' | 'justify';
  onFontFamilyChange: (value: string) => void;
  onFontSizeChange: (value: number) => void;
  onBoldChange: (value: boolean) => void;
  onItalicChange: (value: boolean) => void;
  onUnderlineChange: (value: boolean) => void;
  onTextAlignChange: (value: 'left' | 'center' | 'right' | 'justify') => void;
  onPrint: () => void;
}

export default function Toolbar({
  fontFamily,
  fontSize,
  bold,
  italic,
  underline,
  textAlign,
  onFontFamilyChange,
  onFontSizeChange,
  onBoldChange,
  onItalicChange,
  onUnderlineChange,
  onTextAlignChange,
  onPrint,
}: ToolbarProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-2 flex-wrap">
      <select
        value={fontFamily}
        onChange={(e) => onFontFamilyChange(e.target.value)}
        className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {fontFamilies.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>

      <select
        value={fontSize}
        onChange={(e) => onFontSizeChange(Number(e.target.value))}
        className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {[10, 12, 14, 16, 18, 20, 24, 36, 48, 72].map((size) => (
          <option key={size} value={size}>
            {size}px
          </option>
        ))}
      </select>

      <div className="w-px h-6 bg-gray-300 mx-2" />

      <button
        onClick={() => onBoldChange(!bold)}
        className={`p-2 rounded-lg transition-colors ${
          bold ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'
        }`}
        title="Bold"
      >
        <Bold size={18} />
      </button>

      <button
        onClick={() => onItalicChange(!italic)}
        className={`p-2 rounded-lg transition-colors ${
          italic ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'
        }`}
        title="Italic"
      >
        <Italic size={18} />
      </button>

      <button
        onClick={() => onUnderlineChange(!underline)}
        className={`p-2 rounded-lg transition-colors ${
          underline ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'
        }`}
        title="Underline"
      >
        <Underline size={18} />
      </button>

      <div className="w-px h-6 bg-gray-300 mx-2" />

      <button
        onClick={() => onTextAlignChange('left')}
        className={`p-2 rounded-lg transition-colors ${
          textAlign === 'left' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'
        }`}
        title="Align Left"
      >
        <AlignLeft size={18} />
      </button>

      <button
        onClick={() => onTextAlignChange('center')}
        className={`p-2 rounded-lg transition-colors ${
          textAlign === 'center' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'
        }`}
        title="Align Center"
      >
        <AlignCenter size={18} />
      </button>

      <button
        onClick={() => onTextAlignChange('right')}
        className={`p-2 rounded-lg transition-colors ${
          textAlign === 'right' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'
        }`}
        title="Align Right"
      >
        <AlignRight size={18} />
      </button>

      <button
        onClick={() => onTextAlignChange('justify')}
        className={`p-2 rounded-lg transition-colors ${
          textAlign === 'justify' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'
        }`}
        title="Justify"
      >
        <AlignJustify size={18} />
      </button>

      <div className="flex-1" />

      <button
        onClick={onPrint}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        <Printer size={18} />
        打印
      </button>
    </div>
  );
}