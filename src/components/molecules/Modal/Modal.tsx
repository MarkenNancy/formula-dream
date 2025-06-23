"use client";

import React, { useEffect, useState, useRef } from "react";
// import { useRouter, usePathname } from "next/navigation";
import ReactDOM from "react-dom";
// import { useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
// import { useLenis } from "lenis/react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  placement?: "right" | "center" | "left";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  modalClassName?: string;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  style?: React.CSSProperties;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  placement = "center",
  size = "medium",
  children,
  className,
  modalClassName,
  ...props
}) => {
  // const lenis = useLenis();
  const [isClosed, setIsClosed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsClosing(true);
    // lenis?.start();
    setTimeout(() => {
      setIsClosed(true);
      // router.push(pathname);
      // document.body.classList.remove("modalOpen");
      const htmlEl = document.querySelector("html");
      if (htmlEl) {
        htmlEl.classList.remove("modalOpen");
      }
      onClose();
    }, 500);
  };

  useEffect(() => {
    if (isClosing && !isOpen) {
      const closeTimer = setTimeout(() => {
        setIsClosed(true);
      }, 500);
      return () => clearTimeout(closeTimer);
    }
  }, [isClosing, isOpen]);

  useEffect(() => {
    if (isOpen) {
      // if (!thoughtstreamModal) {
      // document.body.classList.add("modalOpen");
      const htmlEl = document.querySelector("html");
      if (htmlEl) {
        htmlEl.classList.add("modalOpen");
      }
      // lenis?.stop();

      // }
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          handleClose();
          // router.push(pathname);
          // document.body.classList.remove("modalOpen");
          const htmlEl = document.querySelector("html");
          if (htmlEl) {
            htmlEl.classList.remove("modalOpen");
          }
          // lenis?.start();
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (isClosed) {
    return null;
  }
  if (!isOpen) {
    return null;
  }
  const ModalContent = (
    <div
      className={twMerge(
        `fixed inset-0 w-full h-full flex z-50 
      ${placement === "center" ? "items-center justify-center" : ""}
      ${placement === "right" ? "justify-end" : ""}`,
        modalClassName
      )}
      {...props}
    >
      <div
        ref={backgroundRef}
        className="bg-black bg-opacity-50 absolute inset-0 w-full h-full"
        onClick={handleClose}
      ></div>
      <div
        className={twMerge(
          `bg-white max-w-[100%] overflow-auto relative shadow-100 z-10 flex flex-col transition-all duration-200 delay-200
        ${
          placement === "center"
            ? "rounded-md !max-w-[90%] max-h-[90%]"
            : "h-full max-h-[100%]"
        }
        ${size === "small" ? "w-[30rem]" : ""}
        ${size === "medium" ? "w-[50rem]" : ""}
        ${size === "large" ? "w-[90rem]" : ""}
        ${isClosing ? "opacity-0" : ""}
        ${isClosing && placement === "center" ? "-translate-y-full" : ""}
        ${isClosing && placement === "right" ? "translate-x-full" : ""}
        ${isClosing && placement === "left" ? "-translate-x-full" : ""}
        `,
          className
        )}
      >
        <button
          title="close"
          onClick={handleClose}
          className="close absolute right-0 top-0 p-5 pb-0 z-20 me-5 border-l border-current"
        >
          <span className="text-sm font-bold">Close</span>
        </button>
        {children}
      </div>
    </div>
  );
  // const modalRoot = document.getElementById("modal-root") as HTMLElement;
  // if (!modalRoot) {
  //   return ModalContent;
  // }
  return ReactDOM.createPortal(ModalContent, document?.body);
};

interface ModalHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={twMerge(`pt-6 pb-5 px-10 border-b border-gray-100`, className)}
    >
      {children}
    </div>
  );
};

interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={twMerge(`px-10 py-6 flex-grow `, className)} {...props}>
      {/* overflow-auto */}
      {children}
    </div>
  );
};

interface ModalFooterProps {
  children: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return (
    <div className={`px-10 py-6 border-t border-gray-100`}>{children}</div>
  );
};
