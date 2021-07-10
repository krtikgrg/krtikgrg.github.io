var a=document.getElementById("nav");
window.onscroll=function(){myFunc()};
var sticky=a.offsetTop;
function myFunc()
{
    if(window.pageYOffset>=sticky){
        a.classList.add("sticky");
    }
    else{
        a.classList.remove("sticky");
    }
} 