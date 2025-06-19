// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log("答え（デバッグ用）：" + kotae);

// 入力回数
let kaisu = 0;

// 判定関数
function hantei() {
    // 仮の予想（後にテキストボックスから取得する予定）
    let yoso = 4;

    // 回数と予想を出力
    console.log((kaisu + 1) + "回目の予想: " + yoso);

    // すでにゲームが終了しているかチェック
    if (kaisu >= 3) {
        console.log("答えは " + kotae + " でした。すでにゲームは終わっています");
        return;
    }

    // 正解
    if (yoso === kotae) {
        console.log("正解です。おめでとう！");
        kaisu = 3; 
    }
    // 不正解
    else {
        if (kaisu === 2) {
            console.log("まちがい。残念でした答えは " + kotae + " です。");
        } else if (yoso < kotae) {
            console.log("まちがい。答えはもっと大きいですよ");
        } else {
            console.log("まちがい。答えはもっと小さいですよ");
        }
        kaisu++; 
    }
}
