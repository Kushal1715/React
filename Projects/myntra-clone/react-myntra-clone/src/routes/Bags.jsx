import "../bag.css";
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";
import { useDispatch, useSelector } from "react-redux";
export default function Bags() {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bags);

  const newItems = items.filter((item) => {
    return bagItems.indexOf(item.id) >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {newItems.map((item) => (
              <BagItems item={item} key={item.id} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
}
