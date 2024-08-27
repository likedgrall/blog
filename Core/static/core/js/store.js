let Store = {
    Categories: [
        {
            img: "1",
            name: "Luka 1",
            cost: "240 $",
            desription: "Баскетбольные кроссовки",
            raits: "4.9",
            class: "woman",
        },
        {
            img: "2",
            name: "Phantom GX Pro",
            cost: "180 $",
            desription: "Футбольные бутсы для игры на твердом грунте",
            raits: "4.2",
            class: "boots",
        },
        {
            img: "3",
            name: "Nike Air Max Plus",
            cost: "240 $",
            desription: "Мужские универсальные кроссовки",
            raits: "4.9",
            class: "man",
        },
        {
            img: "4",
            name: "LeBron XXI `Freshwater`",
            cost: "210 $",
            desription: "Баскетбольные кроссовки",
            raits: "4.9",
            class: "woman",
        },
        {
            img: "5",
            name: "Phantom GX Pro",
            cost: "160 $",
            desription: "Низкие бутсы для исскуственного покрытия",
            raits: "4.0",
            class: "boots",
        },
        {
            img: "6",
            name: "Phantom GX Academy",
            cost: "79 $",
            desription: "Низкие бутсы для мягкого грунта",
            raits: "4.9",
            class: "boots",
        },
        {
            img: "7",
            name: "Luka 2 `Trick Shot`",
            cost: "230 $",
            desription: "Баскетбольные кроссовки",
            raits: "4.9",
            class: "man",
        },
        {
            img: "8",
            name: "Mercurial Superfly",
            cost: "210 $",
            desription: "Футбольные бутсы для игры на твердом грунте",
            raits: "4.9",
            class: "boots",
        },
        {
            img: "9",
            name: "Zion 2",
            cost: "410 $",
            desription: "Баскетбольные кроссовки",
            raits: "4.9",
            class: "woman",
        },
        {
            img: "10",
            name: "Pegasus Trail 4",
            cost: "290 $",
            desription: "Водонепроницаемые женские кроссовки для бега",
            raits: "4.9",
            class: "woman",
        },
        {
            img: "11",
            name: "Alphafly 3 Proto",
            cost: "210 $",
            desription: "Женская обвуь для шоссейных гонок",
            raits: "4.9",
            class: "woman",
        },
    ],
    NewModel: [
        {
            img: "1",
            name: "Jumpman",
            desription: "Мужские беговые кроссовки",
            raits: "4.9",
            cardColor: "#B7A997"
        },
        {
            img: "2",
            name: "AIR-MAX",
            desription: "Женские городские кроссовки",
            raits: "4.9",
            cardColor: "#D6B895",
        },
        {
            img: "3",
            name: "CityMax",
            desription: "Мужские городские кроссовки",
            raits: "3.6",
            cardColor: "#7DB3B9",
        },
        {
            img: "4",
            name: "K-Swiss",
            desription: "Мужские городские кроссовки",
            raits: "4.4",
            cardColor: "#DD7916",
        }
    ]


}


