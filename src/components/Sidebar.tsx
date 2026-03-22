'use client'
import { useState } from 'react'
import {
  LayoutDashboard, BarChart2, PieChart, TrendingUp,
  Settings, HelpCircle, ChevronLeft
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'لوحة التحكم',  active: true  },
  { icon: BarChart2,       label: 'الإيرادات',     active: false },
  { icon: PieChart,        label: 'المصاريف',       active: false },
  { icon: TrendingUp,      label: 'التنبؤات',       active: false },
  { icon: Settings,        label: 'الإعدادات',      active: false },
  { icon: HelpCircle,      label: 'المساعدة',       active: false },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={`glass flex flex-col transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} min-h-screen p-4`}>
      <div className="flex items-center justify-between mb-8">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">ف</div>
            <span className="font-bold text-white text-sm">FinAI Dashboard</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 transition-all"
        >
          <ChevronLeft size={16} className={`transition-transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item, i) => {
          const Icon = item.icon
          return (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                item.active
                  ? 'bg-indigo-500/20 text-indigo-300 font-semibold'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon size={18} />
              {!collapsed && <span>{item.label}</span>}
            </button>
          )
        })}
      </nav>

      {!collapsed && (
        <div className="mt-6 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
          <p className="text-xs text-indigo-300 font-semibold mb-1">الذكاء الاصطناعي نشط</p>
          <p className="text-xs text-slate-500">يحلل بياناتك باستمرار</p>
          <div className="mt-2 flex gap-1">
            {[1,2,3].map(j => (
              <div key={j} className="h-1 flex-1 bg-indigo-500/30 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 animate-pulse-slow rounded-full" style={{ width: `${60+j*12}%` }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
