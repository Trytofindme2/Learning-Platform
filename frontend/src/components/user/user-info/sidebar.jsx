import React, { useState } from 'react';
import { Link } from 'react-router';

const Sidebar = () => {
  const [active, setActive] = useState('Home');

  const menuItems = [
    { name: 'Edit Profile' , path : 'editProfile'},
    { name: 'Edit Password' , path : 'editPassword'},
    { name: 'Settings' , path : 'setting'},
  ];

 return (
    <div className="min-h-screen bg-white text-black flex border-1">
      <aside className="w-64 p-6 bg-white flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Setting</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setActive(item.name)}
                className={`
                  flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all
                  ${active === item.path
                    ? 'bg-gray-700 scale-105'
                    : 'hover:bg-gray-100 hover:scale-105'}
                `}
              >
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <p className="text-sm text-gray-400">© 2025 MyApp</p>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
