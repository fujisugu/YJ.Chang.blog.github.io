import Link from 'next/link';

export default function GuitarModArticle() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] font-sans p-8">
      <div className="max-w-[800px] mx-auto space-y-8">
        
        {/* 返回首頁按鈕 */}
        <Link 
          href="/" 
          className="inline-block bg-[#1e1e1e] text-[#9b59b6] px-4 py-2 rounded hover:bg-[#9b59b6] hover:text-white transition-colors"
        >
          ← 返回首頁
        </Link>

        {/* 文章標題區 */}
        <header className="border-b border-[#9b59b6] pb-4">
          <h1 className="text-3xl font-bold text-white mb-2">Ibanez GIO GRX70QA 電吉他改裝：換上 Seymour Duncan Pegasus 與接地雜音排除</h1>
          <p className="text-sm text-[#b0b0b0]">分類：音樂生活 | 發布日期：2026-10-01 | 作者：張永傑</p>
        </header>

        {/* 文章內文 */}
        <article className="space-y-6 text-gray-300 leading-relaxed text-lg">
          
          <section>
            <h2 className="text-2xl font-bold text-[#9b59b6] mb-3">改裝動機</h2>
            <p>
              這把 Ibanez GIO GRX70QA 陪伴我度過了很多練琴的時光，但原本的琴橋拾音器在彈奏 High Gain 破音時，聲音總是稍微糊了一點，而且一直有惱人的電路接地雜音（手放開琴弦就會有滋滋聲）。因此決定自己動手升級成 Seymour Duncan Pegasus，並重新處理內部線路。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#9b59b6] mb-3">實作過程與電路圖</h2>
            <p className="mb-4">
              拆開護板後，我發現原本的接地線焊接點有些冷焊（虛焊）的狀況，導致接地不良。在換上 Seymour Duncan Pegasus 時，我參考了原廠的 4 蕊線路圖，重新佈線並加強了星型接地 (Star Grounding)。
            </p>
            
            {/* 電路圖圖片展示區塊 */}
            <div className="bg-[#1e1e1e] p-4 rounded-lg text-center border border-gray-700">
              {/* 這裡假設你的電路圖檔名叫做 circuit.jpg，放在 public 資料夾 */}
              <img 
                src="/circuit.jpg" 
                alt="吉他改裝電路圖" 
                className="mx-auto rounded max-w-full h-auto mb-2"
              />
              <span className="text-sm text-gray-400">重新佈線與 Seymour Duncan 拾音器接線圖</span>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#9b59b6] mb-3">音色試聽 (Before & After)</h2>
            <p className="mb-4">
              換上 Pegasus 之後，低頻變得非常緊實，刷 Power Chord 的顆粒感超級明顯，而且接地雜音完全消失了！大家可以聽聽看以下的對比：
            </p>
            
            <div className="space-y-6 bg-[#1e1e1e] p-6 rounded-lg">
              {/* 改裝前試聽 */}
              <div>
                <h3 className="text-white font-semibold mb-2">改裝前 (原廠拾音器)</h3>
                {/* audio 標籤就是網頁原生的音樂播放器 */}
                <audio controls className="w-full">
                  <source src="/before-mod.mp3" type="audio/mpeg" />
                  你的瀏覽器不支援音樂播放。
                </audio>
              </div>

              {/* 改裝後試聽 */}
              <div>
                <h3 className="text-white font-semibold mb-2">改裝後 (Seymour Duncan Pegasus)</h3>
                <audio controls className="w-full">
                  <source src="/after-mod.mp3" type="audio/mpeg" />
                  你的瀏覽器不支援音樂播放。
                </audio>
              </div>
            </div>
          </section>

        </article>
      </div>
    </div>
  );
}