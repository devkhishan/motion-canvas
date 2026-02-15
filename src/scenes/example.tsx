import { Circle, makeScene2D } from "@motion-canvas/2d";
import { all, createRef } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();

  view.add(
    <Circle ref={myCircle} x={0} width={140} height={140} fill="#e13238" />,
  );

  yield* all(
    myCircle().position.x(300, 2).to(-300, 2),
    myCircle().fill("#e6a700", 1).to("#e13238", 1),
  );
});
