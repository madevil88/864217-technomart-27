var openFeedback = document.querySelector(".contacts .button-red");
var openMap = document.querySelector(".contacts-map");
var popupFeedback = document.querySelector(".popup.feedback");
var popupMap = document.querySelector(".popup.map");
var closeFeedback = popupFeedback.querySelector(".feedback .close");
var closeMap = popupMap.querySelector(".map .close");
var userName = popupFeedback.querySelector("[name=user-name]");
var email = popupFeedback.querySelector("[name=email]");
var feedbackText = popupFeedback.querySelector("[name=feedback-text]");
var form = popupFeedback.querySelector("form");
var storageName = "";
var storageEmail = "";
var isStorageSupport = true;

// Форма с сообщением
try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

openFeedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupFeedback.classList.add("modal-show");
  userName.focus();
  if (storageName) {
    userName.value = storageName;
    email.focus();
  }
  if (storageEmail) {
    email.value = storageEmail;
    feedbackText.focus();
  }
});

closeFeedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (popupFeedback.classList.contains("modal-show")) {
    popupFeedback.classList.add("modal-close");
    setTimeout(function() {
      popupFeedback.classList.remove("modal-show");
      popupFeedback.classList.remove("modal-close");
    }, 600);
  }
  if (popupFeedback.classList.contains("modal-error")) {
    popupFeedback.classList.remove("modal-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupFeedback.classList.contains("modal-show")) {
      popupFeedback.classList.add("modal-close");
      setTimeout(function() {
        popupFeedback.classList.remove("modal-show");
        popupFeedback.classList.remove("modal-close");
      }, 600);
    }
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.add("modal-close");
      setTimeout(function() {
        popupMap.classList.remove("modal-show");
        popupMap.classList.remove("modal-close");
      }, 600);
    }
    if (popupFeedback.classList.contains("modal-error")) {
      popupFeedback.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function(evt) {
  if (!userName.value || !email.value || !feedbackText.value) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-error");
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

// Интеррактивная карта
openMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (popupMap.classList.contains("modal-show")) {
    popupMap.classList.add("modal-close");
    setTimeout(function() {
      popupMap.classList.remove("modal-show");
      popupMap.classList.remove("modal-close");
    }, 600);
  }
});
