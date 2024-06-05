import AccordianPage from "./components/01_accordian/AccordianPage.jsx";
// import ChangeTheme from "./components/08_change light/dark/ChangeTheme.jsx";
import ImageSlider from "./components/04_image-slider/ImageSlider.jsx";
import LoadMoreData from "./components/05_load-more-data/LoadMoreData.jsx";
import QrCode from "./components/07_qr-code-generator/QrCode.jsx";
import RandomColor from "./components/02_random-color/RandomColor.jsx";
import StarRating from "./components/03_star-rating/StarRating.jsx";
import TreeView from "./components/06_tree-view/TreeView.jsx";
import Scroll from "./components/09_scroll-indicator/Scroll.jsx";
import CustomTab from "./components/10_custom-tabs/CustomTab.jsx";
import Modal from "./components/11_modal-popup/Modal.jsx";
import GithubProfile from "./components/12_github-profile-finder/GithubProfile.jsx";
import SearchAutoComplete from "./components/13_search_auto-complete/SearchAutoComplete.jsx";

function App() {
  return (
    <>
      <AccordianPage />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
      <LoadMoreData />
      <TreeView />
      <QrCode />
      {/* <ChangeTheme /> */}
      <Scroll url={"https://dummyjson.com/products?limit=100"} />
      <CustomTab />
      <Modal />
      <GithubProfile />
      <SearchAutoComplete />
    </>
  );
}

export default App;
