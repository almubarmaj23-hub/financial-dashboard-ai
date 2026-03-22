'use client'
import { useState } from 'react'
import { LayoutDashboard, BarChart2, PieChart, TrendingUp, Wallet, Settings, HelpCircle, ChevronRight, Zap } from 'lucide-react'

const nav = [
  { icon: LayoutDashboard, label: 'لوحة التحكم',   active: true  },
  { icon: BarChart2,       label: 'الإيرادات',      active: false },
  { icon: PieChart,        label: 'المصاريف',        active: false },
  { icon: TrendingUp,      label: 'التنبؤات',        active: false },
  { icon: Wallet,          label: 'المعاملات',       active: false },
]
const bottom = [
  { icon: Settings, label: 'الإعدادات' },
  { icon: HelpCircle, label: 'المساعدة' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={`glass flex flex-col transition-all duration-300 ${collapsed ? 'w-[68px]' : 'w-60'} min-h-screen border-l border-r-0 border-white/5`}
      style={{ borderRight:'none' }}>

      {/* Logo */}
      <div className={`flex items-center p-4 border-b border-white/5 ${collapsed ? 'justify-center' : 'justify-between'}`}>
        {!collapsed && (
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <Zap size={14} className="text-white" />
            </div>
            <div>
              <p className="font-black text-white text-sm leading-none">FinAI</p>
              <p className="text-slate-500 text-[10px]">Dashboard Pro</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
            <Zap size={14} className="text-white"/>
          </div>
        )}
        {!collapsed && (
          <button onClick={() => setCollapsed(true)} className="p-1.5 rounded-lg hover:bg-white/10 text-slate-500 transition-all">
            <ChevronRight size={14}/>
          </button>
        )}
      </div>

      {collapsed && (
        <button onClick={() => setCollapsed(false)} className="mx-auto mt-3 p-1.5 rounded-lg hover:bg-white/10 text-slate-500 transition-all">
          <ChevronRight size={14} className="rotate-180"/>
        </button>
      )}

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 mt-2">
        {!collapsed && <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest px-3 mb-2">القائمة الرئيسية</p>}
        {nav.map((item, i) => {
          const Icon = item.icon
          return (
            <button key={i}
              className={`w-full flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-xl text-sm transition-all group ${
                item.active
                  ? 'bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/20'
                  : 'text-slate-500 hover:bg-white/5 hover:text-slate-200'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={17} className={`flex-shrink-0 ${item.active ? '' : 'group-hover:scale-110 transition-transform'}`}/>
              {!collapsed && <span>{item.label}</span>}
              {!collapsed && item.active && <span className="mr-auto w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"/>}
            </button>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-white/5 space-y-1">
        {bottom.map((item, i) => {
          const Icon = item.icon
          return (
            <button key={i}
              className={`w-full flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-xl text-slate-500 hover:bg-white/5 hover:text-slate-300 text-sm transition-all`}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={16}/>
              {!collapsed && <span>{item.label}</span>}
            </button>
          )
        })}

        {/* AI Badge */}
        {!collapsed && (
          <div className="mt-3 p-3 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-indigo-500/15 rounded-xl">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"/>
              <p className="text-xs text-white font-bold">AI نشط</p>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed">يحلل 8 مؤشرات مالية في الوقت الفعلي</p>
          </div>
        )}
      </div>
    </aside>
  )
}
