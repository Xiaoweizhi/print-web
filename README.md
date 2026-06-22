# Web 打印预览组件

一个类似 WPS 风格的 Web 打印预览组件，支持富文本编辑、打印设置和实时预览。

## 功能特性

- 📝 **富文本编辑** - 支持字体、字号、样式设置
- 🖨️ **打印预览** - 实时查看打印效果
- ⚙️ **打印设置** - 页面范围、缩放方式、纸张设置
- 📱 **响应式设计** - 适配不同屏幕尺寸

## 快速开始

### 安装

```bash
# 使用 npm
npm install @print-web/core

# 使用 pnpm
pnpm add @print-web/core
```

### 基本用法

```tsx
import { PrintProvider, usePrint, type DocumentContent } from '@print-web/core'
import React from 'react'

function App() {
  return (
    <PrintProvider>
      <YourComponent />
    </PrintProvider>
  )
}

function YourComponent() {
  const { openPrintPanel } = usePrint()

  const handlePrint = () => {
    const document: DocumentContent = {
      content: 'Hello World!\n这是一段要打印的文本。',
      fontFamily: 'Microsoft YaHei',
      fontSize: 16,
      bold: false,
      italic: false,
      underline: false,
      textAlign: 'left',
    }
    openPrintPanel(document)
  }

  return <button onClick={handlePrint}>打印</button>
}
```

## API 文档

### PrintProvider

打印上下文提供者，需要包裹整个应用。

```tsx
<PrintProvider>{/* 应用内容 */}</PrintProvider>
```

### usePrint Hook

提供打印功能的自定义 Hook。

```tsx
const { openPrintPanel } = usePrint()
```

#### openPrintPanel(document)

打开打印设置面板。

| 参数     | 类型              | 说明             |
| -------- | ----------------- | ---------------- |
| document | `DocumentContent` | 要打印的文档内容 |

### DocumentContent 类型

```typescript
interface DocumentContent {
  content: string // 文档内容（支持换行符 \n）
  fontFamily: string // 字体名称
  fontSize: number // 字号（像素）
  bold: boolean // 是否加粗
  italic: boolean // 是否斜体
  underline: boolean // 是否下划线
  textAlign: 'left' | 'center' | 'right' | 'justify' // 对齐方式
}
```

### PrintSettings 类型

打印设置选项。

```typescript
interface PrintSettings {
  printer: string // 打印机名称（显示用）
  copies: number // 打印份数
  grayscale: boolean // 是否灰度打印
  pageRange: 'all' | 'current' | 'selection' | 'custom' // 页面范围
  customPages: string // 自定义页码范围
  reverseOrder: boolean // 是否逆序打印
  fitMode: 'fit' | 'actual' | 'shrink' | 'custom' // 缩放模式
  customScale: number // 自定义缩放比例（10-200）
  doubleSided: boolean // 是否双面打印
  paperSize: string // 纸张大小（A4, A3, A5, Letter, Legal）
  paperOrientation: 'portrait' | 'landscape' // 纸张方向
  autoCenter: boolean // 是否自动居中
  autoRotate: boolean // 是否自动旋转
}
```

## 组件导出

| 导出项                 | 类型      | 说明             |
| ---------------------- | --------- | ---------------- |
| `PrintProvider`        | Component | 打印上下文提供者 |
| `usePrint`             | Hook      | 打印功能 Hook    |
| `PrintPanel`           | Component | 打印设置面板组件 |
| `PrintContent`         | Component | 打印内容组件     |
| `defaultPrintSettings` | Object    | 默认打印设置     |
| `DocumentContent`      | Type      | 文档内容类型     |
| `PrintSettings`        | Type      | 打印设置类型     |

## 使用示例

### 示例 1：打印简单文本

```tsx
import { usePrint, type DocumentContent } from '@print-web/core'

function SimplePrint() {
  const { openPrintPanel } = usePrint()

  const handlePrint = () => {
    const doc: DocumentContent = {
      content: '这是一段简单的打印文本。\n支持多行内容。',
      fontFamily: 'Microsoft YaHei',
      fontSize: 16,
      bold: false,
      italic: false,
      underline: false,
      textAlign: 'left',
    }
    openPrintPanel(doc)
  }

  return <button onClick={handlePrint}>打印文本</button>
}
```

### 示例 2：打印格式化文本

```tsx
import { usePrint, type DocumentContent } from '@print-web/core'

function FormattedPrint() {
  const { openPrintPanel } = usePrint()

  const handlePrint = () => {
    const doc: DocumentContent = {
      content:
        '标题\n\n这是一段加粗斜体的文本演示。\n\n可以设置不同的对齐方式。',
      fontFamily: 'SimHei',
      fontSize: 18,
      bold: true,
      italic: true,
      underline: false,
      textAlign: 'center',
    }
    openPrintPanel(doc)
  }

  return <button onClick={handlePrint}>打印格式化文本</button>
}
```

### 示例 3：在编辑器中使用

```tsx
import { useState } from 'react'
import { usePrint, type DocumentContent } from '@print-web/core'

function PrintEditor() {
  const [content, setContent] = useState('在这里输入要打印的内容...')
  const { openPrintPanel } = usePrint()

  const handlePrint = () => {
    const doc: DocumentContent = {
      content,
      fontFamily: 'Microsoft YaHei',
      fontSize: 16,
      bold: false,
      italic: false,
      underline: false,
      textAlign: 'left',
    }
    openPrintPanel(doc)
  }

  return (
    <div>
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={10}
        className="w-full"
      />
      <button onClick={handlePrint}>打印</button>
    </div>
  )
}
```

## 注意事项

1. **浏览器安全限制**：由于浏览器安全策略，`window.print()` 会打开浏览器的打印对话框，无法绕过直接调用系统打印机。

2. **打印样式**：打印时会自动应用 `@media print` 样式，确保打印效果与预览一致。

3. **字体支持**：确保用户系统中安装了指定的字体，否则会使用系统默认字体。

## 技术栈

- React 18+
- TypeScript
- Tailwind CSS 3
- Lucide React Icons

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm run dev

# 构建
pnpm run build

# 预览构建结果
pnpm run preview
```

## 许可证

MIT License
