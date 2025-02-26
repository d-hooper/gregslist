import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";


export class HousesController {

  constructor() {
    console.log('Ready to control you domicile! 🏠🎮');
    
    AppState.on('houses', this.drawHouses)

    this.drawHouses()
  }



  drawHouses() {
    const houses = AppState.houses
    let houseListingsContent = ''

    houses.forEach(house => houseListingsContent += house.cardHTMLTemplate)
    const houseListingsElem = document.getElementById('houseListings')
    houseListingsElem.innerHTML = houseListingsContent
  }


  createHouseListing() {
    event.preventDefault()
    const houseFormElem = event.target

    const houseData = getFormData(houseFormElem)
    console.log('form', houseData);

    housesService.createHouse(houseData)
  }
  
  deleteHouseListing(houseId) {

  }
}