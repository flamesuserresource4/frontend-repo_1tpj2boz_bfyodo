import React from 'react';
import { Lock, BadgeCheck } from 'lucide-react';

const LoginCard = () => {
  return (
    <div id="login" className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
          <Lock className="text-sky-300" size={18} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Employee Login</h3>
          <p className="text-slate-400 text-sm">Use your Employee Number and Password</p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Employee Number</label>
          <input type="text" placeholder="e.g. 120045" className="w-full rounded-lg bg-slate-800/80 border border-slate-700 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">Password</label>
          <input type="password" placeholder="••••••••" className="w-full rounded-lg bg-slate-800/80 border border-slate-700 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" />
        </div>
        <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold transition">
          <BadgeCheck size={18} /> Sign In
        </button>
      </form>

      <p className="mt-4 text-xs text-slate-500">
        This demo focuses on the UI. Authentication and data features will be wired to the backend in the next step.
      </p>
    </div>
  );
};

export default LoginCard;
