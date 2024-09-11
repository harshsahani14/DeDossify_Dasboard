import React, { useState, useEffect } from 'react';
import { FiAlertCircle, FiBarChart2, FiShield, FiRefreshCw, FiSettings, FiMenu, FiBell, FiUser } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Overview from './Overview';
import Mitigation from './Mitigation'
import Detection from './Detection';
import Recovery from './Recovery';

const DDoSDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('overview');
  const [attackData, setAttackData] = useState([]);

  useEffect(() => {
    // Simulating fetching attack data
    const fetchData = () => {
      const data = [
        { name: 'Jan', attacks: 400 },
        { name: 'Feb', attacks: 300 },
        { name: 'Mar', attacks: 500 },
        { name: 'Apr', attacks: 280 },
        { name: 'May', attacks: 590 },
        { name: 'Jun', attacks: 320 },
      ];
      setAttackData(data);
    };
    fetchData();
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const renderContent = () => {
    switch (currentView) {
      case 'overview':
        return <Overview attackData={attackData} />;
      case 'detection':
        return <Detection />;
      case 'mitigation':
        return <Mitigation />;
      case 'recovery':
        return <Recovery />;
      default:
        return <Overview attackData={attackData} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-blue-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
        <h2 className="text-2xl font-semibold text-center">DeDDOSify</h2>
        <nav>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white" onClick={() => setCurrentView('overview')}>
            <FiBarChart2 className="inline-block mr-2" /> Overview
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white" onClick={() => setCurrentView('detection')}>
            <FiAlertCircle className="inline-block mr-2" /> Attack Detection
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white" onClick={() => setCurrentView('mitigation')}>
            <FiShield className="inline-block mr-2" /> Mitigation Strategies
          </a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white" onClick={() => setCurrentView('recovery')}>
            <FiRefreshCw className="inline-block mr-2" /> Recovery Options
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <div className="flex items-center justify-between p-4">
            <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
              <FiMenu className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <FiBell className="h-6 w-6 text-gray-500 mr-4" />
              <FiUser className="h-6 w-6 text-gray-500" />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded h-[35px] w-[160px]"> Download report</button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};
export default DDoSDashboard;