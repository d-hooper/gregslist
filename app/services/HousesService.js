import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HousesService {
  
  createHouse(houseData) {
    const houses = AppState.houses
    const newHouse = new House(houseData)

    houses.push(newHouse)
    console.log('houses', houses);
    console.log('new house', newHouse.formattedPrice);
  }

}

export const housesService = new HousesService()