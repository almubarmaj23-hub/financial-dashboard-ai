'use client'
import { Sparkles, TrendingUp, AlertTriangle, Info, Brain, RefreshCw } from 'lucide-react'
import { aiInsights } from '@/lib/data'
import { useState } from 'react'

const cfg: Record<string, { icon:React.ElementType; bg:string; border:string; iconColor:string }> = {
  positive: { icon:TrendingUp,    bg:'bg-emerald-500/8',  border:'border-emerald-500/20', iconColor:'text-emerald-400' },
  warning:  { icon:AlertTriangle, bg:'bg-amber-500/8',    border:'border-amber-500/20',   iconColor:'text-amber-400'   },
  info:     { icon:Info,          bg:'bg-cyan-500/8',     border:'border-cyan-500/20',    iconColor:'text-cyan-400'    },
}

export default function AiInsights() {
  const [loading, setLoading] = useState(false)
  const handleRefresh = () => { setLoading(true); setTimeout(() => setLoading(false), 1500) }

  return (
    <div className="glass card-hover rounded-2xl p-6 fade-up border border-indigo-500/10" style={{ animationDelay: '550ms' }}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/15 rounded-xl">
            <Brain size={16} className="text-indigo-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">رؤى الذكاء الاصطناعي</h3>
            <p className="text-slate-500 text-xs">تحليل تلقائي في الوقت الفعلي</p>
          </div>
        </div>
        <button
          onClick={handleRefresh}
          className="p-2 rounded-xl hover:bg-white/10 text-slate-500 hover:text-white transition-all"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''}/>
        </button>
      </div>

      <div className="space-y-3">
        {aiInsights.map((insight, i) => {
          const c = cfg[insight.type] ?? cfg.info
          const Icon = c.icon
          return (
            <div key={i}
              className={`flex gap-3 p-3.5 rounded-xl border ${c.bg} ${c.border} fade-up`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`mt-0.5 p-1.5 rounded-lg bg-white/5 flex-shrink-0`}>
                <Icon size={13} className={c.iconColor}/>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{insight.text}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"/>
          <span className="text-xs text-slate-500">آخر تحليل: منذ 3 دقائق</span>
        </div>
        <button className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
          تقرير كامل ←
        </button>
      </div>
    </div>
  )
}
