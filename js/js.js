const findButton = document.querySelector(".find-button");
const popup = document.querySelector(".popup-form-wrapper");
const popupForm = popup.querySelector(".popup-form");
const dateArrival = popup.querySelector(".date-arrival");
const dateDeparture = popup.querySelector(".date-departure");
const adults = popup.querySelector(".adults");
const kids = popup.querySelector(".kids");

findButton.addEventListener("click",function (evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-show");
});

popupForm.addEventListener("submit", function (evt) {
  if (!dateArrival.value || !dateDeparture.value || !adults.value || !kids.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("kids", kids.value);
  }
});
