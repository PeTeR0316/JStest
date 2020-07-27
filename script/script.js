function popup() {
    document.getElementById("layer").style.display = "block";
}

function closePopuo() {
    document.getElementById("layer").style.display = "none";
}

function multiTab1() {
    document.getElementById("noticeTab").style.backgroundColor = "#b0dce5";
    document.getElementById("imageTab").style.backgroundColor = "#eee";
    document.getElementById("content").style.display = "block";
    document.getElementById("imgContent").style.display = "none";
}

function multiTab2() {
    document.getElementById("imageTab").style.backgroundColor = "#b0dce5";
    document.getElementById("noticeTab").style.backgroundColor = "#eee";
    document.getElementById("imgContent").style.display = "block";
    document.getElementById("content").style.display = "none";
}

function fnFocus() {
     document.getElementById("imageTab").style.borderBottom = "none";
}
