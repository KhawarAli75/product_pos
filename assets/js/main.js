// AOS.init();
// collapsible

document.body.addEventListener("click", function (e) {
  const target = e.target;
  const body = document.querySelector("body");
  const html = document.querySelector("html");
  if (target.matches('[data-nxt-toggle="collapse"]')) {
    let collapseItem = target.parentElement;
    let collapsible = collapseItem.parentElement;
    let items = collapsible.querySelectorAll(".collapse-item");

    items.forEach((el) => {
      if (el == collapseItem) {
        el.classList.toggle("active");
      } else {
        el.classList.remove("active");
      }
    });
  } else if (target.matches(".menu-btn")) {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
      html.style.overflowY = "auto";
      body.style.overflowY = "auto";
    } else {
      sidebar.classList.add("active");
      body.style.overflowY = "hidden";
      html.style.overflowY = "hidden";
    }
  }
});

// tabs
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      tab.classList.add("active");

      const targetId = tab.getAttribute("data-nxt-toggle");
      const targetPanel = document.getElementById(targetId);

      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
});


// modal

// Open modal
document.querySelectorAll("button[data-target]").forEach((button) => {
  button.addEventListener("click", function () {
    const targetModal = this.getAttribute("data-target");
    document.getElementById(targetModal + "Overlay").classList.add("active");
    document.getElementById(targetModal).classList.add("active");
  });
});

// Close modal
document.querySelectorAll(".close-modal").forEach((button) => {
  button.addEventListener("click", function () {
    this.closest(".modal-overlay").classList.remove("active");
    this.closest(".modal").classList.remove("active");
  });
});

// Close modal by clicking outside the modal
document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      overlay.querySelector(".modal").classList.remove("active");
    }
  });
});
