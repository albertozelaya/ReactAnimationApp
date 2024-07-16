import { BrowserRouter } from "react-router-dom";
import { BanhcafeDevRouter } from "./router/BanhcafeDevRouter";
export const AnimationDevApp = () => {
  return (
    <>
      <BrowserRouter>
        <BanhcafeDevRouter />
      </BrowserRouter>
    </>
  );
};
