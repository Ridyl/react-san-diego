import { useState, useEffect } from 'react';
import axios from 'axios';
import TopSpots from '/src/TopSpots';
import './App.css';


function App() {
  // state for topspots array
  const [topspots, setTopspots] = useState([]);

  // fetches top spot API, takes data from response and calls setTopspots() to update the data of array
  useEffect(() => {
    axios
      .get('https://ccc.helloworldbox.com/items/top_spots')
      .then((response) => {
        setTopspots(response.data.data);
      })
  }, []);

  return (
    <>
      {/* Header container */}
      <div className="container" id='header'>
        <h1 className='pb-2 mt-4 mb-2 border-bottom'>San Diego Top Spots</h1>
        <p>A list of the top 30 places to see in San Diego, California.</p>
      </div>

      {/* maps each topspot within the array and sends object to TopSpots.jsx */}
      <div className='container' data-testid='topspots' id='topspots'>
        {topspots.map(topspot => (
            <TopSpots key={topspot.id} spots={[topspot]}/>
        ))}
      </div>
    </>
  );
}

export default App
