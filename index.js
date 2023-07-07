// Function to display car information and create HTML elements
const cars = (rent) => {
    var Hire = document.createElement("div"); // Create a new div element
    Hire.innerHTML = `
      <img src="${rent.image}">
      <h2>${rent.make}</h2>
      <p>${rent.model}</p>  
      <p>${rent.year}</p>
      <p>${rent.color}</p>
      <p>${rent.available}</p>
      <p class="hire">Cars hired: ${rent.rented}</p>
      <button class="hire-button">Hire</button>`;
    document.querySelector(".div2").appendChild(Hire); // Append the newly created div element to an existing element with class "div2"
  
    // Added an event listener to the "hire" button
    Hire.querySelector(".hire-button").addEventListener("click", () => {
      rent.rented += 1; // Increment the rented count
      Hire.querySelector(".hire").textContent = `Cars hired: ${rent.rented}`; // Update the rented count displayed on the page
  
      // Send a PUT or PATCH request to update the rented count in the db.json file
      fetch(`http://localhost:3000/cars/${rent.id}`, {
        method: "PUT", // or "PATCH" if your server supports partial updates
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rent),
      })
        .then((resp) => resp.json())
        .then((updatedRent) => {
          console.log("Rent updated:", updatedRent);
        })
        .catch((error) => {
          console.error("Error updating rent:", error);
        });
    });
  };
  
  // Function to fetch car data from a server
  const fetchData = () => {
    // Fetch car data from the server
    fetch("http://localhost:3000/cars")
      .then((resp) => resp.json())
      .then((rent) => rent.forEach((rent) => cars(rent)));
  };
  
  fetchData(); // Call the fetchData function to fetch and display car data
  

  
let make
let id
const searching=document.querySelector("#searchButton")
searching.addEventListener("click", ()=>{
  make=document.querySelector("input").value;
  
  if(make === "Camry"){
    id=1
  }else if(make === "Accord"){
    id=2
  }else if(make === "Legacy"){
    id=3
  }else if(make === "Celicia"){
    id=4
  }else if(make === "Polo Vivo"){
    id=5
  }else if(make === "Sport"){
    id=6
  }else if(make == "BMW"){
    id=7
  }
  SearchingCar()
  clear()
})
  
function showing(elementChosen){
  const container=document.createElement("div")
  container.className="box-car"
  container.innerHTML=`
  <img src="${elementChosen.image}">
  `
  document.querySelector(".div2").appendChild(container)
}

function clear(){
const container=document.querySelector(".div2")
container.innerHTML=" "
}


const SearchingCar=()=>{
  fetch(`http://localhost:3000/cars/${id}`)
  .then((res)=>{
    res.json()
    .then((cars)=>showing(cars))
  })
}
