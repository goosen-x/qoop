import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { type ReactNode } from "react";
import { type Metadata } from "next";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "~/components/layout/header";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "qooooop",
  description: "Image gallery 'qoop'",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: ReactNode; modal: ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <body>
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <Header />
            <main className="overflow-y-scroll">{children}</main>
            {modal}
          </div>
          <div id="modal-root" />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
