import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export function BlogCard({ image, title, desc, date }) {
  return (
    <div className="w-full rounded-xl overflow-hidden border-2">
      <div className="h-60 xl:h-44 w-full">
        <img className="h-full w-full object-cover" src={image} alt="blogs" />
      </div>
      <div className="px-8 pt-8 pb-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-4">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 pb-8">
          {desc}
        </p>
        <Link
          to="/blogDetails"
          className="text-sm text-blue-500 font-bold hover:underline"
        >
          READ MORE
        </Link>
      </div>
      <div className="border-2 border-gray-100"></div>
      <div className="px-8 py-4 ">
        <p className="text-sm text-blue-700">{date} . No comments</p>
      </div>
    </div>
  );
}
