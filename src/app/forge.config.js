module.exports = {
  hooks: {
    generateAssets: async () => {
      console.log('Building main process...')

      const match = process.argv.join(' ').match(/electron-forge-(\w+).js$/)
      const command = match && match[1]
      const isDevelopment = command === 'start'

      const { execSync } = require('child_process')

      if (isDevelopment) {
        execSync('npm run build:main:dev', { stdio: 'inherit' })
        return;
      }

      execSync(`npm run build:renderer:prod`, { stdio: 'inherit' })
      execSync('npm run build:main:prod', { stdio: 'inherit' })
    },
  },
};
