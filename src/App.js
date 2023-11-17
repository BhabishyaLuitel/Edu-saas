import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/') // Update this to your backend route
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? JSON.stringify(data) : 'Loading...'}
    </div>
  );
}

export default App;