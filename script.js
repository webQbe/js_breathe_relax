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

