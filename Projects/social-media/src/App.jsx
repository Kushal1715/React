import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListParent from "./store/post-list-store";

function App() {
  const [active, setActive] = useState("Home");
  return (
    <>
      <PostListParent>
        <div className="containers">
          <Sidebar active={active} setActive={setActive} />
          <div className="content">
            <Header />
            {active === "Home" ? <PostList /> : <CreatePost />}

            <Footer />
          </div>
        </div>
      </PostListParent>
    </>
  );
}

export default App;
