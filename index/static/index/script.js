const SignUpBtnn = document.getElementById("SignUpBtn");
const Sinu = document.getElementsByClassName("sign-up-form")[0];




SignUpBtnn.addEventListener("click",()=>{
    const SingUpReq = document.getElementsByClassName("sign-up-form ")[0].querySelectorAll("[required='']");
    var flag = 0;
    SingUpReq.forEach(Req=>{
        if (Req.value == "") {
            flag = 1;
        }
    });
    if (flag == 0) {
        myfunction();
    }
});



//donot refresh
$(document).ready(function () {
    // Listen to submit event on the <form> itself!
    $('.form').submit(function (e) {
  
      // Prevent form submission which refreshes page
      e.preventDefault();
    });
  });

function sideMenu(side) {
    var menu = document.getElementById('side-menu');
    if(side==0) {
      menu.style = 'transform: translateX(0vh); position:fixed;';
    }
    else {
      menu.style = 'transform: translateX(-100%);';
    }
    side++;
  }