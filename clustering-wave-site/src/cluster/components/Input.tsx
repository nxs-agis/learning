type Props = {
  label: string;
};

export default function Input({ label }: Props) {
  return (
    <>
      <label className="font-semibold p-2">{label}</label>
      <input type="number" className="rounded-md border-b-2 text-lg" />
    </>
  );
}
