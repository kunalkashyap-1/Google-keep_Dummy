import React from 'react';

function Time() {
  const [time, setTime] = React.useState(new Date());

  setInterval(() => {
    setTime(new Date())
  }, 1000);

  return (<div>
    <h1>{time.toLocaleTimeString()}</h1>
  </div>);
}

export default Time;