
$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {
        // cancel the standard action
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        // SC - In the variable, we enter the information about which block should go to
        // dn - determine the position of the block on the page

        $('html, body').animate({
            scrollTop: dn
        }, 1000);
        //1000 Crossword transition speed
    });
});


$(document).ready(function () {
  var wheel = $("#wheel");
  var spinButton = $("#spin-button");
  var spinDuration = 9000; //3Seconds
  var spinAngle = 1080; //Degrees
  var modal = $(".modal"); // selector for an element with a class Modal
  var hasSpin = localStorage.getItem("hasSpin"); // Check if the spin was already pressed

  // if (!hasSpin) {
    spinButton.on("click", function () {
      wheel.css("transition", "transform " + spinDuration + "ms ease-in-out");
      wheel.css("transform", "rotate(" + spinAngle + "deg)");
      setTimeout(function () {
        wheel.css("transition", "none");
        wheel.css("transform", "rotate(0deg)");
      }, spinDuration);

      // Add the Modal_active class to the element with the Modal class in 15 seconds
      setTimeout(function () {
        modal.addClass("modal_active");
      }, 10000);

      // We save the information that the spin was pressed
      localStorage.setItem("hasSpin", true);
    });
  // } else {
  //   // If the spin was already pressed, add the Modal_active class immediately
  //   modal.addClass("modal_active");
  // }
});


/* ------------------------------------------------------------------- */
/* Toast */
/* ------------------------------------------------------------------- */
function rWallet() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  const length = 64;

  let wallet = 'UQ';
  for (let i = 2; i < length; i++) {
      wallet += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  const firstFour = wallet.slice(0, 4);
  const lastFour = wallet.slice(-4);

  return `${firstFour}...${lastFour}`;
}

function mWallets(num) {
  const wallets = [];
  for (let i = 0; i < num; i++) {
      wallets.push(rWallet());
  }
  return wallets;
}

function showToast(msg) {
  Toastify({
      text: msg,
      node: '<div></div>',
      duration: 3000,
      close: false,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true
  }).showToast();
}

let toastCounter = 0; // Global counter for the number of toasts displayed
let toastTimeout; // Variable to store the setTimeout ID
// localStorage.setItem('stopToasts', 'false');

function generateToasts() {

  const numToasts = Math.floor(Math.random() * 3) + 1; // Between 1 and 4 toasts
  const wallets = mWallets(numToasts);
  const txt = __("common.claim", translator.currentLanguage);
  const txt2 = __("common.rewarded", translator.currentLanguage);

  wallets.forEach(wallet => {
    const delay = Math.floor(Math.random() * 2800) + 200; // Between 200ms (0.2s) and 3000ms (3s)
    setTimeout(() => {

      // if (localStorage.getItem('stopToasts') === 'true') {
      //   return;
      // }

      // Randomly choose between txt and txt2 with a 70% chance for txt
      const textToShow = Math.random() < 0.7 ? txt : txt2;
      showToast(wallet + ' ' + textToShow);
      toastCounter++;

      // If 12 toasts have been displayed, introduce a 10-second pause
      if (toastCounter >= 12) {
        toastCounter = 0; // Reset the counter
        clearTimeout(toastTimeout); // Clear any existing timeout
        toastTimeout = setTimeout(generateToasts, 15000); // Pause for 10 seconds before generating more toasts
      }
    }, delay);
  });

  if (toastCounter < 12) {
    const nextInterval = Math.floor(Math.random() * 4000) + 2000; // Between 2000ms (2s) and 6000ms (6s)
    clearTimeout(toastTimeout); // Clear any existing timeout
    toastTimeout = setTimeout(generateToasts, nextInterval);
  }
}