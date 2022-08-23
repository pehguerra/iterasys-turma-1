const { defineConfig } = require('cypress');
const fs = require('fs')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://conexaoqa.herokuapp.com',
        viewportHeight: 1080,
        viewportWidth: 1920,

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
                }
            })
        },
    },
});
