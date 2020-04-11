function showTime() {
    let time = new Date();
    
    let hours = time.getHours();
    
    let minutes = time.getMinutes();
    
    let seconds = time.getSeconds();

    let am = hours > 12 ? 'pm' : 'am';

    hours = hours % 12 || 12; 
    
    let clock = document.querySelector('#clock');

    // if (hours < 10) {
    //     hours = '0' + hours;
    // }
    // if (minutes < 10) {
    //     minutes = '0' + minutes;
    // }
    // if (seconds < 10) {
    //     seconds = '0' + seconds;
    // }
    
    clock.innerHTML = `${doubleNumber(hours)}<span> : </span>
                    ${doubleNumber(minutes)}<span> : </span>
                    ${doubleNumber(seconds)} ${am}`;


    setInterval(showTime, 1000);
}

showTime();

function doubleNumber(n) {
    return n < 10 ? '0' + n : n;
}

