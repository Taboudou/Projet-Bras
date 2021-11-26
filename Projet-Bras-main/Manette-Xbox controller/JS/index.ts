export function recordStats(gamepad: Gamepad) {
    // we need to make a shallow/partial clone of the gamepad object so that JSON.stringify can actually work on it
    var shallowClone = {
        id: gamepad.id,
        index: gamepad.index,
        axes: gamepad.axes,
        buttons: gamepad.buttons,
        mapping: gamepad.mapping,
        connected: gamepad.connected,
        timestamp: gamepad.timestamp,

        vibrationActuator: !!gamepad.vibrationActuator,
        displayId: (gamepad as any).displayId,
        pose: !!gamepad.pose,
        hapticActuators: !!gamepad.hapticActuators,
        hand: !!gamepad.hand,
    };

    var data = {
        gamepad: shallowClone,
    };

    axios.post(API_ENDPOINT + "postGamepad", data);
}