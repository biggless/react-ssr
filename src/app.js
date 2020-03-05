import React, { useState } from 'react';

export default () => {
  const [msg, setMsg] = useState('hello world');
  const reverse = () => setMsg(msg.split('').reverse().join(''));
  return (
    <>
      <h1>{msg}</h1>
      <button onClick={reverse}>click me</button>
    </>
  );
};
