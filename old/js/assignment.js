var arr=["../img/lpage1.jpg","../img/lpage2.jpg","../img/lpage3.jpg","../img/lpage4.jpg","../img/lpage5.jpg"];
var count=0;
function chngbg()
{
    count=(count+1)%5;
    var x=document.getElementById("bdy");
    x.src=arr[count];
}
