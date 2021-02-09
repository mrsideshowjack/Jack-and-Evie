// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jack & Evie',
  plugins:[
    {
        use: 'gridsome-plugin-pwa',
        options: {
            // Service Worker Options
            disableServiceWorker: false,
            serviceWorkerPath: 'service-worker.js',
            cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
            disableTemplatedUrls: false, 
            // Manifest Options
            manifestPath: 'manifest.json',
            title: 'Jack & Evie',
            startUrl: '/',
            display: 'minimal-ui',
            statusBarStyle: 'default',
            themeColor: '#666600',
            backgroundColor: '#ffffff',
            icon: './static/icons/icon.png',
            svgFavicon: './static/icons/icon.svg', 
            maskableIcon: false,
            shortName: 'Jack & Evie',
            description: 'Jack & Evie wedding',
            lang: 'en-GB',        
            msTileColor: '#666600',
            gcmSenderId: undefined,
        }
    }
  ]
}
