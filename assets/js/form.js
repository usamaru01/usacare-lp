export function initFormValidation() {

const form = document.querySelector('.contact-form');

const nameInput = form.querySelector('#name');
const nameErrArea = nameInput.closest('.form-field').nextElementSibling;
const nameErrMessage = nameErrArea.querySelector('.err_message');

const emailInput = form.querySelector('#email');
const emailErrArea = emailInput.closest('.form-field').nextElementSibling;
const emailErrMessage = emailErrArea.querySelector('.err_message');

const commentTextarea = form.querySelector('#comment');
const commentErrArea = commentTextarea.closest('.form-field').nextElementSibling;
const commentMessage = commentErrArea.querySelector('.err_message');

	function validateForm() {

		let hasError = false;

		if (nameInput.value === '') {
			nameErrMessage.textContent = 'お名前を入れてね！'
			nameErrArea.style.display = 'block';
			hasError = true;
		}

		if (emailInput.value === '') {
			emailErrMessage.textContent = 'メールアドレを入れてね！';
			emailErrArea.style.display = 'block';
			hasError = true;
		}
		else if (!emailInput.validity.valid) {
			emailErrMessage.textContent = '正しいメールアドレを入れてね！';
			emailErrArea.style.display = 'block';
			hasError = true;
		}

		if (commentTextarea.value === '') {
			commentMessage.textContent = 'コメントを入れてね！';
			commentErrArea.style.display = 'block';
			hasError = true;
		}
		else if (commentTextarea.value.length < 10) {
			commentMessage.textContent = '10文字以上入れてね！';
			commentErrArea.style.display = 'block';
			hasError = true;
		}

		//エラーなし true
		//エラーあり false
		return !hasError;

	}//validateForm

form.addEventListener('submit', (e) => {

	e.preventDefault();

	//エラーなし false
	//エラーあり true
	if(!validateForm()) return;

	const formData = new FormData(form);

	document.querySelectorAll('[data-confirm]').forEach(el => {
		const key = el.dataset.confirm;
		el.textContent = formData.get(key) ?? '';
	});

	form.hidden = true;
	confirmArea.hidden = false;

}); //submit

	//////// 正しく入力されたらエラー消す ////////
	nameInput.addEventListener('input', () => {
		if (nameInput.value !== '') {
			nameErrArea.style.display = 'none';
		}
	});
	emailInput.addEventListener('input', () => {
		if (emailInput.value !== '') {
			emailErrArea.style.display = 'none';
		}
	});
	commentTextarea.addEventListener('input', () => {
		if (commentTextarea.value.length >= 10) {
			commentErrArea.style.display = 'none';
		}
	});

//////// confirm area ////////
const confirmArea = document.querySelector('.js-confirm_area');
const backBtn = document.querySelector('.js_back');
const submitBtn = document.querySelector('.js_submit')

	if (backBtn){
		backBtn.addEventListener('click', (e) => {
			e.preventDefault();
			form.reset();
			form.hidden = false;
		});
	}

	if (submitBtn){
		submitBtn.addEventListener('click', (e) => {
			e.preventDefault();
			alert('ありがとう！');
			form.reset();
			confirmArea.hidden = true;
			form.hidden = false;
		});
	}





}
