import React from 'react';
import PlayersList from './components/PlayersList'; // Import the PlayersList component

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center", margin:"3rem"}}>FIFA player cards</h1>
      <PlayersList /> {/* Render the PlayersList component */}
    </div>
  );
}

export default App;
