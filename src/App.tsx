/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md flex justify-between items-center px-6 md:px-[60px] py-4 md:py-6 z-[100]">
    <div className="text-lg md:text-xl font-bold tracking-tighter text-white flex items-center gap-1">
      TRUEFLOW
      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
    </div>
    <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
      <a href="#solucoes" className="hover:text-white transition-colors">Clínicas</a>
      <a href="#diferenciais" className="hover:text-white transition-colors">Soluções</a>
      <a href="#depoimentos" className="hover:text-white transition-colors">Diferenciais</a>
      <a href="#depoimentos" className="hover:text-white transition-colors">Inteligência</a>
    </div>
    <button className="signature-gradient text-white font-bold px-5 md:px-8 py-2 md:py-2.5 rounded-md text-[9px] md:text-[10px] tracking-[0.15em] uppercase hover:scale-105 transition-transform duration-300">
      Começar Agora
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-20 px-6 md:px-[60px] text-center">
    <div className="absolute inset-0 z-0 opacity-20 grayscale">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        alt="Modern architecture wireframe"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
    </div>
    
    <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/60 border border-white/10 px-4 py-1.5 rounded-full mb-8 md:mb-12 flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-brand-cyan">
          Disponível para Elite Médica
        </span>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-[2.5rem] sm:text-[4.5rem] md:text-[7.5rem] font-bold tracking-[-0.04em] leading-[1] md:leading-[0.9] mb-8 md:mb-10 text-white uppercase font-display"
      >
        Sites de Elite <br /> Criados por IA
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-base md:text-xl text-white/50 max-w-3xl mb-10 md:mb-14 leading-relaxed"
      >
        Elevamos a presença digital de clínicas com design cinematográfico e conversão de alta performance orientada por inteligência analítica.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full sm:w-auto"
      >
        <button className="signature-gradient text-white font-bold px-10 md:px-12 py-4 md:py-5 rounded-md text-[10px] md:text-xs uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(46,91,255,0.4)] transition-all w-full sm:w-auto">
          Iniciar Transformação
        </button>
        <button className="text-white font-bold flex items-center justify-center gap-3 group text-[10px] md:text-xs uppercase tracking-[0.2em] w-full sm:w-auto">
          Ver Portfólio 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  </section>
);

