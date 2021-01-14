export const harvestPlants = (plantsArr) => {

  let harvestArr = []
  for (let i = 0; i < plantsArr.length; i++) {

    if (plantsArr[i].type != "Corn") {
      for (let j = 0; j < plantsArr[i].output; j++) {
        harvestArr.push(plantsArr[i])
      }
    } else if (plantsArr[i].type === "Corn") {
      for (let j = 0; j < plantsArr[i].output/2; j++) {
        harvestArr.push(plantsArr[i])
      }
    }
  }
  return harvestArr
}