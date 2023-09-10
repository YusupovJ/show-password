const eye = document.querySelector(".form__show-password");

if (eye) {
	eye.addEventListener("click", (e) => {
		eye.classList.toggle("show");
		if (eye.classList.contains("show")) {
			document.querySelector(".form__password > .form__input").setAttribute("type", "text");
		} else {
			document.querySelector(".form__password > .form__input").setAttribute("type", "password");
		}
		e.preventDefault();
	});
}
