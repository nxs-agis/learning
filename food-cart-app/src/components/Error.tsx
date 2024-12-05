type Props = {
  title: string;
  message: string;
};

export default function Error({ title, message }: Props) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
