$(function () {
  $("#navbar").load("navbar.html");
  $("#footer").load("footer.html");
});
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!e.target.type) {
      const notification = document.createElement("div");
      notification.className =
        "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50";
      notification.textContent =
        "Thank you for your interest! We will contact you soon.";
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.remove();
      }, 3000);
    }
  });
});
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const notification = document.createElement("div");
    notification.className =
      "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg";
    notification.textContent = "Thank you for your submission!";
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
    form.reset();
  });
});
