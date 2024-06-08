import Footer from "../components/Footer";
import Header from "../components/Header";
import "../index.css";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
function App() {
  const fetching = useSelector((store) => store.fetching);
  return (
    <>
      <FetchItems />
      <Header />
      {fetching.loading ? <Loader /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
