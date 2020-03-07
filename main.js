let icon = ["&spades", "&clubs","&hearts","&diams"]
let numbers = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"]


pickRandomIndexNumber = (array) => {
 return Math.floor(Math.random()* array.lenght)+1;
}

console.log(icon[pickRandomIndexNumber(icon)]);


// randomSentence = () => {
//      return `My ${who[pickRandomIndexNumber(who)]} ${what[pickRandomIndexNumber(what)]} my scientific report ${when[pickRandomIndexNumber(when)]}`;
}


