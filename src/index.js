import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ProfileCard from './App';

function Main(){
  return(
    <ProfileCard/>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Main());



