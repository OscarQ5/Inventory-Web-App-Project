const inputElement = document.querySelectorAll("input");
const desiredWidth = "150px"
inputElement.forEach(input => input.style.width = desiredWidth)


const carList = () => {
    const carInventory = [
        { name: "Nissan GT-R", price: 139999, inStock: true, color: "Red", year: 2023, fuelType: "Gasoline", imageUrl: "https://www.claycooleynissan.com/assets/shared/CustomHTMLFiles/Responsive/ColorSelect/Nissan/2023/GT-R/Exterior/Solid-Red/angle3.png" },
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
        stockElement.textContent = car.inStock ? "In Stock" : "Out of Stock";
        stockElement.addEventListener("click", () => {
            car.inStock = !car.inStock;
            stockElement.textContent = car.inStock ? "In Stock" : "Out of Stock";
        });
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

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            carListContainer.removeChild(carItem);
        });

        carItem.appendChild(removeButton);

        carListContainer.appendChild(carItem);
    });
}
carList();

const form = document.getElementById("add-form");
const carListContainer = document.getElementById("car-list");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById("car-name");
    const priceInput = document.getElementById("car-price");
    const stockInput = document.getElementById("car-instock");
    const colorInput = document.getElementById("car-color");
    const yearInput = document.getElementById("car-year");
    const fuelTypeInput = document.getElementById("car-fuel-type");
    const imageInput = document.getElementById("url")

    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    const stock = stockInput.value;
    const color = colorInput.value;
    const year = parseFloat(yearInput.value);
    const fuel = fuelTypeInput.value;
    const imgUrl = imageInput.value;

    const errors = [];
    if (name.length < 3) {
        errors.push("Name should be at least 3 characters long");
    }
    if (isNaN(price) || price <= 0) {
        errors.push("Price should be larger than 0");
    }
    if (stock === "-- Select --") {
        errors.push("Please select the stock status");
    }
    if (isNaN(year) || year <= 0) {
        errors.push("Please enter car year");
    }
    if (color === "") {
        errors.push("Please enter car color") 
    } 
    if (fuel === "") {
        errors.push("Please enter fuel type")
    }

    const errorContainer = document.getElementById("error-container");
    errorContainer.innerHTML = "";

    if (errors.length > 0) {
        errors.forEach((error) => {
            const errorElement = document.createElement("p");
            errorElement.textContent = error;
            errorContainer.appendChild(errorElement);
        });
    } else {
        const newResource = {
            name: name,
            price: price,
            inStock: stock,
            color: color,
            year: year,
            fuelType: fuel,
            imageUrl: imgUrl,
        };

        carListContainer.prepend(createResourceElement(newResource));

        form.reset();
    }
}

function createResourceElement(resource) {
    const carItem = document.createElement("div");
    carItem.classList.add("car-item");

    const imageElement = document.createElement("img");
    imageElement.style.width = "200px";
    imageElement.style.height = "100px";
    imageElement.src = resource.imageUrl || "/Users/oscarquintanilla/Git/Module 2/Inventory_Web_App_Project/assets/car-blk:wht-photo.jpeg";
    carItem.appendChild(imageElement);

    const nameElement = document.createElement("h3");
    nameElement.textContent = resource.name;
    carItem.appendChild(nameElement);

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: $${(resource.price).toFixed(2)}`;
    carItem.appendChild(priceElement);

    const stockElement = document.createElement("p");
    stockElement.textContent = resource.inStock ? "In Stock" : "Out of Stock";
    stockElement.addEventListener("click", () => {
        resource.inStock = !resource.inStock;
        stockElement.textContent = resource.inStock ? "In Stock" : "Out of Stock";
    });
    carItem.appendChild(stockElement);

    const colorElement = document.createElement("p");
    colorElement.textContent = `Color: ${resource.color}`;
    carItem.appendChild(colorElement);

    const yearElement = document.createElement("p");
    yearElement.textContent = `Year: ${resource.year}`;
    carItem.appendChild(yearElement);

    const fuelElement = document.createElement("p");
    fuelElement.textContent = `Fuel Type: ${resource.fuelType}`;
    carItem.appendChild(fuelElement);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        carListContainer.removeChild(carItem);
    });

    carItem.appendChild(removeButton);

    return carItem;
};