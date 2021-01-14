import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (planArr) => {
  for (let i = 0; i < planArr.length; i++) {

    for (let j = 0; j < planArr[i].length; j++) {
      switch(planArr[i][j]) {
        case "Asparagus": 
          addPlant(createAsparagus());
          break;
        case "Corn":
          let cornArr = createCorn();
          addPlant(cornArr[0]);
          addPlant(cornArr[1]);
          break;
        case "Potato":
          addPlant(createPotato());
          break;
        case "Soybean":
          addPlant(createSoybean());
          break;
        case "Sunflower":
          addPlant(createSunflower());
          break;
        case "Wheat":
          addPlant(createWheat());
          break;
      }
    }
  }
}