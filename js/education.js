var tabl=document.getElementById("en").getElementsByTagName("tbody")[0];
if(localStorage.getItem("tdattt")===null)
{
  localStorage.setItem("tdattt",tabl.innerHTML);
}
else{
tabl.innerHTML=localStorage.getItem("tdattt");
}
function func()
{
    var naam=document.getElementById("nme");
    var khoobi=document.getElementById("skil");
    var tajurba=document.getElementById("lev");
    var vakya=document.getElementById("cmnt")
    var nr=tabl.insertRow(-1);
    var c1=nr.insertCell(0);
    var c2=nr.insertCell(1);
    var c3=nr.insertCell(2);
    var c4=nr.insertCell(3);
    c1.innerHTML=naam.value;
    naam.value="";
    c1.className="yo";
    c2.innerHTML=khoobi.value;
    khoobi.value="";
    c2.className="yo";
    c3.innerHTML=tajurba.value;
    tajurba.value="beginner";
    c3.className="yo";
    c4.innerHTML=vakya.value;
    vakya.value="";
    c4.className="yo";
    localStorage.removeItem("tdattt")
    localStorage.setItem("tdattt",tabl.innerHTML);
}
mybutton = document.getElementById("myBtn");
function topFunction() {
  document.documentElement.scrollTop = 0;
}
