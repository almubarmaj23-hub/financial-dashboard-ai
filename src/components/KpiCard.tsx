'use client'
import { TrendingUp, TrendingDown, DollarSign, PieChart, Activity } from 'lucide-react'

const icons: Record<string, React.ElementType> = {
  TrendingUp, DollarSign, PieChart, Activity
}

interface KpiCardProps {
  label: string
  value: string
  unit: string
  change: number
  icon: string
  delay?: number
}

export default function KpiCard({ label, value, unit, change, icon, delay = 0 }: KpiCardProps) {
  const Icon = icons[icon] ?? TrendingUp
  const isPositive = change >= 0

  return (
    <div
      className="glass rounded-2xl p-6 fade-in-up hover:glow transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${isPositive ? 'bg-indigo-500/20' : 'bg-rose-500/20'}`}>
          <Icon size={22} className={isPositive ? 'text-indigo-400' : 'text-rose-400'} />
        </div>
        <span className={`flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded-lg ${
          isPositive ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400'
        }`}>
          {isPositive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
          {Math.abs(change)}%
        </span>
      </div>
      <p className="text-slate-400 text-sm mb-1">{label}</p>
      <p className="text-3xl font-bold text-white">
        {value} <span className="text-lg text-indigo-400">{unit}</span>
      </p>
    </div>
  )
}
