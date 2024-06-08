import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bags";
export default function HomeItems({ item }) {
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addBagItems(item.id));
  };

  const handleOnRemove = () => {
    dispatch(bagActions.removeBagItems(item.id));
  };

  const bagItems = useSelector((store) => store.bags);
  const confirmItems = bagItems.indexOf(item.id) >= 0;
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">{item.discount_percentage}% OFF</span>
      </div>
      {confirmItems ? (
        <button className="btn-add-bag btn btn-danger" onClick={handleOnRemove}>
          Remove from Bag
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleAddToBag}>
          Add to Bag
        </button>
      )}
    </div>
  );
}
