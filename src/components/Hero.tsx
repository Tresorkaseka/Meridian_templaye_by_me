import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type { MouseEvent } from 'react';
import { ArrowRight, StarFour } from '@phosphor-icons/react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-zinc-950 py-24"
      onMouseMove={handleMouseMove}
    >
      {/* Background glowing orb */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 md:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(244, 63, 94, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left text portion (Asymmetrical layout) */}
        <div className="flex flex-col items-start text-left lg:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <StarFour weight="fill" className="text-rose-500 w-4 h-4" />
            <span className="text-xs font-medium tracking-wide uppercase text-zinc-300">Introducing Synthetix 2.0</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-gradient mb-8"
          >
            Refine your <span className="text-accent-gradient inline-block">Workflow.</span> <br /> Elevate reality.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-zinc-400 max-w-[50ch] leading-relaxed mb-10"
          >
            A commanding platform engineered for apex teams. Experience unprecedented clarity with our dynamic, high-fidelity orchestration engine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="relative group w-full sm:w-auto overflow-hidden rounded-full cursor-pointer bg-white px-8 py-4 text-zinc-950 font-semibold tracking-wide transition-transform active:scale-95">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Building <ArrowRight weight="bold" />
              </span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-transform duration-300 group-hover:scale-100 bg-rose-50 z-0"></div>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full text-zinc-300 font-semibold tracking-wide border border-white/10 bg-transparent hover:bg-white/5 transition-colors active:scale-95">
              View Documentation
            </button>
          </motion.div>
        </div>

        {/* Right visual portion (Liquid Glass Panel + Abstract UI element) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl glass-panel p-2 md:p-4 flex items-center justify-center overflow-hidden group"
        >
          {/* Decorative glow inside panel */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-1000" />

          <div className="relative z-10 w-full h-full rounded-2xl border border-white/5 bg-zinc-950/50 backdrop-blur-md overflow-hidden flex items-center justify-center">
            <motion.img
              src="/hero_abstract.png"
              alt="Synthetix abstract core"
              className="w-full h-full object-cover rounded-xl"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
