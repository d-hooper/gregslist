import { AppState } from "../AppState.js";


export class HousesController {

  constructor() {
    console.log('Ready to control you domicile! 🏠🎮');
    
    this.drawHouses()
  }



  drawHouses() {
    const houses = AppState.houses
    let houseListingsContent = ''

    houses.forEach(house => houseListingsContent += house.cardHTMLTemplate)
    const houseListingsElem = document.getElementById('houseListings')
    houseListingsElem.innerHTML = houseListingsContent
  }

}