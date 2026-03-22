'use client'
import {
  PieChart, Pie, Cell, Tooltip,
  Legend, ResponsiveContainer
} from 'recharts'
import { expenseBreakdown } from '@/lib/data'

const RADIAN = Math.PI / 180
const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const r = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + r * Math.cos(-midAngle * RADIAN)
  const y = cy + r * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="bold">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function ExpenseChart() {
  return (
    <div className="glass rounded-2xl p-6 fade-in-up" style={{ animationDelay: '300ms' }}>
      <h3 className="text-lg font-bold mb-1 text-white">توزيع المصاريف</h3>
      <p className="text-slate-500 text-sm mb-4">نسبة كل فئة من إجمالي التكاليف</p>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={expenseBreakdown}
            cx="50%" cy="50%"
            innerRadius={60} outerRadius={100}
            paddingAngle={4}
            dataKey="value"
            labelLine={false}
            label={renderLabel}
          >
            {expenseBreakdown.map((entry, i) => (
              <Cell key={i} fill={entry.color} stroke="transparent" />
            ))}
          </Pie>
          <Tooltip formatter={(v: any) => `${v}%`} contentStyle={{ background: '#27273a', border: 'none', borderRadius: 12 }} />
          <Legend
            iconType="circle"
            iconSize={10}
            wrapperStyle={{ color: '#94a3b8', fontSize: 12 }}
            formatter={(value) => value}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
