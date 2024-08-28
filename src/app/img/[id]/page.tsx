import FullPageImageView from "~/components/layout/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) {
    throw new Error("Invalid image");
  }

  return <FullPageImageView photoId={idAsNumber} />;
}
