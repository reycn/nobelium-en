const BLOG = {
    title: "Reynard's Blog",
    author: 'Reynard',
    email: 'rey@pku.edu.cn',
    link: 'https://rongxin.me',
    description: 'Make sense of the world',
    lang: 'en-US',
    appearance: 'auto', // ['light', 'dark', 'auto'],
    font: 'serif', // ['sans-serif', 'serif']
    lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
    darkBackground: '#18181B', // use hex value, don't forget '#'
    path: '', // leave this empty unless you want to deploy Nobelium in a folder
    since: 2021, // If leave this empty, current year will be used.
    postsPerPage: 7,
    sortByDate: true,
    showAbout: true,
    showArchive: true,
    autoCollapsedNavBar: true, // the automatically collapsed navigation bar
    ogImageGenerateURL: 'https://og-image-craigary.vercel.app', // The link to generate OG image, don't end with a slash
    socialLink: 'https://twitter.com/reynardoffline',
    seo: {
        keywords: ['Blog', 'Website', 'Notion'],
        googleSiteVerification: '', // Remove the value or replace it with your own google site verification code
    },
    notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
    notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
    analytics: {
        provider: 'ga', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
        ackeeConfig: {
            tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
            dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
            domainId: '', // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
        },
        gaConfig: {
            measurementId: 'G-2QQDQYCXP5', // e.g: G-XXXXXXXXXX
        },
    },
    comment: {
        // support provider: gitalk, utterances, cusdis
        provider: 'cusdis', // leave it empty if you don't need any comment plugin
        gitalkConfig: {
            repo: '', // The repository of store comments
            owner: '',
            admin: [],
            clientID: '',
            clientSecret: '',
            distractionFreeMode: false,
        },
        utterancesConfig: {
            repo: '',
        },
        cusdisConfig: {
            appId: '6a580342-7df6-4053-ac80-9c6b8c62fccc', // data-app-id
            host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
            scriptSrc: 'https://cusdis.com/js/cusdis.es.js', // change this if you're using self-hosted version
        },
    },
    isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
// export default BLOG
module.exports = BLOG;
