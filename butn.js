console.log("hello javascript");

let light = true;

function blub() {
  console.log(light, "true");

  if (light) {
    document.getElementById("full").src = "./imgs/1.png";
    document.getElementById("swich").src = "./imgs/on.png";
    light = false;
  } else {
    console.log(light, "false");

    document.getElementById("full").src = "./imgs/0.png";
    document.getElementById("swich").src = "./imgs/off.png";
    light = true;
  }
}
