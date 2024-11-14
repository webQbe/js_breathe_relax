// Globals
const totalTime = 7500; // milliseconds
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// Define DOM Elements
const container = document.querySelector('.container');
const text = document.querySelector('#text');

function breatheAnimation(){

    // Display Status
    text.innerHTML = 'Breath In!';

    // Add Class To Container
    container.className = 'container grow';

    // Update Status After breatheTime
    setTimeout(() => {

        text.innerHTML = 'Hold';

        // Update Status & 
        // Add Class to Container After holdTime
        setTimeout(() => {

            text.innerHTML = 'Breathe Out!';
            container.className = 'container shrink';

        }, holdTime);

    }, breatheTime);

}

// Run breatheAnimation() Every 7.5 seconds
setInterval(breatheAnimation, totalTime);

/* 
    breatheAnimation() is called every 7.5 Seconds
        1. Show 'Breath In!' & Set container class .grow for 3 seconds
        2. Change status to 'Hold!' for 1.5 seconds
        3. Change status to 'Breathe Out!' & Set container class .shrink  for 3 seconds

*/