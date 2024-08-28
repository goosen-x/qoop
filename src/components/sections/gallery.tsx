import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const SectionGallery = async () => {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id}>
          <Link href={`/img/${image.id}`}>
            <Image
              className="h-40 w-40 object-cover"
              src={image.url}
              alt="random"
              width={200}
              height={200}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
};
