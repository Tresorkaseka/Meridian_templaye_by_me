import { motion } from 'framer-motion';
import { Database, Lightning, Shield, FlowArrow } from '@phosphor-icons/react';

const features = [
    {
        title: "Quantum Execution",
        description: "Leverage an unmatched physics engine ensuring zero-latency data reflection across global nodes.",
        icon: <Lightning weight="duotone" className="w-6 h-6 text-rose-500" />,
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        title: "Impenetrable Vaults",
        description: "Military-grade encryption securing your telemetry seamlessly.",
        icon: <Shield weight="duotone" className="w-6 h-6 text-cyan-400" />,
        colSpan: "col-span-1 md:col-span-1",
    },
    {
        title: "Adaptive Pipelines",
        description: "Autonomous data routing dynamically optimizes your infrastructure without manual overrides.",
        icon: <FlowArrow weight="duotone" className="w-6 h-6 text-amber-500" />,
        colSpan: "col-span-1 md:col-span-1",
    },
    {
        title: "Infinite Store",
        description: "Persistent, immutable record keeping powered by distributed graph networks.",
        icon: <Database weight="duotone" className="w-6 h-6 text-purple-500" />,
        colSpan: "col-span-1 md:col-span-2",
    },
];

export default function FeaturesBento() {
    return (
        <section className="relative w-full bg-zinc-950 py-32 px-4 overflow-hidden">
            {/* Background glow isolation */}
            <div className="absolute top-0 right-0 w-full h-[800px] bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.05),transparent_60%)] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-100 mb-6 max-w-2xl">
                        A architecture forged for the <span className="text-zinc-500">uncompromising.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-[60ch]">
                        We discarded generic paradigms to build a raw, responsive engine. Every interaction is calculated, every pixel physically grounded.
                    </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
                    {features.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.7,
                                delay: idx * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 20
                            }}
                            className={`glass-panel rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative ${item.colSpan}`}
                        >
                            {/* Perpetual hover effect / Shimmer isolation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Top part: Icon and live status mock */}
                            <div className="flex justify-between items-start z-10">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                    {item.icon}
                                </div>
                                {/* Live pulsing dot constraint to visually represent 'Live' status */}
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-white/5">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-2 h-2 rounded-full bg-emerald-500"
                                    />
                                    <span className="text-[10px] uppercase font-mono text-zinc-400">SYNCED</span>
                                </div>
                            </div>

                            {/* Decorative element or Image for specific cards */}
                            {idx === 3 && (
                                <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-40 z-0 pointer-events-none group-hover:opacity-60 transition-opacity duration-700">
                                    <motion.img
                                        src="/bento_visual.png"
                                        alt="Infinite Store Visualization"
                                        className="w-full h-full object-cover"
                                        style={{ maskImage: "linear-gradient(to right top, transparent 10%, black 80%)", WebkitMaskImage: "linear-gradient(to right top, transparent 10%, black 80%)" }}
                                    />
                                </div>
                            )}

                            {/* Bottom part: Text */}
                            <div className="z-10 mt-auto relative">
                                <h3 className="text-2xl font-bold text-zinc-100 tracking-tight mb-3 group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
