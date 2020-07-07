import React from 'react';

const Buttons = ({ grabJokes }) => {
  return (
    <div className='buttons'>
      <button onClick={() => grabJokes('Programming')}>Programming Joke</button>
      <button onClick={() => grabJokes('Miscellaneous')}>Misc Joke</button>
      <button onClick={() => grabJokes('Dark')}>Dark Joke</button>
    </div>
  );
}

export default Buttons;