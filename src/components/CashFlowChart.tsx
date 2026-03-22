'use client'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import { cashFlow } from '@/lib/data'

export default function CashFlowChart() {
  return (
    <div className="glass rounded-2xl p-6 fade-in-up" style={{ animationDelay: '400ms' }}>
      <h3 className="text-lg font-bold mb-1 text-white">التدفق النقدي الأسبوعي</h3>
      <p className="text-slate-500 text-sm mb-5">الوارد مقابل الصادر</p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={cashFlow} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="#3f3f5a" />
          <XAxis dataKey="week" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ background: '#27273a', border: 'none', borderRadius: 12 }}
            labelStyle={{ color: '#818cf8' }}
            formatter={(v: any) => `$${v.toLocaleString()}`}
          />
          <Legend wrapperStyle={{ color: '#94a3b8', fontSize: 13 }} />
          <Bar dataKey="inflow"  name="الوارد"  fill="#6366f1" radius={[6,6,0,0]} />
          <Bar dataKey="outflow" name="الصادر"  fill="#f43f5e" radius={[6,6,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
