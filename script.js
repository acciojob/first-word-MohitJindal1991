function firstWord(s) {
  // your code here
	s=s.trim();
	let lastIndex=undefined;
	for(let i=0;i<s.length;i++){
		if(s[i]==" "){
			lastIndex=i;
			break;
		}
	}
	if(lastIndex=="undefined"){
		lastIndex=s.length;
	}
	return s.substring(0,lastIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