const cardList = document.querySelector(".cards-list");
function categoriesCardRender(categoriesName) {
    cardList.innerHTML = "";
    if (categoriesName == "all") {
        for (let i = 0; i < Store.Categories.length; i++) {
            const cardInfo = Store.Categories[i];
            const cardDiv = document.createElement("div");
            cardDiv.className = "categories-card";
            cardDiv.innerHTML =
                `<div class="categories-card__photo">
                    <svg width="22" height="20" class="heart" viewBox="0 0 22 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.5 6.76466V6.96606C0.5 8.78643 1.21424 10.53 2.48915 11.7571C2.48917 11.7571 2.48919 11.7571 2.48922 11.7571L9.55383 18.559C9.94943 18.9625 10.4854 19.107 11 19.107C11.4826 19.107 12.0152 18.9587 12.4071 18.559L19.4717 11.7571C19.4717 11.7571 19.4718 11.7571 19.4718 11.7571C20.741 10.5355 21.5 8.79447 21.5 6.96606V6.76466C21.5 3.71422 19.3448 1.07926 16.3981 0.592522C14.4709 0.240837 12.4703 0.90505 11.0708 2.34827L10.9847 2.43698L10.8825 2.34031C9.48323 0.902608 7.48646 0.241484 5.5628 0.592522C2.61131 1.08006 0.5 3.71936 0.5 6.76466Z"
                            stroke="#FEFFF7" />
                    </svg>
                    <img src="./img/cross/${cardInfo.img}.png" alt="">
                </div>
                <div class="categories-card__info">
                    <div class="categories-card__decription">
                        <div class="info-name">
                            <h3>${cardInfo.name}</h3>
                            <label for="">${cardInfo.cost}</label>
                        </div>
                        <p>${cardInfo.desription}</p>
                        <div class="categorie__raits">
                            <span>${cardInfo.raits}</span>
                            <hr>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <a href="#">Купить сейчас</a>
                </div>
                `;
            cardList.appendChild(cardDiv);
        }
    }
    else {
        for (let i = 0; i < Store.Categories.length; i++) {
            if (Store.Categories[i].class == categoriesName) {
                const cardInfo = Store.Categories[i];
                const cardDiv = document.createElement("div");
                cardDiv.className = "categories-card";
                cardDiv.innerHTML =
                    `<div class="categories-card__photo">
                    <svg width="22" height="20" class="heart" viewBox="0 0 22 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.5 6.76466V6.96606C0.5 8.78643 1.21424 10.53 2.48915 11.7571C2.48917 11.7571 2.48919 11.7571 2.48922 11.7571L9.55383 18.559C9.94943 18.9625 10.4854 19.107 11 19.107C11.4826 19.107 12.0152 18.9587 12.4071 18.559L19.4717 11.7571C19.4717 11.7571 19.4718 11.7571 19.4718 11.7571C20.741 10.5355 21.5 8.79447 21.5 6.96606V6.76466C21.5 3.71422 19.3448 1.07926 16.3981 0.592522C14.4709 0.240837 12.4703 0.90505 11.0708 2.34827L10.9847 2.43698L10.8825 2.34031C9.48323 0.902608 7.48646 0.241484 5.5628 0.592522C2.61131 1.08006 0.5 3.71936 0.5 6.76466Z"
                            stroke="#FEFFF7" />
                    </svg>
                    <img src="./img/cross/${cardInfo.img}.png" alt="">
                </div>
                <div class="categories-card__info">
                    <div class="categories-card__decription">
                        <div class="info-name">
                            <h3>${cardInfo.name}</h3>
                            <label for="">${cardInfo.cost}</label>
                        </div>
                        <p>${cardInfo.desription}</p>
                        <div class="categorie__raits">
                            <span>${cardInfo.raits}</span>
                            <hr>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <a href="#">Купить сейчас</a>
                </div>
                `;
                cardList.appendChild(cardDiv);
            }

        }
    }
}
const categories = document.querySelectorAll(".categories__buttons button");
for (let i = 0; i < categories.length; i++) {
    categories[i].onclick = function() {
        for (let k = 0; k < categories.length; k++) {
            categories[k].classList.remove("categories_active");
        }
        categoriesCardRender(categories[i].className);
        categories[i].classList.add("categories_active");
    }

}

categoriesCardRender("all");


// Новые модели

const newModelListDiv = document.querySelector(".new-model__elements");
for (let i = 0; i < Store.NewModel.length; i++) {
    const newModelCardInfo = Store.NewModel[i];
    const newModelCardDiv = document.createElement("div");
    newModelCardDiv.className = "newmodel-card"
    newModelCardDiv.innerHTML = `
    <div class="newmodel-card__bg" style="background-color: ${newModelCardInfo.cardColor};">
        <img src="./img/newmodel/${newModelCardInfo.img}.png" alt="">
        <svg width="22" height="20" class="heart" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.5 6.76466V6.96606C0.5 8.78643 1.21424 10.53 2.48915 11.7571C2.48917 11.7571 2.48919 11.7571 2.48922 11.7571L9.55383 18.559C9.94943 18.9625 10.4854 19.107 11 19.107C11.4826 19.107 12.0152 18.9587 12.4071 18.559L19.4717 11.7571C19.4717 11.7571 19.4718 11.7571 19.4718 11.7571C20.741 10.5355 21.5 8.79447 21.5 6.96606V6.76466C21.5 3.71422 19.3448 1.07926 16.3981 0.592522C14.4709 0.240837 12.4703 0.90505 11.0708 2.34827L10.9847 2.43698L10.8825 2.34031C9.48323 0.902608 7.48646 0.241484 5.5628 0.592522C2.61131 1.08006 0.5 3.71936 0.5 6.76466Z"
                stroke="#FEFFF7" />
        </svg>
    </div>
    <div class="new-card__info">
        <h3>${newModelCardInfo.name}</h3>
        <p>${newModelCardInfo.desription}</p>
        <div class="newmodel__raits">
            <span>${newModelCardInfo.raits}</span>
            <hr>
            <i class="fa-solid fa-star"></i>
        </div>
    </div>
    <button style="color: ${newModelCardInfo.cardColor}"><i class="fa-solid fa-circle-check"></i> В корзину</button>
    `
    newModelListDiv.appendChild(newModelCardDiv);
}

// Новые модели при нажатии на кнопку
