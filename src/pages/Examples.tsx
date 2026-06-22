import { useState } from 'react';
import { usePrint, type DocumentContent } from '../components/PrintProvider';

const codeExample = 'import { PrintProvider, usePrint, type DocumentContent } from "@print-web/core";\n\nfunction App() {\n  return (\n    <PrintProvider>\n      <MyComponent />\n    </PrintProvider>\n  );\n}\n\nfunction MyComponent() {\n  const { openPrintPanel } = usePrint();\n\n  const handlePrint = () => {\n    const document: DocumentContent = {\n      content: "要打印的内容",\n      fontFamily: "Microsoft YaHei",\n      fontSize: 16,\n      bold: false,\n      italic: false,\n      underline: false,\n      textAlign: "left",\n    };\n    openPrintPanel(document);\n  };\n\n  return <button onClick={handlePrint}>打印</button>;\n}';

export default function Examples() {
  const { openPrintPanel } = usePrint();
  const [customContent, setCustomContent] = useState('在这里输入自定义内容...');
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Microsoft YaHei');
  const [textAlign, setTextAlign] = useState<'left' | 'center' | 'right' | 'justify'>('left');

  const example1 = () => {
    const doc: DocumentContent = {
      content: 'Hello World!\n\n这是一个简单的打印示例。\n\n欢迎使用 Web 打印组件！',
      fontFamily: 'Microsoft YaHei',
      fontSize: 16,
      bold: false,
      italic: false,
      underline: false,
      textAlign: 'left',
    };
    openPrintPanel(doc);
  };

  const example2 = () => {
    const doc: DocumentContent = {
      content: '标题文本\n\n这是一段加粗的文本演示。\n\n可以看到文字是粗体显示的。',
      fontFamily: 'SimHei',
      fontSize: 18,
      bold: true,
      italic: false,
      underline: false,
      textAlign: 'center',
    };
    openPrintPanel(doc);
  };

  const example3 = () => {
    const doc: DocumentContent = {
      content: '斜体示例\n\n这段文字使用了斜体样式。\n\n同时还加了下划线效果。',
      fontFamily: 'KaiTi',
      fontSize: 16,
      bold: false,
      italic: true,
      underline: true,
      textAlign: 'right',
    };
    openPrintPanel(doc);
  };

  const example4 = () => {
    const doc: DocumentContent = {
      content: '多行文本示例\n\n第一段落：这是第一段文字内容，用于演示打印功能。\n\n第二段落：这是第二段文字，可以设置不同的字体和样式。\n\n第三段落：支持多种对齐方式，包括左对齐、居中、右对齐和两端对齐。',
      fontFamily: 'Microsoft YaHei',
      fontSize: 14,
      bold: false,
      italic: false,
      underline: false,
      textAlign: 'justify',
    };
    openPrintPanel(doc);
  };

  const example5 = () => {
    const doc: DocumentContent = {
      content: customContent,
      fontFamily,
      fontSize,
      bold: false,
      italic: false,
      underline: false,
      textAlign,
    };
    openPrintPanel(doc);
  };

  const example6 = () => {
    const doc: DocumentContent = {
      content: '订单确认单\n\n订单号：ORD-20240101001\n\n客户姓名：张三\n联系电话：13800138000\n\n商品清单：\n- 商品A x 1 ¥100.00\n- 商品B x 2 ¥200.00\n- 商品C x 3 ¥300.00\n\n总计：¥600.00\n\n下单时间：2024-01-01 10:00:00',
      fontFamily: 'SimSun',
      fontSize: 16,
      bold: false,
      italic: false,
      underline: false,
      textAlign: 'left',
    };
    openPrintPanel(doc);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">打印组件使用示例</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">示例 1: 简单文本</h3>
            <p className="text-gray-600 text-sm mb-4">打印一段简单的文本内容</p>
            <button onClick={example1} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">打印示例</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">示例 2: 加粗居中</h3>
            <p className="text-gray-600 text-sm mb-4">演示加粗样式和居中对齐</p>
            <button onClick={example2} className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">打印示例</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">示例 3: 斜体下划线</h3>
            <p className="text-gray-600 text-sm mb-4">演示斜体和下划线样式</p>
            <button onClick={example3} className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">打印示例</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">示例 4: 两端对齐</h3>
            <p className="text-gray-600 text-sm mb-4">演示多行文本和两端对齐</p>
            <button onClick={example4} className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">打印示例</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">示例 5: 订单确认单</h3>
            <p className="text-gray-600 text-sm mb-4">打印格式化的订单信息</p>
            <button onClick={example6} className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">打印示例</button>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">自定义打印</h3>
          <div className="space-y-4">
            <textarea value={customContent} onChange={(e) => setCustomContent(e.target.value)} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="输入您要打印的内容..." />
            
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">字体</label>
                <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="Microsoft YaHei">微软雅黑</option>
                  <option value="SimSun">宋体</option>
                  <option value="SimHei">黑体</option>
                  <option value="KaiTi">楷体</option>
                  <option value="Arial">Arial</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">字号</label>
                <input type="number" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-20" />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">对齐方式</label>
                <select value={textAlign} onChange={(e) => setTextAlign(e.target.value as 'left' | 'center' | 'right' | 'justify')} className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="left">左对齐</option>
                  <option value="center">居中</option>
                  <option value="right">右对齐</option>
                  <option value="justify">两端对齐</option>
                </select>
              </div>
            </div>
            
            <button onClick={example5} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">打印自定义内容</button>
          </div>
        </div>

        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">基本用法代码</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{codeExample}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
