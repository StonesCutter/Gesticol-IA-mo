import * as fp from "fingerpose";

function gestures() {
  // fist gesture
  const rockGesture = new fp.GestureDescription("rock");
  rockGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
  rockGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
  rockGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
  rockGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
  rockGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

  // exactly gesture
  const exactlyGesture = new fp.GestureDescription("exactly");
  exactlyGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
  exactlyGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
  exactlyGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
  exactlyGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
  exactlyGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);

  exactlyGesture.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.HorizontalRight,
    1.0
  );

  // curse gesture
  const curseGesture = new fp.GestureDescription("curse");
  curseGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
  curseGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
  curseGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
  curseGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
  curseGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);

  // wtf gesture
  const wtfGesture = new fp.GestureDescription("wtf");
  wtfGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
  wtfGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
  wtfGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
  wtfGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
  wtfGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);

  // nothing gesture
  const nothingGesture = new fp.GestureDescription("nothing");

  nothingGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
  nothingGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
  nothingGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.fullCurl, 1.0);
  nothingGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.fullCurl, 1.0);

  // go gesture
  const goGesture = new fp.GestureDescription("go");
  // goGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
  goGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
  goGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
  goGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
  goGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);

  // aummaumm gesture
  const aummaummGesture = new fp.GestureDescription("aummaumm");
  aummaummGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
  aummaummGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
  aummaummGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
  aummaummGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
  aummaummGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);

  const spaghettiGesture = new fp.GestureDescription("spaghetti");
  spaghettiGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
  spaghettiGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
  spaghettiGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
  spaghettiGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
  spaghettiGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

  const smartGesture = new fp.GestureDescription("smart");
  smartGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
  smartGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
  smartGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
  smartGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
  smartGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

  // crazyGesture.addDirection(
  //   fp.Finger.Index,
  //   fp.FingerDirection.VerticalUp,
  //   1.0
  // );
  // crazyGesture.addDirection(
  //   fp.Finger.Middle,
  //   fp.FingerDirection.VerticalUp,
  //   1.0
  // );
  // crazyGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
  // crazyGesture.addDirection(
  //   fp.Finger.Pinky,
  //   fp.FingerDirection.VerticalUp,
  //   1.0
  // );

  // aummaummGesture.addDirection(
  //   fp.Finger.Thumb,
  //   fp.FingerDirection.VerticalDown,
  //   1.0
  // );
  // aummaummGesture.addDirection(
  //   fp.Finger.Index,
  //   fp.FingerDirection.VerticalDown,
  //   1.0
  // );
  // aummaummGesture.addDirection(
  //   fp.Finger.Middle,
  //   fp.FingerDirection.VerticalDown,
  //   1.0
  // );
  // aummaummGesture.addDirection(
  //   fp.Finger.Ring,
  //   fp.FingerDirection.VerticalDown,
  //   1.0
  // );
  // aummaummGesture.addDirection(
  //   fp.Finger.Pinky,
  //   fp.FingerDirection.VerticalDown,
  //   1.0
  // );

  // adding gestures to an object
  let gestures = {
    rock: rockGesture,
    exactly: exactlyGesture,
    curse: curseGesture,
    wtf: wtfGesture,
    nothing: nothingGesture,
    aummaumm: aummaummGesture,
    go: goGesture,
    spaghetti: spaghettiGesture,
    smart: smartGesture,
  };

  return gestures;
}

export { gestures };
