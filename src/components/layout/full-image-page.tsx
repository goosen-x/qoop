import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView({
  photoId,
}: {
  photoId: number;
}) {
  const image = await getImage(photoId);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          className="flex-shrink object-contain"
          src={image.url}
          alt="random"
        />
      </div>
      <div className="border-1 flex w-48 flex-shrink-0 flex-col">
        <div className="text-xl font-bold">{image.name}</div>
        <div>Uploaded by: {uploaderInfo.fullName}</div>
        <div>Created on: {new Date(image.createdAt).toLocaleDateString()}</div>
      </div>
    </div>
  );
}
