import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const SectionGallery = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, idx) => (
        <Image
          className="object-cover"
          // objectFit="fill"
          src={image.url}
          alt="random"
          width={200}
          height={200}
          key={`${image.id} + ${idx}`}
        />
      ))}
    </div>
  );
};
