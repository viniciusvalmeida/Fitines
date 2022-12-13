import '../styles/globals.css'

(async () => {
  const sequelize = require('../config/sequelize')

  sequelize.sync()
})()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
