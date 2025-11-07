import React from 'react';
import Spline from '@splinetool/react-spline';
import { Clock, ShieldCheck, User } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-950/60 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 text-sky-300/90 backdrop-blur-sm rounded-full px-3 py-1 border border-sky-500/20 w-fit">
          <ShieldCheck size={16} />
          <span className="text-xs tracking-wide">Secure Employee Attendance</span>
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Smart Time & Attendance for Modern Teams
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Clock in/out, track overtime, manage violations, and handle sick leave — all in one beautiful, secure dashboard.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a href="#login" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold transition">
            <Clock size={18} /> Start Clocking
          </a>
          <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-700/80 hover:border-slate-600 transition">
            <User size={18} /> Explore Features
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
