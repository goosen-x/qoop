"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadthing";
import { UploadSVG } from "./icons/upload";
import { toast } from "sonner";
import { Spinner } from "./icons/spinner";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

export const SimpleUploadButton = () => {
  const router = useRouter();
  const { inputProps, isUploading } = useUploadThingInputProps(
    "imageUploader",
    {
      onUploadBegin() {
        toast(
          <div className="flex gap-4">
            <Spinner /> Uploading...
          </div>,
          {
            duration: 5000,
            id: "upload-begin",
          },
        );
      },
      onClinetUploadComplete() {
        toast.dismiss("upload-begin");
        toast("Upload complete!");
        router.refresh();
      },
    },
  );

  return (
    <div>
      <label className="cursor-pointer" htmlFor="upload-button">
        <UploadSVG />
      </label>
      <input
        className="sr-only"
        id="upload-button"
        type="file"
        {...inputProps}
      />
    </div>
  );
};
