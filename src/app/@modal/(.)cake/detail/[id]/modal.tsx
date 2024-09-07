'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { BsChevronLeft, BsX } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }
  if (isDesktop)
    return createPortal(
      <div className="w-full modal-backdrop">
        <div className="w-[80vw] h-[80vh] font-family-cake bg-background text-white">
          <Button variant={'ghost'} onClick={onDismiss} className="absolute right-4 top-4 text-4xl" ><BsX /></Button>
          {children}
        </div>
      </div>,
      document.getElementById('modal-root')!
    );

  return createPortal(
    <dialog ref={dialogRef} className="m-0 w-[100vw] h-[100vh] font-family-cake bg-background text-white" onClose={onDismiss}>
      <Button variant={'ghost'} onClick={onDismiss} className="" ><BsChevronLeft /></Button>
      {children}
    </dialog>,
    document.getElementById('modal-root')!
  );
}
