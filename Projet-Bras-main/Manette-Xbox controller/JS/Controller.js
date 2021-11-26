import * as React from "react";
import { buttonValue } from "./gamepadUtils";

//to make this easier to mock up, only require certain fields we care about
export type GamepadArtSubset = Pick<Gamepad, "axes" | "buttons">;

export function StandardGamepad({
    gamepad,
    width,
}: {
    gamepad: GamepadArtSubset;
    width?: number;
}) {
    const lightStroke = 0.2;
    const lStickAmt = Math.max(
        0,
        -0.2 +
        1.2 *
        Math.sqrt(Math.pow(gamepad.axes[0], 2) + Math.pow(gamepad.axes[1], 2)),
    );
    const rStickAmt = Math.max(
        0,
        -0.2 +
        1.2 *
        Math.sqrt(Math.pow(gamepad.axes[2], 2) + Math.pow(gamepad.axes[3], 2)),
    );