import { useState } from "react";
import { Dialog } from "@headlessui/react";

function MyDialog() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <div className="modal">
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full container max-w-md mx-auto items-center justify-center p-4">
            <Dialog.Panel as="div" className="p-4 rounded-xl bg-black">
              <Dialog.Title>Deactivate account</Dialog.Title>
              <Dialog.Description>
                This will permanently deactivate your account
              </Dialog.Description>

              <p>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>

              <button onClick={() => setIsOpen(false)}>Close</button>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
    </div>
  );
}

export default MyDialog;
