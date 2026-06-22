import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "@/pages/Home";
import Examples from "@/pages/Examples";
import { PrintProvider } from "@/components/PrintProvider";

export default function App() {
  return (
    <PrintProvider>
      <Router>
        <nav className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="max-w-4xl mx-auto flex gap-6">
            <Link to="/" className="text-blue-600 font-medium hover:text-blue-700">编辑器</Link>
            <Link to="/examples" className="text-gray-600 hover:text-blue-600">使用示例</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examples" element={<Examples />} />
        </Routes>
      </Router>
    </PrintProvider>
  );
}
