import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

createBrowserRouter;
createRoutesFromElements;
Outlet;
Route;
RouterProvider;

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    )
  );

  return (
    <div>
      {" "}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
