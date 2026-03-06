export function initModal(){

function getScrollWidth(){
	return window.innerWidth - document.documentElement.clientWidth;
}

const openButtons = document.querySelectorAll('.js_open_modal');
const closeButtons = document.querySelectorAll('.js_close_modal');
const body = document.body;

// 開く
openButtons.forEach(button =>{
	button.addEventListener('click', (e)=>{
		e.preventDefault();

		const targetId = button.dataset.modalTarget;
		const modal = document.getElementById(targetId);

		if(!modal) return;

		const scrollbarWidth = getScrollWidth();

		modal.classList.add('is-open');
		body.classList.add('is-modal-open');

		if(scrollbarWidth > 0){
		body.style.paddingRight = `${scrollbarWidth}px`;
		}
	});
});
// 閉じる
closeButtons.forEach(button =>{
	button.addEventListener('click',()=>{
		document.querySelectorAll('.modal.is-open').forEach(modal =>{
			modal.classList.remove('is-open');
		});

		body.classList.remove('is-modal-open');
		body.style.paddingRight = '';
	})
})
// Escapeキーでも閉じる
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		const modal = document.querySelector('.modal');

		if (modal.classList.contains('is-open')) {
			modal.classList.remove('is-open');
			document.body.classList.remove('is-modal-open');
			body.style.paddingRight = '';
		}
	}
});

}