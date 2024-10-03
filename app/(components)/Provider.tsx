'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false
    }
  }
})

const TanstackQueryProvider = ({ children }: { children: ReactNode }) => {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default TanstackQueryProvider;
