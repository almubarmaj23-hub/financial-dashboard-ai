'use client'
import { TrendingUp, TrendingDown, DollarSign, PieChart, Activity } from 'lucide-react'

const icons: Record<string, React.ElementType> = { TrendingUp, DollarSign, PieChart, Activity }
const colors: Record<string, { ring: string; bg: string; icon: string; glow: string }> = {
  indigo:  { ring: 'border-indigo-500/30',  bg: 'bg-indigo-500/10',  icon: 'text-indigo-400',  glow: 'hover:shadow-indigo-500/20'  },
  emerald: { ring: 'border-emerald-500/30', bg: 'bg-emerald-500/10', icon: 'text-emerald-400', glow: 'hover:shadow-emerald-500/20' },
  cyan:    { ring: 'border-cyan-500/30',    bg: 'bg-cyan-500/10',    icon: 'text-cyan-400',    glow: 'hover:shadow-cyan-500/20'    },
  rose:    { ring: 'border-rose-500/30',    bg: 'bg-rose-500/10',    icon: 'text-rose-400',    glow: 'hover:shadow-rose-500/20'    },
}

interface KpiCardProps {
  label: string; value: string; unit: string
  change: number; icon: string; color: string; delay?: number
}

export default function KpiCard({ label, value, unit, change, icon, color, delay = 0 }: KpiCardProps) {
  const Icon = icons[icon] ?? TrendingUp
  const c = colors[color] ?? colors.indigo
  const isPos = change >= 0

  return (
    <div
      className={`glass card-hover rounded-2xl p-5 fade-up border ${c.ring} hover:shadow-lg ${c.glow} cursor-pointer group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${c.bg} group-hover:scale-110 transition-transform`}>
          <Icon size={20} className={c.icon} />
        </div>
        <span className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg ${
          isPos ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400'
        }`}>
          {isPos ? <TrendingUp size={11}/> : <TrendingDown size={11}/>}
          {Math.abs(change)}%
        </span>
      </div>

      <p className="text-slate-500 text-xs mb-1 font-medium">{label}</p>
      <p className="text-2xl font-black text-white tracking-tight">
        {value}<span className="text-sm text-slate-400 font-medium mr-1">{unit}</span>
      </p>

      <div className="mt-3 progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${Math.min(Math.abs(change) * 5, 100)}%`, background: isPos ? '#10b981' : '#f43f5e' }}
        />
      </div>
    </div>
  )
}
