import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './Admin/common/Loader';
import PageTitle from './Admin/components/PageTitle';
import SignIn from './Admin/pages/Authentication/SignIn';
import SignUp from './Admin/pages/Authentication/SignUp';
import Dashboard from './Admin/pages/Dashboard/Dashboard';
import Tables from './Admin/pages/Tables';
import DefaultLayout from './Admin/layout/DefaultLayout';
import LandingPage from './UI/pages/landingPage';
import RegisterPage from './UI/pages/registerPage';
import LoginPage from './UI/pages/loginPage';
import { Toaster } from 'react-hot-toast';
import AllBatsman from './Admin/pages/AllBatsman';
import AllBowler from './Admin/pages/AllBowler';
import AllOther from './Admin/pages/AllOthers';
import BatsmanDetails from './Admin/pages/BatsmanDetails';
import BowlerDetails from './Admin/pages/BowlerDetails';
import OtherDetails from './Admin/pages/OtherDetails';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  // Conditionally load the CSS based on the pathname
  useEffect(() => {
    if (
      pathname === '/' ||
      pathname === '/sign-up' ||
      pathname === '/sign-in'
    ) {
      import('../src/assets/style.css');
    }
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        {/* ////////////////////////UI ROUTES////////////// */}
        <Route
          index
          element={
            <>
              <PageTitle title="ALL Stars" />
              <LandingPage />
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <RegisterPage />
            </>
          }
        />
        <Route
          path="/sign-in"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <LoginPage />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/all-batsman"
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AllBatsman />
            </>
          }
        />
        <Route
          path="/all-bowler"
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AllBowler />
            </>
          }
        />
        <Route
          path="/all-other"
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AllOther />
            </>
          }
        />

        <Route
          path="/batsman/:id"
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <BatsmanDetails />
            </>
          }
        />
        <Route
          path="/bowler/:id"
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <BowlerDetails />
            </>
          }
        />
        <Route
          path="/other/:id"
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <OtherDetails />
            </>
          }
        />
      </Routes>
      <Toaster
        position="top-center"
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </>
  );
}

export default App;
