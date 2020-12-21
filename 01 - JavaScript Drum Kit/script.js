const sound = {
  a: "clap",
  s: "hihat",
  d: "kick",
  f: "openhat",
  g: "boom",
  h: "ride",
  j: "snare",
  k: "tom",
  l: "tink",
};

document.addEventListener("keypress", function (e) {
  if (e.key in sound) {
    const fileName = `sounds/${sound[e.key]}.wav`;
    const audio = new Audio(fileName);
    audio.play();
    document.querySelector(`#${e.key}`).classList.add("playing");

    // Method 1: setTimeout function
    // setTimeout(function () {
    //   document.querySelector(`#${e.key}`).classList.remove("playing");
    // }, 10);

    //Method 2: add a transitionend event listener
    document.addEventListener("transitionend", () => {
      document.querySelector(`#${e.key}`).classList.remove("playing");
    });
  }
});
