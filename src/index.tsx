import React, { useState } from 'react';

const AudioDefault = (props: any) => {
  const { value } = props;
  const [counter, setCounter] = useState(0);

  const setCounterUp = () => setCounter(counter + value);

  return (
    <div style={{ padding: 20 }}>
      {counter}
      <button onClick={setCounterUp} style={{ marginLeft: 15 }}>
        Like!! +{value}
      </button>
    </div>
  );
};

export default AudioDefault;
