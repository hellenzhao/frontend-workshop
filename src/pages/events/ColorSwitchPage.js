import { useState } from 'react';
import ColorSwitch from "../../exercises/ColorSwitch.js"

export default function ColorSwitchPage() {
  const [clicks, setClicks] = useState(0);

  function handleClickOutside() {
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
    console.log(getRandomLightColor())
  }

  return (
    <>
    <h1>Events Exercise 3: Color Switch</h1>

    <p>
      Description: 
      This ColorSwitch component renders a button. It's supposed
      to change the page color.
      <br/>
      Wire it up to the onChangeColor
      event handler prop it receives from the parent so that
      clicking the button changes the color.
      
      <br/><br/>

      After you do this, notice that clicking the button also 
      increments the page click counter.
      <br/>
      Your colleague who wrote the parent component insists
      that onChangeColor does not increment any counters.
      <br/>
      What else might be happening? 
      Fix it so that clicking the button only changes the color,
      and does not increment the counter.
    </p>

    <div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
      <ColorSwitch onChangeColor={handleChangeColor} />
      <br />
      <h3>Clicks nearby: {clicks}</h3>
      <br/><br/><br/>
    </div>
    </> 
  )
}
