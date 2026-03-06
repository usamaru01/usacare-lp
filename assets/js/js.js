export function initScrollAnimation() {
	const elements = document.querySelectorAll('.about_reason img, .block p, h2[data-sub]');
	const inViewClass = 'is-in-view';

	// 画面の中央付近の帯に来たとき isIntersecting、出たとき false
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(inViewClass);
				} else {
					entry.target.classList.remove(inViewClass);
				}
			});
		},
		{
			root: null,
			rootMargin: '-30% 0px -30% 0px',
			threshold: 0
		}
	);

	elements.forEach((el) => observer.observe(el));
}