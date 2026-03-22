'use client'
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts'
import { forecastData } from '@/lib/data'
import { Sparkles } from 'lucide-react'

export default function ForecastChart() {
  return (
    <div className="glass card-hover rounded-2xl p-6 fade-up border border-cyan-500/10" style={{ animationDelay: '350ms' }}>
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-cyan-500/15 rounded-xl">
          <Sparkles size={16} className="text-cyan-400" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white">توقعات الإيرادات</h3>
          <p className="text-slate-500 text-xs">نموذج AI للتنبؤ بالإيرادات</p>
        </div>
        <span className="mr-auto text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-1 rounded-lg font-semibold">
          دقة 94.2%
        </span>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <ComposedChart data={forecastData} margin={{ top:5, right:5, left:-10, bottom:0 }}>
          <defs>
            <linearGradient id="gActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#6366f1" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="gForecast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#22d3ee" stopOpacity={0.25}/>
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false}/>
          <XAxis dataKey="month" tick={{ fill:'#475569', fontSize:10 }} axisLine={false} tickLine={false}/>
          <YAxis tick={{ fill:'#475569', fontSize:10 }} axisLine={false} tickLine={false} tickFormatter={v=>`${v/1000}k`}/>
          <Tooltip
            contentStyle={{ background:'#141428', border:'1px solid rgba(34,211,238,0.2)', borderRadius:12, fontSize:12 }}
            formatter={(v:any, n:string) => [`$${Number(v).toLocaleString()}`, n]}
          />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ color:'#94a3b8', fontSize:12, paddingTop:8 }}/>
          <Area type="monotone" dataKey="actual"   name="فعلي"     stroke="#6366f1" fill="url(#gActual)"   strokeWidth={2.5} connectNulls/>
          <Area type="monotone" dataKey="forecast" name="متوقع (AI)" stroke="#22d3ee" fill="url(#gForecast)" strokeWidth={2} strokeDasharray="5 3" connectNulls/>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
