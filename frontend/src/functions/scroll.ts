export const scroll = (to: string) => {
	const el = document.getElementById(to);
	if (el) {
		el.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}
};
