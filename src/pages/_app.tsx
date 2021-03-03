import '../styles/global.css'

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
    return (
        <ChallengesContext.Provider value={{ level: 1 }}>
            <Component {...pageProps} />
        </ChallengesContext.Provider>
    )
}

export default MyApp
