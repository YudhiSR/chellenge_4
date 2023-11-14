import Car from "./car"; // Adjust the import path as needed
import Binar from "./binar"; // Adjust the import path as needed
Car.init([]);
const cars = await Binar.listCars((car) => {
  console.log(car, "mobil nya");
  return true;
});

const carListContainer = document.getElementById("carList");

cars.forEach((car) => {
  const carHTML = car.render();
  const carElement = document.createElement("div");
  carElement.innerHTML = carHTML;
  carListContainer.appendChild(carElement);
});
