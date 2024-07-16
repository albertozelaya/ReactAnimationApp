import { Route, Routes } from "react-router";
import { LandingPage } from "../pages";

export const BanhcafeDevRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={""} />
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </div>
  );
};
