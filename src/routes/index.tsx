import { createFileRoute } from "@tanstack/react-router";
import cursoNr1 from "@/assets/curso-nr1.jpg";
import cursoPsico from "@/assets/curso-psicossociais.jpg";
import cursoAuditoria from "@/assets/curso-auditoria.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TG Educação Empresarial — Trilha de conformidade NR-1" },
      {
        name: "description",
        content:
          "Cursos em vídeo para times de RH, SESMT e lideranças aplicarem a NR-1: do mapeamento de riscos ao dossiê de auditoria.",
      },
      { property: "og:title", content: "TG Educação Empresarial — Trilha NR-1" },
      {
        property: "og:description",
        content:
          "Do mapeamento de riscos ao dossiê de auditoria, em quatro etapas guiadas.",
      },
    ],
  }),
  component: Landing,
});

const trilha = [
  {
    n: "01",
    titulo: "Mapear",
    texto: "Inventário de perigos físicos, ergonômicos e psicossociais da sua operação.",
    tone: "bg-accent",
  },
  {
    n: "02",
    titulo: "Documentar",
    texto: "PGR montado ao vivo com planilhas e modelos prontos para editar.",
    tone: "bg-clay",
  },
  {
    n: "03",
    titulo: "Executar",
    texto: "Plano de ação com prazos, responsáveis e medidas de controle.",
    tone: "bg-haze",
  },
  {
    n: "04",
    titulo: "Comprovar",
    texto: "Dossiê de evidências organizado para fiscalização e auditoria.",
    tone: "bg-secondary",
  },
];

const cursos = [
  {
    titulo: "NR-1 Essencial",
    sub: "Fundamentos da gestão de riscos",
    nivel: "Iniciante",
    meta: "6 módulos · 12h",
    preco: "R$ 197",
    img: cursoNr1,
    span: "lg:col-span-3",
  },
  {
    titulo: "Riscos psicossociais",
    sub: "Mapeamento e prevenção",
    nivel: "Intermediário",
    meta: "8 módulos · 14h",
    preco: "R$ 247",
    img: cursoPsico,
    span: "lg:col-span-3",
  },
  {
    titulo: "Dossiê de auditoria",
    sub: "Evidências prontas para fiscalização",
    nivel: "Avançado",
    meta: "4 módulos · 6h",
    preco: "R$ 197",
    img: cursoAuditoria,
    span: "lg:col-span-2",
  },
];

const setores = [
  "Indústria",
  "Varejo",
  "Construção civil",
  "Saúde ocupacional",
  "Logística",
  "Agronegócio",
];

