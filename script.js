document.getElementById("downloadBtn").addEventListener("click", function() {
    alert("Thanks for downloading the extension!");
    // Optional: redirect
    //window.location.href = "your-extension-link.zip";
});

// JavaScript to toggle sidebar visibility on mobile
const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
const sidebar = document.querySelector(".sidebar");

sidebarToggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

//to close sidebar when clicked outside
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !sidebarToggleBtn.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});


// Select all the sidebar list items
const sidebarItems = document.querySelectorAll('.sidebar li');

// Add event listener to each item to handle the click
sidebarItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // Optionally, you can handle other logic here, like logging, animations, etc.
        const page = item.getAttribute('data-page');
        if (page) {
          window.location.href = page; // Navigate to the correct page
        }

        // Remove the 'active' class from all items
        sidebarItems.forEach(i => i.classList.remove('active'));
        
        // Add the 'active' class to the clicked item
        item.classList.add('active');
    });
});

// Highlight active sidebar item based on the current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop(); // Extract the page name
    sidebarItems.forEach(item => {
        const page = item.getAttribute('data-page');
        if (page === currentPage) {
            item.classList.add('active');
        }
    });
});

document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', () => {
      // Replace this with your actual action
      alert(`Card ${index + 1} clicked!`);
      // Example: Redirect to another page
      window.location.href = `page${index + 1}.html`;
    });
});

//card animation
// Apply Vanilla Tilt to all cards
// VanillaTilt.init(document.querySelectorAll(".card"), {
//     max: 12,            // max tilt rotation (in degrees)
//     speed: 400,         // speed of the enter/exit transition
//     glare: true,        // adds a subtle glare
//     "max-glare": 0.2,   // max glare opacity
//   });
  
// Select all card elements
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15; // control tilt strength here
    const rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });

  card.addEventListener("mouseenter", () => {
    card.style.transition = "transform 0.1s ease";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const description = document.getElementById("description");

  toggleBtn.addEventListener("click", () => {
    description.classList.toggle("expanded");
    toggleBtn.textContent = description.classList.contains("expanded")
      ? "See Less"
      : "See More";
  });
});

//settings
// Example: Log change for debug
document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
  input.addEventListener('change', () => {
    console.log(`${input.name || input.parentNode.previousElementSibling?.textContent}: ${input.checked || input.value}`);
  });
});

//notifications and profile
document.addEventListener("DOMContentLoaded", function () {
  const bellIcon = document.getElementById("bellIcon");
  const manIcon = document.getElementById("manIcon");

  bellIcon.addEventListener("click", function () {
    alert("Will show the notifications!");
    // You can also open a notification panel or similar
  });

  manIcon.addEventListener("click", function () {
    alert("This action will take you to user profile!");
    // You can redirect or open a profile menu
  });
});

