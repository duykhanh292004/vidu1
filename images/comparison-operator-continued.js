var socre1=90;
var score2=95;
var highSocre1=75;
var highSocre2=95;
var comparison=(socre1+score2)>(highSocre1+highSocre2);
var el = document.getElementById('answer');
el.textContent='New high score:'+comparison;