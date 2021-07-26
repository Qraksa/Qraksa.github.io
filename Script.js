var ClickedTimes = 1;
var displayvar = "block"
var displayvar2 = "none"

function showDiv() {

    ClickedTimes += 1;
    if (ClickedTimes % 2 != 0){
        displayvar = "none"
        displayvar2 = "block"
        document.getElementsByClassName('HamburgerBackground')[0].style.display = displayvar;
        document.getElementsByClassName('HamburgerBackground2')[0].style.display = displayvar2;
        setTimeout(HideDiv, 900);
        
    }
    else{
        displayvar2 = "none"
        displayvar = "block"
        document.getElementsByClassName('HamburgerBackground')[0].style.display = displayvar;
        document.getElementsByClassName('HamburgerBackground2')[0].style.display = displayvar2;
    }

    
 }
function HideDiv() {
    document.getElementsByClassName('HamburgerBackground2')[0].style.display = "none";
    displayvar2 = "none"
}