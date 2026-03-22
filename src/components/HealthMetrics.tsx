'use client'
import { healthMetrics } from '@/lib/data'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { ShieldCheck } from 'lucide-react'

export default function HealthMetrics() {
  const radarData = healthMetrics.map(m => ({ subject: m.label, value: m.value }))

  return (
    <div className="glass card-hover rounded-2xl p-6 fade-up border border-emerald-500/10" style={{ animationDelay: '500ms' }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-emerald-500/15 rounded-xl">
          <ShieldCheck size={16} className="text-emerald-400" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white">الصحة المالية</h3>
          <p className="text-slate-500 text-xs">تقييم شامل للأداء المالي</p>
        </div>
        <span className="mr-auto text-lg font-black gradient-text">79/100</span>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
          <PolarGrid stroke="rgba(255,255,255,0.06)" />
          <PolarAngleAxis dataKey="subject" tick={{ fill:'#64748b', fontSize:10 }} />
          <Tooltip
            contentStyle={{ background:'#141428', border:'1px solid rgba(16,185,129,0.2)', borderRadius:10, fontSize:11 }}
            formatter={(v:any) => [`${v}%`, 'القيمة']}
          />
          <Radar name="الصحة" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.18} strokeWidth={2}/>
        </RadarChart>
      </ResponsiveContainer>

      <div className="space-y-2.5 mt-3">
        {healthMetrics.map((m, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xs text-slate-400 w-28 text-right">{m.label}</span>
            <div className="flex-1 progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${m.value}%`, background: m.color, opacity: 0.85 }}
              />
            </div>
            <span className="text-xs font-bold w-8 text-left" style={{ color: m.color }}>{m.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
