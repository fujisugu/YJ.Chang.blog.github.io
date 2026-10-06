import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] font-sans">
      
      {/* 頂部導覽列 */}
      <header className="bg-[#1e1e1e] py-5 text-center border-b-2 border-[#9b59b6]">
        <nav className="space-x-6">
          <a href="#about" className="hover:text-[#9b59b6] transition-colors text-[1.1rem]">關於我</a>
          <a href="#articles" className="hover:text-[#9b59b6] transition-colors text-[1.1rem]">文章列表</a>
          <a href="#contact" className="hover:text-[#9b59b6] transition-colors text-[1.1rem]">聯絡方式</a>
        </nav>
      </header>

      {/* 主要內容區 */}
      <main className="max-w-[800px] mx-auto my-10 px-5 space-y-16">
        
        {/* 自我介紹區塊（加入個人照片） */}
        <section id="about" className="flex flex-col sm:flex-row items-center gap-6">
          {/* 個人照片：只要放 profile.jpg 在 public 資料夾即可 */}
          <img 
            src="/profile.jpg" 
            alt="張永傑" 
            className="w-36 h-36 rounded-full object-cover border-4 border-[#9b59b6] shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-[#9b59b6] mb-2">關於我</h2>
            <p className="mb-2">嗨，我是張永傑。目前就讀於台科大營建工程系。</p>
            <p className="text-gray-300">
              這個部落格是我記錄技術研究與生活軌跡的地方。如果你是我的學生，有時間在這邊看還不快去練琴。
            </p>
          </div>
        </section>

        {/* 文章列表區塊 */}
        <section id="articles">
          <h2 className="text-2xl font-bold text-[#9b59b6] mb-6">文章列表</h2>
          <div className="space-y-5">
            
            {/* 文章卡片 1：點擊可以跳轉到獨立文章頁面 */}
            <div className="bg-[#1e1e1e] p-5 rounded-lg border-l-4 border-[#9b59b6]">
              <h3 className="text-xl font-semibold text-white mb-2">每日任務APP開發</h3>
              <p className="text-[0.95rem] text-[#b0b0b0] mb-2">分類：技術研究 | 日期：2026-09-28</p>
              <p className="text-[0.95rem] text-gray-300 mb-4">為了準備研究所資訊組正在自我修練中。</p>
              <div className="space-x-3">
                {/* 獨立文章連結 */}
                <Link 
                  href="/articles/app-dev" 
                  className="inline-block bg-[#9b59b6] text-white px-4 py-2 rounded text-[0.9rem] hover:bg-[#8e44ad] transition-colors"
                >
                  閱讀全文
                </Link>
                {/* 直接下載 APK 按鈕 */}
                <a 
                  href="/my_app.apk" 
                  download 
                  className="inline-block bg-[#2c2c2c] text-[#e0e0e0] px-4 py-2 rounded text-[0.9rem] hover:bg-[#3d3d3d] transition-colors"
                >
                  ⬇下載 APK
                </a>
              </div>
            </div>

           {/* 文章卡片 2 */}
            <div className="bg-[#1e1e1e] p-5 rounded-lg border-l-4 border-[#9b59b6]">
              <h3 className="text-xl font-semibold text-white mb-2">Ibanez GIO GRX70QA 電吉他改裝：換上 Seymour Duncan Pegasus 與接地雜音排除</h3>
              <p className="text-[0.95rem] text-[#b0b0b0] mb-2">分類：音樂生活 | 日期：2026-10-01</p>
              <p className="text-[0.95rem] text-gray-300 mb-4">記錄這次將琴橋拾音器升級，並重新焊接解決電路接地雜音的實作過程，附上改裝前後的音色試聽與電路圖。</p>
              
              {/* 這裡改成連向我們剛建好的 guitar-mod 頁面 */}
              <Link 
                href="/articles/guitar-mod" 
                className="inline-block bg-[#9b59b6] text-white px-4 py-2 rounded text-[0.9rem] hover:bg-[#8e44ad] transition-colors"
              >
                閱讀全文
              </Link>
            </div>

            {/* 文章卡片 3 (講義下載) */}
            <div className="bg-[#1e1e1e] p-5 rounded-lg border-l-4 border-[#9b59b6]">
              <h3 className="text-xl font-semibold text-white mb-2">🎸 基礎電吉他教學講義</h3>
              <p className="text-[0.95rem] text-[#b0b0b0] mb-2">分類：學習資源 | 日期：2026-09-20</p>
              <p className="text-[0.95rem] text-gray-300 mb-4">這是我整理給初學者的 4 個月教學計畫，涵蓋 TAB 譜閱讀、Power Chord 與節奏技巧。</p>
              <a href="/guitar_lesson.pdf" download className="inline-block bg-[#9b59b6] text-white px-4 py-2 rounded text-[0.9rem] hover:bg-[#8e44ad] transition-colors">
                ⬇點此下載講義 (PDF)
              </a>
            </div>

          </div>
        </section>

        {/* 聯絡方式區塊 */}
        <section id="contact">
          <h2 className="text-2xl font-bold text-[#9b59b6] mb-4">聯絡方式</h2>
          <ul className="list-none space-y-2 text-gray-300 mb-4">
            <li>Email: yc10330610@gmail.com</li>
            <li>手機: 0908310382</li>
            <li>LINE ID: 45608910</li>
          </ul>
          <p className="mb-4">歡迎與我交流技術或音樂！</p>
          <ul className="list-none">
            <li>GitHub: <a href="https://github.com/fujisugu" target="_blank" rel="noopener noreferrer" className="text-[#9b59b6] hover:underline">github.com/fujisugu</a></li>
          </ul>
        </section>

      </main>

      {/* 頁尾 */}
      <footer className="text-center py-8 bg-[#0a0a0a] text-[#777] text-[0.9rem]">
        &copy; 2026 張永傑. All Rights Reserved.
      </footer>

    </div>
  );
}