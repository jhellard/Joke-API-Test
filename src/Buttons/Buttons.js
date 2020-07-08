import React from 'react';

const Buttons = ({ grabJokes }) => {
  return (
    <div className='buttons'>
      <button onClick={() => grabJokes('general')}>General Joke</button>
      <button onClick={() => grabJokes('programming')}>Programming Joke</button>
    </div>
  );
}

export default Buttons;