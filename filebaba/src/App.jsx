import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

// Import your page components
import Landing from "./pages/Landing.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Upload from "./pages/Upload.jsx";
import MyFiles from "./pages/MyFiles.jsx";
import PublicFileView from "./pages/PublicFileView.jsx";
import Transactions from "./pages/Transactions.jsx";
import Subscription from "./pages/Subscription.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/upload"
          element={
            <>
              <SignedIn>
                <Upload />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/my-files"
          element={
            <>
              <SignedIn>
                <MyFiles />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="/public-file-view" element={<PublicFileView />} />
        <Route
          path="/transactions"
          element={
            <>
              <SignedIn>
                <Transactions />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/subscription"
          element={
            <>
              <SignedIn>
                <Subscription />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="*" element={<RedirectToSignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
