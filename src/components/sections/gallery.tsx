import Image from "next/image";
import { db } from "~/server/db";

export const SectionGallery = async () => {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, idx) => (
        <Image
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
