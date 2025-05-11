import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentTable from "./components/StudentTable/StudentTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentTable/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
