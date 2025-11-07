import React, { useMemo, useState } from 'react';
import { User, CalendarDays, Clock, DollarSign, FileWarning, UploadCloud, FileCheck, AlertTriangle } from 'lucide-react';

const SectionCard = ({ title, icon: Icon, children, right }) => (
  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
          <Icon size={18} className="text-sky-300" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {right}
    </div>
    {children}
  </div>
);

const TabButton = ({ active, icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
      active ? 'bg-sky-500 text-slate-900 border-sky-400' : 'border-slate-800 hover:border-slate-700'
    }`}
  >
    <Icon size={16} />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

function currency(n) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
}

const monthsOrder = [
  'January','February','March','April','May','June','July','August','September','October','November','December'
];

const DemoDashboard = ({ account }) => {
  const [active, setActive] = useState('profile');
  
  const overtimeByMonth = useMemo(() => {
    const grouped = {};
    account.overtime.forEach((o) => {
      const m = monthsOrder[o.month - 1];
      if (!grouped[m]) grouped[m] = { hours: 0, income: 0 };
      grouped[m].hours += o.hours;
      grouped[m].income += o.hours * 100000;
    });
    return grouped;
  }, [account]);

  const lateByMonth = useMemo(() => {
    const grouped = {};
    account.violations.forEach((v) => {
      const m = monthsOrder[v.month - 1];
      if (!grouped[m]) grouped[m] = { days: 0, cut: 0 };
      grouped[m].days += v.late ? 1 : 0;
    });
    Object.keys(grouped).forEach((m) => {
      grouped[m].cut = grouped[m].days * 20000;
    });
    return grouped;
  }, [account]);

  const hasAutoWarning = (monthName) => {
    const rec = lateByMonth[monthName];
    return rec && rec.days > 2;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <TabButton active={active==='profile'} icon={User} label="Profile" onClick={() => setActive('profile')} />
        <TabButton active={active==='attendance'} icon={CalendarDays} label="Attendance" onClick={() => setActive('attendance')} />
        <TabButton active={active==='overtime'} icon={DollarSign} label="Overtime" onClick={() => setActive('overtime')} />
        <TabButton active={active==='violations'} icon={FileWarning} label="Violations" onClick={() => setActive('violations')} />
        <TabButton active={active==='relief'} icon={UploadCloud} label="Warning Relief" onClick={() => setActive('relief')} />
        <TabButton active={active==='sick'} icon={FileCheck} label="Sick Leave" onClick={() => setActive('sick')} />
      </div>

      {active === 'profile' && (
        <SectionCard title="Profile" icon={User}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
            <div className="sm:col-span-2 space-y-2">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-400">Employee Number</p>
                  <p className="font-medium">{account.employeeNumber}</p>
                </div>
                <div>
                  <p className="text-slate-400">Name</p>
                  <p className="font-medium">{account.name}</p>
                </div>
                <div>
                  <p className="text-slate-400">Grade</p>
                  <p className="font-medium">{account.grade}</p>
                </div>
                <div>
                  <p className="text-slate-400">Position</p>
                  <p className="font-medium">{account.position}</p>
                </div>
                <div>
                  <p className="text-slate-400">Insurance Number</p>
                  <p className="font-medium">{account.insurance}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={account.picture} alt="Profile" className="h-28 w-28 rounded-xl object-cover border border-slate-700" />
            </div>
          </div>
        </SectionCard>
      )}

      {active === 'attendance' && (
        <SectionCard title="Attendance by Month" icon={CalendarDays}>
          <div className="space-y-6">
            {Object.entries(account.attendanceByMonth).map(([month, days]) => (
              <div key={month} className="border border-slate-800 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900/60">
                  <p className="font-medium">{month}</p>
                  <p className="text-sm text-slate-400">{days.length} records</p>
                </div>
                <div className="divide-y divide-slate-800">
                  {days.map((d, idx) => (
                    <div key={idx} className="px-4 py-3 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <Clock size={14} className="text-sky-300" />
                        <span>{d.date}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-400">In: {d.in}</span>
                        <span className="text-slate-400">Out: {d.out}</span>
                        {d.late && <span className="text-amber-400 inline-flex items-center gap-1"><AlertTriangle size={14}/> Late</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {active === 'overtime' && (
        <SectionCard title="Overtime Summary" icon={DollarSign}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(overtimeByMonth).map(([month, v]) => (
              <div key={month} className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
                <p className="font-medium mb-1">{month}</p>
                <p className="text-sm text-slate-400">Hours: <span className="text-slate-200 font-medium">{v.hours}</span></p>
                <p className="text-sm text-slate-400">Income: <span className="text-slate-200 font-medium">{currency(v.income)}</span></p>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {active === 'violations' && (
        <SectionCard title="Late Clock-in (12 months)" icon={FileWarning}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(lateByMonth).map(([month, v]) => (
              <div key={month} className={`p-4 rounded-xl border ${hasAutoWarning(month) ? 'border-amber-400/50 bg-amber-400/5' : 'border-slate-800 bg-slate-900/60'}`}>
                <div className="flex items-center justify-between">
                  <p className="font-medium">{month}</p>
                  {hasAutoWarning(month) && (
                    <span className="text-amber-400 text-xs inline-flex items-center gap-1"><AlertTriangle size={14}/> Auto Warning</span>
                  )}
                </div>
                <p className="text-sm text-slate-400 mt-1">Late days: <span className="text-slate-200 font-medium">{v.days}</span></p>
                <p className="text-sm text-slate-400">Income cut: <span className="text-slate-200 font-medium">{currency(v.cut)}</span></p>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {active === 'relief' && (
        <SectionCard title="Warning Relief Requests" icon={UploadCloud}>
          <div className="space-y-3">
            {account.warningRelief.map((r, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">{r.month} • {r.date}</p>
                  <p className="text-sm text-slate-400">Reason: {r.reason}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full border ${r.status === 'approved' ? 'border-emerald-400/40 text-emerald-300 bg-emerald-400/10' : r.status === 'denied' ? 'border-rose-400/40 text-rose-300 bg-rose-400/10' : 'border-amber-400/40 text-amber-300 bg-amber-400/10'}`}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {active === 'sick' && (
        <SectionCard title="Sick Leave Requests" icon={FileCheck}>
          <div className="space-y-3">
            {account.sickLeaves.map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">{s.date} • {s.days} day(s)</p>
                  <p className="text-sm text-slate-400">Diagnosis: {s.diagnosis}</p>
                </div>
                <a className="text-xs underline text-sky-300 hover:text-sky-200" href={s.evidenceUrl} target="_blank" rel="noreferrer">Evidence</a>
              </div>
            ))}
          </div>
        </SectionCard>
      )}
    </div>
  );
};

export default DemoDashboard;