const planos = [
  {
    nome: "Curso avulso",
    tag: "Individual",
    preco: "R$ 197",
    unidade: "/ curso",
    itens: ["Acesso vitalício", "Certificado de conclusão", "Material de apoio em PDF"],
    cta: "Ver cursos",
    destaque: false,
  },
  {
    nome: "Trilha completa",
    tag: "Mais escolhido",
    preco: "R$ 697",
    unidade: "/ pessoa",
    itens: [
      "Todos os cursos da trilha",
      "Modelos de PGR e checklists",
      "Certificado por curso",
      "Atualizações por 12 meses",
    ],
    cta: "Adquirir trilha",
    destaque: true,
  },
  {
    nome: "Licença por equipe",
    tag: "Empresas",
    preco: "Sob consulta",
    unidade: "",
    itens: ["Acesso para todo o time", "Painel de progresso", "Nota fiscal para PJ"],
    cta: "Falar com vendas",
    destaque: false,
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Setores />
      <Trilha />
      <Cursos />
      <Planos />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-sm text-primary-foreground">
            tg
          </span>
          <span className="font-display text-[15px] leading-tight tracking-tight">
            Tamires Gusmão
            <span className="block rail-label text-muted-foreground">educação empresarial</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-card/70 p-1 md:flex">
          {[
            ["Trilha", "#trilha"],
            ["Cursos", "#cursos"],
            ["Planos", "#planos"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-secondary-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#planos" className="hidden text-sm text-muted-foreground hover:text-foreground sm:block">
            Entrar
          </a>
          <a
            href="#planos"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
          >
            Começar agora
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="soft-blob left-[-10%] top-[-12%] size-[38rem] animate-drift bg-accent/60" />
      <div
        className="soft-blob right-[-8%] top-[18%] size-[26rem] animate-drift bg-clay/50"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="soft-blob bottom-[-18%] left-[38%] size-[22rem] animate-drift bg-haze/50"
        style={{ animationDelay: "-11s" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 md:pt-28">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 rail-label text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            nova redação da nr-1
          </span>
          <span className="rail-label text-muted-foreground">atualizado em 2026</span>
        </div>

        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.9rem,8vw,5.75rem)] font-light leading-[0.94] text-balance-tight">
          Conformidade
          <span className="mx-3 inline-block align-middle">
            <span className="inline-flex -space-x-3">
              {["bg-accent", "bg-clay", "bg-haze"].map((tone) => (
                <span
                  key={tone}
                  className={`size-8 rounded-full border-2 border-background md:size-11 ${tone}`}
                />
              ))}
            </span>
          </span>
          não se improvisa —
          <span className="italic text-primary"> se ensina.</span>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_auto] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Uma trilha em vídeo que leva RH, SESMT e lideranças do mapeamento de riscos até o
            dossiê pronto para auditoria. Curta, prática e com os documentos já modelados.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#cursos"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
            >
              Ver a trilha
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#trilha"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-secondary"
            >
              Como funciona
            </a>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
          {[
            ["3", "cursos na trilha"],
            ["32h", "de conteúdo em vídeo"],
            ["4.9", "avaliação média"],
            ["12", "modelos editáveis"],
          ].map(([valor, label]) => (
            <div key={label}>
              <dt className="font-display text-4xl font-light">{valor}</dt>
              <dd className="mt-1 rail-label text-muted-foreground">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Setores() {
  const lista = [...setores, ...setores];
  return (
    <section className="border-y border-border bg-secondary/50 py-5">
      <div className="flex items-center gap-6 overflow-hidden">
        <span className="shrink-0 pl-5 rail-label text-muted-foreground">
          usado por times de segurança em
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee gap-10">
            {lista.map((s, i) => (
              <span
              key={`${s}-${i}`}
              className="flex shrink-0 items-center gap-10 font-display text-xl font-light text-secondary-foreground/70"
            >
              {s}
              <span className="size-1.5 rounded-full bg-primary/40" />
            </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Trilha() {
  return (
    <section id="trilha" className="mx-auto max-w-6xl px-5 py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="rail-label text-muted-foreground">a trilha</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.02] text-balance-tight">
            Quatro etapas na mesma ordem que a fiscalização cobra.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Cada etapa entrega um artefato real — não só teoria. Você termina o módulo com o
            documento na mão.
          </p>
        </div>

        <ol className="relative space-y-3">
          {trilha.map((etapa) => (
            <li
              key={etapa.n}
              className="group grid grid-cols-[auto_1fr] items-start gap-5 rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <span
                className={`grid size-14 shrink-0 place-items-center rounded-2xl font-mono text-xs text-foreground/70 transition-transform duration-500 group-hover:rotate-6 ${etapa.tone}`}
              >
                {etapa.n}
              </span>
              <div>
                <h3 className="font-display text-2xl font-light">{etapa.titulo}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {etapa.texto}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Cursos() {
  return (
    <section id="cursos" className="border-y border-border bg-muted/60 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="rail-label text-muted-foreground">catálogo</span>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.02] text-balance-tight">
              Cursos gravados por quem assina laudo.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Vídeos curtos, linguagem direta e revisão anual conforme a norma vigente.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:auto-rows-fr lg:grid-cols-6">
          {cursos.map((curso) => (
            <article
              key={curso.titulo}
              className={`group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift ${curso.span}`}
            >
              <div className="grain relative aspect-[16/10] overflow-hidden">
                <img
                  src={curso.img}
                  alt={`${curso.titulo} — ${curso.sub}`}
                  loading="lazy"
                  width={1200}
                  height={750}
                  className="size-full object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 rail-label text-foreground backdrop-blur">
                  {curso.nivel}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-light leading-tight">{curso.titulo}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{curso.sub}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="rail-label text-muted-foreground">{curso.meta}</span>
                  <span className="font-display text-xl font-light">{curso.preco}</span>
                </div>
              </div>
            </article>
          ))}

          <div className="flex flex-col rounded-3xl bg-primary p-6 md:p-8 text-primary-foreground lg:col-span-4">
            <span className="rail-label opacity-70">próximo lançamento</span>
            <p className="mt-6 max-w-xs font-display text-3xl font-light leading-tight">
              Ergonomia aplicada ao PGR
            </p>
            <p className="mt-3 text-sm opacity-70">Entra na trilha em outubro, sem custo extra.</p>
            <a
              href="#planos"
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground"
            >
              Entrar na lista →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Planos() {
  return (
    <section id="planos" className="mx-auto max-w-6xl px-5 py-28">
      <div className="max-w-xl">
        <span className="rail-label text-muted-foreground">planos</span>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.02] text-balance-tight">
          Um curso, a trilha inteira ou o time todo.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 md:grid-cols-3">
        {planos.map((plano) => (
          <div
            key={plano.nome}
            className={
              plano.destaque
                ? "relative rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-lift md:-mt-6 md:pb-10"
                : "rounded-[2rem] border border-border bg-card p-8"
            }
          >
            <span
              className={`rail-label ${plano.destaque ? "opacity-70" : "text-muted-foreground"}`}
            >
              {plano.tag}
            </span>
            <h3 className="mt-4 font-display text-2xl font-light">{plano.nome}</h3>
            <p className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-4xl font-light">{plano.preco}</span>
              <span className={`text-sm ${plano.destaque ? "opacity-70" : "text-muted-foreground"}`}>
                {plano.unidade}
              </span>
            </p>
            <ul className="mt-8 space-y-3">
              {plano.itens.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <span
                    className={`mt-1.5 size-1.5 shrink-0 rounded-full ${
                      plano.destaque ? "bg-clay" : "bg-primary/50"
                    }`}
                  />
                  <span className={plano.destaque ? "opacity-90" : "text-muted-foreground"}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#top"
              className={`mt-9 flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
                plano.destaque
                  ? "bg-background text-foreground"
                  : "border border-border bg-background text-foreground hover:bg-secondary"
              }`}
            >
              {plano.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-light leading-tight text-balance-tight">
              Tamires Gusmão
              <span className="block italic text-primary">educação empresarial</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Cursos práticos para colocar sua empresa em conformidade com a NR-1 — da
              identificação de riscos à auditoria.
            </p>
          </div>
          <div>
            <p className="rail-label text-muted-foreground">plataforma</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Cursos", "Trilha", "Planos", "Certificados"].map((l) => (
                <li key={l}>
                  <a href="#cursos" className="text-muted-foreground hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="rail-label text-muted-foreground">contato</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["WhatsApp", "E-mail", "Termos de uso", "Privacidade"].map((l) => (
                <li key={l}>
                  <a href="#top" className="text-muted-foreground hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-14 border-t border-border pt-6 rail-label text-muted-foreground">
          © 2026 tg educação empresarial
        </p>
      </div>
    </footer>
  );
}
