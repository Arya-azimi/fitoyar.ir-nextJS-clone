import Image from "next/image";

type Props = {
  imageSrc: string;
  imageSize: number;
  imageAlt: string;
  title: string;
  description: string;
};

export function ProgramIntroduction({
  imageSrc,
  imageSize,
  imageAlt,
  title,
  description,
}: Props) {
  return (
    <>
      <div className="w-[80px] h-[80px] flex justify-center items-center rounded-md shadow-md bg-gray-200 mb-6 dark:bg-gray-800">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageSize}
          height={imageSize}
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 mb-6">{description}</p>
    </>
  );
}
