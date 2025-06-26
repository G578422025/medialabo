let kotae = Math.floor(Math.random() * 10) + 1;
let kaisu = 1;

console.log("答え（デバッグ用）: " + kotae);

function hantei() {
  const yoso = parseInt(document.getElementById("yoso").value);


  document.getElementById("kaisu").textContent = kaisu;

  let resultMessage = "";

  if (kaisu >= 4) {
    resultMessage = "答えは " + kotae + " でした。ゲームは終了です。";
  } else if (yoso === kotae) {
    resultMessage = "正解です！";
    kaisu = 4;
  } else if (yoso < kotae) {
    resultMessage = "まちがい。答えはもっと大きいよ";
  } else {
    resultMessage = "まちがい。答えはもっと小さいよ";
  }


  document.getElementById("answer").textContent = yoso;

  document.getElementById("result").textContent = resultMessage;

  kaisu++;
}
