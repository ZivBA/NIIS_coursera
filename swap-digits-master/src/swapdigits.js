const swapDigits = (number)=>{
    let swappedNumber = 0
    //write logic here
    	let strNumber = number.toString();
	let finalNumber=""
	let startPos=0
	if (strNumber[0] == '-'){
		return 0;
		//finalNumber= finalNumber+'-'
		//strNumber = strNumber.slice(1)
		//console.log('negative number: ',number, strNumber,finalNumber)
	}
	if (strNumber.length%2==1){
		finalNumber = finalNumber+strNumber[0]
		strNumber = strNumber.slice(1)
	}
	while(strNumber.length>0){
		finalNumber = finalNumber + strNumber[1] + strNumber[0]
		strNumber = strNumber.slice(2)
	}
	//for (let i=startPos; i<strNumber.length-1; i++){
	//	finalNumber= finalNumber+strNumber[i+1]
	//	finalNumber= finalNumber+strNumber[i]
	//	i+=2
	//	console.log(number, strNumber,finalNumber)
	//}
	swappedNumber = parseInt(finalNumber)
    return swappedNumber;
    
}

module.exports = swapDigits
