import { useState } from "react";
import "./tabs.css";
export default function Tabs({ contents }) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleCurrentTab = (currentIndex) => {
    setCurrentTab(currentIndex);
  };

  return (
    <div>
      <div className="title">
        <div className="heading">
          {contents.map((head, index) => (
            <div onClick={() => handleCurrentTab(index)} key={head.label}>
              <h1>{head.label}</h1>
            </div>
          ))}
        </div>
        <div>
          {contents[currentTab] && (
            <div style={{ color: "black" }} className="tabContent">
              {contents[currentTab].content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
