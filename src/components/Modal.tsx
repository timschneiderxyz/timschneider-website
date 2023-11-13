/*  ========================================================================
    # Components - Modal
    ========================================================================  */

'use client';

// Dependencies
import { forwardRef, useEffect } from 'react';
import clsx from 'clsx';

// Props
export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpen: React.SetStateAction<boolean>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, setIsOpen, className, children, ...props }, ref) => {
    useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }, [isOpen]);

    return (
      <div
        ref={ref}
        className={clsx(
          'z-50 fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm overflow-y-auto transition',
          isOpen ? '' : 'opacity-0 invisible',
          className
        )}
        {...props}
      >
        <div className='relative flex justify-center items-end sm:items-center min-h-full px-4 py-20'>
          <div className='absolute inset-0' onClick={() => setIsOpen(false)} />
          <div
            className={clsx(
              'relative max-w-lg p-6 bg-neutral-950 border border-solid border-neutral-900 rounded-md transition-transform duration-300',
              isOpen ? '' : 'translate-y-8'
            )}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);
Modal.displayName = 'Modal';

export default Modal;
