const { defineConfig } = require('cypress');
const fs = require('fs')

module.exports = defineConfig({
    projectId: 'ivtnpk',
    e2e: {
        baseUrl: 'https://conexaoqa.herokuapp.com',
        viewportHeight: 1080,
        viewportWidth: 1920,
        defaultCommandTimeout: 8000,
        requestTimeout: 10000,
        retries: {
            runMode: 2,
            openMode: 0
        },

        // eslint-disable-next-line
        setupNodeEvents(on, config) {
            
            // listener
            on('task', {

                msgConsole() {
                    console.log('teste de mensagem no node')

                    return null
                },

                lerPasta(caminho) {
                    return fs.readdirSync(caminho).length
                },

                lerEmail() {
                    return process.env.email
                }
            })
        },
    },
});
