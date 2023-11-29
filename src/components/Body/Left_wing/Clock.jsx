// src/Clock.js
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="mx-auto h-217 w-87 border border-solid border-blue-500 p-4">
      <h1>{formattedTime}</h1>
    </div>
  );
};

export default Clock;
