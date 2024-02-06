const domainName = window.location.hostname;
const h1 = document.querySelector(".domain");
const htmlTitle = `<title>${domainName} is for sale!</title>`;
const forSaleEn = "For Sale !";
const domainDescriptionEn =
  "This domain name available for instantly purchase. You can send your offer by links below.";

const phoneNumber = "+77028600601";
const messageText = encodeURIComponent("Я хочу купить домен " + domainName);
const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`;

document.getElementById("forSaleEn").textContent = forSaleEn;
document.getElementById("domainDescriptionEn").textContent =
  domainDescriptionEn;

h1.textContent += domainName;
document.head.innerHTML += htmlTitle;
