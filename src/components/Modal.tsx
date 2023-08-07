/*  ========================================================================
    # Components - Modal
    ========================================================================  */

'use client';

// Dependencies
import { useEffect } from 'react';

const Modal = ({
  isOpen,
  setIsOpen,
  children
}: {
  isOpen: React.SetStateAction<boolean>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <div
      className={`z-30 fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm overflow-y-auto transition-all ${
        isOpen ? '' : 'opacity-0 invisible'
      }`}
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
};

export default Modal;
