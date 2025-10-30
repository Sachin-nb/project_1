// Laptop Data
const laptops = [
  { name: "Apple MacBook Air 13 (M4, 2025)", brand: "Apple", ram: 8, storage: 256, price: 83990 },
  { name: "Dell Inspiron 14", brand: "Dell", ram: 8, storage: 256, price: 54700 },
  { name: "Asus Zenbook 14 OLED", brand: "Asus", ram: 16, storage: 512, price: 100990 },
  { name: "HP 15s", brand: "HP", ram: 8, storage: 256, price: 30990 },
  { name: "Lenovo Yoga Slim 7i", brand: "Lenovo", ram: 16, storage: 512, price: 132141 },
  { name: "Samsung Galaxy Book5 Pro", brand: "Samsung", ram: 16, storage: 512, price: 126999 },
  { name: "Acer Swift Go 14", brand: "Acer", ram: 16, storage: 512, price: 89990 },
  { name: "MSI Summit E13", brand: "MSI", ram: 16, storage: 1024, price: 159990 },
  { name: "HP Spectre x360 14", brand: "HP", ram: 16, storage: 512, price: 149990 },
  { name: "Asus ROG Zephyrus G14", brand: "Asus", ram: 16, storage: 1024, price: 159999 },
  { name: "Dell XPS 13 Plus", brand: "Dell", ram: 16, storage: 512, price: 179990 },
  { name: "Lenovo Legion 7i", brand: "Lenovo", ram: 32, storage: 1024, price: 219990 },
  { name: "Apple MacBook Pro 14 (M4)", brand: "Apple", ram: 16, storage: 512, price: 189990 },
  { name: "HP Envy 15t", brand: "HP", ram: 16, storage: 512, price: 114990 },
  { name: "Samsung Galaxy Book 4", brand: "Samsung", ram: 8, storage: 512, price: 32990 },
  { name: "Acer Predator Helios Neo 16", brand: "Acer", ram: 16, storage: 1024, price: 194999 },
  { name: "Asus Vivobook S 16", brand: "Asus", ram: 16, storage: 512, price: 102990 },
  { name: "Dell Latitude 7450", brand: "Dell", ram: 16, storage: 512, price: 134990 },
  { name: "Lenovo ThinkPad X1 Carbon Gen 11", brand: "Lenovo", ram: 16, storage: 512, price: 175000 },
  { name: "HP Omen 16", brand: "HP", ram: 32, storage: 1024, price: 169990 },
  { name: "Acer Nitro V 16", brand: "Acer", ram: 16, storage: 512, price: 89990 },
  { name: "Asus TUF Gaming A15", brand: "Asus", ram: 16, storage: 1024, price: 66990 },
  { name: "Dell G15 5530", brand: "Dell", ram: 16, storage: 512, price: 124990 },
  { name: "Lenovo Yoga 7i 2-in-1", brand: "Lenovo", ram: 16, storage: 512, price: 101990 },
  { name: "HP Pavilion Plus 14", brand: "HP", ram: 16, storage: 512, price: 99990 },
  { name: "Samsung Galaxy Book3 Pro", brand: "Samsung", ram: 16, storage: 1024, price: 149999 },
  { name: "Acer Aspire 7", brand: "Acer", ram: 16, storage: 512, price: 62490 },
  { name: "Asus ROG Strix G16", brand: "Asus", ram: 16, storage: 1024, price: 139990 },
  { name: "Dell Inspiron 15 5530", brand: "Dell", ram: 12, storage: 512, price: 79990 },
  { name: "Lenovo V15 G4", brand: "Lenovo", ram: 8, storage: 512, price: 34490 },
  { name: "HP Pavilion 15", brand: "HP", ram: 8, storage: 512, price: 54990 },
  { name: "Samsung Galaxy Book2", brand: "Samsung", ram: 8, storage: 256, price: 74990 },
  { name: "Acer Swift 5", brand: "Acer", ram: 16, storage: 512, price: 110000 },
  { name: "Asus ExpertBook P3", brand: "Asus", ram: 16, storage: 512, price: 34990 },
  { name: "Dell Precision 5490", brand: "Dell", ram: 32, storage: 1024, price: 259990 },
  { name: "Lenovo Legion 5i Pro", brand: "Lenovo", ram: 16, storage: 1024, price: 139990 },
  { name: "HP EliteBook Ultra G1", brand: "HP", ram: 16, storage: 512, price: 164990 },
  { name: "Acer TravelLite Essential", brand: "Acer", ram: 8, storage: 512, price: 32999 },
  { name: "Asus Vivobook 14", brand: "Asus", ram: 16, storage: 512, price: 72500 },
  { name: "Dell Inspiron 14 2-in-1", brand: "Dell", ram: 16, storage: 512, price: 96899 },
  { name: "Lenovo IdeaPad Slim 3", brand: "Lenovo", ram: 16, storage: 512, price: 61990 },
  { name: "HP Spectre x360 16", brand: "HP", ram: 16, storage: 1024, price: 145000 },
  { name: "Samsung Galaxy Book4 Edge", brand: "Samsung", ram: 8, storage: 512, price: 54989 },
  { name: "Acer Aspire Lite AL15", brand: "Acer", ram: 16, storage: 512, price: 36541 },
  { name: "Asus TUF A15 FA566", brand: "Asus", ram: 16, storage: 1024, price: 66990 },
  { name: "Dell XPS 15 9530", brand: "Dell", ram: 16, storage: 512, price: 185000 }
];


