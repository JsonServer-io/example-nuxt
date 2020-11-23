require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})
let env = process.env

export default {

    ssr: true,

    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ]
    },

    loading: {color: '#fff'},

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
    ],

    axios: {
        browserBaseURL: env.BASE_API_URL,
        // IMPORTANT because GET requests which using preflight will fail because of cors does not allow
        // accept wildcard origins with included credentials for security reasons.
        credentials: false,
        headers: {
            'X-Jsio-Token': 'put-your-token-here'
        }
    },

    // If you are using axios proxy, use the api.jsonserver.io (env development)
    // in the axios proxy targets instead of axios base url

    // axios: {
    //     browserBaseURL: env.BASE_BROWSER_URL,
    //     credentials: true,
    //     proxy: true
    // },

    // proxy: {
    //     '/api/': {
    //         target: env.BASE_API_URL,
    //     },
    // },
}
