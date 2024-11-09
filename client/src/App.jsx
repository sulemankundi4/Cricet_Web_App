import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './Admin/common/Loader';
import PageTitle from './Admin/components/PageTitle';
import Dashboard from './Admin/pages/Dashboard/Dashboard';
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
import ProtectedRoute from './UI/components/ProtectedRoute';
import { isAuthenticated } from './UI/utils/Auth.js';
import AllPlayers from './UI/pages/allPlayers';
import BatsmanDetailsUI from './UI/pages/batsmanDetails';
import BowlerDetailsUI from './UI/pages/bowlerDetails';
import OtherDetailsUI from './UI/pages/otherDetails';
import Events from './Admin/pages/Events/Events';
import CreateEvent from './Admin/pages/Events/CreateEvent';
import EventDetails from './Admin/pages/Events/EventDetails';
import EditEvent from './Admin/pages/Events/EditEvent';

import Partners from './Admin/pages/Partners/Partners';
import AddPartner from './Admin/pages/Partners/CreatePartner';
import EditPartner from './Admin/pages/Partners/EditPartner';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  const [cssLoading, setCssLoading] = useState(false); // New state for CSS loading

  useEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = '../src/assets/style.css';

    if (
      pathname === '/' ||
      pathname === '/sign-up' ||
      pathname === '/sign-in'
    ) {
      // Show CSS loader until the CSS is fully loaded
      setCssLoading(true);
      linkElement.onload = () => {
        setCssLoading(false); // Hide CSS loader when CSS is loaded
      };
      document.head.appendChild(linkElement);
    } else {
      // Remove the stylesheet if it exists in the head
      const existingLink = document.head.querySelector(
        "link[href='../src/assets/style.css']",
      );
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    }

    // Cleanup function to remove the stylesheet when unmounting or switching routes
    return () => {
      if (document.head.contains(linkElement)) {
        document.head.removeChild(linkElement);
      }
    };
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading || cssLoading) {
    return <Loader />;
  }
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
          path="/all-players"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <AllPlayers />
            </>
          }
        />

        <Route
          path="/events"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <Events />
            </>
          }
        />

        <Route
          path="/events/add"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <CreateEvent />
            </>
          }
        />

        <Route
          path="/event/:id"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <EventDetails />
            </>
          }
        />

        <Route
          path="/event/edit/:id"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <EditEvent />
            </>
          }
        />

        <Route
          path="/partners"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <Partners />
            </>
          }
        />

        <Route
          path="/add-partner"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <AddPartner />
            </>
          }
        />
        <Route
          path="/partner/edit/:id"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <EditPartner />
            </>
          }
        />

        <Route
          path="/batsman/ui/:id"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <BatsmanDetailsUI />
            </>
          }
        />

        <Route
          path="/bowler/ui/:id"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <BowlerDetailsUI />
            </>
          }
        />

        <Route
          path="/other/ui/:id"
          element={
            <>
              <PageTitle title="ALL Stars" />
              <OtherDetailsUI />
            </>
          }
        />

        {/* Add the new route */}
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
            <ProtectedRoute>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/all-batsman"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <AllBatsman />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/all-bowler"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <AllBowler />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/all-other"
          element={
            <>
              {' '}
              <ProtectedRoute>
                <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <AllOther />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/batsman/:id"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <BatsmanDetails />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/bowler/:id"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <BowlerDetails />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/other/:id"
          element={
            <>
              <ProtectedRoute>
                <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <OtherDetails />
              </ProtectedRoute>
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
