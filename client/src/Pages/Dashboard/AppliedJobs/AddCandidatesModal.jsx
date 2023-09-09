import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CandidateForm from "./CandidateForm";

function AddCandidatesModal({ isOpen, onClose }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen flex items-center justify-center">
          <Dialog.Overlay className="fixed inset-0 " />

          <div className="bg-white w-full max-w-full p-6 rounded-lg shadow-lg">
            <div className="mt-4">
              <CandidateForm />
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#00756a] border border-transparent rounded-md hover:bg-[#005e53] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00756a]"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default AddCandidatesModal;
