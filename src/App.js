import React from "react";

import Header from "./components/Header";
import Communities from "./components/Communities";
import SidePanel from "./components/SidePanel";
import { Route, Routes } from "react-router-dom";
import ActivePage from "./pages/Active";
import AnotherPage from "./pages/Another";
import { useStoreState } from "easy-peasy";

const App = () => {
  const {communities, menuItems} = useStoreState((state) => state.data);
  return (
    <>
      <div className="font-inter">
        <Header />
        <div className="flex flex-row">
          <div className="flex-row lg:flex hidden">
            <Communities communities={communities} />
            <SidePanel menuItems={menuItems}></SidePanel>
          </div>
          <Routes>
            <Route path="/Active" element={<ActivePage />} />
            <Route path="/Review-submission" element={<AnotherPage title="Review-submission Page" />} />
            <Route path="/Rewards" element={<AnotherPage title="Rewards Page" />} />
            <Route path="/Leaderboard" element={<AnotherPage title="Leaderboard Page" />} />
            <Route path="/settings" element={<AnotherPage title="Settings Page" />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
