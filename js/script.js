var link = document.querySelector(".contacts .button-red");
var popupFeedback = document.querySelector(".popup.feedback");
var popupFeedback = document.querySelector(".popup.feedback");
var popupFeedback = document.querySelector(".popup.feedback");
var close = popupFeedback.querySelector(".close");
var userName = popupFeedback.querySelector("[name=user-name]");
var email = popupFeedback.querySelector("[name=email]");
var feedbackText = popupFeedback.querySelector("[name=feedback-text]");
var form = popupFeedback.querySelector("form");
var storageName = "";
var storageEmail = "";
var isStorageSupport = true;

try {
	storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("email");
} catch(err) {
	isStorageSupport = false;
}
// console.log(userName);

link.addEventListener("click", function (evt) {
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

close.addEventListener("click", function (evt) {
	evt.preventDefault();
  popupFeedback.classList.add("modal-close");
  popupFeedback.classList.remove("modal-error");
  setTimeout(function () {
	popupFeedback.classList.remove("modal-show");
}, 600);
	// console.log("222");
});


window.addEventListener("keydown", function (evt) {
	// evt.preventDefault();
	if (evt.keyCode === 27) {
	if (popupFeedback.classList.contains("modal-show")) {
		popupFeedback.classList.remove("modal-show");
	}
  if (popupFeedback.classList.contains("modal-error")) {
    popupFeedback.classList.remove("modal-error");
  }
	// console.log("222");
}
});

form.addEventListener("submit", function(evt) {
	if (!userName.value || !email.value || !feedbackText.value) {
	evt.preventDefault();
  popupFeedback.classList.remove("modal-error");
  popupFeedback.offsetWidth = popupFeedback.offsetWidth;
  popupFeedback.classList.add("modal-error");
	// console.log("333");
} else {
	if (isStorageSupport) {
		localStorage.setItem("userName", userName.value);
		localStorage.setItem("email", email.value);
	}
}
	// evt.preventDefault();
	// console.log(userName.value);
	// console.log(email.value);
	// console.log(feedbackText.value);
});









