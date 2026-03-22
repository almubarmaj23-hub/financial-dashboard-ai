export const monthlyRevenue = [
  { month: 'يناير',  revenue: 42000, expenses: 28000, profit: 14000, budget: 40000 },
  { month: 'فبراير', revenue: 38000, expenses: 25000, profit: 13000, budget: 41000 },
  { month: 'مارس',   revenue: 51000, expenses: 31000, profit: 20000, budget: 45000 },
  { month: 'أبريل',  revenue: 47000, expenses: 29000, profit: 18000, budget: 46000 },
  { month: 'مايو',   revenue: 55000, expenses: 33000, profit: 22000, budget: 50000 },
  { month: 'يونيو',  revenue: 62000, expenses: 36000, profit: 26000, budget: 55000 },
  { month: 'يوليو',  revenue: 58000, expenses: 34000, profit: 24000, budget: 58000 },
  { month: 'أغسطس',  revenue: 67000, expenses: 38000, profit: 29000, budget: 62000 },
  { month: 'سبتمبر', revenue: 72000, expenses: 41000, profit: 31000, budget: 66000 },
  { month: 'أكتوبر', revenue: 69000, expenses: 39000, profit: 30000, budget: 68000 },
  { month: 'نوفمبر', revenue: 78000, expenses: 44000, profit: 34000, budget: 72000 },
  { month: 'ديسمبر', revenue: 85000, expenses: 48000, profit: 37000, budget: 80000 },
]

export const forecastData = [
  { month: 'أكتوبر', actual: 69000, forecast: null },
  { month: 'نوفمبر', actual: 78000, forecast: null },
  { month: 'ديسمبر', actual: 85000, forecast: null },
  { month: 'يناير 2026',  actual: null, forecast: 91000 },
  { month: 'فبراير 2026', actual: null, forecast: 96000 },
  { month: 'مارس 2026',   actual: null, forecast: 103000 },
]

export const expenseBreakdown = [
  { name: 'الرواتب',        value: 45, color: '#6366f1' },
  { name: 'التسويق',        value: 20, color: '#22d3ee' },
  { name: 'العمليات',       value: 18, color: '#f59e0b' },
  { name: 'البنية التحتية', value: 10, color: '#10b981' },
  { name: 'أخرى',           value: 7,  color: '#f43f5e' },
]

export const cashFlow = [
  { week: 'أسبوع 1', inflow: 18000, outflow: 12000 },
  { week: 'أسبوع 2', inflow: 22000, outflow: 15000 },
  { week: 'أسبوع 3', inflow: 19000, outflow: 11000 },
  { week: 'أسبوع 4', inflow: 25000, outflow: 16000 },
  { week: 'أسبوع 5', inflow: 28000, outflow: 18000 },
  { week: 'أسبوع 6', inflow: 24000, outflow: 14000 },
]

export const transactions = [
  { id: 'TXN-001', description: 'عقد خدمات – شركة النخيل',   type: 'income',   amount: 12500, date: '22 ديسمبر', status: 'completed', category: 'مبيعات' },
  { id: 'TXN-002', description: 'فاتورة استضافة السحابة',      type: 'expense',  amount: -2100, date: '21 ديسمبر', status: 'completed', category: 'بنية تحتية' },
  { id: 'TXN-003', description: 'رواتب الفريق – ديسمبر',       type: 'expense',  amount: -18000, date: '20 ديسمبر', status: 'completed', category: 'رواتب' },
  { id: 'TXN-004', description: 'مشروع تطوير – مجموعة الفجر',  type: 'income',   amount: 8750,  date: '19 ديسمبر', status: 'pending',   category: 'مبيعات' },
  { id: 'TXN-005', description: 'حملة إعلانية – منصة X',       type: 'expense',  amount: -3200, date: '18 ديسمبر', status: 'completed', category: 'تسويق' },
  { id: 'TXN-006', description: 'اشتراك برمجيات SaaS',          type: 'expense',  amount: -890,  date: '17 ديسمبر', status: 'completed', category: 'بنية تحتية' },
  { id: 'TXN-007', description: 'عائد استثمار صندوق أ',         type: 'income',   amount: 5600,  date: '16 ديسمبر', status: 'completed', category: 'استثمار' },
  { id: 'TXN-008', description: 'تجديد عقد مكتب الرياض',       type: 'expense',  amount: -4500, date: '15 ديسمبر', status: 'failed',    category: 'عمليات' },
]

export const kpis = [
  { label: 'إجمالي الإيرادات', value: '٧٢٤,٠٠٠', unit: '$', change: +12.4, icon: 'TrendingUp',  color: 'indigo' },
  { label: 'صافي الأرباح',     value: '٢٩٨,٠٠٠', unit: '$', change: +8.7,  icon: 'DollarSign', color: 'emerald' },
  { label: 'هامش الربح',       value: '٤١.١',     unit: '%', change: +2.3,  icon: 'PieChart',   color: 'cyan' },
  { label: 'التدفق النقدي',    value: '١٣٦,٠٠٠', unit: '$', change: -3.1,  icon: 'Activity',   color: 'rose' },
]

export const healthMetrics = [
  { label: 'السيولة',        value: 78, color: '#6366f1' },
  { label: 'الربحية',        value: 65, color: '#10b981' },
  { label: 'كفاءة التكلفة',  value: 82, color: '#22d3ee' },
  { label: 'نمو الإيرادات',  value: 91, color: '#f59e0b' },
]

export const aiInsights = [
  { type: 'positive', text: 'الإيرادات في تصاعد مستمر للشهر الثالث على التوالي. يُتوقع تجاوز 90,000$ في يناير 2026.' },
  { type: 'warning',  text: 'مصاريف التسويق ارتفعت 18% مقارنة بالربع السابق. يُنصح بمراجعة الميزانية.' },
  { type: 'positive', text: 'هامش الربح تجاوز 40% للمرة الأولى — مؤشر قوي على الكفاءة التشغيلية.' },
  { type: 'info',     text: 'التدفق النقدي في الأسبوع الخامس كان الأعلى. يُقترح تكثيف النشاط في المنتصف الثاني من الشهر.' },
]
