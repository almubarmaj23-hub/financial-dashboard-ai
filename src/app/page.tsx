'use client'
import { useState } from 'react'
import KpiCard from '@/components/KpiCard'
import RevenueChart from '@/components/RevenueChart'
import ExpenseChart from '@/components/ExpenseChart'
import CashFlowChart from '@/components/CashFlowChart'
import AiInsights from '@/components/AiInsights'
import ForecastChart from '@/components/ForecastChart'
import HealthMetrics from '@/components/HealthMetrics'
import TransactionsTable from '@/components/TransactionsTable'
import Sidebar from '@/components/Sidebar'
import { kpis } from '@/lib/data'
import { Bell, Search, Download, Calendar, ChevronDown } from 'lucide-react'

export default function Dashboard() {
  const [notif, setNotif] = useState(3)

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">

        {/* ── Header ── */}
        <header className="glass border-b border-white/5 px-6 py-3.5 flex items-center justify-between sticky top-0 z-20">
          <div className="fade-up">
            <h1 className="text-base font-black text-white">
              لوحة التحليل المالي
              <span className="mr-2 text-xs font-normal text-slate-500">/ ديسمبر 2025</span>
            </h1>
            <p className="text-slate-600 text-xs mt-0.5 hidden sm:block">مرحباً، المبرمج — هنا ملخص أداء محفظتك المالية اليوم</p>
          </div>

          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"/>
              <input
                placeholder="ابحث عن معاملة..."
                className="bg-white/5 border border-white/10 rounded-xl pr-8 pl-4 py-2 text-xs text-slate-300 placeholder-slate-600
                           focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all w-48"
              />
            </div>

            {/* Period Selector */}
            <button className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-400 hover:text-white transition-all">
              <Calendar size={13}/>
              2025
              <ChevronDown size={11}/>
            </button>

            {/* Export */}
            <button className="btn-primary flex items-center gap-1.5 hidden sm:flex">
              <Download size={13}/>
              تصدير
            </button>

            {/* Notifications */}
            <button
              onClick={() => setNotif(0)}
              className="relative p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all"
            >
              <Bell size={16}/>
              {notif > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full text-[9px] text-white font-bold flex items-center justify-center">
                  {notif}
                </span>
              )}
            </button>

            {/* Avatar */}
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg cursor-pointer">
              م
            </div>
          </div>
        </header>

        {/* ── Content ── */}
        <div className="flex-1 p-6 space-y-6 overflow-auto">

          {/* KPIs */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {kpis.map((kpi, i) => (
              <KpiCard key={i} {...kpi} delay={i * 80}/>
            ))}
          </div>

          {/* Row 1: Revenue + Expense */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            <div className="xl:col-span-2">
              <RevenueChart/>
            </div>
            <ExpenseChart/>
          </div>

          {/* Row 2: CashFlow + AI Forecast */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <CashFlowChart/>
            <ForecastChart/>
          </div>

          {/* Row 3: Transactions + Health + AI Insights */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            <div className="xl:col-span-1">
              <HealthMetrics/>
            </div>
            <div className="xl:col-span-1">
              <AiInsights/>
            </div>
            <div className="xl:col-span-1">
              <TransactionsTable/>
            </div>
          </div>

        </div>

        {/* ── Footer ── */}
        <footer className="border-t border-white/5 px-6 py-3 flex items-center justify-between text-xs text-slate-600">
          <span>© 2025 FinAI Dashboard · بُني بـ Next.js + Recharts + AI</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"/>
            جميع الأنظمة تعمل
          </span>
        </footer>
      </main>
    </div>
  )
}
