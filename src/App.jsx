import React from 'react';
import Hero from './components/Hero.jsx';
import LoginCard from './components/LoginCard.jsx';
import FeatureSections from './components/FeatureSections.jsx';
import Footer from './components/Footer.jsx';
import DemoDashboard from './components/DemoDashboard.jsx';

function App() {
  const demoAccount = {
    employeeNumber: '120045',
    name: 'Ari Pratama',
    grade: 'G4',
    position: 'Senior Operations Analyst',
    insurance: 'BPJS-889201773',
    picture: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    attendanceByMonth: {
      January: [
        { date: '2025-01-03', in: '09:05', out: '17:30', late: true },
        { date: '2025-01-04', in: '08:56', out: '17:12', late: false },
        { date: '2025-01-05', in: '09:18', out: '18:05', late: true },
        { date: '2025-01-06', in: '08:52', out: '17:00', late: false },
      ],
      February: [
        { date: '2025-02-01', in: '09:11', out: '17:45', late: true },
        { date: '2025-02-02', in: '08:59', out: '17:08', late: false },
        { date: '2025-02-03', in: '09:22', out: '18:02', late: true },
        { date: '2025-02-04', in: '09:03', out: '18:40', late: true },
      ],
    },
    overtime: [
      { month: 1, hours: 6 },
      { month: 2, hours: 12 },
      { month: 3, hours: 3 },
    ],
    violations: [
      { month: 1, late: true },
      { month: 1, late: true },
      { month: 2, late: true },
      { month: 2, late: true },
      { month: 2, late: true },
      { month: 3, late: false },
    ],
    warningRelief: [
      { month: 'January', date: '2025-01-05', reason: 'Heavy traffic due to accident', status: 'approved' },
      { month: 'February', date: '2025-02-03', reason: 'Car trouble (tire puncture)', status: 'on review' },
      { month: 'February', date: '2025-02-04', reason: 'Family emergency', status: 'denied' },
    ],
    sickLeaves: [
      { date: '2025-03-11', days: 2, diagnosis: 'Flu with fever', evidenceUrl: 'https://example.com/medical-note-0311.pdf' },
      { date: '2025-05-22', days: 1, diagnosis: 'Migraine', evidenceUrl: 'https://example.com/medical-note-0522.pdf' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LoginCard />
          <FeatureSections />
        </section>

        <section className="mt-12">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Sample Account</h2>
            <p className="text-slate-400 text-sm">Use this live preview to explore every menu and calculation.</p>
          </div>
          <DemoDashboard account={demoAccount} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
