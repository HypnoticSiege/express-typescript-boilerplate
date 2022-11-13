/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./views/**/*.{ejs,html,js}",
        "./views/*.{ejs,html,js}"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui")
    ],
}