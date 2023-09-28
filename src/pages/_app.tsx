import MainContainer from '@/components/Main/MainContainer'
import { UserProvider } from '@/data/contexts/UserContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </UserProvider>
  )
}
