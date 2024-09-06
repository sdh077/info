'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { BsX } from 'react-icons/bs';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="w-full modal-backdrop">
      <dialog ref={dialogRef} className="w-[80vw] font-family-cake bg-background text-white relative" onClose={onDismiss}>
        <button onClick={onDismiss} className="absolute right-4 top-4 text-4xl" ><BsX /></button>
        {children}

      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}