type Props = {
  img: string;
  header: string;
  text: string;
};

export default function Information({ img, header, text }: Props) {
  return (
    <div className="text-[#021716] ">
      <img src={img} alt={header} />
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
}
