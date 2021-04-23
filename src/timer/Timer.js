import { useState, useEffect } from 'react';
import './Timer.css'

const Timer=({setHide})=>{
    const startingTime=60;
    const [time, setTime]=useState(startingTime);

    // Begins the countdown and reveals the text/content for the list items.
    const playGame=()=>{
        setTime(time-1);
        setHide(false);
    }

    // The function passed into the useEffect hook runs whenever the value for Time is updated.  (This includes when the page first loads)
    useEffect(()=>{
        // The code inside this if statement will not run when the value of the "time" state variable is equal to the amount of time set as the starting amount for the countdown timer.
        if(time!==startingTime){
            // Since useEffect runs every time that "time" state value is updated, a setTimeout is used to delay the number change by one second each time it changes.
            setTimeout(()=>{
                // Checking to make sure time has not expired.
                if(time>0){
                    // Updating the value for the "time" state variable, re-rendering the component and triggering the UseEffect function..
                    setTime(time-1);
                }
                // Code inside the "else" will run when the time has expired
                else{
                    // Hides the list item text/content by adding the "hide" CSS class to all of them by adding the CSS class to all of them.
                    setHide(true);
                    // Updating the value for the "time" state  variable by setting it back to the value for "startingTime" which causes the "timer" component to re-render and also caues the "useEffect" function to run
                    setTime(startingTime);
                    // Alert is inside another setTimeout so that it will not run/display before the text/content is hidden for the categories.
                    setTimeout(()=>{
                        alert("Time is up.");
                        // After the alert is complete, the categories/list items are shown again.
                        setHide(false);
                    }, 100);
                }
            },1000);
        }
    }, [time]);


    return(
        <div className='Timer'>
            <div className='Timer-Top'>
                <p>TIMER</p>
                <button onClick={playGame} className="Timer-Top-Btn">PLAY</button>
            </div>
            <div className='Timer-Display'>
                <h1 className='Timer-Display-H1'>{time}</h1>
            </div>
        </div>
    );
}

export default Timer;