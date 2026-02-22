import { motion } from 'framer-motion';
import { TwitterLogo, GithubLogo, DiscordLogo } from '@phosphor-icons/react';

export default function Footer() {
    return (
        <footer className="w-full bg-zinc-950 border-t border-white/5 pt-20 pb-10 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        {/* Logo placeholder */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-cyan-400 flex items-center justify-center">
                                <div className="w-3 h-3 bg-zinc-950 rounded-full"></div>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-zinc-100">Synthetix</span>
                        </div>
                        <p className="text-zinc-500 max-w-sm mb-8">
                            Decoupling interfaces from legacy constraints. A paramount engine designed exclusively for elite product teams.
                        </p>
                        {/* Socials */}
                        <div className="flex gap-4">
                            <a href="#" className="p-2 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                                <TwitterLogo weight="fill" className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                                <GithubLogo weight="fill" className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                                <DiscordLogo weight="fill" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-zinc-200 mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><a href="#" className="hover:text-rose-400 transition-colors">Orchestration</a></li>
                            <li><a href="#" className="hover:text-rose-400 transition-colors">Telemetry</a></li>
                            <li><a href="#" className="hover:text-rose-400 transition-colors">Global Network</a></li>
                            <li><a href="#" className="hover:text-rose-400 transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-zinc-200 mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600">
                    <p>© {new Date().getFullYear()} Synthetix Labs. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
