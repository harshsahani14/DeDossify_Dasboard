import React from 'react'

const Mitigation = () => {
  return (
    <div className="space-y-6">
    <h1 className="text-3xl font-semibold">Mitigation Strategies</h1>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Available Strategies</h2>
      <ul className="space-y-4">
        <li className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h3 className="font-semibold">Traffic Filtering</h3>
            <p className="text-sm text-gray-600">Filter out malicious traffic based on predefined rules</p>
          </div>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Deploy
          </button>
        </li>
        <li className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h3 className="font-semibold">Rate Limiting</h3>
            <p className="text-sm text-gray-600">Limit the number of requests from a single IP</p>
          </div>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Deploy
          </button>
        </li>
      </ul>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Custom Mitigation Rule</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Rule Name</label>
          <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Enter rule name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Rule Conditions</label>
          <textarea className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" rows="3" placeholder="Enter rule conditions"></textarea>
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Create Rule
        </button>
      </form>
    </div>
  </div>
  )
}

export default Mitigation
