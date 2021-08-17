const colors = require(`tailwindcss/colors`)

module.exports = {
    purge: [`./src/**/*.{js,jsx,ts,tsx}`],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            gray: colors.coolGray,
            blue: `rgba(52, 180, 235, .5)`,
            main: `hsl(205,94%,6%)`,
            red: `hsl(2,70%,50%)`,
            pink: colors.fuchsia,
            white: `#fff`,
            transparent: `hsla(2,70%,50%,0)`
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
