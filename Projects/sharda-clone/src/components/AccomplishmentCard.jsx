export function AccomplishmentCard({ image, title, desc }) {
  return (
    <div className="w-full rounded-xl overflow-hidden border-2 px-6 pt-6">
      <div className="h-60 xl:h-44 w-full">
        <img className="h-full w-full object-cover" src={image} alt="blogs" />
      </div>
      <div className=" pt-8 pb-4">
        <h5 className="text-2xl font-bold tracking-tight text-blue-500 dark:text-white pb-4">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 pb-8 text-lg">
          {desc}
        </p>
      </div>
    </div>
  );
}
