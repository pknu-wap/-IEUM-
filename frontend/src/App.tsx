import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from '@/styles/Global.styles';
import MainPage from '@/pages/MainPage/MainPage';
import ClubDetailPage from '@/pages/ClubDetailPage/ClubDetailPage';
import AdminPage from './pages/AdminPage/AdminPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/ClubDetail' element={<ClubDetailPage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
