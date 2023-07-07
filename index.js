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
  

  


  const searchCarModel = () => {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const models = document.querySelectorAll(".model");
  
    models.forEach((model) => {
      const name = model.querySelector("h3").innerText.toLowerCase();
      const description = model.querySelector("p").innerText.toLowerCase();
  
      if (name.includes(searchInput) || description.includes(searchInput)) {
        model.style.display = "block"; // Show the model if it matches the search
      } else {
        model.style.display = "none"; // Hide the model if it doesn't match the search
      }
    });
  };
  
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", searchCarModel);
  