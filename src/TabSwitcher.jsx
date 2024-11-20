import React, { useState } from 'react';

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
      <div>
        <button
            onClick={() => setActiveTab('tab1')}
            style={{ background: activeTab === 'tab1' ? '#ddd' : '#fff' }}
        >
          Tab 1
        </button>
        <button
            onClick={() => setActiveTab('tab2')}
            style={{ background: activeTab === 'tab2' ? '#ddd' : '#fff' }}
        >
          Tab 2
        </button>

        <div style={{ marginTop: '20px' }}>
          {activeTab === 'tab1' && <p>Content for Tab 1</p>}
          {activeTab === 'tab2' && <p>Content for Tab 2</p>}
        </div>
      </div>
  );
};

export default TabSwitcher;
