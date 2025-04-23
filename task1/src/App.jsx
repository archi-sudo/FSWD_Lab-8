import React from 'react';
import ProfileCard from './ProfileCard';
import photo1 from './assets/react.svg';

function App() {
  return (
    <div className="App">
      <ProfileCard
        name="Nandit Kalaria"
        photo={photo1}
        bio="Frontend developer and a student of Information Technology"
      />
    </div>
  );
}

export default App;