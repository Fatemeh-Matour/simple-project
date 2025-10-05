document.getElementById("outputs").style.visibility = "hidden";
document.getElementById("lblInput").addEventListener("keyup", function (e) {
  document.getElementById("outputs").style.visibility = "visible";
  var lbl = e.target.value;

  document.getElementById("MiliMetrOutPut").innerHTML = lbl * 1000;
  document.getElementById("SantiMetrOutPut").innerHTML = lbl * 100;
  document.getElementById("KiloMetrOutPut").innerHTML = lbl / 1000;
});
