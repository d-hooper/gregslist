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

  get cardHTMLTemplate() {
    return `
  <div class="col-12">
    <h2>Houses</h2>
    <div class="shadow d-flex">
      <div class="flex-grow-1 p-3">
        <div class="d-flex justify-content-between fs-4 fw-bold">
          <p>Built in 1989</p>
          <p>$275,000</p>
        </div>
        <div class="fs-5">
          <ul>
            <li>3 bedrooms</li>
            <li>2.5 bedrooms</li>
            <li>1,400 square ft.</li>
            <li>Newly renovated mid-century modern home</li>
          </ul>
        </div>
        <div class="pt-3 px-4">
        <button class="btn btn-outline-danger" type="button">Delete house</button>
      </div>
      </div>
    <img class="house-img" src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   alt="">

    </div>
  </div>
  `
  }



}