export function WorkCard({ image, title }) {
  return (
    <div className="relative group border-blue-500 cursor-pointer rounded-2xl overflow-hidden">
      <img
        width={500}
        height={500}
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-blue-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8">
        <span className="text-white text-xl font-semibold">{title}</span>
      </div>
    </div>
  );
}
