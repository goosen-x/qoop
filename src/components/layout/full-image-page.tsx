import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView({
  photoId,
}: {
  photoId: number;
}) {
  const image = await getImage(photoId);

  return (
    <Image
      className="h-80 w-80 object-cover"
      src={image.url}
      alt="random"
      width={400}
      height={400}
    />
  );
}
