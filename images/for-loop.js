var scores=[24,32,17];
var arryLength=socres.length;
var roundNumber=0;
var msg='';
for (var i=0;i<arryLength;i++){
    roundNumber=(i+1);
    msg+='Round'+roundNumber +':';
    msg+=socres[i]+'<br/>';
}
document.getElementById('answer').innerHTML=msg;