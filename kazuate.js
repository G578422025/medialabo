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

  const kaisuText = document.getElementById("kaisu").textContent;
  document.getElementById("answer").textContent = kaisuText + "回目の予想: " + yoso;

  document.getElementById("result").textContent = resultMessage;

  kaisu++;
}
