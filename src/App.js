import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import Buttons from './Buttons/Buttons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: [],
      isPending: true
    };
  }

  grabJokes = (type) => {
    fetch('https://sv443.net/jokeapi/v2/joke/' + type)
      .then(response => response.json())
      .then(response => this.setState({ joke: response, isPending: false }))
  }

  render() {
    const { joke, isPending } = this.state;

    return <div className='wrapper'>
      {
        isPending ?
          <div>
            <h1 className='joke'>Choose your joke...</h1>
            <Buttons grabJokes={this.grabJokes} />
          </div> : !joke.joke ?
            (
              <div>
                <h1 className='joke'>{joke.setup}</h1>
                <Typewriter
                  options={{
                    wrapperClassName: 'span',
                    cursorClassName: 'flicker span',
                    strings: joke.delivery,
                    autoStart: true,
                  }}
                />
                <Buttons grabJokes={this.grabJokes} />
              </div>
            ) : (
              <div>
                <h1 className='joke'>{joke.joke}</h1>
                <Buttons grabJokes={this.grabJokes} />
              </div>
            )
      }
      <p className='footer'>Made by: <a href='https://github.com/JHellard'>Joshua Hellard</a></p>
    </div>
  }
}

export default App;