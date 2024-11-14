import { useRef } from "react";
import Input from "./Input";
import { Project } from "../types/Project";
import Modal, { ResultModalRef } from "./Modal";

type Props = {
  onAdd: (projectData: Project) => void;
  onCancel: () => void;
};

export default function NewProject({ onAdd, onCancel }: Props) {
  const title = useRef<HTMLInputElement | null>(null);
  const description = useRef<HTMLTextAreaElement | null>(null);
  const date = useRef<HTMLInputElement | null>(null);
  const modal = useRef<ResultModalRef>(null);

  function handlerSave() {
    const enteredTitle = title.current?.value;
    const enteredDescription = description.current?.value;
    const enteredDate = date.current?.value;

    if (
      enteredTitle?.trim() === "" ||
      enteredDescription === "" ||
      enteredDate === ""
    ) {
      if (modal.current) {
        modal.current.open();
        return;
      }
    }

    onAdd({
      title: enteredTitle,
      desc: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-red-700"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handlerSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text" />
          <Input ref={description} label="Description" isTextarea />
          <Input ref={date} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
