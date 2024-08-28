"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";
import { UploadButton } from "~/lib/uploadthings";
import { cn } from "~/lib/utils";

type Props = ComponentPropsWithoutRef<"div">;

export const Header = ({ className, ...rest }: Props) => {
  const router = useRouter();

  return (
    <header
      className={cn(
        "flex justify-between bg-zinc-600 p-6 text-white",
        className,
      )}
      {...rest}
    >
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
