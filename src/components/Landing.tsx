import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import hero from "@/assets/hero-valley.webp";
import cave from "@/assets/cave.webp";
import creative from "@/assets/creative-build.webp";
import night from "@/assets/first-night.webp";
import forest from "@/assets/forest.webp";
import cottage from "@/assets/cottage.webp";
import survival from "@/assets/survival.webp";
import sunset from "@/assets/sunset.webp";


const OFFICIAL = "https://www.minecraft.net/";
const NAV = [
  { href: "#world", label: "Мир" },
  { href: "#modes", label: "Режимы" },
  { href: "#gallery", label: "Галерея" },
  { href: "#faq", label: "Вопросы" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}


export function Landing() {
  useReveal();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[60] btn-block">
        К содержимому
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Paths />
        <Modes />
        <Gallery />
        <Story />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-4 border-pine bg-coal/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-base text-grass">MINECRAFT</span>
          <span className="text-[0.65rem] font-bold tracking-[0.3em] text-diamond">FAN WORLD</span>
        </a>
        <nav aria-label="Основная навигация" className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="font-medium text-ivory hover:text-grass">
              {n.label}
            </a>
          ))}
          <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="btn-block !min-h-10 !py-2 text-xs">
            Открыть игру
          </a>
        </nav>
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center bg-pine text-ivory md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Мобильная навигация" className="border-t-4 border-pine bg-coal px-4 pb-6 md:hidden">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block border-b-2 border-pine py-4 text-lg font-medium">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="btn-block mt-6 w-full">
            Открыть игру
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden pt-16">
      <img src={hero} alt="Блочная долина на закате: горы, река и деревянный домик" width={1600} height={907} loading="eager" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/60 to-coal/10" />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 md:pb-28">
        <p className="mb-4 inline-block bg-pine px-3 py-1 text-sm font-bold uppercase tracking-widest text-diamond">
          Исследуй. Создавай. Удивляйся.
        </p>
        <h1 className="font-display max-w-4xl text-4xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
          Твой мир начинается с блока
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ivory/90">
          Бесконечные долины, глубокие пещеры и ни одного готового сценария. Ставь первый блок — и решай сам, что будет дальше.
        </p>
        <div className="mt-10 flex flex-col gap-5 sm:flex-row">
          <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="btn-block">
            Начать приключение
          </a>
          <a href="#gallery" className="btn-block btn-stone">
            Посмотреть мир
          </a>
        </div>
      </div>
      <div className="grass-edge absolute inset-x-0 bottom-0" />
    </section>
  );
}

const PATHS = [
  { title: "Создавай невозможное", text: "Замки над облаками, мосты через ущелья, целые города — блок за блоком, ровно так, как ты задумал.", img: creative, alt: "Летающий блочный замок над облаками", tone: "bg-grass" },
  { title: "Открывай неизвестное", text: "Под каждой горой может прятаться пещера с рудой, лавой и тёмными тоннелями, ведущими всё глубже.", img: cave, alt: "Подземная пещера с алмазной рудой и лавой", tone: "bg-diamond" },
  { title: "Переживи первую ночь", text: "Солнце садится быстро. Успей построить укрытие, зажечь факел и дождаться рассвета.", img: night, alt: "Каменное укрытие с факелом ночью, вдали зомби", tone: "bg-dirt" },
];

