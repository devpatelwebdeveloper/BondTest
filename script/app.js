// cards variable blow is all the offers card that we are adding into the frontend

// => Add the title, image link, subtitle, button link, button text

// => If you want to opend the link in same window, keep linkTarget: "" (as in card 1 below)

// => If you want the BLUE heart add favourite: true; If you want WHITE heart add favoutrite: false

// => If you want the NEW label on top right corner, add newAddition : true; If you donot want the label add newAddition: false;

// => Alt and title are same as title for sake of simplicity

// => Aria-label for the links are also same as the button text for sake of simplicty

const cards = [
  {
    title: "BUY 10 LISE WAITER PRODUCTS",
    image: "images/product1.jpg",
    subtitle: "GET THE 11<sup>TH</sup> FREE",
    link: "https://github.com/devpatelwebdeveloper",
    buttonText: "find out more &#9658;",
    linkTarget: "",
    favourite: true,
    newAddition: true
  },
  {
    title: "SHIPPING UPGRADED",
    image: "images/product2.jpg",
    subtitle: "1 DAY SHIPPING",
    link: "https://github.com/devpatelwebdeveloper",
    buttonText: "find out more &#9658;",
    linkTarget: "_blank",
    favourite: true,
    newAddition: false
  },
  {
    title: "PHOTOFINISHING UPGRADE",
    image: "images/product3.jpg",
    subtitle: "TO 5X7 PRINT ",
    link: "https://github.com/devpatelwebdeveloper",
    buttonText: "find out more &#9658;",
    linkTarget: "_blank",
    favourite: true,
    newAddition: false
  },
  {
    title: "HOLIDAY HELPER",
    image: "images/product4.jpg",
    subtitle: "FREE GIFT WRAPPING",
    link: "https://github.com/devpatelwebdeveloper",
    buttonText: "find out more &#9658;",
    linkTarget: "_blank",
    favourite: false,
    newAddition: false
  },
  {
    title: "BUY 6 LOREAL PRODUCTS",
    image: "images/product5.jpg",
    subtitle: "GET A FREE MAKEUP BAG",
    link: "https://github.com/devpatelwebdeveloper",
    buttonText: "find out more &#9658;",
    linkTarget: "_blank",
    favourite: false,
    newAddition: true
  },
  {
    title: "HOLIDAY HELPER",
    image: "images/product4.jpg",
    subtitle: "FREE GIFT WRAPPING",
    link: "https://github.com/devpatelwebdeveloper",
    buttonText: "find out more &#9658;",
    linkTarget: "_blank",
    favourite: false,
    newAddition: false
  },
  {
    title: "HOLIDAY HELPER",
    image: "images/product4.jpg",
    subtitle: "FREE GIFT WRAPPING",
    link: "https://github.com/devpatelwebdeveloper",
    buttonText: "find out more &#9658;",
    linkTarget: "_blank",
    favourite: false,
    newAddition: false
  },
  {
    title: "HOLIDAY HELPER",
    image: "images/product5.jpg",
    subtitle: "FREE GIFT WRAPPING",
    link: "https://github.com/devpatelwebdeveloper",
    buttonText: "find out more &#9658;",
    linkTarget: "_blank",
    favourite: false,
    newAddition: true
  },
  {
    title: "HOLIDAY HELPER",
    image: "images/product4.jpg",
    subtitle: "FREE GIFT WRAPPING",
    link: "https://github.com/devpatelwebdeveloper",
    buttonText: "find out more &#9658;",
    linkTarget: "_blank",
    favourite: false,
    newAddition: false
  }
];
const app = {};

//Navigation
app.nav = () => {
  // JQUERY NAV TOGGLE
  $("#menu").bind("click", function(event) {
    $("#mainnav ul").slideToggle();
  });

  $(window).resize(function() {
    const w = $(window).width();
    if (w > 768) {
      $("#mainnav ul").removeAttr("style");
    }
  });
};
// Adding the Favourite Heart on the cards
app.fav = () => {
  cards.forEach(favCard => {
    favCard.favourited = favCard.favourite
      ? "images/heartDark.png"
      : "images/heartLight.png";
  });
};
// Adding the NEW flag on the new PROMOS
app.new = () => {
  cards.forEach(newCard => {
    newCard.newimage = newCard.newAddition
      ? `<img src="images/NEW1.png" class="card__new" id="new">`
      : ``;
  });
};
//Displaying the cards
app.card = () => {
  app.new();
  app.fav();
  cards.forEach(showCard => {
    const card = `
    <div class="card-column">
          <div class="card u-border">
          ${showCard.newimage}
          <div class="card__title heading-tertiary u-margin-bottom-small">
          ${showCard.title}
          </div>

            <img src="${showCard.image}" alt="${showCard.title}" title="${
      showCard.title
    }" class="card__image" />
            <img src="${showCard.favourited}" class="card__favourtie">

            <div class="card__btn"><a href="${
              showCard.link
            }" class="btn btn--blue btn--animated"
              aria-label="${showCard.buttonText}" target="${
      showCard.linkTarget
    }">${showCard.buttonText}</a></div>
            <div class="card__subtitle heading-tertiary u-margin-bottom-small">
                ${showCard.subtitle}
              </div>
          </div>
        </div>
    `;

    $(".cards").append(card);
  });
};
//Initializing the Web App
app.init = () => {
  app.nav();
  app.card();
};

//DOM ready
$(function() {
  app.init();
});
