var socre=75;
var msg='';
function congratulate(){
    msg+='Congratulations!';
}
if(socre>=50){
    congratulate();
    msg+='Proceed to the next round';
}
var el=document.getElementById('answer');
el.innerHTML=msg;