import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail";
import store from "./redux/store";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";
import Popular from "./pages/Popular";
import Dashboard from "./pages/Dashboard";
import Protected from "./components/Protected";
import RedirectIfProtected from "./components/RedirectIfProtected";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route
                path="/user/dashboard"
                element={
                  <Protected>
                    <Dashboard />
                  </Protected>
                }
              />
              <Route
                path="/login"
                element={
                  <RedirectIfProtected>
                    <Login />
                  </RedirectIfProtected>
                }
              />
              <Route
                path="/register"
                element={
                  <RedirectIfProtected>
                    <Register />
                  </RedirectIfProtected>
                }
              />
            </Route>
            <Route path="/popular/:id" element={<Detail />} />
            <Route
              path="/popular"
              element={
                <Protected>
                  <Popular />
                </Protected>
              }
            />
            <Route path="/" element={<LandingPage />} />
          </Routes>

          <ToastContainer theme="colored" />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
