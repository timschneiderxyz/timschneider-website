/*  ========================================================================
    # Stores - Modal
    ========================================================================  */

import { create } from 'zustand';

export type ModalStore = {
  isOpen: boolean;
  open: (content: string) => void;
  close: () => void;
  content: string;
};

export const useModalStore = create<ModalStore>(set => ({
  isOpen: false,
  open: content => set(() => ({ isOpen: true, content })),
  close: () => set(() => ({ isOpen: false, content: '' })),
  content: ''
}));
