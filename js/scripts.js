var hamState = false;
var hamMenu = document.getElementById("hamMenuList");
function hamOpenClose() {
    if (hamState === false) {
        document.getElementById("hamLine1").className = "hamLine1Opening";
        document.getElementById("hamLine2").className = "hamLine2Opening";
        document.getElementById("hamLine3").className = "hamLine3Opening";
        hamMenu.className = "hamMenuVisible";
        hamState = true;
    } else {
        document.getElementById("hamLine1").className = "hamLine1Closing";
        document.getElementById("hamLine2").className = "hamLine2Closing";
        document.getElementById("hamLine3").className = "hamLine3Closing";
        hamMenu.className = "hamMenuHidden";
        hamState = false;
    }
}