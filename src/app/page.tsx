import { SignedIn, SignedOut } from "@clerk/nextjs";
import { SectionGallery } from "~/components/sections/gallery";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div className="p-4">
      <SignedOut>
        <h1>Sign in to see images</h1>
      </SignedOut>
      <SignedIn>
        <SectionGallery />
      </SignedIn>
    </div>
  );
}
