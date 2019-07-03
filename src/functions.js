const healthConditions = [
  {
    issue: 'allergies',
    costIncrease: 0.01
  },
  {
    issue: 'sleep apnea',
    costIncrease: 0.06
  },
  {
    issue: 'heart disease',
    costIncrease: 0.17
  },
  {
    issue: 'none',
    costIncrease: 0.0

  }
]

function ageValidator(age) {
  let minAge = 18;
  if (age < minAge) {
    return 'This insurance policy is not available for those under 18 at this time.'

  }

  let ageDifference = age - minAge
  let multiplier = Math.floor(ageDifference / 5);
  return multiplier;
}


function baseByTwenty(fiveYears) {
  let base = 100;
  // need to account for when you don't pass anything in
  if (fiveYears) {
    let additionalCost = fiveYears * 20;
    return base + additionalCost;
  }
  return base;
}

function returnCostIncrease(newCost, healthCondition) {
  // you were passing in the wrong parameters. The first parameter was the cost '100' 
  // and the second parameter is the condition like 'none'
  let conditionPercent = healthConditions.filter(condition => condition.issue === healthCondition);
  let costFactor = conditionPercent[0].costIncrease //the pure factor percentage 
  let conditionBasePercentage = costFactor * newCost;
  let estimatedQuote = newCost + conditionBasePercentage
  return estimatedQuote;

}

function femaleDiscount(newEstimatedQuote) {
  let femDiscount = 12;
  let femaleFinalDiscount = newEstimatedQuote - femDiscount;
  return (femaleFinalDiscount).toFixed(2)
}

module.exports = {
  ageValidator,
  baseByTwenty,
  returnCostIncrease,
  femaleDiscount
}
