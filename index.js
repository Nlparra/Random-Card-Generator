const getRamdom = r => {
  return Math.floor(Math.random() * r);
};let icons = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
let num = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];window.onload = function() {
	let iramdom, n;
	iramdom=getRamdom(icons.length-1);
	console.log(iramdom);
    let classicons = document.getElementsByClassName("icon");
	//console.log(classicons);
	for(i in classicons){			
	classicons[i].innerHTML=icons[iramdom];
		//console.log(classicons[i]);
		if(iramdom===2||iramdom===3){
			classicons[i].style.color = "red";
			console.log(classicons[i]);
		}
	}		
    document.getElementById("number").innerHTML=num[getRamdom(num.length-1)];
};




    
    