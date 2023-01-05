import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "./Wrapper";
import SinglePost from "./SinglePost";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" exact element={<Wrapper />} />
          <Route path="/:id" exact element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
