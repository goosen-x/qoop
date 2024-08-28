"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="relative m-0 h-screen w-screen bg-black/90"
      onClose={onDismiss}
    >
      {children}
      <button
        onClick={onDismiss}
        className="absolute right-4 top-4 z-30 h-8 w-8 rounded-full bg-red-600 text-white"
      >
        X
      </button>
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
