import { useSelector } from "react-redux";

export default function BagSummary() {
  const bagItems = useSelector((store) => store.bags);
  const items = useSelector((store) => store.items);

  const newItems = items.filter((item) => {
    return bagItems.indexOf(item.id) >= 0;
  });

  const totalItem = newItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  newItems.forEach((bag) => {
    totalMRP += bag.original_price;
    totalDiscount += bag.original_price - bag.current_price;
  });

  const finalPayment = totalMRP - totalDiscount + 99;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">Rs.{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -Rs.{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">Rs.99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">Rs.{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
}
