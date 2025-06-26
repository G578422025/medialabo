function hantei() {
  const yoso = parseInt(document.getElementById("yoso").value);

  document.getElementById("kaisu").textContent = kaisu;

  let resultMessage = "";
  let answerMessage = "";

  if (kaisu >= 4) {
    resultMessage = "答えは " + kotae + " でした。ゲームは終了です。";
  } else if (yoso === kotae) {
    resultMessage = "正解です！";
    kaisu = 4;
  } else if (yoso < kotae) {
    resultMessage = "まちがい。答えはもっと大きいよ";
  } else if (yoso > kotae) {
    resultMessage = "まちがい。答えはもっと小さいよ";
  }

  
  document.getElementById("answer").textContent = kaisu + "回目の予想: " + yoso;

  document.getElementById("result").textContent = resultMessage;

  kaisu++;
}
