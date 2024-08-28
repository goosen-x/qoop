import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "~/lib/utils";
import { SimpleUploadButton } from "../upload-button";

type Props = ComponentPropsWithoutRef<"div">;

export const Header = ({ className, ...rest }: Props) => {
  return (
    <header
      className={cn("flex justify-between bg-lime-300 p-6", className)}
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
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
