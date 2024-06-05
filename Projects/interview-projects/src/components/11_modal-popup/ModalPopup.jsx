import "./modal.css";

export default function ModalPopup({ header, body, footer, closeModal }) {
  return (
    <div className="modal">
      <div className="modalContainer">
        <span onClick={closeModal}>&#x2716;</span>
        <div className="modalHeader">
          {header ? header : <h1>This is a header</h1>}
        </div>
        <div className="modalBody">{body ? body : <p>This is a body</p>}</div>
        <div className="modalFooter">
          {footer ? footer : <p>This is a footer</p>}
        </div>
      </div>
    </div>
  );
}
