import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-4 items-center justify-between text-slate-400">
        <p className="text-sm">© {new Date().getFullYear()} HoloTime — Smart Attendance Suite</p>
        <div className="text-xs">
          Built with a futuristic holographic theme for a modern workplace.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
