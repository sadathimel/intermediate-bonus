import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


function App() {
  const [likeColor, setLikeColor] = useState('');
  // const handleLike = () => {
  //   // const color = likeColor ? '' : 'primary';
  //   // setLikeColor(likeColor ? "" : "primary");
  // }
  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={()=> setLikeColor(likeColor ? "" : "primary")} color={likeColor}></ThumbUpAltIcon>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
