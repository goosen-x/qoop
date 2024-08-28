import { Modal } from "./modal";
import FullPageImageView from "~/components/layout/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) {
    throw new Error("Invalid image");
  }

  return (
    <Modal>
      <FullPageImageView photoId={idAsNumber} />
    </Modal>
  );
}
