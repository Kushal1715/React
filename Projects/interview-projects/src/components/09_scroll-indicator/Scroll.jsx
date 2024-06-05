import { useEffect, useState } from "react";
import "./styles.css";

export default function Scroll({ url }) {
  const [error, setError] = useState(false);
  const [datas, setDatas] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchUrl(getUrl) {
    try {
      const response = await fetch(getUrl);
      const data = await response.json();
      setDatas(data.products);
    } catch (e) {
      setError(true);
      console.log(e.message);
    }
  }

  const calculateScrollPercentage = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };
  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollPercentage);
  }, []);
  return (
    <div style={{ textAlign: "center" }} className="itemContainer">
      <p>{error && "Something went wrong"}</p>
      <h1 className="customScroll">Custom Scroll Indicator</h1>
      <div className="scrolls">
        <div style={{ width: `${scrollPercentage}%` }} className="scroll"></div>
      </div>
      <div className="items">
        {datas.map((data) => (
          <p key={data.id}>{data.title}</p>
        ))}
      </div>
    </div>
  );
}
