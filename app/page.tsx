// app/page.tsx
// Next.js (App Router) page component using Tailwind CSS
// Instructions:
// 1) Create a new Next.js app: `npx create-next-app@latest --experimental-app --typescript` or without --typescript for JS.
// 2) Install Tailwind: follow https://tailwindcss.com/docs/guides/nextjs (install tailwindcss, postcss, autoprefixer and create config files).
// 3) Put this file at `app/page.tsx` (or `app/page.jsx` if not using TypeScript).
// 4) Add any assets (logo / hero image) to `public/` and change the <img src="/hero.jpg"/> path.
// 5) Deploy: push to a Git repo and import into Vercel — it will auto-detect Next.js.

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">LS</div>
          <div>
            <h1 className="text-lg font-semibold">GamingScript By Lovely</h1>
            <p className="text-sm text-slate-500">Watermarked UI / Keystrokes HUD — demo</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a className="text-sm hover:underline" href="#features">Features</a>
          <a className="text-sm hover:underline" href="#demo">Demo</a>
          <a className="text-sm rounded-md px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight">Сайт как на картинке — шаблон <span className="text-indigo-600">Next.js</span> для Vercel</h2>
          <p className="mt-4 text-slate-600">Готовый адаптивный шаблон: шапка, геро‑секция с кнопкой, секция фич и форма связи. Легко заменить картинку, тексты и цвета.</p>

          <div className="mt-6 flex gap-4">
            <a className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700" href="#demo">Посмотреть демо</a>
            <a className="inline-block px-6 py-3 border border-slate-200 rounded-md text-sm hover:bg-slate-50" href="#features">Что внутри</a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <h4 className="font-semibold">Адаптивный</h4>
              <p className="text-sm text-slate-500">Работает на мобильных и десктопах.</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <h4 className="font-semibold">Деплой на Vercel</h4>
              <p className="text-sm text-slate-500">Автоматический деплой из Git.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Hero image placeholder */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="/hero.jpg" alt="hero" className="w-full h-80 object-cover" />
          </div>

          {/* Watermark - nickname editable in GUI in the real project */}
          <div className="absolute left-4 top-4 px-3 py-1 rounded-md bg-black/50 text-white text-xs">Watermark: <span className="font-medium">YourNick</span></div>

          {/* Small mock HUD box (example of keystrokes / afk) */}
          <div className="absolute right-4 bottom-4 w-48 p-3 bg-black/60 rounded-lg text-white text-sm">
            <div className="font-semibold">HUD Preview</div>
            <div className="mt-2 grid grid-cols-3 gap-1 text-center">
              <div className="p-1 bg-white/10 rounded">W</div>
              <div className="p-1 bg-white/10 rounded">A</div>
              <div className="p-1 bg-white/10 rounded">S</div>
            </div>
            <div className="mt-2 text-xs text-slate-200">AFK: off · AutoClick: R</div>
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Что внутри</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold">Header & Nav</h4>
            <p className="text-sm text-slate-500">Логотип, навигация и CTA.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold">Hero Image</h4>
            <p className="text-sm text-slate-500">Место для вашей картинки (public/hero.jpg).</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold">Watermark & HUD</h4>
            <p className="text-sm text-slate-500">Пример водяного знака и превью HUD.</p>
          </div>
        </div>
      </section>

      <section id="demo" className="container mx-auto px-6 py-12">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h4 className="text-lg font-semibold">Live demo</h4>
          <p className="text-sm text-slate-500 mt-2">Замените картинку и тексты в этом компоненте, запушьте в репозиторий и откройте проект в Vercel.</p>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-white to-slate-50 p-6 rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-bold">Связаться</h4>
            <p className="text-sm text-slate-600 mt-2">Напиши, какие правки нужны: картинка, цвета, текст, кнопки — и я внесу.</p>
          </div>
          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Форма демо — добавьте бэкенд.'); }}>
            <input className="w-full p-3 rounded-md border" placeholder="Имя" />
            <input className="w-full p-3 rounded-md border" placeholder="Email" />
            <textarea className="w-full p-3 rounded-md border" placeholder="Сообщение"></textarea>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Отправить</button>
          </form>
        </div>
      </section>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} GamingScript By Lovely — шаблон для Vercel</div>
      </footer>
    </main>
  );
}
