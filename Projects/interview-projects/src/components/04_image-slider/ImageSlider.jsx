import { useEffect, useState } from "react";
import "./styles.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export default function ImageSlider({ url, page, limit }) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [slider, setSlider] = useState(0);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    url !== "" && fetchImages(url);
  }, [url]);

  const handleLeft = () => {
    setSlider(slider === 0 ? images.length - 1 : slider - 1);
  };
  const handleRight = () => {
    setSlider(slider === images.length - 1 ? 0 : slider + 1);
  };

  if (loading) {
    return <div>Loading ! please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Something went wrong {errorMsg}</div>;
  }
  return (
    <div className="container">
      <FaArrowCircleLeft className="arrow leftArrow" onClick={handleLeft} />
      {images.map((image, index) => (
        <img
          alt={image.download_url}
          key={image.id}
          src={image.download_url}
          className={index === slider ? "image" : "image hideImage"}
        />
      ))}
      <FaArrowCircleRight className="arrow rightArrow" onClick={handleRight} />
      <span className="circleIndicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === slider ? "circle" : "circle hideCircle"}
          ></button>
        ))}
      </span>
    </div>
  );
}
