import { useState } from "react";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";

function AddMoney() {
  const money = [
    { id: 1, value: 1 },
    { id: 2, value: 5 },
    { id: 3, value: 10 },
    { id: 4, value: 20 },
    { id: 5, value: 50 },
    { id: 6, value: 100 },
    { id: 7, value: 500 },
    { id: 8, value: 1000 },
  ];
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="modal">
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full container max-w-md mx-auto items-center justify-center p-4">
            <Dialog.Panel as="div" className="p-4 rounded-xl bg-black">
              <Dialog.Title>Add Money</Dialog.Title>
              <Dialog.Description>
                {money.map((opt) => {
                  return (
                    <dl className="mb-8" key={opt.id}>
                      <dd>
                        <button
                          key={opt.value}
                          className={clsx(
                            "flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900"
                          )}
                        >
                          {opt.value}
                        </button>
                      </dd>
                    </dl>
                  );
                })}
              </Dialog.Description>

              <button className="m-3" onClick={() => setIsOpen(false)}>
                Add
              </button>
              <button className="m-3" onClick={() => setIsOpen(false)}>
                Close
              </button>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOpen(true)}
      >
        Add Money
      </button>
    </div>
  );
}

export default AddMoney;
