## Car Connect
  by Ian Ndung'u
  
This repository contains the code for Car Connect, a web application that allows users to search and hire cars. It provides a user-friendly interface for searching cars based on their model or description.
## Author
Author: Ian Ndung'u
Email: ianndungu06@gmail.com


## Table of Contents
Technologies Used
Installation
Usage
Contributing
License
## Technologies Used
-HTML5
CSS3
JavaScript
FontAwesome (version 6.4.0)
## Installation
To use the Car Connect web application, follow these steps:

1.Clone this repository to your local machine or server.
2.Open the index.html file in a web browser.

## Usage
View Car Information:

The cars function displays car information, including the image, make, model, year, color, availability, and the number of times it has been rented.
The car information is fetched from a server using the fetchData function and displayed on the webpage.
Hire a Car:

Each car displayed on the webpage has a "Hire" button.
Clicking the "Hire" button updates the rented count for that car and sends a PUT or PATCH request to the server to update the rented count in the database.
The rented count displayed on the webpage is updated accordingly.
Search for a Car:

Enter a car make in the search input field.
Click the "Search" button to search for the car.
The SearchingCar function fetches the car data from the server based on the provided make.
The showing function displays the searched car's image in the webpage.

## License
The Car Rental System code is available under the MIT License. Feel free to modify and use it for your own projects.
