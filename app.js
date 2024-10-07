// Define menus for each restaurant
const menus = {
  "Italian Bistro": [
    {
      name: "Margherita Pizza",
      price: 10,
      img: "images/margherita_pizza.jpg",
      description: "Classic pizza topped with fresh mozzarella and basil.",
    },
    {
      name: "Spaghetti Carbonara",
      price: 12,
      img: "images/spaghetti_carbonara.jpg",
      description: "Pasta with creamy sauce, pancetta, and parmesan cheese.",
    },
    {
      name: "Tiramisu",
      price: 6,
      img: "images/tiramisu.jpg",
      description: "Layered dessert made with coffee-soaked ladyfingers and mascarpone.",
    },
  ],
  "Sushi Palace": [
    {
      name: "Sushi Combo",
      price: 15,
      img: "images/sushi_combo.jpg",
      description: "An assortment of sushi rolls and nigiri.",
    },
    {
      name: "Salmon Sashimi",
      price: 18,
      img: "images/salmon_sashimi.jpg",
      description: "Fresh salmon sliced and served with soy sauce.",
    },
    {
      name: "Miso Soup",
      price: 5,
      img: "images/miso_soup.jpg",
      description: "Traditional Japanese soup with tofu and seaweed.",
    },
  ],
  "Taco Haven": [
    {
      name: "Chicken Taco",
      price: 8,
      img: "images/chicken_taco.jpg",
      description: "Spicy chicken with fresh salsa and avocado.",
    },
    {
      name: "Beef Burrito",
      price: 10,
      img: "images/beef_burrito.jpg",
      description: "Beef, beans, and cheese wrapped in a tortilla.",
    },
    {
      name: "Rice-Omelette",
      price: 5,
      img: "images/rice_omelette.jpg",
      description: "A fusion of rice and omelette, seasoned to perfection.",
    },
  ],
  "Indian Spice": [
    {
      name: "Butter Chicken",
      price: 12,
      img: "images/butter_chicken.jpg",
      description: "Tender chicken in a creamy tomato sauce.",
    },
    {
      name: "Biryani",
      price: 15,
      img: "images/biryani.jpg",
      description: "Spiced rice with marinated meat and aromatic spices.",
    },
    {
      name: "Samosa",
      price: 5,
      img: "images/samosa.jpg",
      description: "Crispy pastry filled with spiced potatoes and peas.",
    },
  ],
};

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
    itemDiv.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <p>$${item.price}</p>
      </div>
      <input type="number" id="quantity-${item.name}" value="1" min="1" style="width: 50px;"/>
      <button onclick="addToCart('${item.name}', ${item.price})" class="btn">ADD</button>
    `;
    menuItemsDiv.appendChild(itemDiv);
  });

  // Show the menu section
  menuSection.style.display = "block";
}

// Add item to the cart
function addToCart(itemName, price) {
  const quantityInput = document.getElementById(`quantity-${itemName}`);
  const quantity = parseInt(quantityInput.value);
  
  const existingItemIndex = cart.findIndex(item => item.itemName === itemName);

  if (existingItemIndex !== -1) {
    // Update quantity if item already exists in the cart
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Add new item to the cart
    cart.push({ itemName, price, quantity });
  }

  alert(`${itemName} has been added to the cart.`);
}

// Redirect to Cart Page
function goToCart() {
  displayCart();
}

// Display cart items and billing format
function displayCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const totalAmountDiv = document.getElementById("total-amount");
  cartItemsDiv.innerHTML = ""; // Clear previous items

  let total = 0;

  cart.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("billing-item");
    itemDiv.innerHTML = `
      <img src="images/${item.itemName.toLowerCase().replace(/ /g, "_")}.jpg" alt="${item.itemName}" class="billing-item-img">
      <div>${item.itemName}</div>
      <div>$${item.price}</div>
      <div>Qty: ${item.quantity}</div>
      <div>$${item.price * item.quantity}</div>
    `;
    cartItemsDiv.appendChild(itemDiv);
    total += item.price * item.quantity;
  });

  totalAmountDiv.textContent = `Total: $${total}`;
}

// Checkout functionality
function checkout() {
  const name = prompt("Enter your name:");
  const address = prompt("Enter your address:");
  const phone = prompt("Enter your phone number:");
  const paymentMethod = prompt("Enter payment method (Cash on Delivery/Online Payment):");

  alert(`Checkout successful!\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nPayment: ${paymentMethod}`);
  cart = []; // Clear cart after checkout
  displayCart(); // Refresh cart display
}
