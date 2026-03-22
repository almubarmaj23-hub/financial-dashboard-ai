'use client'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import { monthlyRevenue } from '@/lib/data'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="glass rounded-xl p-3 text-sm">
        <p className="text-indigo-300 font-bold mb-2">{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.color }}>
            {p.name}: <span className="font-bold">${p.value.toLocaleString()}</span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function RevenueChart() {
  return (
    <div className="glass rounded-2xl p-6 fade-in-up" style={{ animationDelay: '200ms' }}>
      <h3 className="text-lg font-bold mb-1 text-white">الإيرادات والمصاريف الشهرية</h3>
      <p className="text-slate-500 text-sm mb-5">تحليل مقارن طوال العام</p>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={monthlyRevenue} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="gRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#3f3f5a" />
          <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: '#94a3b8', fontSize: 13 }} />
          <Area type="monotone" dataKey="revenue"  name="الإيرادات" stroke="#6366f1" fill="url(#gRevenue)"  strokeWidth={2.5} />
          <Area type="monotone" dataKey="expenses" name="المصاريف" stroke="#f43f5e" fill="url(#gExpenses)" strokeWidth={2.5} />
          <Area type="monotone" dataKey="profit"   name="الأرباح"  stroke="#10b981" fill="url(#gProfit)"   strokeWidth={2.5} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
