import React from 'react'

const Recovery = () => {
  return (
    <div className="space-y-6">
    <h1 className="text-3xl font-semibold">Attack Detection</h1>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
      <ul className="space-y-4">
        <li className="flex items-center justify-between bg-red-100 p-4 rounded-lg">
          <div>
            <h3 className="font-semibold">High-Volume UDP Flood Detected</h3>
            <p className="text-sm text-gray-600">Target IP: 192.168.1.100</p>
          </div>
          <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">Critical</span>
        </li>
        <li className="flex items-center justify-between bg-yellow-100 p-4 rounded-lg">
          <div>
            <h3 className="font-semibold">Potential SYN Flood Attack</h3>
            <p className="text-sm text-gray-600">Target IP: 192.168.1.105</p>
          </div>
          <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">Warning</span>
        </li>
      </ul>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Alert Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Notification Method</label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>Email</option>
            <option>SMS</option>
            <option>In-app Notification</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Alert Threshold</label>
          <input type="number" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Enter threshold value" />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save Settings
        </button>
      </form>
    </div>
  </div>
  )
}

export default Recovery
