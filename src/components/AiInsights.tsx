'use client'
import { Sparkles, TrendingUp, AlertTriangle, Info } from 'lucide-react'
import { aiInsights } from '@/lib/data'

const config: Record<string, { icon: React.ElementType; bg: string; border: string; iconColor: string }> = {
  positive: { icon: TrendingUp,    bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', iconColor: 'text-emerald-400' },
  warning:  { icon: AlertTriangle, bg: 'bg-amber-500/10',   border: 'border-amber-500/30',   iconColor: 'text-amber-400'   },
  info:     { icon: Info,          bg: 'bg-cyan-500/10',    border: 'border-cyan-500/30',    iconColor: 'text-cyan-400'    },
}

export default function AiInsights() {
  return (
    <div className="glass rounded-2xl p-6 fade-in-up" style={{ animationDelay: '500ms' }}>
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-indigo-500/20 rounded-xl">
          <Sparkles size={20} className="text-indigo-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">رؤى الذكاء الاصطناعي</h3>
          <p className="text-slate-500 text-xs">تحليل تلقائي مدعوم بالذكاء الاصطناعي</p>
        </div>
      </div>
      <div className="space-y-3">
        {aiInsights.map((insight, i) => {
          const c = config[insight.type] ?? config.info
          const Icon = c.icon
          return (
            <div key={i} className={`flex gap-3 p-4 rounded-xl border ${c.bg} ${c.border}`}>
              <Icon size={18} className={`mt-0.5 shrink-0 ${c.iconColor}`} />
              <p className="text-sm text-slate-300 leading-relaxed">{insight.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
