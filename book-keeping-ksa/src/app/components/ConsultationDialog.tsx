import { useEffect, useRef, type MutableRefObject } from "react";
import { X } from "lucide-react";
import { HubSpotForm } from "./HubSpotForm";

type ConsultationDialogProps = {
  open: boolean;
  onClose: () => void;
  returnFocusRef: MutableRefObject<HTMLElement | null>;
};

export function ConsultationDialog({ open, onClose, returnFocusRef }: ConsultationDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      const previousOverflow = document.body.style.overflow;
      dialog.showModal();
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();

      return () => {
        document.body.style.overflow = previousOverflow;
        if (dialog.open) dialog.close();
        returnFocusRef.current?.focus();
      };
    }
  }, [open, returnFocusRef]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      aria-modal="true"
      aria-labelledby="consultation-dialog-title"
      className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-[620px] overflow-y-auto rounded-[20px] border border-[#c8e6f0] bg-white p-0 text-[#005f83] shadow-2xl backdrop:bg-[#003f59]/75"
    >
      <div className="relative p-6 md:p-9">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close consultation form"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#c8e6f0] bg-white text-[#005f83] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00bfff]"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="pr-12 text-center">
          <h2 id="consultation-dialog-title" className="text-[25px] font-semibold leading-[1.25]">
            Book your free consultation
          </h2>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#4a5568]">
            Share your details and our team will be in touch within one working day.
          </p>
        </div>
        <HubSpotForm containerId="hubspot-form-cta" theme="light" className="mx-auto mt-6 max-w-[560px]" />
      </div>
    </dialog>
  );
}
