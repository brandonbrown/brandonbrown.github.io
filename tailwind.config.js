const colors = require(`tailwindcss/colors`)

module.exports = {
    purge: [`./src/**/*.{js,jsx,ts,tsx}`],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            gray: colors.coolGray,
            blue: `rgba(52, 180, 235, .5)`,
            red: `#f00`,
            pink: colors.fuchsia,
        },
        fontFamily: {
            regular: [`Fractul`, `sans-serif`],
            alt: [`FractulAlt`, `sans-serif`],
        },
        extend: {
            spacing: {
                '128': `32rem`,
                '144': `36rem`,
            },
            borderRadius: {
                '4xl': `2rem`,
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
