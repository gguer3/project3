console.log(navigator);

/*function setGradient(c1, c2, c3, c4, c5) {
    $('body').style.background = "linear-gradient(to right, " + c1 + ", " + c2 + ", " + c3 + ", " + c4 + ", " + c5 + ")";
    css.textContent = $('body').style.background + ";";
} */

function getValue(cc) {
    const settings = {
        async: true,
        crossDomain: true,
        url: `https://shazam-core.p.rapidapi.com/v1/charts/country?country_code=${cc}&limit=10`,
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
            "X-RapidAPI-Key": "2b9fa24191msh57704c74e98ca14p11e7b5jsn1ec9e00fc125"
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        clrlist = response[0].images.joecolor
        color1 = "#" + clrlist.substr(2,6)
        //localStorage.setItem("Color1", color1);
        color2 = "#" + clrlist.substr(10,6)
        //localStorage.setItem("Color2", color2);
        color3 = "#" + clrlist.substr(18,6)
        //localStorage.setItem("Color3", color3);
        color4 = "#" + clrlist.substr(26,6)
        //localStorage.setItem("Color4", color4);
        color5 = "#" + clrlist.substr(34,6)
        //localStorage.setItem("Color5", color5);
        //setGradient(color1, color2, color3, color4, color5)
        song = response[0].title
        artist = response[0].subtitle
        document.getElementById("songlabel").innerHTML = song
        document.getElementById("artistlabel").innerHTML = artist
    });
}

if (navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
}

