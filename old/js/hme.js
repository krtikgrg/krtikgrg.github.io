var a=document.getElementById("grtwrk");
var one="1";
if(localStorage.getItem("ctrkgrg")===null)
{
    localStorage.setItem("ctrkgrg",one);
    a.innerHTML="you have made 1 visit to this page";
}
else
{
    var x=localStorage.getItem("ctrkgrg");
    var b=parseInt(x);
    b++;
    x=b.toString();
    localStorage.removeItem("ctrkgrg");
    localStorage.setItem("ctrkgrg",x);
    a.innerHTML="you have made "+x+" visits to this page";
}
