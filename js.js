const c = document.querySelector(".cc");
const f = document.querySelector(".f");
const cheng = document.querySelector(".cheng");
const riset = document.querySelector(".riset");
const input = document.querySelector(".input");
const tabdil = document.querySelector(".tabdil");
const ga = document.querySelector(".ga");

let flag = false;
let cli;
let fili;

function chengf() {
  flag = !flag;
  input.value = "";
  ga.innerHTML = "";
  if (flag) {
    c.innerHTML = "°f";
    f.innerHTML = "°c";
    input.setAttribute('placeholder','°f')
  } else {
    f.innerHTML = "°f";
    c.innerHTML = "°c";
    input.setAttribute('placeholder','°c')

  }
}

function resetInput() {
  input.value = "";
  ga.innerHTML = "";
}

function cf() {
  const val = parseFloat(input.value);

  if (!isNaN(val)) {
    if (flag) {
      cli = ((val - 32) * 5) / 9;
      ga.innerHTML = cli.toFixed(2) + " °C";
    } else {
      fili = (val * 9) / 5 + 32;
      ga.innerHTML = fili.toFixed(2) + " °F";
    }
  } else {
    ga.innerHTML = "لطفاً عدد وارد کنید!";
  }
}
