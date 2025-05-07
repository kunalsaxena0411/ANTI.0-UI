//sidebar toggle
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector("body");
  const sidebar = body.querySelector(".sidebar");
  const toggle = body.querySelector(".sidebar-toggle");

  // Restore sidebar state from localStorage
  const sidebarClosed = localStorage.getItem("sidebarClosed") === "true";
  if (sidebarClosed) {
    sidebar.classList.add("close");
    sidebar.classList.remove("open");
    toggle.classList.remove("close"); // hamburger
  } else {
    sidebar.classList.remove("close");
    sidebar.classList.add("open");
    toggle.classList.add("close"); // cross
  }

  // Handle sidebar toggle
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isClosed = sidebar.classList.contains("close");

      if (isClosed) {
        sidebar.classList.remove("close");
        sidebar.classList.add("open");
        toggle.classList.add("close"); // Show × when open
      } else {
        sidebar.classList.add("close");
        sidebar.classList.remove("open");
        toggle.classList.remove("close"); // Show ≡ when closed
      }

      // Save sidebar state to localStorage
      localStorage.setItem("sidebarClosed", !isClosed);
      
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    const isClosed = localStorage.getItem("sidebarClosed") === "true";
    if (isClosed) {
      sidebar.classList.add("close");
      toggle.classList.add("close");
    }
  });
  // Sidebar item handling
  const sidebarItems = document.querySelectorAll('.sidebar li');

  sidebarItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();

      // Navigate to the target page
      const page = item.getAttribute('data-page');
      if (page) {
        window.location.href = page;
      }

      // Update active and hovered states
      sidebarItems.forEach(i => {
        i.classList.remove('active');
        i.classList.remove('hovered');
      });
      item.classList.add('active');
      item.classList.add('hovered');
    });
  });

  // Highlight the current page's item
  const currentPage = window.location.pathname.split('/').pop();
  sidebarItems.forEach(item => {
    const page = item.getAttribute('data-page');
    if (page === currentPage) {
      item.classList.add('active');
      item.classList.add('hovered');
    }
  });

  // Remove hovered class when clicking outside the sidebar
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
      sidebarItems.forEach(i => i.classList.remove('hovered'));
    }
  });
});

const isMobile = window.innerWidth <= 768;
if (isMobile && !sidebar.classList.contains("open") && !sidebarClosed) {
  sidebar.classList.add("open");
  toggle.classList.add("close");
}


//extension button
document.getElementById("downloadBtn").addEventListener("click", function() {
  alert("Thanks for downloading the extension!");
  // Optional: redirect
  //window.location.href = "your-extension-link.zip";
});

//card clicked
document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', () => {
      // Replace this with your actual action
      alert(`Card ${index + 1} clicked!`);
      // Example: Redirect to another page
      window.location.href = `page${index + 1}.html`;
    });
});
  
//card elements animations
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

//product description
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
