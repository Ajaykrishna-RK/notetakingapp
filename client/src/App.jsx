import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Singlepage from "./pages/home/Singlepage";
import CreateTodo from "./pages/createTodo/CreateTodo";
import EditTodo from "./pages/edittodo/EditTodo";
import Login from "./pages/login/Login";
import Signup from "./pages/home/signup/Signup";
import Authentication from "./components/Authentication";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Authentication>
              <Home />
            </Authentication>
          }
        />
        <Route path="/singlepage/:id" element={<Singlepage />} />
        <Route
          path="/createtodo"
          element={
            <Authentication>
              <CreateTodo />
            </Authentication>
          }
        />
        <Route
          path="/edittodo"
          element={
            <Authentication>
              <EditTodo />
            </Authentication>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
