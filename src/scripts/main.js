import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

console.log("Welcome to the main module")

const yearlyPlan = createPlan()
console.log(yearlyPlan)

plantSeeds(yearlyPlan)

console.log(usePlants())

console.log(harvestPlants(usePlants()))

catalog(usePlants())