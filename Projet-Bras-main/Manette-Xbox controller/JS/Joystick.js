import Color from "color";
import { clamp, mean } from "lodash";
import * as React from "react";
import { colors } from "../widgets";

let max = 1;

let w = 157;

const Wrap = styled.div`
  position: relative;
  height: ${w}px;
  width: ${w}px;
  display: inline-block;
  border: 10px solid rgba(0, 0, 0, 0);
`;

let bucketSize = Math.PI / 16;

export function JoystickDebugger({
    point,
    showCircularity,
}: {
    point: { x: number; y: number };
    showCircularity: boolean;
}) {
    const points = React.useRef < { x: number; y: number }[] > ([]);
    const circularityAngles = React.useRef < Record < number, number>> ({});

    const circularityScore = Math.sqrt(
        mean(
            Object.values(circularityAngles.current).map((v) => Math.pow(1 - v, 2)),
        ),
    );

    React.useEffect(() => {
        points.current.push(point);
        if (points.current.length > max) {
            points.current.shift();
        }

        let len = Math.sqrt(point.x * point.x + point.y * point.y);
        if (len > 0.2) {
            let theta = Math.atan2(point.y, point.x);
            let thetaRounded = Math.round(theta / bucketSize) * bucketSize;
            if (thetaRounded === -Math.PI) thetaRounded = Math.PI;
            circularityAngles.current[thetaRounded] ||= 0;
            circularityAngles.current[thetaRounded] = Math.max(
                circularityAngles.current[thetaRounded],
                len,
            );
        }
    }, [point]);