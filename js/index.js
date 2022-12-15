//menu
let navWidth = $("nav").outerWidth();
console.log(navWidth);
$("#sideBar").css("left", `-${navWidth}px`);

$("#sideBar i").click(function () {
  // let navWidth = $("nav").outerWidth();

  if ($("#sideBar").css("left") === "0px") {
    $("#sideBar").animate({ left: `-${navWidth}` }, 1000);
  } else {
    $("#sideBar").animate({ left: `0px` }, 1000);
  }
});

//menu
$("#sideBar i").click(function () {
  if ($("#sideBar").css("left") === "0px") {
    $("#toggle").removeClass("d-none");
    $("#close").addClass("d-none");

    $("#sideBar").animate({ left: `-${navWidth}` }, 1000);
    $("nav ul .homes").animate(
      { left: `-${navWidth}`, opacity: 0 },
      200,
      function () {
        $("nav ul .faq").animate(
          { left: `-${navWidth}`, opacity: 0 },
          200,
          function () {
            $("nav ul .countdowns").animate(
              { left: `-${navWidth}`, opacity: 0 },
              200,
              function () {
                $("nav ul .contacts").animate(
                  { left: `-${navWidth}`, opacity: 0 },
                  200
                );
              }
            );
          }
        );
      }
    );
  } else {
    //let iBtn = document.querySelectorAll("#colorBtn i");
    $("#close").removeClass("d-none");
    $("#toggle").addClass("d-none");

    $("#sideBar").animate({ left: `0px` }, 1000, function () {
      $("nav ul .homes").animate({ left: `0px`, opacity: 1 }, 200, function () {
        $("nav ul .faq").animate({ left: `0px`, opacity: 1 }, 200, function () {
          $("nav ul .countdowns").animate(
            { left: `0px`, opacity: 1 },
            200,
            function () {
              $("nav ul .contacts").animate({ left: `0px`, opacity: 1 }, 200);
            }
          );
        });
      });
    });
  }
});

$("a[href^= '#']").click(function (e) {
  let aHref = $(e.target).attr("href");
  console.log(aHref);
  let sectionTop = $(aHref).offset().top;
  console.log(sectionTop);

  $("html,body").animate({ scrollTop: sectionTop }, 2000);
});

// taps
$("h5").click(function (e) {
  // $(".special").text("-");
  $("h5").removeClass("active");
  $(this).addClass("active");
  $(`${$(this).attr("data-cont")}`).slideToggle();
  // $(".special").toggle("-");
});

// countdown

let countdownDate = new Date("Dec 31,2023 23:59:59").getTime();
console.log(countdownDate);
let counter = setInterval(() => {
  let now = new Date().getTime();
  // 3dd el mill seconds
  let date = countdownDate - now;
  // console.log(date);
  let days = Math.floor(date / 1000 / 60 / 60 / 24);
  // console.log(days);
  $(".days").text(`${days} D`);

  let hours = date % (1000 * 60 * 60 * 24);

  let getHours = Math.floor(hours / 1000 / 60 / 60);
  if (getHours < 10) {
    $(".hours").text(`0${getHours} H`);
  } else {
    $(".hours").text(`${getHours} H`);
  }

  // console.log(getHours);

  let minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  if (minutes < 10) {
    $(".minutes").text(`0${minutes} M`);
  } else {
    $(".minutes").text(`${minutes} M`);
  }

  let seconds = Math.floor((date % (1000 * 60)) / 1000);

  if (seconds < 10) {
    $(".seconds").text(`0${seconds} S`);
  } else {
    $(".seconds").text(`${seconds} S`);
  }

  if (date < 0) {
    clearInterval(counter);
  }
}, 1000);

// message form

let textArea = document.getElementById("textArea");
console.log(textArea);

textArea.addEventListener("keyup", function () {
  texts = textArea.value;
  console.log(texts);
  // Initialize the word counter
  let numWords = 0;
  // let numletters = 100;
  let currentCharacter;
  for (let i = 0; i < texts.length; i++) {
    currentCharacter = texts[i];
    console.log(currentCharacter);
    numWords += 1;
  }
  numWords = texts.length;
  if (currentCharacter == " ") {
    numWords += 1;
  }
  numletters = 100 - numWords;

  document.getElementById("show").innerHTML = numletters;
});
