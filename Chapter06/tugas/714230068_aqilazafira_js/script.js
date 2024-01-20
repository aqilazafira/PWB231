function text() {
  let x = randInt(800);
  let y = randInt(200);
  let z = randInt(20);
  let question = `Berapakah hasil dari ${x} + ${y} * ${z}?`;
  let answer = x + y * z;
  let usrInput = Number(prompt(question));
  if (usrInput == answer) {
    document.getElementById("changetext").innerHTML = "rubahan text";
    document.getElementById("programmer").src =
      "https://cdn-icons-png.flaticon.com/512/1995/1995515.png";
  }
}

function randInt(n) {
  return Math.floor(Math.random() * n);
}
