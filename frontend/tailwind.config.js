/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				'my-gray': '#F9FAFB',
			},
			outlineColor: {
				'my-gray': '#D0D5DD',
			},
			colors: {
				'my-black-100': '#344054',
				'my-black-500': '#101828',
				'my-gray-100': '#667085',
				'my-gray-200': '#475467',
				'my-blue': '#155EEF',
			},
			fontSize: {
				sm: '12px',
				base: '14px',
				md: '18px',
				lg: '22px',
			},
		},
	},
	plugins: [],
};
