import React from 'react'
import { FiAlertCircle, FiBarChart2, FiShield, FiRefreshCw, FiSettings, FiMenu, FiBell, FiUser } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Overview = ({attackData}) => {
  return (
    <div className="space-y-6">
    <h1 className="text-3xl font-semibold">DDoS Attack Overview</h1>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Attack Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={attackData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="attacks" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Active Threats</h3>
        <p className="text-3xl font-bold text-red-500">3</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Mitigated Attacks</h3>
        <p className="text-3xl font-bold text-green-500">27</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">System Health</h3>
        <p className="text-3xl font-bold text-blue-500">98%</p>
      </div>
    </div>
  </div>
  )
}

export default Overview
