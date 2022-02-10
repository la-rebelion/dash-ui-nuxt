import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'pathe'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'Dash UI on Nuxt3 | LR',
        meta: [
          // <meta name="viewport" content="width=device-width, initial-scale=1">
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        script: [
          // <script src="https://myawesome-lib.js"></script>
            //{ src: '~/node_module/bootstrap/dist/js/bootstrap.bundle.js', body: true }
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', body: true }
        ],
        link: [
          // <link rel="stylesheet" href="https://myawesome-lib.css">
          { rel: 'stylesheet', href: 'https://awesome-lib.css' }
        ],
        // please note that this is an area that is likely to change
        style: [
          // <style type="text/css">:root { color: red }</style>
          { children: ':root { color: red }', type: 'text/css' }
        ]
       },
    css: [
        // Load a Node.js module directly (here it's a Sass file)
        'feather-icons',
        // SCSS file in the project
        '@/assets/scss/theme.scss'
      ],
      alias: {
          'images': resolve(__dirname, './assets/images'),
          'css': resolve(__dirname, './assets/css')
      }
})
