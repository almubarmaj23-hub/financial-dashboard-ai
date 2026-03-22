'use client'
import KpiCard from '@/components/KpiCard'
import RevenueChart from '@/components/RevenueChart'
import ExpenseChart from '@/components/ExpenseChart'
import CashFlowChart from '@/components/CashFlowChart'
import AiInsights from '@/components/AiInsights'
import Sidebar from '@/components/Sidebar'
import { kpis } from '@/lib/data'
import { Bell, Search } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col">

        {/* Header */}
        <header className="glass border-b border-surface-border px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-bold text-white">لوحة التحليل المالي</h1>
            <p className="text-slate-500 text-xs">آخر تحديث: مارس 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                placeholder="بحث..."
                className="bg-surface-card border border-surface-border rounded-xl pr-9 pl-4 py-2 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-primary w-44"
              />
            </div>
            <button className="relative p-2 rounded-xl bg-surface-card border border-surface-border text-slate-400 hover:text-white transition">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
            </button>
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">م</div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6 space-y-6 overflow-auto">

          {/* KPIs */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {kpis.map((kpi, i) => (
              <KpiCard key={i} {...kpi} delay={i * 80} />
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <RevenueChart />
            </div>
            <ExpenseChart />
          </div>

          {/* Charts Row 2 */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <CashFlowChart />
            </div>
            <AiInsights />
          </div>

        </div>
      </main>
    </div>
  )
}