const laptopList = document.getElementById("laptopList");

// Render laptops
function renderLaptops(data) {
  laptopList.innerHTML = "";
  if (data.length === 0) {
    laptopList.innerHTML = "<p>No laptops match your filters.</p>";
    return;
  }
  data.forEach(laptop => {
    laptopList.innerHTML += `
      <div class="laptop-card">
        <h3>${laptop.name}</h3>
        <p>${laptop.ram}GB RAM | ${laptop.storage}GB SSD</p>
        <p class="price">₹${laptop.price.toLocaleString()}</p>
      </div>
    `;
  });
}

// Filter function
function applyFilters() {
  const price = document.querySelector("input[name='price']:checked")?.value;
  const brands = [...document.querySelectorAll("input[name='brand']:checked")].map(b => b.value);
  const rams = [...document.querySelectorAll("input[name='ram']:checked")].map(r => parseInt(r.value));
  const storages = [...document.querySelectorAll("input[name='storage']:checked")].map(s => parseInt(s.value));

  let filtered = laptops.filter(laptop => {
    let pass = true;

    // Price filter
    if (price) {
      if (price == 40000 && laptop.price >= 40000) pass = false;
      if (price == 60000 && (laptop.price < 40000 || laptop.price > 60000)) pass = false;
      if (price == 80000 && (laptop.price < 60000 || laptop.price > 80000)) pass = false;
      if (price == 100000 && laptop.price < 80000) pass = false;
    }

    // Brand filter
    if (brands.length && !brands.includes(laptop.brand)) pass = false;

    // RAM filter
    if (rams.length && !rams.includes(laptop.ram)) pass = false;

    // Storage filter
    if (storages.length && !storages.includes(laptop.storage)) pass = false;

    return pass;
  });

  renderLaptops(filtered);
}

// Reset filters
function resetFilters() {
  document.querySelectorAll("input[type='checkbox'], input[type='radio']").forEach(input => input.checked = false);
  renderLaptops(laptops);
}

// Initial render
renderLaptops(laptops);

function toggleChat() {
  const chatbot = document.getElementById("chatbot");
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBody = document.getElementById("chat-body");

  const userMsg = input.value.trim();
  if (!userMsg) return;

  const userDiv = document.createElement("div");
  userDiv.className = "chat-message user";
  userDiv.textContent = userMsg;
  chatBody.appendChild(userDiv);

  const botDiv = document.createElement("div");
  botDiv.className = "chat-message bot";
  botDiv.textContent = "I'm here to help! How can I assist you?";
  chatBody.appendChild(botDiv);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

  function toggleChat() {
    const chat = document.getElementById('chatbot');
    chat.style.display = chat.style.display === 'block' ? 'none' : 'block';
  }

/* Warranty Page Edits */
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("warrantyForm");
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");

  // Mock warranty data (replace or extend this with real database later)
  const warrantyData = {
    "QLT1001": { purchaseDate: "2024-02-12", durationMonths: 24 },
    "QLT2002": { purchaseDate: "2022-05-10", durationMonths: 12 },
    "QLT3003": { purchaseDate: "2023-07-05", durationMonths: 18 },
    "QLT4004": { purchaseDate: "2021-12-20", durationMonths: 24 }
  };

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const materialId = document.getElementById("materialId").value.trim().toUpperCase();
    const mobileNumber = document.getElementById("mobileNumber").value.trim();

    // Input validation
    if (!materialId || !/^\d{10}$/.test(mobileNumber)) {
      showResult("⚠️ Please enter a valid Material ID and 10-digit Mobile Number.", "#fff3cd");
      return;
    }

    // Check if material ID exists
    if (!warrantyData[materialId]) {
      showResult("❌ No record found for the given Material ID.", "#f8d7da");
      return;
    }

    // Calculate warranty status
    const item = warrantyData[materialId];
    const purchaseDate = new Date(item.purchaseDate);
    const expiryDate = new Date(purchaseDate);
    expiryDate.setMonth(expiryDate.getMonth() + item.durationMonths);

    const currentDate = new Date();
    let statusText = "";
    let bgColor = "";

    if (currentDate <= expiryDate) {
      statusText = `✅ Warranty Active<br>📅 Expiry Date: <strong>${expiryDate.toDateString()}</strong>`;
      bgColor = "#d1e7dd";
    } else {
      statusText = `❌ Warranty Expired<br>📅 Expired on: <strong>${expiryDate.toDateString()}</strong>`;
      bgColor = "#f8d7da";
    }

    showResult(statusText, bgColor);
  });

  function showResult(message, bgColor) {
    resultText.innerHTML = message;
    resultBox.style.background = bgColor;
    resultBox.classList.remove("hidden");
  }
});
