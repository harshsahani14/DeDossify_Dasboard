import React from 'react'

const Recovery = () => {
  return (
    <div className="space-y-6">
    <h1 className="text-3xl font-semibold">Recovery Options</h1>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">System Health Check</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Network Status</span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">Healthy</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Server Load</span>
          <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">Moderate</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Database Connections</span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">Stable</span>
        </div>
      </div>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Backup and Restoration</h2>
      <div className="space-y-4">
        <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Create System Backup
        </button>
        <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Restore from Backup
        </button>
      </div>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Incident Reporting</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Incident Description</label>
          <textarea className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" rows="3" placeholder="Describe the incident"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Attachment</label>
          <input type="file" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit Report
        </button>
      </form>
    </div>
  </div>
  )
}

export default Recovery
