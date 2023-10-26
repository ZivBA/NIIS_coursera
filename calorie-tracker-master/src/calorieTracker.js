const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
	let weightLostInAMonth = 0;
   	
	// validate inputs are all >= 0
	if (
		cycling <= 0 ||
		running <= 0 ||
		swimming <=0 ||
		extraCalorieInTake <= 0
	) { return -1 }
	else {
		// arguments provide calory value for 30 minutes
		// total calory value for 1hr per wk per month is 'val * 4 * 2'
		let totCycling = cycling*4*2
		let totRunning = running*4*2
		let totSwimming = swimming*4*2

		// assume 30 days per month, extra calories = extraCal * 30
		let totExtraCal = extraCalorieInTake * 30

		let totCaloriesBurned = totExtraCal - (totCycling+totRunning+totSwimming)

		weightLostInAMonth = -1 * totCaloriesBurned / 1000
	}

	

   return weightLostInAMonth;
   
}

module.exports = calculateWeightLostInAMonth

