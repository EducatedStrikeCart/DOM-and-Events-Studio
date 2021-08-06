// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
    const buttonUp = document.getElementById("up");
    const buttonDown = document.getElementById("down");
    const buttonRight = document.getElementById("right");
    const buttonLeft = document.getElementById("left");
    const rocket = document.getElementById("rocket")
    const boxWidth = document.getElementById("shuttleBackground").offsetWidth

    //resets rocket position
    function resetPos() {
        rocket.style.bottom = "0px";
        rocket.style.left = "0px";
    }

    //Move Up
    buttonUp.addEventListener('click', function() {
        let position = rocket.style.bottom;
        if (position == "320pxpx") {
            return
        }
        rocket.style.bottom = parseInt(position) + 10 + "px";
        spaceShuttleHeight.innerText = parseInt(spaceShuttleHeight.innerText) + 10000;
    })

    //Move Down
    buttonDown.addEventListener('click', function() {
        let position = rocket.style.bottom;
        if (position == "0px") {
            return
        }
        rocket.style.bottom = parseInt(position) - 10 + "px";
        spaceShuttleHeight.innerText = parseInt(spaceShuttleHeight.innerText) - 10000;
    })

    //Move Left
    buttonLeft.addEventListener('click', function() {
        let position = rocket.style.left;
        if (position == "0px") {
            return
        }
        rocket.style.left = parseInt(position) - 10 + "px";
    })

    //Move Right
    buttonRight.addEventListener('click', function() {
        let position = rocket.style.left;
        if (parseInt(position) + 10 > boxWidth - 75) {
            return
        }
        rocket.style.left = parseInt(position) + 10 + "px";
    })
    

    const flightStatus = document.getElementById("flightStatus")
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    //Shuttle takes off
    const buttonTakeOff = document.getElementById("takeoff");
    buttonTakeOff.addEventListener('click', function () {
        liftOff = confirm("Confirm that the shuttle is ready for takeoff.");
        if (liftOff) {
            flightStatus.innerText = "Shuttle in flight";
            document.getElementById("shuttleBackground").style.background = "blue";
            spaceShuttleHeight.innerText= 10000;
        }
    })

    //Shuttle Lands
    const buttonLand = document.getElementById("landing");
    buttonLand.addEventListener('click', function() {
        window.alert( "The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.background = "green";
        spaceShuttleHeight.innerText = 0;
        resetPos()
    })

    //Abort mission
    const buttonAbortMission = document.getElementById("missionAbort");
    buttonAbortMission.addEventListener('click', function () {
        abort = confirm("Confirm that you want to abort the mission.");
        if (abort) {
            flightStatus.innerText = "Mission aborted";
            document.getElementById("shuttleBackground").style.background = "green";
            spaceShuttleHeight.innerText= 0;
            resetPos()
        }
    })

})