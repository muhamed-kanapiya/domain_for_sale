const domainName = window.location.hostname;
const h1 = document.querySelector(".domain");
const htmlTitle = `<title>${domainName} is for sale!</title>`;
const forSale = "For Sale !";
const domainDescription =
  "This domain name available for instantly purchase. You can send your offer by links below.";

const instaUrl = "https://www.instagram.com/lvv.vlad/";
const phoneNumber = "+77028600601";
const messageText = encodeURIComponent("Я хочу купить домен " + domainName);
const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`;

document.getElementById("forSale").textContent = forSale;
document.getElementById("domainDescription").textContent = domainDescription;

h1.textContent += domainName;
document.head.innerHTML += htmlTitle;

document.addEventListener("DOMContentLoaded", function () {
  const phoneNumber = "+77028600601"; // Replace with your phone number
  const messageText = encodeURIComponent(
    "I want to buy the " + domainName + " domain."
  ); // Replace with your message text

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`;

  const instagramUsername = "kanapiya.ru"; // Instagram username
  const instagramLink = `https://www.instagram.com/${instagramUsername}`;

  const whatsappButton = document.getElementById("whatsappButton");
  whatsappButton.addEventListener("click", function () {
    window.location.href = whatsappLink;
  });

  const instagramButton = document.getElementById("instagramButton");
  instagramButton.addEventListener("click", function () {
    window.location.href = instagramLink;
  });
});
