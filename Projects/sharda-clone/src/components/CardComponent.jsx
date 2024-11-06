import { Card } from "flowbite-react";

export function CardComponent({ image, title, description }) {
  return (
    <Card
      className="max-w-full md:max-w-[500px] lg:max-w-sm text-center pt-6 rounded-xl border-blue-500 min-h-[400px] px-8 mx-auto flex flex-col justify-center items-center gap-0"
      renderImage={() => (
        <img className="h-32 w-32 " src={image} alt="services" />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-blue-500 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-lg text-center">
        {description}
      </p>
    </Card>
  );
}
