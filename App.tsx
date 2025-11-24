import React, { useState, useEffect } from 'react';
import SlopeApp from './components/SlopeApp';
import TimelineApp from './components/TimelineApp';

function App() {
  const [currentApp, setCurrentApp] = useState<'slope' | 'timeline'>('slope');

  // Always enforce dark mode for consistency
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#020617';
  }, []);

  return (
    <>
      {currentApp === 'slope' ? (
        <SlopeApp onSwitchApp={() => setCurrentApp('timeline')} />
      ) : (
        <TimelineApp onSwitchApp={() => setCurrentApp('slope')} />
      )}
    </>
  );
}

export default App;