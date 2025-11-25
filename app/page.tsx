export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f0e7] text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-10 md:py-16 space-y-16">
        {/* Top bar / logo */}
        <header className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-amber-700">
              Rosarq Maquettes
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Maquetes físicas em Luxemburgo
            </h1>
          </div>

          <div className="hidden sm:flex flex-col items-end text-xs text-slate-600">
            <span>Maquetes sob medida para cada necessidade</span>
            <span>Arquitetos · Promotores · Empresas</span>
          </div>
        </header>

        {/* Hero / destaque */}
        <section className="grid md:grid-cols-[3fr,2fr] gap-10 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Maquetes de arquitetura
              <span className="block text-amber-800">com detalhe e precisão.</span>
            </h2>

            <p className="text-base md:text-lg text-slate-700">
              A Rosarq Maquettes cria maquetes físicas de alta qualidade para
              projetos residenciais, comerciais e de promoção imobiliária. 
              Cada modelo é feito com atenção ao detalhe, pensado para 
              comunicar o seu projeto de forma clara e profissional.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-amber-100 bg-white/70 p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700">
                  Para arquitetos
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Maquetes de estudo e de apresentação para concursos,
                  clientes e reuniões de projeto.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-white/70 p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700">
                  Para promotores
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Modelos de promoção para stands de venda, 
                  showrooms e material de marketing.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-amber-800 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-900 transition"
              >
                Pedir um orçamento
                <span className="text-xs">→</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50/60 px-5 py-2 text-sm font-medium text-amber-900 hover:bg-amber-100 transition"
              >
                Ver serviços
              </a>
            </div>
          </div>

          {/* “Bloco” onde depois podemos pôr foto da maquete */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl border border-amber-100 bg-gradient-to-br from-white to-amber-50 shadow-lg flex items-center justify-center">
              <p className="text-center text-sm text-slate-600 px-6">
                Aqui vamos colocar a foto da maquete em cima da mesa
                que criámos antes. Por agora fica este espaço reservado
                para a imagem.
              </p>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-amber-900 px-4 py-3 text-xs text-amber-50 shadow-md">
              <p className="font-semibold">Maquetes físicas</p>
              <p>Luxemburgo · Fronteira FR/DE/BE</p>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="services" className="space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold">
            Serviços
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/80 border border-amber-100 p-5 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700">
                Architectural Scale Models
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Maquetes de edifícios, conjuntos habitacionais e quarteirões 
                em diferentes escalas, adaptadas à fase do projeto.
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 border border-amber-100 p-5 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700">
                Promotional Models
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Modelos para stands de venda, showrooms e eventos – 
                pensados para impressionar clientes e investidores.
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 border border-amber-100 p-5 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-700">
                Small-scale renovations
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Serviços físicos em obra: colocação de pavimentos, 
                trabalhos de plaquista, étanchéité (com 10 anos de garantia) 
                e pequenos trabalhos de renovação.
              </p>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section
          id="contact"
          className="rounded-3xl border border-amber-200 bg-white/80 p-6 md:p-8 space-y-4 shadow-sm"
        >
          <h3 className="text-xl md:text-2xl font-semibold">
            Vamos falar sobre o seu projeto?
          </h3>
          <p className="text-sm text-slate-700">
            Envie plantas, imagens ou referências e descreva o tipo de maquete
            que precisa (escala aproximada, prazo, objetivo). Responderei com
            um orçamento adaptado ao seu projeto.
          </p>

          <div className="space-y-1 text-sm text-slate-800">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:contact@rosarq.lu"
                className="underline underline-offset-2 decoration-amber-500"
              >
                contact@rosarq.lu
              </a>
            </p>
            <p>
              <span className="font-medium">Localização:</span>{" "}
              Luxemburgo (mobilidade para região fronteiriça)
            </p>
          </div>
        </section>

        <footer className="pt-4 border-t border-amber-200 text-xs text-slate-600 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Rosarq Maquettes.</span>
          <span>Website em desenvolvimento com Next.js &amp; Vercel.</span>
        </footer>
      </div>
    </main>
  );
}
