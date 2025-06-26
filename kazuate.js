let kotae = Math.floor(Math.random() * 10) + 1; // 正解（1〜10）
let kaisu = 1;

console.log("答え（デバッグ用）: " + kotae);

function hantei() {
  const yoso = parseInt(document.getElementById("yoso").value);

  // 回数表示を更新
  document.getElementById("kaisu").textContent = kaisu;

  let resultMessage = "";

  if (kaisu >= 4) {
    resultMessage = "答えは " + kotae + " でした。ゲームは終了です。";
  } else if (yoso === kotae) {
    resultMessage = "正解です！";
    kaisu = 4; // 正解したらゲーム終了
  } else if (yoso < kotae) {
    resultMessage = "まちがい。答えはもっと大きいよ";
  } else if (yoso > kotae) {
    resultMessage = "まちがい。答えはもっと小さいよ";
  }

  const kaisuText = document.getElementById("kaisu").textContent;
  document.getElementById("answer").textContent = kaisuText + "回目の予想: " + yoso;

  // 結果メッセージを表示
  document.getElementById("result").textContent = resultMessage;

  kaisu++;
}
