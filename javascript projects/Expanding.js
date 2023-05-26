
let one = document.getElementById("one")
let two = document.getElementById("two")
let third = document.getElementById("third")
let four = document.getElementById("four")
let onePara = document.querySelector("#onep");
let twoPara = document.querySelector("#twop");
let thirdPara = document.querySelector("#thirdp");
let fourPara = document.querySelector("#fourp");

one.addEventListener("click",function(){
    one.style.width="68%";
    two.style.width="10%";
    third.style.width="10%";
    four.style.width="10%";
    onePara.style.display="block";
    twoPara.style.display="none";
    thirdPara.style.display="none";
    fourPara.style.display="none";
});

two.addEventListener("click",function(){
    two.style.width="68%";
    one.style.width="10%";
    third.style.width="10%";
    four.style.width="10%";
    twoPara.style.display="block";
    onePara.style.display="none";
    thirdPara.style.display="none";
    fourPara.style.display="none";
});

third.addEventListener("click",function(){
   third.style.width="68%";
    one.style.width="10%";
    two.style.width="10%";
    four.style.width="10%";
    thirdPara.style.display="block";
    twoPara.style.display="none";
    onePara.style.display="none";
    fourPara.style.display="none";
});
four.addEventListener("click",function(){
    four.style.width="68%";
     one.style.width="10%";
     two.style.width="10%";
     third.style.width="10%";
     fourPara.style.display="block";
     twoPara.style.display="none";
    thirdPara.style.display="none";
    onePara.style.display="none";
 });