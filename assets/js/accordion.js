export function initAccordion() {

	const acc_items = document.querySelectorAll('.js_acc_item');

	acc_items.forEach(acc_item => {
		const trigger = acc_item.querySelector('.js_acc_title');
		const acc_content = acc_item.querySelector('.js_acc_content');

		trigger.addEventListener('click', () => {

			if (acc_item.classList.contains('open')) {

				acc_content.style.height = acc_content.scrollHeight + 'px';

				requestAnimationFrame(() => {
					acc_item.classList.remove('open');
					acc_content.style.height = '0px';
					trigger.setAttribute('aria-expanded', 'false');
				});

			} else {

				acc_item.classList.add('open');
				acc_content.style.height = '0px';
				acc_content.hidden = false;
				trigger.setAttribute('aria-expanded', 'true');

				requestAnimationFrame(() => {
					acc_content.style.height = acc_content.scrollHeight + 'px';
				});

				acc_content.addEventListener('transitionend', function handler(e) {
					if (e.propertyName !== 'height') return;
					acc_content.style.height = 'auto';
					acc_content.removeEventListener('transitionend', handler);
				});

			}//if
		});//click
	});//forEach
};//initAccordion()

