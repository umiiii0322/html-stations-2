function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if (check.checked == true) {
    document.getElementById('text').style.backgroundColor = "red";
  } else {
    document.getElementById('text').style.backgroundColor = "transparent";
  }
}