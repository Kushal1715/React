import "./styles.css";
import { useState } from "react";
import datas from "./data";

function AccordianPage() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [selectMulti, setSelectMulti] = useState([]);

  const handleSingleSelection = (selectedId) => {
    setSelected(selectedId === selected ? null : selectedId);
  };

  const handleMultiSelection = (selectId) => {
    let selectedId = [...selectMulti];
    let index = selectedId.indexOf(selectId);

    index === -1 ? selectedId.push(selectId) : selectedId.splice(index, 1);
    setSelectMulti(selectedId);
    console.log(selectedId);
  };

  const EnableMultiSelection = () => {
    setEnableMulti(!enableMulti);
  };
  return (
    <div className="wrapper">
      <button className="button" onClick={EnableMultiSelection}>
        Enable Multi Selection
      </button>
      {datas && datas.length > 0 ? (
        datas.map((data) => (
          <div
            key={data.id}
            className="content"
            onClick={
              enableMulti
                ? () => handleMultiSelection(data.id)
                : () => handleSingleSelection(data.id)
            }
          >
            <div className="question">
              <h2>{data.question}</h2>
              <span>+</span>
            </div>
            <div className="answer">
              {enableMulti
                ? selectMulti.indexOf(data.id) !== -1 && (
                    <div>{data.answer}</div>
                  )
                : selected === data.id && <div>{data.answer}</div>}
            </div>
          </div>
        ))
      ) : (
        <div>NO data present</div>
      )}
    </div>
  );
}
export default AccordianPage;
