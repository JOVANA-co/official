"use client";

import { type DialogHTMLAttributes, useEffect, useRef } from "react";
import styled from "styled-components";

interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  open: boolean;
  setOpen?: (prev: boolean) => void;
}

const Dialog = styled.dialog`
  padding: 1rem 3rem;
  background: white;
  max-width: 400px;
  padding-top: 2rem;
  border-radius: 20px;
  border: 0;
  box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);
  animation: fadeIn 1s ease both;
  margin: auto;
  &::backdrop {
    animation: fadeIn 1s ease both;
    background: rgb(255 255 255 / 40%);
    z-index: 2;
    backdrop-filter: blur(10px);
  }
  .x {
    filter: grayscale(1);
    border: none;
    background: none;
    position: absolute;
    top: 15px;
    right: 10px;
    transition: ease filter, transform 0.3s;
    cursor: pointer;
    transform-origin: center;
    &:hover {
      filter: grayscale(0);
      transform: scale(1.1);
    }
  }
  h2 {
    font-weight: 600;
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.3rem;
    padding: 0.5rem 0;
    a {
      &:visited {
        color: rgb(var(--vs-primary));
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default function Modal({ open, setOpen, ...props }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  useEffect(() => {
    if (open) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [open]);

  return (
    <Dialog id="dialog" ref={dialogRef} {...props}>
      <h2>Hello.</h2>
      <p>
        A CSS-only modal based on the{" "}
        <a
          href="https://developer.mozilla.org/es/docs/Web/CSS/::backdrop"
          target="_blank"
        >
          ::backdrop
        </a>{" "}
        pseudo-class. Hope you find it helpful.
      </p>
      <p>
        You can also change the styles of the <code>::backdrop</code> from the
        CSS.
      </p>
      <button
        aria-label="close"
        className="x"
        onClick={() => {
          setOpen?.(false);
        }}
      >
        ❌
      </button>
    </Dialog>
  );
}
