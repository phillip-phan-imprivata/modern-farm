let growingPlants = []

export const addPlant = (seed) => {
  growingPlants.push(seed)
}

export const usePlants = () => {
  return growingPlants
}