import React, { useEffect, useState } from "react";
import { WorkCard } from "./WorkCard";
import { works } from "../data";
import { useLocation } from "react-router-dom";

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [pathname, setPathname] = useState(null);
  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredCategory =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, []);
  return (
    <div className="px-4 xl:px-[180px] pt-14 bg-gray-200 pb-14">
      <div className="pb-14">
        <h1 className="text-center text-4xl font-bold pb-6">
          Our Recent Works
        </h1>
        {pathname === "/our-works" && (
          <p className="text-xl mx-auto text-center max-w-[900px]">
            Our Recent Works showcases the latest projects we have completed for
            our clients. From digital marketing campaigns to web design and
            development, our team of experts is always pushing the boundaries to
            deliver exceptional results.
          </p>
        )}
      </div>
      <div className="flex justify-center items-center pb-10">
        <ul className="flex gap-6 flex-wrap justify-center text-xl">
          <li
            className={
              selectedCategory === "All" ? `text-blue-500` : `text-black`
            }
          >
            <button onClick={() => handleCategory("All")}>All</button>
          </li>
          <li
            className={
              selectedCategory === "Commercial Ads"
                ? `text-blue-500`
                : `text-black`
            }
          >
            <button onClick={() => handleCategory("Commercial Ads")}>
              Commercial Ads
            </button>
          </li>
          <li
            className={
              selectedCategory === "Designs" ? `text-blue-500` : `text-black`
            }
          >
            <button onClick={() => handleCategory("Designs")}>Designs</button>
          </li>
          <li
            className={
              selectedCategory === "Explainer Videos"
                ? `text-blue-500`
                : `text-black`
            }
          >
            <button onClick={() => handleCategory("Explainer Videos")}>
              Explainer Videos
            </button>
          </li>
          <li
            className={
              selectedCategory === "Photography"
                ? `text-blue-500`
                : `text-black`
            }
          >
            <button onClick={() => handleCategory("Photography")}>
              Photography
            </button>
          </li>
          <li
            className={
              selectedCategory === "Talk Show" ? `text-blue-500` : `text-black`
            }
          >
            <button onClick={() => handleCategory("Talk Show")}>
              Talk Show
            </button>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategory.map((work, i) => (
          <WorkCard image={work.img} title={work.title} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Works;
