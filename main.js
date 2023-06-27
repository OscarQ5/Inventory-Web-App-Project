const inputElement = document.querySelectorAll("input");
const desiredWidth = "150px"
inputElement.forEach(input => input.style.width = desiredWidth)


 const carList = () => {
    const carInventory = [
        { name: "Nissan GT-R", price: 139999, inStock: true, color: "Red", year: 2023, fuelType: "Gasoline", imageUrl: "https://www.claycooleynissan.com/assets/shared/CustomHTMLFiles/Responsive/ColorSelect/Nissan/2023/GT-R/Exterior/Solid-Red/angle3.png"},
        { name: "Tesla Model 3", price: 49999, inStock: true, color: "White", year: 2022, fuelType: "Electric", imageUrl: "https://hips.hearstapps.com/hmg-prod/images/tesla-model-3-white-1565731697.jpg?crop=1.00xw:0.894xh;0,0.0455xh&resize=1200:*" },
        { name: "Rivian R1T", price: 74999, inStock: false, color: "Compass Yellow", year: 2023, fuelType: "Electric", imageUrl: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/ff8b3d8a-a492-4351-9a52-c7794e9cf348/76d447e6-c5a5-4392-a4a2-4278216770fa.png" }
      ];
    
      const carListContainer = document.getElementById("car-list");
    
      carInventory.forEach(car => {
        const carItem = document.createElement("div");
        carItem.classList.add("car-item");

        const imageElement = document.createElement("img");
        imageElement.style.width = "200px";
        imageElement.style.height = "100px";
        imageElement.src = car.imageUrl;
        carItem.appendChild(imageElement);
    
        const nameElement = document.createElement("h3");
        nameElement.textContent = car.name;
        carItem.appendChild(nameElement);
    
        const priceElement = document.createElement("p");
        priceElement.textContent = `Price: $${(car.price).toFixed(2)}`;
        carItem.appendChild(priceElement);
    
        const stockElement = document.createElement("p");
        stockElement.textContent = car.inStock ? "In Stock" : "Out Of Stock";
        carItem.appendChild(stockElement);
    
        const colorElement = document.createElement("p");
        colorElement.textContent = `Color: ${car.color}`;
        carItem.appendChild(colorElement);
    
        const yearElement = document.createElement("p");
        yearElement.textContent = `Year: ${car.year}`;
        carItem.appendChild(yearElement);
    
        const fuelElement = document.createElement("p");
        fuelElement.textContent = `Fuel Type: ${car.fuelType}`;
        carItem.appendChild(fuelElement);
        carListContainer.appendChild(carItem);
    });
 }
 carList();