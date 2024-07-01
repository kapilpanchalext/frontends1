import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';

type Props = {
    open: boolean
    children: React.ReactNode
    onClose: () => void
}

const Modal = ({open, children, onClose}: Props) => {

    const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  const modalRoot = document.getElementById('modal');

  if (!modalRoot) return null;

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>, modalRoot
  )
}

export default Modal;