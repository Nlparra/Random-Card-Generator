const getRamdom = r => {
	return Math.floor(Math.random() * r);
  };
  
  let icons = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let num = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  
  let iconsRamdom = () =>{
	  
	  let classicons = document.getElementsByClassName("icon");	
	  let iramdom=getRamdom(icons.length);
	  
	  for(i in classicons){			
	  classicons[i].innerHTML=icons[iramdom];
		  //console.log(classicons[i]);
		  if(iramdom===2||iramdom===3){
			  classicons[i].style.color = " red";
			  console.log(classicons[i]);
		  }
	  }
	  return;	
  }
  
  let numRamdoms = () =>{
	  
	  let n= getRamdom(num.length);	
	  document.getElementById("number").innerHTML=num[n];
	  
  }
  
  window.onload = () => {
	  numRamdoms();
	  iconsRamdom();	
  }



    
    