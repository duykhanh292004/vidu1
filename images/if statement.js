var socre =75;
var msg;
if(socre>=50){
    msg='Congratulations!';
    msg+'Proceed to the next round';
}
var el=document.getElementById('answer');
el.textContent=msg;