import { generateId } from "../utils/GenerateId.js"


export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get formattedPrice() {
    const currency = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(this.price)
    
    return currency
  }

  get cardHTMLTemplate() {
    return `
  <div class="col-12">
    <div class="shadow d-flex my-3">
      <div class="flex-grow-1 p-3">
        <div class="d-flex justify-content-between fs-4 fw-bold">
          <p>Built in ${this.year}</p>
          <p>${this.formattedPrice}</p>
        </div>
        <div class="fs-5">
          <ul>
            <li>${this.bedrooms} bedrooms</li>
            <li>${this.bathrooms} bathrooms</li>
            <li>${this.sqft.toLocaleString('en-US')} square ft.</li>
            <li>${this.description}</li>
          </ul>
        </div>
        <div class="pt-3 px-4">
        <button class="btn btn-outline-danger" type="button">Delete house</button>
      </div>
      </div>
    <img class="house-img" src="${this.imgUrl}"   alt="${this.description}">

    </div>
  </div>
  `
  }



}