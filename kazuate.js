let kotae = Math.floor(Math.random() * 10) + 1; // 正解（1〜10のランダム）
let kaisu = 1;

console.log("答え（デバッグ用）: " + kotae); // コンソールに正解出力

function hantei() {
  const yoso = parseInt(document.getElementById("yoso").value); // 入力値を整数で取得

  // 回数の表示更新
  document.getElementById("kaisu").textContent = kaisu;

  let resultMessage = "";
  let answerMessage = "";

  if (kaisu >= 4) {
    resultMessage = "答えは " + kotae + " でした。ゲームは終了です。";
  } else if (yoso === kotae) {
    answerMessage = "正解です！";
    kaisu = 4; // 正解したら強制終了扱いに
  } else if (yoso < kotae) {
    answerMessage = "まちがい。答えはもっと大きいよ";
  } else if (yoso > kotae) {
    answerMessage = "まちがい。答えはもっと小さいよ";
  }

  document.getElementById("answer").textContent = answerMessage;
  document.getElementById("result").textContent = resultMessage;

  kaisu++;
}
