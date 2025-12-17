import React, { useState } from 'react';
import { SplitLanding } from './components/SplitLanding';
import { RestaurantView } from './components/RestaurantView';
import { LAZY_PANDA_DATA, GRILL_EMPIRE_DATA, FRUITZILLA_DATA } from './constants';
import { RestaurantData } from './types';

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<'lazyPanda' | 'grillEmpire' | 'fruitzilla' | null>(null);

  const getRestaurantData = (id: 'lazyPanda' | 'grillEmpire' | 'fruitzilla'): RestaurantData => {
    switch (id) {
      case 'lazyPanda':
        return LAZY_PANDA_DATA;
      case 'grillEmpire':
        return GRILL_EMPIRE_DATA;
      case 'fruitzilla':
        return FRUITZILLA_DATA;
    }
  };

  const handleSelect = (id: 'lazyPanda' | 'grillEmpire' | 'fruitzilla') => {
    setSelectedId(id);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedId(null);
  };

  return (
    <div className="font-sans antialiased">
      {!selectedId ? (
        <SplitLanding onSelect={handleSelect} />
      ) : (
        <RestaurantView 
          data={getRestaurantData(selectedId)} 
          onBack={handleBack} 
        />
      )}
    </div>
  );
};

export default App;