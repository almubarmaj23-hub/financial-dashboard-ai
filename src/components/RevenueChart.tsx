'use client'
import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts'
import { monthlyRevenue } from '@/lib/data'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="glass rounded-xl p-3 text-xs shadow-xl border border-indigo-500/20">
      <p className="text-indigo-300 font-bold mb-2 text-sm">{label}</p>
      {payload.map((p: any) => (
        <div key={p.name} className="flex items-center justify-between gap-6 mb-1">
          <span style={{ color: p.color }}>{p.name}</span>
          <span className="font-bold text-white">${p.value.toLocaleString()}</span>
        </div>
      ))}
      {payload[0] && payload[1] && (
        <div className="mt-2 pt-2 border-t border-white/10 flex justify-between">
          <span className="text-slate-400">هامش الربح</span>
          <span className="text-emerald-400 font-bold">
            {((payload[2]?.value / payload[0]?.value) * 100).toFixed(1)}%
          </span>
        </div>
      )}
    </div>
  )
}

const filters = ['الكل', 'نصف سنوي', 'ربع سنوي']

export default function RevenueChart() {
  const [filter, setFilter] = useState('الكل')
  const data = filter === 'ربع سنوي'
    ? monthlyRevenue.slice(9)
    : filter === 'نصف سنوي'
    ? monthlyRevenue.slice(6)
    : monthlyRevenue

  return (
    <div className="glass card-hover rounded-2xl p-6 fade-up border border-indigo-500/10" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-bold text-white">الإيرادات والمصاريف</h3>
          <p className="text-slate-500 text-xs mt-0.5">تحليل مقارن شهري</p>
        </div>
        <div className="flex gap-1 bg-white/5 p-1 rounded-xl">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filter === f ? 'bg-indigo-500 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >{f}</button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
          <defs>
            {[['gRev','#6366f1'],['gExp','#f43f5e'],['gPro','#10b981'],['gBud','#f59e0b']].map(([id,c]) => (
              <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={c} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={c} stopOpacity={0}/>
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false}/>
          <XAxis dataKey="month" tick={{ fill:'#475569', fontSize:11 }} axisLine={false} tickLine={false}/>
          <YAxis tick={{ fill:'#475569', fontSize:11 }} axisLine={false} tickLine={false} tickFormatter={v=>`${v/1000}k`}/>
          <Tooltip content={<CustomTooltip/>}/>
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ color:'#94a3b8', fontSize:12, paddingTop:12 }}/>
          <Area type="monotone" dataKey="budget"   name="الميزانية" stroke="#f59e0b" fill="url(#gBud)" strokeWidth={1.5} strokeDasharray="4 3"/>
          <Area type="monotone" dataKey="revenue"  name="الإيرادات" stroke="#6366f1" fill="url(#gRev)" strokeWidth={2.5}/>
          <Area type="monotone" dataKey="expenses" name="المصاريف"  stroke="#f43f5e" fill="url(#gExp)" strokeWidth={2}/>
          <Area type="monotone" dataKey="profit"   name="الأرباح"   stroke="#10b981" fill="url(#gPro)" strokeWidth={2.5}/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
