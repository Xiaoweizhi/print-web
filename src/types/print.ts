export interface PrintSettings {
  printer: string;
  copies: number;
  grayscale: boolean;
  pageRange: 'all' | 'current' | 'selection' | 'custom';
  customPages: string;
  reverseOrder: boolean;
  fitMode: 'fit' | 'actual' | 'shrink' | 'custom';
  customScale: number;
  doubleSided: boolean;
  paperSize: string;
  paperOrientation: 'portrait' | 'landscape';
  autoCenter: boolean;
  autoRotate: boolean;
}

export interface DocumentContent {
  content: string;
  fontFamily: string;
  fontSize: number;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  textAlign: 'left' | 'center' | 'right' | 'justify';
}

export const defaultPrintSettings: PrintSettings = {
  printer: 'Microsoft Print to PDF',
  copies: 1,
  grayscale: false,
  pageRange: 'all',
  customPages: '',
  reverseOrder: false,
  fitMode: 'fit',
  customScale: 100,
  doubleSided: false,
  paperSize: 'A4',
  paperOrientation: 'portrait',
  autoCenter: true,
  autoRotate: true,
};

export const defaultDocumentContent: DocumentContent = {
  content: '欢迎使用打印预览系统\n\n这是一个类似WPS风格的打印预览示例。您可以编辑此文本内容，然后点击打印按钮查看打印效果。\n\n主要功能：\n1. 富文本编辑 - 支持字体、字号、样式设置\n2. 打印预览 - 实时查看打印效果\n3. 页面设置 - 支持多种纸张大小和方向\n4. 打印设置 - 类似WPS的打印对话框\n\n祝您使用愉快！',
  fontFamily: 'Microsoft YaHei',
  fontSize: 16,
  bold: false,
  italic: false,
  underline: false,
  textAlign: 'left',
};

export const paperSizes = [
  { name: 'A4', width: 210, height: 297 },
  { name: 'A3', width: 297, height: 420 },
  { name: 'A5', width: 148, height: 210 },
  { name: 'Letter', width: 216, height: 279 },
  { name: 'Legal', width: 216, height: 356 },
];

export const fontFamilies = [
  'Microsoft YaHei',
  'SimSun',
  'SimHei',
  'KaiTi',
  'Arial',
  'Times New Roman',
  'Courier New',
];