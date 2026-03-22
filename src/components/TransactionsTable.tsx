'use client'
import { useState } from 'react'
import { transactions } from '@/lib/data'
import { ArrowUpCircle, ArrowDownCircle, Clock, CheckCircle2, XCircle, Filter } from 'lucide-react'

const statusConfig: Record<string, { label:string; cls:string; icon:React.ElementType }> = {
  completed: { label:'مكتمل',  cls:'badge-success', icon: CheckCircle2 },
  pending:   { label:'معلّق',   cls:'badge-warning', icon: Clock },
  failed:    { label:'فاشل',   cls:'badge-danger',  icon: XCircle },
}

export default function TransactionsTable() {
  const [filter, setFilter] = useState<'all'|'income'|'expense'>('all')
  const filtered = filter === 'all' ? transactions : transactions.filter(t => t.type === filter)

  return (
    <div className="glass card-hover rounded-2xl p-6 fade-up border border-white/5" style={{ animationDelay: '450ms' }}>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-bold text-white">آخر المعاملات</h3>
          <p className="text-slate-500 text-xs mt-0.5">ديسمبر 2025</p>
        </div>
        <div className="flex gap-1.5 bg-white/5 p-1 rounded-xl">
          {(['all','income','expense'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filter === f ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {f === 'all' ? 'الكل' : f === 'income' ? 'وارد' : 'صادر'}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2 max-h-80 overflow-y-auto pl-1">
        {filtered.map((tx, i) => {
          const isIncome = tx.type === 'income'
          const sc = statusConfig[tx.status]
          const StatusIcon = sc.icon
          return (
            <div
              key={tx.id}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group cursor-pointer fade-up"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className={`p-2 rounded-xl flex-shrink-0 ${isIncome ? 'bg-emerald-500/15' : 'bg-rose-500/15'}`}>
                {isIncome
                  ? <ArrowUpCircle size={16} className="text-emerald-400"/>
                  : <ArrowDownCircle size={16} className="text-rose-400"/>
                }
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-200 truncate group-hover:text-white transition-colors">
                  {tx.description}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-slate-500">{tx.date}</span>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs text-slate-500">{tx.category}</span>
                </div>
              </div>

              <div className="text-left flex-shrink-0 flex flex-col items-end gap-1">
                <span className={`text-sm font-bold ${isIncome ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isIncome ? '+' : ''}{tx.amount.toLocaleString()}$
                </span>
                <span className={`badge ${sc.cls}`}>
                  <StatusIcon size={9}/>
                  {sc.label}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-xs text-slate-500">
        <span>{filtered.length} معاملة</span>
        <button className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">عرض الكل ←</button>
      </div>
    </div>
  )
}
