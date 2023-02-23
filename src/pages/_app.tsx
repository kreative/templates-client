import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {4
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </QueryClientProvider>
  )
}
