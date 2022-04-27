console.log(navigator);

if (navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
}

function failure(){
    console.log('could not connect MIDI');
    /*back on my fake typing grind
    i know for a fact he cant read what i'm typing
    for sure*/
}

function updateDevices(event){
    console.log(event);
}

function success(midiAccess){
    console.log(midiAccess);
    midiAccess.addEventListener('statechange', updateDevices)

    const inputs = midiAccess.inputs;
    //console.log(inputs);

    inputs.forEach((input) => {
        console.log(input);
        input.addEventListener('midimessage', handleInput);
    })
}

function handleInput(input){
    console.log(input);

    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];
    console.log(command);
    console.log(note);
    console.log(velocity);

    switch(command) {
        case 144:
        if (velocity > 0){
            noteOn(note);
        } 
        else {
            noteOff(note);
        }
        break;
    }
}



function noteOn(note){
    console.log(`note:${note} //on`);
    if (note == 99){
        console.log(document.getElementById("testelm").innerHTML = "Note 99 is On")
    }

}


function noteOff(note){
    console.log(`note:${note} //off`);
    if (note == 99){
        console.log(document.getElementById("testelm").innerHTML = "Back to Normal")
    }

}
