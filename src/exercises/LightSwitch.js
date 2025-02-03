/*
 * Clicking the button is supposed to switch the page background
 * but nothing happens.
 * Fix the problem.
 * (hint: the logic inside handleClick is fine--look elsewhere!)
*/

export default function LightSwitch() {
    function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black') {
        bodyStyle.backgroundColor = 'white';
      } else {
        bodyStyle.backgroundColor = 'black';
      }
    }
  
    return (
      <button onClick={handleClick}>
        Toggle the lights
      </button>
    );
}

  