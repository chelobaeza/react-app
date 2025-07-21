import React from 'react';

interface TabProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => (
  <button
    className={`px-4 py-2 font-medium rounded-t transition-colors duration-200 ${active ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'bg-gray-100 text-gray-600'}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Tab;
