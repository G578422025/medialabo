document.getElementById("calc").addEventListener("click", function () {
  const left = parseInt(document.getElementById("left").value);
  const right = parseInt(document.getElementById("right").value);

  if (isNaN(left) || isNaN(right)) {
    document.getElementById("answer").textContent = "数値を入力してください";
  } else {
    const result = left + right;
    document.getElementById("answer").textContent = result; 
  }
});
