import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Printer, Settings, FileText } from 'lucide-react';
import { PrintSettings, paperSizes, DocumentContent } from '../types/print';

interface PrintPanelProps {
  isOpen: boolean;
  onClose: () => void;
  settings: PrintSettings;
  onSettingsChange: (settings: PrintSettings) => void;
  document: DocumentContent;
  onPrint: () => void;
}

export default function PrintPanel({ isOpen, onClose, settings, onSettingsChange, document, onPrint }: PrintPanelProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  if (!isOpen) return null;

  const handleChange = (key: keyof PrintSettings, value: any) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  const handlePrint = () => {
    onPrint();
  };

  const fitClass = 'flex-1 px-3 py-2 text-sm border';

  return (<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-[900px] max-w-[90vw] max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2">
            <Printer className="text-blue-600" size={20}/>
            <span className="font-medium text-gray-800">打印</span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded transition-colors">
            <X size={20} className="text-gray-500"/>
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="w-[400px] border-r border-gray-200 overflow-y-auto">
            <div className="p-4">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <Settings size={16}/>
                  基础设置
                </h3>

                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1.5">提示</label>
                  <p className="text-sm text-gray-500 bg-blue-50 p-3 rounded-lg">
                    点击"打印"按钮后，浏览器会打开系统打印对话框，您可以在那里选择打印机并确认打印。
                  </p>
                </div>

                <div className="flex items-center gap-6 mb-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1.5">打印份数</label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button onClick={() => handleChange('copies', Math.max(1, settings.copies - 1))} className="px-3 py-1.5 hover:bg-gray-100 rounded-l-lg">-</button>
                      <input type="number" value={settings.copies} onChange={(e) => handleChange('copies', Math.max(1, Number(e.target.value)))} className="w-12 text-center py-1.5 border-x border-gray-300 focus:outline-none"/>
                      <button onClick={() => handleChange('copies', settings.copies + 1)} className="px-3 py-1.5 hover:bg-gray-100 rounded-r-lg">+</button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="grayscale" checked={settings.grayscale} onChange={(e) => handleChange('grayscale', e.target.checked)} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
                    <label htmlFor="grayscale" className="text-sm text-gray-600">灰度打印</label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <FileText size={16}/>
                  页面范围
                </h3>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="pageRange" checked={settings.pageRange === 'all'} onChange={() => handleChange('pageRange', 'all')} className="w-4 h-4 text-blue-600"/>
                    <span className="text-sm text-gray-700">所有页面</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="pageRange" checked={settings.pageRange === 'current'} onChange={() => handleChange('pageRange', 'current')} className="w-4 h-4 text-blue-600"/>
                    <span className="text-sm text-gray-700">当前页面</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="pageRange" checked={settings.pageRange === 'custom'} onChange={() => handleChange('pageRange', 'custom')} className="w-4 h-4 text-blue-600"/>
                    <span className="text-sm text-gray-700">页码选择</span>
                    <input type="text" value={settings.customPages} onChange={(e) => handleChange('customPages', e.target.value)} disabled={settings.pageRange !== 'custom'} className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm w-24" placeholder="1-3,5"/>
                  </label>
                </div>

                <div className="mt-3 flex items-center gap-4">
                  <select value="all" className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="all">范围中所有页面</option>
                    <option value="odd">仅奇数页</option>
                    <option value="even">仅偶数页</option>
                  </select>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" id="reverseOrder" checked={settings.reverseOrder} onChange={(e) => handleChange('reverseOrder', e.target.checked)} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
                    <label htmlFor="reverseOrder" className="text-sm text-gray-600">逆序打印</label>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">打印方式</h3>

                <div className="flex gap-1 mb-3">
                  <button onClick={() => handleChange('fitMode', 'fit')} className={fitClass + ' rounded-l-lg ' + (settings.fitMode === 'fit' ? 'bg-blue-50 border-blue-500 text-blue-600' : 'border-gray-300 hover:bg-gray-50')}>适合打印边距</button>
                  <button onClick={() => handleChange('fitMode', 'actual')} className={fitClass + (settings.fitMode === 'actual' ? ' bg-blue-50 border-blue-500 text-blue-600' : ' border-gray-300 hover:bg-gray-50')}>实际大小</button>
                  <button onClick={() => handleChange('fitMode', 'shrink')} className={fitClass + (settings.fitMode === 'shrink' ? ' bg-blue-50 border-blue-500 text-blue-600' : ' border-gray-300 hover:bg-gray-50')}>缩小过大页面</button>
                  <button onClick={() => handleChange('fitMode', 'custom')} className={fitClass + ' rounded-r-lg ' + (settings.fitMode === 'custom' ? 'bg-blue-50 border-blue-500 text-blue-600' : 'border-gray-300 hover:bg-gray-50')}>自定义比例</button>
                </div>

                {settings.fitMode === 'custom' && (<div className="flex items-center gap-2">
                    <input type="number" value={settings.customScale} onChange={(e) => handleChange('customScale', Math.min(200, Math.max(10, Number(e.target.value))))} className="w-20 px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <span className="text-sm text-gray-600">%</span>
                  </div>)}

                <label className="flex items-center gap-2 mt-3 cursor-pointer">
                  <input type="checkbox" id="doubleSided" checked={settings.doubleSided} onChange={(e) => handleChange('doubleSided', e.target.checked)} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
                  <label htmlFor="doubleSided" className="text-sm text-gray-600">使用双面打印</label>
                </label>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">页面设置</h3>

                <div className="mb-3">
                  <label className="block text-sm text-gray-600 mb-1.5">纸张大小</label>
                  <div className="flex items-center gap-2">
                    <select value={settings.paperSize} onChange={(e) => handleChange('paperSize', e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      {paperSizes.map((size) => (<option key={size.name} value={size.name}>{size.name} ({size.width} × {size.height} mm)</option>))}
                    </select>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">页边距</button>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1.5">纸张方向</label>
                  <div className="flex gap-2">
                    <label className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="orientation" checked={settings.paperOrientation === 'portrait'} onChange={() => handleChange('paperOrientation', 'portrait')} className="w-4 h-4 text-blue-600"/>
                      <span className="text-sm">纵向</span>
                    </label>
                    <label className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="orientation" checked={settings.paperOrientation === 'landscape'} onChange={() => handleChange('paperOrientation', 'landscape')} className="w-4 h-4 text-blue-600"/>
                      <span className="text-sm">横向</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" id="autoCenter" checked={settings.autoCenter} onChange={(e) => handleChange('autoCenter', e.target.checked)} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
                    <label htmlFor="autoCenter" className="text-sm text-gray-600">自动居中</label>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" id="autoRotate" checked={settings.autoRotate} onChange={(e) => handleChange('autoRotate', e.target.checked)} className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
                    <label htmlFor="autoRotate" className="text-sm text-gray-600">自动旋转</label>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col bg-gray-100">
            <div className="px-4 py-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-700">预览</h3>
            </div>

            <div className="flex-1 overflow-auto p-6">
              <div className="flex justify-center">
                <div className="bg-white shadow-lg border border-gray-200" style={{ width: settings.paperOrientation === 'landscape' ? '420px' : '297px', height: settings.paperOrientation === 'landscape' ? '297px' : '420px' }}>
                  <div className="p-8 h-full overflow-auto" style={{ fontFamily: document.fontFamily, fontSize: document.fontSize + 'px', fontWeight: document.bold ? 'bold' : 'normal', fontStyle: document.italic ? 'italic' : 'normal', textDecoration: document.underline ? 'underline' : 'none', textAlign: document.textAlign, lineHeight: 1.8, color: '#333' }}>
                    {document.content.split('\n').map((line, index) => (<p key={index} className={line === '' ? 'h-6' : ''}>{line || '\u00A0'}</p>))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-center gap-4">
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="p-2 hover:bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"><ChevronLeft size={18}/></button>
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="p-2 hover:bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"><ChevronLeft size={18}/></button>
              <input type="number" value={currentPage} onChange={(e) => setCurrentPage(Math.min(totalPages, Math.max(1, Number(e.target.value))))} className="w-16 text-center px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <span className="text-sm text-gray-600">/ {totalPages}</span>
              <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="p-2 hover:bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"><ChevronRight size={18}/></button>
              <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="p-2 hover:bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"><ChevronRight size={18}/></button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50">
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">校对</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">多文档打印</button>
            <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">操作技巧</button>
          </div>
          <div className="flex gap-2">
            <button onClick={onClose} className="px-6 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">关闭</button>
            <button onClick={handlePrint} className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors font-medium"><Printer size={16}/>打印</button>
          </div>
        </div>
      </div>
    </div>);
}
