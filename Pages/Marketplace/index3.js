const searchCards = document.querySelector(".input>input");
const cardDesc = document.querySelectorAll(".artistt_info>h5");
const card = document.querySelectorAll(".card")
searchCards.addEventListener("keyup", () => {
    for (let i = 0; i < cardDesc.length; i++) {
        if (cardDesc[i].textContent.toLowerCase().includes(searchCards.value.toLowerCase())) {
            card[i].style.display = "flex";
        }
        else {
            card[i].style.display = "none";
        }
    }
})

const homePage = document.querySelector(".nav_logo>img");
homePage.addEventListener("click", () => {
    window.location.href = "../Home/homepage.html";
})


const favorite = document.querySelector(".tab2");
const favText = document.querySelector(".tab2>h5");
const nft = document.querySelector(".tab1");
const nftText = document.querySelector(".tab1>h5");
const heart = document.querySelectorAll(".heart");
const count = document.querySelector(".count");
const cards = document.querySelectorAll(".card");
let bool = true;

heart.forEach(e => {
    e.addEventListener("click", (a) => {
        if (a.target.style.color == " rgb(128, 128, 128)" || !a.target.style.color) {
            count.textContent++;
            a.target.style.color = "red";
        }
        else if (a.target.style.color == "red") {
            count.textContent--;
            a.target.style.color = " rgb(128, 128, 128)";
            if (bool == false) {
                a.target.parentElement.parentElement.style.display = "none"
            }
        }
        else {
            count.textContent++;
            a.target.style.color = "red";
        }
    })
})
favorite.addEventListener("click", () => {
    nft.style.border = "none";
    favorite.style.borderBottom = "2px solid #858584";

    bool = false;
    nftText.style.color = "#858584";
    favText.style.color = "white";

    heart.forEach(e => {
        if (e.style.color == "rgb(128, 128, 128)"||!e.style.color) {
            e.parentElement.parentElement.style.display = "none";
        }
    })
})

nft.addEventListener("click", () => {
    nft.style.borderBottom = " 2px solid #858584";
    favorite.style.border = "none";
    bool = true;
    nftText.style.color = "white";
    favText.style.color = "#858584"

    heart.forEach(e => {
        e.parentElement.parentElement.style.display = "flex";
    })
})