const BentoGrid = () => (
  <section className="py-20 md:py-32 px-6 md:px-[60px] max-w-7xl mx-auto" id="diferenciais">
    <div className="mb-12 md:mb-20">
      <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-cyan mb-4 block">Diferenciais</span>
      <h2 className="text-[2rem] md:text-[3.5rem] font-bold text-white leading-tight">Tecnologia que gera confiança.</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <motion.div
        whileHover={{ y: -5 }}
        className="md:col-span-8 group relative overflow-hidden rounded-[20px] bg-surface p-8 md:p-10 flex flex-col justify-end min-h-[350px] md:min-h-[400px] border border-white/5"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
          alt="Medical professional"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-2xl text-brand-cyan">psychology</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Design Centrado no Paciente</h3>
          <p className="text-white/40 max-w-md text-sm">Interfaces intuitivas que facilitam o agendamento e transmitem a seriedade do seu trabalho médico.</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ y: -5 }}
        className="md:col-span-4 rounded-[20px] bg-surface p-8 md:p-10 flex flex-col justify-center border border-white/5 hover:border-brand-blue/30 transition-colors min-h-[250px]"
      >
        <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-2xl text-brand-cyan">trending_up</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Conversão de Leads</h3>
        <p className="text-white/40 text-sm">Estratégias de copy e UX desenhadas para transformar visitantes em pacientes agendados.</p>
      </motion.div>

      <motion.div
        whileHover={{ y: -5 }}
        className="md:col-span-4 rounded-[20px] bg-surface-low p-8 md:p-10 flex flex-col justify-center border border-white/5 min-h-[250px]"
      >
        <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-2xl text-brand-cyan">bolt</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Velocidade Máxima</h3>
        <p className="text-white/40 text-sm">Sites leves e otimizados para carregar instantaneamente em qualquer dispositivo móvel.</p>
      </motion.div>

      <motion.div
        whileHover={{ y: -5 }}
        className="md:col-span-8 group relative overflow-hidden rounded-[20px] bg-surface p-8 md:p-10 flex flex-col justify-end min-h-[250px] md:min-h-[300px] border border-white/5"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-background to-transparent"></div>
        <img
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
          alt="Medical lab"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Autoridade Digital</h3>
          <p className="text-white/40 max-w-md text-sm">Posicionamento de marca que reflete o prestígio e a excelência da sua clínica.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const ServiceSection = () => (
  <section className="py-20 md:py-32 bg-surface-low" id="solucoes">
    <div className="max-w-7xl mx-auto px-6 md:px-[60px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div>
        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-brand-cyan mb-4 block">Solução Completa</span>
        <h2 className="text-[2rem] md:text-[4rem] font-bold text-white leading-tight mb-6 md:mb-8">Presença Digital de Alto Padrão.</h2>
        <p className="text-base md:text-lg text-white/50 mb-8 md:mb-10 leading-relaxed">
          Não criamos apenas sites. Desenvolvemos ecossistemas digitais que automatizam seu marketing e fortalecem sua marca no mercado da saúde.
        </p>
        <ul className="space-y-4 mb-10">
          {["Agendamento Online Integrado", "SEO Médico Especializado", "Copywriting Persuasivo"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
              <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
              {item}
            </li>
          ))}
        </ul>
        <button className="signature-gradient text-white px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-all text-[10px] md:text-sm uppercase tracking-widest w-full sm:w-auto">
          Consultar Soluções
        </button>
      </div>
      <div className="relative group">
        <div className="absolute -inset-4 bg-brand-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <img
          src="https://images.unsplash.com/photo-1504813184591-01592fd039e5?q=80&w=2071&auto=format&fit=crop"
          alt="Modern medical technology"
          className="rounded-[24px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/5"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 md:py-32 px-6 md:px-[60px]" id="depoimentos">
    <div className="max-w-5xl mx-auto text-center mb-12 md:mb-20">
      <h2 className="text-[2rem] md:text-[3rem] font-bold text-white mb-4">Aprovado por Especialistas.</h2>
      <p className="text-sm md:text-base text-white/50">Resultados reais para clínicas que buscam o próximo nível.</p>
    </div>
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {[
        {
          name: "Dra. Helena Martins",
          role: "Diretora Dental Prime",
          text: "O site transformou nossa captação. Recebemos leads muito mais qualificados e o agendamento automático poupa horas da recepção.",
          img: "https://images.unsplash.com/photo-1559839734-2b71f153678f?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Dr. Marcos Silveira",
          role: "Cardiologista",
          text: "A autoridade que o site transmite é nítida. Pacientes chegam ao consultório já confiando na minha expertise.",
          img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
        },
        {
          name: "Dra. Beatriz Costa",
          role: "Clínica de Estética Aura",
          text: "Design impecável. Reflete exatamente o luxo e o cuidado que entregamos em nossos procedimentos.",
          img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
        }
      ].map((t, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10 }}
          className="glass-panel p-6 md:p-8 rounded-[20px]"
        >
          <div className="flex gap-1 text-brand-cyan mb-6">
            {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
          </div>
          <p className="text-white italic mb-8 font-light leading-relaxed text-xs md:text-sm">"{t.text}"</p>
          <div className="flex items-center gap-4">
            <img src={t.img} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div>
              <p className="text-sm font-bold text-white">{t.name}</p>
              <p className="text-[10px] md:text-xs text-white/40">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-20 md:py-32 px-6 md:px-[60px] overflow-hidden relative">
    <div className="absolute inset-0 z-0">
      <div className="signature-gradient w-[300px] md:w-[500px] h-[300px] md:h-[500px] blur-[100px] md:blur-[150px] opacity-20 absolute -top-24 md:-top-48 -left-24 md:-left-48"></div>
    </div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-[2rem] md:text-[5rem] font-bold tracking-tighter text-white mb-6 md:mb-8 leading-tight">Sua Clínica no Topo.</h2>
      <p className="text-base md:text-xl text-white/50 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
        Não perca mais pacientes para a concorrência. Garanta agora sua presença digital de elite.
      </p>
      <button className="signature-gradient text-white font-extrabold px-10 md:px-16 py-4 md:py-5 rounded-full text-sm md:text-lg uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_50px_rgba(46,91,255,0.4)] transition-all w-full sm:w-auto">
        Agendar Consultoria Grátis
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black w-full py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-6 md:px-[60px] gap-8">
    <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
      <div className="w-6 h-6 signature-gradient rounded-md"></div>
      TrueFlow
    </div>
    <p className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-white/40 text-center md:text-left">
      © 2026 TrueFlow Health Intelligence. <br className="md:hidden" /> Todos os direitos reservados.
    </p>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-brand-blue/30">
      <Navbar />
      <Hero />
      <BentoGrid />
      <ServiceSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