function failure(){
    console.log('could not connect MIDI');
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
        document.getElementById("country").innerHTML = "This is Germany"
        getValue('DE')
    }
    if (note == 98){
        document.getElementById("country").innerHTML = "This is Portugal"
        getValue('PT')
    }
    if (note == 97){
        document.getElementById("country").innerHTML = "This is Denmark"
        getValue('DK')
    }
    if (note == 96){
        document.getElementById("country").innerHTML = "This is Croatia"
        getValue('HR')
    }
    if (note == 67){
        document.getElementById("country").innerHTML = "This is Ukraine"
        getValue('UA')
    }
    if (note == 66){
        document.getElementById("country").innerHTML = "This is Hungary"
        getValue('HU')
    }
    if (note == 65){
        document.getElementById("country").innerHTML = "This is Morocco"
        getValue('MA')
    }
    if (note == 64){
        document.getElementById("country").innerHTML = "This is Indonesia"
        getValue('ID')
    }
    if (note == 95){
        document.getElementById("country").innerHTML = "This is Ireland"
        getValue('IE')
    }
    if (note == 94){
        document.getElementById("country").innerHTML = "This is United States"
        getValue('US')
    }
    if (note == 93){
        document.getElementById("country").innerHTML = "This is Egypt"
        getValue('EG')
    }
    if (note == 92){
        document.getElementById("country").innerHTML = "This is Israel"
        getValue('IL')
    }
    if (note == 63){
        document.getElementById("country").innerHTML = "This is Uruguay"
        getValue('UY')
    }
    if (note == 62){
        document.getElementById("country").innerHTML = "This is India"
        getValue('IN')
    }
    if (note == 61){
        document.getElementById("country").innerHTML = "This is South Africa"
        getValue('ZA')
    }
    if (note == 60){
        document.getElementById("country").innerHTML = "This is Italy"
        getValue('IT')
    }
    if (note == 91){
        document.getElementById("country").innerHTML = "This is Mexico"
        getValue('MX')
    }
    if (note == 90){
        document.getElementById("country").innerHTML = "This is Malaysia"
        getValue('MY')
    }
    if (note == 89){
        document.getElementById("country").innerHTML = "This is Spain"
        getValue('ES')
    }
    if (note == 88){
        document.getElementById("country").innerHTML = "This is Venezuela"
        getValue('VE')
    }
    if (note == 59){
        document.getElementById("country").innerHTML = "This is Argentina"
        getValue('AR')
    }
    if (note == 58){
        document.getElementById("country").innerHTML = "This is Austria"
        getValue('AT')
    }
    if (note == 57){
        document.getElementById("country").innerHTML = "This is Australia"
        getValue('AU')
    }
    if (note == 56){
        document.getElementById("country").innerHTML = "This is Romania"
        getValue('RO')
    }
    if (note == 87){
        document.getElementById("country").innerHTML = "This is Netherlands"
        getValue('NL')
    }
    if (note == 86){
        document.getElementById("country").innerHTML = "This is Norway"
        getValue('NO')
    }
    if (note == 85){
        document.getElementById("country").innerHTML = "This is Russia"
        getValue('RU')
    }
    if (note == 84){
        document.getElementById("country").innerHTML = "This is Belgium"
        getValue('BE')
    }
    if (note == 55){
        document.getElementById("country").innerHTML = "This is Finland"
        getValue('FI')
    }
    if (note == 54){
        document.getElementById("country").innerHTML = "This is Bangladesh"
        getValue('BG')
    }
    if (note == 53){
        document.getElementById("country").innerHTML = "This is Japan"
        getValue('JP')
    }
    if (note == 52){
        document.getElementById("country").innerHTML = "This is France"
        getValue('FR')
    }
    if (note == 83){
        document.getElementById("country").innerHTML = "This is New Zealand"
        getValue('NZ')
    }
    if (note == 82){
        document.getElementById("country").innerHTML = "This is Saudi Arabia"
        getValue('SA')
    }
    if (note == 81){
        document.getElementById("country").innerHTML = "This is Brazil"
        getValue('Br')
    }
    if (note == 80){
        document.getElementById("country").innerHTML = "This is Sweden"
        getValue('SE')
    }
    if (note == 51){
        document.getElementById("country").innerHTML = "This is Singapore"
        getValue('SG')
    }
    if (note == 50){
        document.getElementById("country").innerHTML = "This is United Kingdom"
        getValue('GB')
    }
    if (note == 49){
        document.getElementById("country").innerHTML = "This is Cananda"
        getValue('CA')
    }
    if (note == 48){
        document.getElementById("country").innerHTML = "This is Bulgaria"
        getValue('BY')
    }
    if (note == 79){
        document.getElementById("country").innerHTML = "This is Switzerland"
        getValue('CH')
    }
    if (note == 78){
        document.getElementById("country").innerHTML = "This is South Korea"
        getValue('KR')
    }
    if (note == 77){
        document.getElementById("country").innerHTML = "This is Chile"
        getValue('CL')
    }
    if (note == 76){
        document.getElementById("country").innerHTML = "This is Greece"
        getValue('GR')
    }
    if (note == 47){
        document.getElementById("country").innerHTML = "This is China"
        getValue('CN')
    }
    if (note == 46){
        document.getElementById("country").innerHTML = "This is Colombia"
        getValue('CO')
    }
    if (note == 45){
        document.getElementById("country").innerHTML = "This is Kazakhstan"
        getValue('KZ')
    }
    if (note == 44){
        document.getElementById("country").innerHTML = "This is Costa Rica"
        getValue('CR')
    }
    if (note == 75){
        document.getElementById("country").innerHTML = "This is Thailand"
        getValue('TH')
    }
    if (note == 74){
        document.getElementById("country").innerHTML = "This is Peru"
        getValue('PE')
    }
    if (note == 73){
        document.getElementById("country").innerHTML = "This is Czech Republic"
        getValue('CZ')
    }
    if (note == 72){
        document.getElementById("country").innerHTML = "This is Poland"
        getValue('PL')
    }
    if (note == 43){
        document.getElementById("country").innerHTML = "This is Turkey"
        getValue('TR')
    }
    
}


function noteOff(note){
    console.log(`note:${note} //off`);
}

