/*  ========================================================================
    # Components - Modal
    ========================================================================  */

'use client';

import { useModalStore } from '@/stores/modal';
import { useEffect } from 'react';
import clsx from 'clsx';

const Modal = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { isOpen, close, content } = useModalStore();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <div
      className={clsx(
        'z-50 fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm overflow-y-auto transition',
        isOpen ? '' : 'opacity-0 invisible',
        className
      )}
      {...props}
    >
      <div className='relative flex justify-center items-end sm:items-center min-h-full px-4 py-20'>
        <div className='absolute inset-0' onClick={() => close()} />
        <div
          className={clsx(
            'relative max-w-lg p-6 bg-neutral-950 border border-solid border-neutral-900 rounded-md transition-transform duration-300',
            isOpen ? '' : 'translate-y-8'
          )}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
