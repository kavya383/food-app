// Define menus for each restaurant
const menus = {
  "Italian Bistro": [
    { name: "Margherita Pizza", price: 10, img: "images/margherita_pizza.jpg" },
    {
      name: "Spaghetti Carbonara",
      price: 12,
      img: "images/spaghetti_carbonara.jpg",
    },
    { name: "Tiramisu", price: 6, img: "images/tiramisu.jpg" },
  ],
  "Sushi Palace": [
    { name: "Sushi Combo", price: 15, img: "images/sushi_combo.jpg" },
    { name: "Salmon Sashimi", price: 18, img: "images/salmon_sashimi.jpg" },
    { name: "Miso Soup", price: 5, img: "images/miso_soup.jpg" },
  ],
  "Taco Haven": [
    { name: "Chicken Taco", price: 8, img: "images/chicken_taco.jpg" },
    { name: "Beef Burrito", price: 10, img: "images/beef_burrito.jpg" },
    { name: "Rice-Omelette", price: 5, img: "images/rice_omelette.jpg" },
  ],
};

// To store cart items
let cart = [];

// Load menu for the selected restaurant
function loadMenu(restaurantName) {
  const menuSection = document.getElementById("restaurant-menu");
  const menuItemsDiv = document.getElementById("menu-items");
  const restaurantTitle = document.getElementById("restaurant-name");

  // Set restaurant name
  restaurantTitle.textContent = `Menu - ${restaurantName}`;

  // Clear previous menu items
  menuItemsDiv.innerHTML = "";

  // Display menu items
  menus[restaurantName].forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");
    itemDiv.innerHTML = `<img src="${item.img}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>$${item.price}</p>
            </div>
            <button onclick="addToCart('${item.name}', ${item.price})" class="btn">ADD</button>`;
    menuItemsDiv.appendChild(itemDiv);
  });

  // Show the menu section
  menuSection.style.display = "block";
}

// Add item to the cart
function addToCart(itemName, price) {
  cart.push({ itemName, price });
  alert(`${itemName} has been added to the cart.`);
}

// Redirect to Cart Page
function goToCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html"; // Redirect to cart page
}
