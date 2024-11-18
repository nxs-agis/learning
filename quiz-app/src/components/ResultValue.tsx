type Props = {
  text: string;
  grade: string | undefined;
};

export default function ResultValue({ text, grade }: Props) {
  return (
    <div>
      <h1 className="font-bold text-white">{text} Answer</h1>
      <h1 className="font-bold text-4xl">{grade}%</h1>
    </div>
  );
}
