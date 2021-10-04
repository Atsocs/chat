import './App.css';
import Landing from './components/landingpage/Landing';
import Body from './components/chat/Body';
import React from 'react';

class App extends React.Component {
  componentDidMount() {
    document.title = "Chat App"
  }

  render() {
    return (
      <div className="App">
        <Landing initialPage={'chat'} />
      </div>
    );
  }
}

export default App;
