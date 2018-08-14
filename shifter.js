var knob = document.getElementById('knob');

knob.style.left = '35px';
knob.style.top = '50px';

var currentGear = 1;

var gears = {
    1: { left: 35, top: 50, neutral: 'left-neutral', pair: 2 },
    2: { left: 35, top: 200, neutral: 'left-neutral', pair: 1 },
    3: { left: 125, top: 50, neutral: 'center-neutral', pair: 4 },
    4: { left: 125, top: 200, neutral: 'center-neutral', pair: 3 },
    5: { left: 215, top: 50, neutral: 'right-neutral', pair: 'reverse' },
    reverse: { left: 215, top: 200, neutral: 'right-neutral', pair: 5 },
    'left-neutral': { left: 35, top: 125 },
    'center-neutral': { left: 125, top: 125 },
    'right-neutral': { left: 215, top: 125 },
}

var shift = function(gear) {
    if (currentGear === gear) { return; }

    if (currentGear == gears[gear]['pair']) {
        knob.style.top = gears[gear]['top'] + 'px';
    } else {
        knob.style.top = gears[gears[gear]['neutral']]['top'] + 'px';

        window.setTimeout(function() {
            knob.style.left = gears[gear]['left'] + 'px';
            
            window.setTimeout(function() {
                knob.style.top = gears[gear]['top'] + 'px';
            }, 600);
        }, 1000);
    }

    currentGear = gear;

    knob.classList = gears[gear]['class'];   
}

console.log(knob);

document.onkeyup = function(e) {
    switch(e.which) {
        case 49:
            shift(1);
            break;
        case 50:
            shift(2);
            break;
        case 51:
            shift(3);
            break;
        case 52:
            shift(4);
            break;
        case 53:
            shift(5);
            break;
        case 82:
            shift('reverse');
            break;
    }
}