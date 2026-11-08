import Link from 'next/link';

export const metadata = {
  title: '吉他課程｜張永傑',
  description: '歌曲 Intro 練習、刷法圖解與示範影片。',
};

const songs = [
  {
    artist: '告五人',
    title: '帶我去找夜生活',
    url: 'https://youtu.be/F17B80O6iJQ?si=0vIVBnIXL6a7CaYP',
  },
  {
    artist: '伍佰',
    title: '挪威的森林',
    url: 'https://youtu.be/ZTQ3E883_K4?si=wvY-XsgkryKQefa0',
  },
  {
    artist: '芒果醬',
    title: '九彎十八拐',
    url: 'https://youtu.be/r5hCXCvrxfc?si=K5fpTLxpLqU2OgZG',
  },
  {
    artist: 'MONGOL800',
    title: '小さな恋のうた',
    url: 'https://youtu.be/q_wEuxXN5TU?si=eJw_hHHku1oJercw',
  },
];

const lessons = [
  {
    number: '01',
    title: '力道大小控制',
    description:
      '先保持穩定的拍點，練習用不同力道刷弦，聽聽輕刷與重刷的音量差異。',
    tip: '練習提醒：手腕保持放鬆，重刷時也不要整隻手用力繃緊。',
    image: '/guitar-course/strumming-1.png',
    imageAlt: '力道大小控制的刷法練習圖',
    video: '/guitar-course/strummingvideo1.mp4',
  },
  {
    number: '02',
    title: '上下刷與重音',
    description:
      '練習上刷與下刷的交替，配合重音位置，讓節奏產生不同的律動。',
    tip: '練習提醒：刷弦方向與重音是兩件事，上刷與下刷都能做出重音。',
    image: '/guitar-course/strumming-2.png',
    imageAlt: '上下刷與重音的刷法練習圖',
    video: '/guitar-course/strummingvideo2.mp4',
  },
  {
    number: '03',
    title: '綜合練習',
    description:
      '把力道控制、上下刷與重音變化結合起來，先慢慢刷順，再逐步提高速度。',
    tip: '練習提醒：先用熟悉的和弦練習，把注意力放在右手節奏。',
    image: '/guitar-course/strumming-3.png',
    imageAlt: '綜合刷法練習圖',
    video: '/guitar-course/strummingvideo3.mp4',
  },
];

export default function GuitarCourse() {
  return (
    <div className="min-h-screen bg-[#121212] font-sans text-[#e0e0e0]">
      {/* 頂部導覽 */}
      <header className="border-b-2 border-[#9b59b6] bg-[#1e1e1e]">
        <nav
          aria-label="課程導覽"
          className="mx-auto flex max-w-[900px] flex-wrap items-center justify-between gap-4 px-5 py-5"
        >
          <Link
            href="/"
            className="text-sm text-gray-300 transition-colors hover:text-[#9b59b6]"
          >
            ← 返回首頁
          </Link>

          <div className="flex flex-wrap gap-5 text-sm">
            <a
              href="#songs"
              className="transition-colors hover:text-[#9b59b6]"
            >
              講義歌曲
            </a>
            <a
              href="#strumming"
              className="transition-colors hover:text-[#9b59b6]"
            >
              刷法教學
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-[900px] space-y-14 px-5 py-10 sm:py-14">
        {/* 頁面介紹 */}
        <section>
          <p className="mb-3 text-sm font-semibold tracking-widest text-[#9b59b6]">
            GUITAR LESSONS
          </p>
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            吉他課程
          </h1>
          <p className="max-w-2xl leading-8 text-gray-300">
            把課堂上的歌曲練習、刷法圖解與示範影片整理在這裡。
            拿起吉他，照自己的步調慢慢練。
          </p>
        </section>

        {/* 第一項：講義歌曲 */}
        <section id="songs" className="scroll-mt-6">
          <h2 className="mb-3 text-2xl font-bold text-[#9b59b6]">
            01 · 講義歌曲
          </h2>
          <p className="mb-6 leading-7 text-gray-400">
            本區練習各首歌曲的 Intro（前奏）。
            連結開啟歌曲影片，練習段落請搭配講義。
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {songs.map((song) => (
              <article
                key={song.url}
                className="flex flex-col rounded-lg border border-[#333] bg-[#1e1e1e] p-5"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-sm text-gray-400">
                    {song.artist}
                  </p>
                  <span className="shrink-0 rounded-full bg-[#9b59b6]/15 px-3 py-1 text-xs text-[#c99cdb]">
                    Intro 練習
                  </span>
                </div>

                <h3 className="mb-6 text-xl font-semibold text-white">
                  {song.title}
                </h3>

                <a
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`在 YouTube 開啟 ${song.artist}〈${song.title}〉（新分頁）`}
                  className="mt-auto self-start text-sm text-[#c99cdb] underline-offset-4 hover:underline"
                >
                  前往 YouTube 聆聽 ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* 第二項：刷法圖文與影片 */}
        <section id="strumming" className="scroll-mt-6">
          <h2 className="mb-3 text-2xl font-bold text-[#9b59b6]">
            02 · 刷法圖文與影片
          </h2>
          <p className="mb-6 leading-7 text-gray-400">
            先看圖理解節奏，再播放示範影片，依序練習力道、重音與綜合應用。
          </p>

          <div className="space-y-6">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="overflow-hidden rounded-lg border border-[#333] bg-[#1e1e1e]"
              >
                <div className="p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9b59b6]/20 text-sm font-bold text-[#c99cdb]">
                      {lesson.number}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {lesson.title}
                    </h3>
                  </div>

                  <p className="mb-6 leading-7 text-gray-300">
                    {lesson.description}
                  </p>

                  <div className="space-y-6">
                    {/* 刷法圖片 */}
                    <div>
                      <h4 className="mb-3 text-sm font-medium text-gray-400">
                        刷法圖解
                      </h4>

                      <div className="overflow-hidden rounded-lg bg-[#faf9f2] p-3 sm:p-5">
                        <img
                          src={lesson.image}
                          alt={lesson.imageAlt}
                          loading="lazy"
                          className="mx-auto block h-auto w-full"
                        />
                      </div>
                    </div>

                    {/* 本機 MP4 示範影片 */}
                    <div>
                      <h4 className="mb-3 text-sm font-medium text-gray-400">
                        示範影片
                      </h4>

                      <div className="overflow-hidden rounded-lg bg-black">
                        <video
                          controls
                          playsInline
                          preload="metadata"
                          aria-label={`${lesson.title}示範影片`}
                          className="block max-h-[520px] w-full"
                        >
                          <source
                            src={lesson.video}
                            type="video/mp4"
                          />
                          您的瀏覽器不支援影片播放，請使用下方連結開啟影片。
                        </video>
                      </div>

                      <a
                        href={lesson.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm text-[#c99cdb] underline-offset-4 hover:underline"
                      >
                        無法播放？另開影片 ↗
                      </a>
                    </div>
                  </div>

                  <p className="mt-5 rounded-lg bg-[#9b59b6]/10 px-4 py-3 text-sm leading-7 text-[#d8b9e5]">
                    {lesson.tip}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0a0a] px-5 py-8 text-center text-sm text-[#777]">
        &copy; 2026 張永傑. All Rights Reserved.
      </footer>
    </div>
  );
}