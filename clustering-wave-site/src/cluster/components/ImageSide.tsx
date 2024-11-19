type Props = {
  image: string;
  title: string;
  text: string;
};

export default function ImageSide({ image, title, text }: Props) {
  return (
    <div
      className="w-2/3 bg-clip-content text-white flex flex-col justify-end rounded-2xl"
      style={{
        aspectRatio: 9 / 12,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="m-10">
        <h1 className="font-bold text-3xl ">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
