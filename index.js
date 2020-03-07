const getRamdom = r => {
  return Math.floor(Math.random() * r);
};

let icons = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
let num = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

window.onload = function() {
    document.getElementById("icon").innerHTML=icons[getRamdom(icons.length)];
    document.getElementById("number").innerHTML=num[getRamdom(num.length)];
  
};




    
    