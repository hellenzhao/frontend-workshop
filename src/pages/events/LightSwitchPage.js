import LightSwitch from "../../exercises/LightSwitch.js"


export default function LightSwitchPage() {
    window.navigation.addEventListener("navigate", (e) => {
        document.body.style.backgroundColor = 'white'
    })

    return (
        <>
        <h1>Events Exercise 2: Light Switch</h1>
        <p>
            Description:
            Clicking this button is supposed to switch the page background between white and black.
            <br/>
            However, nothing happens when you click it.
            <br/>
            Fix the problem.
            (Don't worry about the logic inside handleClick—that part is fine.)
        </p>
        <LightSwitch/>
        </>
    )
}