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
    fetch('https://official-joke-api.appspot.com/jokes/' + type + '/random')
      .then(response => response.json())
      .then(response => this.setState({ joke: response[0], isPending: false }))
  }

  render() {
    const { joke, isPending } = this.state;
    console.log(joke);

    return <div className='wrapper'>
      {
        isPending ?
          <>
            <h1>
              <Typewriter
                options={{
                  wrapperClassName: 'choose',
                  cursorClassName: 'flicker span',
                  strings: 'Choose your joke...',
                  autoStart: true,
                }}
              />
            </h1>
            <Buttons grabJokes={this.grabJokes} />
          </> : !joke.joke ?
            (
              <>
                <h1 className='joke'>{joke.setup}</h1>
                <Typewriter
                  options={{
                    wrapperClassName: 'span',
                    cursorClassName: 'flicker span',
                    strings: joke.punchline,
                    autoStart: true,
                  }}
                />
                <Buttons grabJokes={this.grabJokes} />
              </>
            ) : (
              <>
                <h1 className='joke'>{joke.joke}</h1>
                <Buttons grabJokes={this.grabJokes} />
              </>
            )
      }
      <p className='footer'>Made by: <a href='https://github.com/JHellard'>Joshua Hellard</a></p>
    </div>
  }
}

export default App;