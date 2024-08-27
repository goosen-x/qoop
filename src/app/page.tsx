import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const links = [
  "https://utfs.io/f/abe98bdd-043f-4d05-8564-c3bf7e16da65-1d.webp",
  "https://utfs.io/f/a88c1ef9-fda2-448c-8b64-d70c6ab02c02-1e.webp",
  "https://utfs.io/f/0e25d45f-185c-4b7a-99fd-783bc970ff1e-1f.webp",
  "https://utfs.io/f/f1878c37-eef4-4583-88fe-dc29d65161f3-1g.webp",
  "https://utfs.io/f/6e4f9b9a-3b12-4162-b859-34f42e02d542-1h.webp",
  "https://utfs.io/f/7257b023-9ae1-49da-9eca-c4ed553dd9d0-1i.webp",
];
const mockImages = links.map((url, idx) => ({ id: idx + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  // console.log("posts: ", posts);

  return (
    <main className="p-4">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image, idx) => (
          <Image
            src={image.url}
            alt="random"
            width={200}
            height={200}
            key={`${image.id} + ${idx}`}
          />
        ))}
      </div>
      <div>
        {posts.map((post) => (
          <div className="flex gap-2" key={post.id}>
            <h2>{post.id}</h2>
            <p>{post.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
