// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let programs = data.list.g1;
  for (let prog of programs) {
    console.log("開始時刻: " + prog.start_time);
    console.log("終了時刻: " + prog.end_time);
    console.log("チャンネル: " + prog.service.name);
    console.log("番組名: " + prog.title);
    console.log("サブタイトル: " + prog.subtitle);
    console.log("説明: " + prog.content);
    console.log("出演者: " + prog.act);
    console.log("--------------------------");
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  const oldResult = document.getElementById("result");
  if (oldResult) {
    oldResult.remove();
  }

  const resultDiv = document.createElement("div");
  resultDiv.id = "result";
  document.getElementById("result-area").appendChild(resultDiv);

  let programs = data.list.g1;

  if (programs.length === 0) {
    resultDiv.innerHTML = "<p>該当する番組は見つかりませんでした。</p>";
    return;
  }

  for (let prog of programs) {
    const p = document.createElement("p");
    p.innerHTML = `
      <strong>番組名:</strong> ${prog.title}<br>
      <strong>開始時刻:</strong> ${prog.start_time}<br>
      <strong>終了時刻:</strong> ${prog.end_time}<br>
      <strong>チャンネル:</strong> ${prog.service.name}<br>
      <strong>サブタイトル:</strong> ${prog.subtitle || "なし"}<br>
      <strong>説明:</strong> ${prog.content || "なし"}<br>
      <strong>出演者:</strong> ${prog.act || "なし"}<br>
      <hr>
    `;
    resultDiv.appendChild(p);
  }
}

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  const ch = document.getElementById("channel").value; 
  const gen = document.getElementById("genre").value;  

  const url = `https://www.nishita-lab.org/web-contents/jsons/nhk/${ch}-${gen}-j.json`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("通信エラー：" + response.status);
      }
      return response.json();
    })
    .then(showResult)
    .catch(showError)
    .finally(finish);
}


// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  const ch = document.getElementById("channel").value;
  const gen = document.getElementById("genre").value;

  let data = resp;

  if (!data.list || !data.list[ch]) {
    alert("番組データが見つかりませんでした。");
    return;
  }

  const filtered = data.list[ch].filter(prog =>
    prog.genres && prog.genres.includes(gen)
  );

  printDom({ list: { g1: filtered } });
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
document.getElementById("search").addEventListener("click", sendRequest);
