'use client';

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  AlertTriangle, 
  Shield, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Activity,
  Eye,
  Settings,
  RefreshCw,
  Calendar,
  Filter,
  LucideIcon
} from 'lucide-react';

// Type definitions
interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: string;
  color?: 'blue' | 'red' | 'green' | 'yellow';
}

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

// Data untuk dashboard anti-judi online
const gamblingOverTimeData = [
  { time: '00:00', gambling: 12, normal: 145, amount: 2400 },
  { time: '04:00', gambling: 8, normal: 89, amount: 1890 },
  { time: '08:00', gambling: 23, normal: 234, amount: 4500 },
  { time: '12:00', gambling: 35, normal: 456, amount: 7800 },
  { time: '16:00', gambling: 28, normal: 334, amount: 6200 },
  { time: '20:00', gambling: 19, normal: 267, amount: 4100 },
];

const transactionAmountData = [
  { range: 'Rp0-500K', count: 45, gambling: 3 },
  { range: 'Rp500K-2.5M', count: 78, gambling: 8 },
  { range: 'Rp2.5M-5M', count: 56, gambling: 12 },
  { range: 'Rp5M-25M', count: 34, gambling: 18 },
  { range: 'Rp25M+', count: 12, gambling: 9 },
];

const riskScoreData = [
  { name: 'Risiko Rendah', value: 65, color: '#10B981' },
  { name: 'Risiko Sedang', value: 25, color: '#F59E0B' },
  { name: 'Risiko Tinggi', value: 10, color: '#EF4444' },
];

const recentAlerts = [
  { id: 1, type: 'Transaksi Besar', amount: 'Rp75.000.000', time: '2 menit lalu', risk: 'high' },
  { id: 2, type: 'Waktu Tidak Wajar', amount: 'Rp11.500.000', time: '5 menit lalu', risk: 'medium' },
  { id: 3, type: 'Transaksi Berulang', amount: 'Rp4.450.000', time: '8 menit lalu', risk: 'high' },
  { id: 4, type: 'Pola Mencurigakan', amount: 'Rp22.500.000', time: '12 menit lalu', risk: 'medium' },
];

function StatCard({ title, value, subtitle, icon: Icon, trend, color = 'blue' }: StatCardProps) {
  const colorClasses: Record<StatCardProps['color'] & string, string> = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>
          )}
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      {trend && (
        <div className="mt-4 flex items-center">
          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-sm text-green-600">{trend}</span>
        </div>
      )}
    </div>
  );
}

function ChartCard({ title, children, className = '' }: ChartCardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default function AntiGamblingDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Anti-Judi Online</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                <Calendar className="w-4 h-4" />
                <span>24 Jam Terakhir</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <RefreshCw className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Kartu Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Transaksi"
            value="1.247"
            subtitle="24 jam terakhir"
            icon={Activity}
            trend="+12% dari kemarin"
            color="blue"
          />
          <StatCard
            title="Judi Terdeteksi"
            value="125"
            subtitle="10,02% tingkat judi"
            icon={AlertTriangle}
            trend="+5% dari kemarin"
            color="red"
          />
          <StatCard
            title="Jumlah Berisiko"
            value="Rp239.150.000"
            subtitle="Transaksi ditandai"
            icon={DollarSign}
            color="yellow"
          />
          <StatCard
            title="Waktu Respons"
            value="1,2 detik"
            subtitle="Rata-rata deteksi"
            icon={Clock}
            trend="-0,3 detik perbaikan"
            color="green"
          />
        </div>

        {/* Baris Chart 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartCard title="Deteksi Judi Online Sepanjang Waktu">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={gamblingOverTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #ccc',
                    borderRadius: '8px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="normal" 
                  stackId="1" 
                  stroke="#10B981" 
                  fill="#10B981" 
                  fillOpacity={0.7}
                />
                <Area 
                  type="monotone" 
                  dataKey="gambling" 
                  stackId="1" 
                  stroke="#EF4444" 
                  fill="#EF4444" 
                  fillOpacity={0.7}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Analisis Jumlah Transaksi">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={transactionAmountData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3B82F6" name="Total Transaksi" />
                <Bar dataKey="gambling" fill="#EF4444" name="Judi Online" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Baris Chart 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <ChartCard title="Distribusi Skor Risiko">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={riskScoreData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskScoreData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {riskScoreData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </ChartCard>

          <ChartCard title="Peringatan Judi Terbaru" className="lg:col-span-2">
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      alert.risk === 'high' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{alert.type}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Jumlah: {alert.amount}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{alert.time}</span>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>

        {/* Timeline Transaksi Detail */}
        <ChartCard title="Timeline Transaksi (Jumlah vs Waktu)">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={gamblingOverTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #ccc',
                  borderRadius: '8px'
                }}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="gambling" 
                stroke="#EF4444" 
                strokeWidth={3}
                dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                name="Jumlah Judi"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="amount" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 3 }}
                name="Jumlah Transaksi (Rp)"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