function Paths() {
  return (
    <section id="world" className="mx-auto max-w-6xl px-4 py-24 md:py-36">
      <h2 className="reveal font-display max-w-2xl text-3xl text-grass sm:text-5xl">Здесь нет единственного пути</h2>
      <div className="mt-16 grid gap-16 md:grid-cols-12">
        {PATHS.map((p, i) => (
          <article
            key={p.title}
            className={`reveal ${i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5 md:mt-32" : "md:col-span-8 md:col-start-3"}`}
          >
            <div className="frame-block overflow-hidden">
              <img src={p.img} alt={p.alt} width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="mt-8 flex items-start gap-4">
              <span aria-hidden className={`mt-1 h-6 w-6 shrink-0 ${p.tone}`} />
              <div>
                <h3 className="font-display text-xl text-ivory sm:text-2xl">{p.title}</h3>
                <p className="mt-3 max-w-lg text-muted-foreground">{p.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const MODES = {
  survival: {
    label: "Выживание",
    img: survival,
    alt: "Персонаж добывает железную руду киркой рядом с верстаком и печью",
    text: "Начни с пустыми руками: добывай ресурсы, создавай инструменты и защищайся от ночных существ. Каждый шаг заработан.",
    stats: ["Добыча ресурсов", "Изготовление инструментов", "Защита от мобов"],
  },
  creative: {
    label: "Творчество",
    img: creative,
    alt: "Огромная творческая постройка — летающий замок",
    text: "Никаких ограничений на материалы: строй что угодно, летай над миром и воплощай идеи любого масштаба.",
    stats: ["Свободное строительство", "Полёт", "Доступ к блокам"],
  },
} as const;
type ModeKey = keyof typeof MODES;

function Modes() {
  const [mode, setMode] = useState<ModeKey>("survival");
  const m = MODES[mode];
  const keys = Object.keys(MODES) as ModeKey[];
  return (
    <section id="modes" className="bg-pine py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="reveal font-display text-3xl text-ivory sm:text-5xl">Выбери, как играть</h2>
        <div role="tablist" aria-label="Режимы игры" className="mt-10 flex flex-wrap gap-4">
          {keys.map((k) => (
            <button
              key={k}
              role="tab"
              id={`tab-${k}`}
              aria-selected={mode === k}
              aria-controls="mode-panel"
              onClick={() => setMode(k)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                  const next = keys[(keys.indexOf(k) + 1) % keys.length] ?? k;
                  setMode(next);
                  document.getElementById(`tab-${next}`)?.focus();
                }
              }}
              tabIndex={mode === k ? 0 : -1}
              className={`btn-block ${mode === k ? "" : "btn-stone opacity-80"}`}
            >
              {MODES[k].label}
            </button>
          ))}
        </div>
        <div id="mode-panel" role="tabpanel" aria-labelledby={`tab-${mode}`} className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div className="frame-block overflow-hidden">
            <img key={mode} src={m.img} alt={m.alt} width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <h3 className="font-display text-2xl text-grass">{m.label}</h3>
            <p className="mt-4 text-lg text-ivory/90">{m.text}</p>
            <ul className="mt-8 space-y-3">
              {m.stats.map((s) => (
                <li key={s} className="flex items-center gap-3 bg-coal px-4 py-3 font-medium">
                  <span aria-hidden className="h-3 w-3 bg-diamond" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { img: forest, alt: "Лесная долина с берёзами, цветами и рекой в утреннем тумане", caption: "Лесная долина" },
  { img: cave, alt: "Подземная пещера с факелами, алмазной рудой и потоком лавы", caption: "Подземная пещера" },
  { img: cottage, alt: "Уютный деревянный дом с фонарями и садом на закате", caption: "Уютная постройка" },
];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocus.current?.focus();
    };
  }, [active]);
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-24 md:py-36">
      <h2 className="reveal font-display text-3xl text-grass sm:text-5xl">За следующим холмом</h2>
      <ul className="mt-16 grid gap-10 md:grid-cols-3">
        {GALLERY.map((g, i) => (
          <li key={g.caption} className={`reveal ${i === 1 ? "md:mt-16" : i === 2 ? "md:mt-8" : ""}`}>
            <figure>
              <button
                type="button"
                onClick={(e) => {
                  lastFocus.current = e.currentTarget;
                  setActive(i);
                }}
                className="frame-block block w-full overflow-hidden"
                aria-label={`Увеличить: ${g.caption}`}
              >
                <img src={g.img} alt={g.alt} width={1280} height={960} loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-105" />
              </button>
              <figcaption className="mt-6 font-display text-lg">{g.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY[active]?.caption}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-coal/95 p-4"
          onClick={() => setActive(null)}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setActive(null)}
            aria-label="Закрыть"
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center bg-grass text-coal"
          >
            <X />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full max-w-5xl flex-col items-center">
            <img src={GALLERY[active]?.img} alt={GALLERY[active]?.alt} className="max-h-[80vh] max-w-full object-contain" />
            <figcaption className="mt-4 font-display text-ivory">{GALLERY[active]?.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function Story() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <img src={sunset} alt="" width={1600} height={907} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-coal/60" />
      <div className="reveal relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-display text-3xl text-ivory sm:text-5xl">Построй свою историю</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/90">
          Покупка и загрузка игры доступны на официальном сайте Minecraft. Там же — актуальные версии и платформы.
        </p>
        <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="btn-block mt-10">
          Перейти на minecraft.net
        </a>
      </div>
    </section>
  );
}

const FAQ = [
  { q: "Что можно делать в Minecraft?", a: "Исследовать огромный блочный мир, добывать ресурсы, создавать предметы, строить что угодно — от хижины до города — и проходить собственные приключения." },
  { q: "Чем отличаются режимы?", a: "В Выживании ресурсы нужно добывать, а ночью защищаться от мобов. В Творчестве доступны все блоки и полёт — можно сосредоточиться на строительстве." },
  { q: "Можно ли играть с друзьями?", a: "Да, совместная игра существует, но её возможности зависят от версии игры и платформы. Подробности уточняйте на официальном сайте." },
  { q: "Где найти официальную информацию об игре?", a: "На официальном сайте minecraft.net — там новости, версии, способы покупки и поддержка." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 md:py-36">
      <h2 className="reveal font-display text-3xl text-grass sm:text-5xl">Вопросы</h2>
      <div className="mt-12 space-y-4">
        {FAQ.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="bg-pine">
              <h3>
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-bold"
                >
                  {f.q}
                  <ChevronDown aria-hidden className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
              </h3>
              <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-5 pb-6 text-ivory/90">
                {f.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-8 border-dirt bg-coal">
      <div className="grass-edge" />
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-12 text-sm text-muted-foreground">
        <p>Учебный фанатский проект. Не связан с Mojang или Microsoft. Minecraft — товарный знак соответствующих правообладателей.</p>
        <p>Все иллюстрации сгенерированы с помощью ИИ для этого проекта.</p>
        <p>
          Официальный сайт:{" "}
          <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="text-diamond underline">
            minecraft.net
          </a>
        </p>
      </div>
    </footer>
  );
}
