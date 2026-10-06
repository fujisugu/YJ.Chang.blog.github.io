import Link from 'next/link';

export default function AppDevArticle() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] font-sans p-8">
      <div className="max-w-[800px] mx-auto space-y-6">
        
        {/* 返回首頁按鈕（使用 Next.js 的 Link 組件實現無縫無刷新跳轉） */}
        <Link 
          href="/" 
          className="inline-block bg-[#1e1e1e] text-[#9b59b6] px-4 py-2 rounded hover:bg-[#9b59b6] hover:text-white transition-colors"
        >
          ← 返回首頁
        </Link>

        {/* 文章標題區 */}
        <header className="border-b border-[#9b59b6] pb-4">
          <h1 className="text-3xl font-bold text-white mb-2">美日任務 APP 開發緣起</h1>
          <p className="text-sm text-[#b0b0b0]">分類：技術研究 | 發布日期：2026-09-28 | 作者：張永傑</p>
        </header>

        {/* 文章內文 */}
        <article className="space-y-4 text-gray-300 leading-relaxed text-lg">
          <p>
            為了準備研究所資訊組的推甄與考試，我決定透過實作一款完整的應用程式來進行自我修練。
          </p>
          <p>
            這款 APP 結合了日常任務管理與遊戲化（Gamification）機制，讓每天的待辦事項變得像在打怪升級一樣有趣。在開發過程中，我實作了前端 UI 設計、資料流處理以及模組化的邏輯架構。
          </p>
          <h2 className="text-xl font-bold text-[#9b59b6] mt-6 mb-2">核心技術與架構</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>前端框架與介面互動設計</li>
            <li>狀態管理與本機資料持久化儲存</li>
            <li>自動化建置與 APK 打包發布</li>
          </ul>
        </article>

        {/* 下載按鈕區 */}
        <div className="pt-6 border-t border-gray-800">
          <a 
            href="/my_app.apk" 
            download 
            className="inline-block bg-[#9b59b6] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8e44ad] transition-colors"
          >
            ⬇️ 立即下載安裝 APK 試用
          </a>
        </div>

      </div>
    </div>
  );
}