/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		container: {
			center: true,
			padding: "25px",
		},
		extend: {
			colors: {
				primary: "#043175",
			},
		},
	},
	plugins: [],
};
