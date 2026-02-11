import { motion } from "framer-motion";
import { ChevronLeft, Github, Instagram, Linkedin, Mail, Heart, Code, Coffee } from "lucide-react";
import { Link } from "wouter";
import profileImg from "../assets/images/satwik-profile.png";

export default function Profile() {
  return (
    <div className="dark min-h-screen bg-[#050505] text-white selection:bg-accent/40 selection:text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,68,0,0.05),transparent_70%)] pointer-events-none" />
      
      <nav className="fixed top-8 left-8 z-50">
        <Link href="/">
          <motion.button
            whileHover={{ x: -4 }}
            className="glass p-4 rounded-full flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/60 hover:text-accent transition-all"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Artifacts
          </motion.button>
        </Link>
      </nav>

      <main className="relative max-w-6xl mx-auto px-6 py-32 sm:py-48">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative glass-card aspect-square rounded-[3rem] overflow-hidden border border-white/10 ring-1 ring-white/5">
                <img 
                  src={profileImg} 
                  alt="Satwik Mani Tripathi" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div>
              <div className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-6 flex items-center gap-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(255,68,0,1)]" />
                The Architect
              </div>
              <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-none mb-8">
                Satwik Mani <br />
                <span className="text-accent italic font-medium">Tripathi</span>
              </h1>
              <p className="text-xl text-white/60 font-light leading-relaxed max-w-xl">
                A second-year Computer Science student at <span className="text-white">Newton School of Technology</span>. 
                I obsess over the intersection of rigorous engineering and intentional design.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 border-b border-white/5 pb-2 flex items-center gap-2">
                  <Code className="h-3 w-3" /> Interests
                </h3>
                <ul className="space-y-4 text-sm font-medium text-white/70">
                  <li className="flex items-center gap-3"><div className="h-1 w-1 rounded-full bg-accent" /> Full-Stack Architecture</li>
                  <li className="flex items-center gap-3"><div className="h-1 w-1 rounded-full bg-accent" /> Distributed Systems</li>
                  <li className="flex items-center gap-3"><div className="h-1 w-1 rounded-full bg-accent" /> Motion Engine Design</li>
                  <li className="flex items-center gap-3"><div className="h-1 w-1 rounded-full bg-accent" /> UI Engineering</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 border-b border-white/5 pb-2 flex items-center gap-2">
                  <Heart className="h-3 w-3" /> Hobbies
                </h3>
                <ul className="space-y-4 text-sm font-medium text-white/70">
                  <li className="flex items-center gap-3"><div className="h-1 w-1 rounded-full bg-accent" /> Digital Photography</li>
                  <li className="flex items-center gap-3"><div className="h-1 w-1 rounded-full bg-accent" /> Minimalist Architecture</li>
                  <li className="flex items-center gap-3"><div className="h-1 w-1 rounded-full bg-accent" /> Open Source Tinkering</li>
                  <li className="flex items-center gap-3"><div className="h-1 w-1 rounded-full bg-accent" /> Strategic Chess</li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex items-center gap-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="glass p-5 rounded-full hover:text-accent transition-all">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="glass p-5 rounded-full hover:text-accent transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="glass p-5 rounded-full hover:text-accent transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <div className="h-px flex-1 bg-white/5 mx-4" />
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20">
                <Coffee className="h-3 w-3" /> Built with Focus
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}