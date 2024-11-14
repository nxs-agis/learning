import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  [x: string]: any;
};

export default function Button({ children, ...props }: Props) {
  return (
    <button
      className="px-4 py-2 rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}
