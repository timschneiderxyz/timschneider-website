/*  ========================================================================
    # Components - Modal
    ========================================================================  */

'use client';

// Dependencies
import { forwardRef, useEffect } from 'react';

// Props
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: React.SetStateAction<boolean>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(({ isOpen, setIsOpen, children, ...props }, ref) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className={`z-50 fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm overflow-y-auto transition ${
        isOpen ? '' : 'opacity-0 invisible'
      }`}
      {...props}
    >
      <div className='relative flex justify-center items-end sm:items-center min-h-full px-4 py-20'>
        <div className='absolute inset-0' onClick={() => setIsOpen(false)} />
        <div
          className={`relative max-w-lg p-6 bg-zinc-950 border border-solid border-zinc-900 rounded-xl transition-transform ${
            isOpen ? '' : 'translate-y-12'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
});
Modal.displayName = 'Modal';

export default Modal;
