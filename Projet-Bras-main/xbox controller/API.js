function gamepadconnect{
const connected = gamepad.connected;
var gp = navigator.getGamepads()[0];
console.log(gp.connected);
}

const axes = gamepad.axes;
function gameLoop() {
    if (navigator.webkitGetGamepads) {
        var gp = navigator.webkitGetGamepads()[0];
    } else {
        var gp = navigator.getGamepads()[0];
    }

    if (gp.axes[0] != 0) {
        b -= gp.axes[0];
    } else if (gp.axes[1] != 0) {
        a += gp.axes[1];
    } else if (gp.axes[2] != 0) {
        b += gp.axes[2];
    } else if (gp.axes[3] != 0) {
        a -= gp.axes[3];
    }

    ball.style.left = a * 2 + "px";
    ball.style.top = b * 2 + "px";

    var start = rAF(gameLoop);
};
const buttons = gamepad.buttons;
function gameLoop() {
    if (navigator.webkitGetGamepads) {
        var gp = navigator.webkitGetGamepads()[0];

        if (gp.buttons[0] == 1) {
            b--;
        } else if (gp.buttons[1] == 1) {
            a++;
        } else if (gp.buttons[2] == 1) {
            b++;
        } else if (gp.buttons[3] == 1) {
            a--;
        }
    } else {
        var gp = navigator.getGamepads()[0];

        if (gp.buttons[0].value > 0 || gp.buttons[0].pressed == true) {
            b--;
        } else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed == true) {
            a++;
        } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed == true) {
            b++;
        } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed == true) {
            a--;
        }
    }

    ball.style.left = a * 2 + "px";
    ball.style.top = b * 2 + "px";

    var start = rAF(gameLoop);
};