/*
 * Code a ButtonPopup component
 * that pops up an alert when clicked
*/


export default function ButtonPopup() {
    const popup = () => {
        alert('This popup is handled through React')
    }

    return (
        <button onClick={popup}>Click Me</button>
    )
}