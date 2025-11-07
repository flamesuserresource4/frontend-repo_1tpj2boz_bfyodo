import React from 'react';
import { CalendarDays, Clock, FileWarning, DollarSign, ShieldAlert, FileCheck, UploadCloud, User } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
    <div className="h-10 w-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-3">
      <Icon size={18} className="text-sky-300" />
    </div>
    <h4 className="font-semibold mb-1">{title}</h4>
    <p className="text-sm text-slate-400">{description}</p>
  </div>
);

const FeatureSections = () => {
  return (
    <div id="features" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FeatureCard icon={User} title="Profile" description="Store personal data, grade, position, insurance number and picture in a clean profile menu." />
      <FeatureCard icon={CalendarDays} title="Attendance" description="Daily clock-in/out with monthly categorized attendance list." />
      <FeatureCard icon={DollarSign} title="Overtime" description="Automatic daily overtime income based on 100,000/hour, summarized by month." />
      <FeatureCard icon={FileWarning} title="Violations" description="One-year late clock-in history with Rp 20,000/day income cut and auto warnings if late > 2 days/month." />
      <FeatureCard icon={ShieldAlert} title="Warnings" description="Automatic warnings and clear visibility when thresholds are crossed." />
      <FeatureCard icon={UploadCloud} title="Warning Relief" description="Submit reasons and upload evidence to request warning relief with status: on review/approved/denied." />
      <FeatureCard icon={FileCheck} title="Sick Leave" description="Request sick leave and upload medical evidence in seconds." />
      <FeatureCard icon={Clock} title="Real-time" description="Fast, responsive, and built for a modern workforce." />
    </div>
  );
};

export default FeatureSections;
