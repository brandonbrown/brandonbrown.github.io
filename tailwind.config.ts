import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['selector'],
  content: ['./src/**/*.{astro,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        
        sans: ['fractul-variable', ...defaultTheme.fontFamily.sans],
        mono: ['Geist Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        background: 'rgb(15, 23, 42)',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        additive: {
          DEFAULT: 'hsl(var(--additive))',
          foreground: 'hsl(var(--additive-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
      },
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::after': false,
            h2: {
              fontWeight: '500',
              fontVariationSettings: '"wght" 500',
              fontSize: '2.75rem',
              lineHeight: '1.2',
            },
            h3: {
              fontWeight: '600',
              fontVariationSettings: '"wght" 600',
              fontSize: '1.5rem',
            },
            h4: {
              fontWeight: '500',
              fontVariationSettings: '"wght" 500',
              fontSize: '1.25rem',
              textTransform: 'uppercase'
            },
            h5: {
              fontWeight: '500',
              fontVariationSettings: '"wght" 500',
              fontSize: '1.25rem',
            },
            h6: {
              fontWeight: '400',
              fontVariationSettings: '"wght" 400',
              fontSize: '1rem',
              textTransform: 'uppercase'
            },
            p: {
              fontWeight: '500',
              fontVariationSettings: '"wght" 500'
            },
            figcaption: {
              fontWeight: '400',
              fontVariationSettings: '"wght" 400',
              fontStyle: 'italic'
            },
            li: {
              fontWeight: '500',
              fontVariationSettings: '"wght" 500'
            },
            kbd: {
              color: 'black',
              fontWeight: '500',
              fontVariationSettings: '"wght" 500',
              borderWidth: '1px',
              borderColor: 'white',
            },
          }
        },
        white: {
          css: {
            color: theme('colors.slate.400'),
            h2: {
              fontWeight: '500',
              fontVariationSettings: '"wght" 500',
              fontSize: '2.75rem',
              lineHeight: '1.2',
            },
            h3: {
              fontWeight: '600',
              fontVariationSettings: '"wght" 600',
              fontSize: '1.5rem',
            },
            h4: {
              fontWeight: '500',
              fontVariationSettings: '"wght" 500',
              fontSize: '1.25rem',
              textTransform: 'uppercase'
            },
            h5: {
              fontWeight: '500',
              fontVariationSettings: '"wght" 500',
              fontSize: '1.25rem',
            },
            h6: {
              fontWeight: '400',
              fontVariationSettings: '"wght" 400',
              fontSize: '1rem',
              textTransform: 'uppercase'
            },
            p: {
              fontWeight: '500',
              fontVariationSettings: '"wght" 500'
            },
            figcaption: {
              fontWeight: '400',
              fontVariationSettings: '"wght" 400',
              fontStyle: 'italic'
            },
            li: {
              fontWeight: '500',
              fontVariationSettings: '"wght" 500'
            },
            kbd: {
              color: 'white',
              fontWeight: '500',
              fontVariationSettings: '"wght" 500',
              borderWidth: '1px',
              borderColor: 'white',
            },
            '--tw-prose-body': theme('colors.slate[50]'),
            '--tw-prose-headings': theme('colors.slate[300]'),
            '--tw-prose-lead': theme('colors.slate[50]'),
            '--tw-prose-links': theme('colors.teal[400]'),
            '--tw-prose-bold': theme('colors.slate[50]'),
            '--tw-prose-counters': theme('colors.slate[50]'),
            '--tw-prose-bullets': theme('colors.slate[50]'),
            '--tw-prose-hr': theme('colors.slate[50]'),
            '--tw-prose-quotes': theme('colors.slate[50]'),
            '--tw-prose-quote-borders': theme('colors.slate[50]'),
            '--tw-prose-captions': theme('colors.slate[50]'),
            '--tw-prose-code': theme('colors.slate[50]'),
            '--tw-prose-pre-code': theme('colors.slate[50]'),
            '--tw-prose-pre-bg': theme('colors.slate[50]'),
            '--tw-prose-th-borders': theme('colors.slate[50]'),
            '--tw-prose-td-borders': theme('colors.slate[50]'),
            '--tw-prose-invert-body': theme('colors.slate[50]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.slate[50]'),
            '--tw-prose-invert-links': theme('colors.teal[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.slate[50]'),
            '--tw-prose-invert-bullets': theme('colors.slate[50]'),
            '--tw-prose-invert-hr': theme('colors.slate[50]'),
            '--tw-prose-invert-quotes': theme('colors.slate[50]'),
            '--tw-prose-invert-quote-borders': theme('colors.slate[50]'),
            '--tw-prose-invert-captions': theme('colors.slate[50]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.slate[50]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.slate[50]'),
            '--tw-prose-invert-td-borders': theme('colors.slate[50]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), require('tailwindcss-animate'),
    plugin(
      function ({ addUtilities }) {
        addUtilities({
          '.font-thin': {
            fontWeight: '100',
            fontVariationSettings: '"wght" 100'
          }
        })
    
        addUtilities({
          '.font-extralight': {
            fontWeight: '200',
            fontVariationSettings: '"wght" 200'
          }
        })
    
        addUtilities({
          '.font-light': {
            fontWeight: '300',
            fontVariationSettings: '"wght" 300'
          }
        })
    
        addUtilities({
          '.font-normal': {
            fontWeight: '400',
            fontVariationSettings: '"wght" 400'
          }
        })
    
        addUtilities({
          '.font-medium': {
            fontWeight: '500',
            fontVariationSettings: '"wght" 500'
          }
        })
    
        addUtilities({
          '.font-semibold': {
            fontWeight: '600',
            fontVariationSettings: '"wght" 600'
          }
        })
    
        addUtilities({
          '.font-bold': {
            fontWeight: '700',
            fontVariationSettings: '"wght" 700'
          }
        })
    
        addUtilities({
          '.font-extrabold': {
            fontWeight: '800',
            fontVariationSettings: '"wght" 800'
          }
        })
    
        addUtilities({
          '.font-black': {
            fontWeight: '900',
            fontVariationSettings: '"wght" 900'
          }
        })
      }
    )
  ],
}

export default config
