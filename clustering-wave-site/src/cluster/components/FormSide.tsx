import Input from "./Input";

type Props = {
  title: string;
  text: string;
  handler: () => void;
  selected: number;
};

export default function FormSide({ title, text, handler, selected }: Props) {
  return (
    <div className="flex flex-col bg-[#F5F9F9] drop-shadow-lg p-10 h-full w-2/3 rounded-3xl justify-self-end">
      <div className="flex rounded-full bg-white w-fit font-bold text-base px-5 gap-7 mx-auto">
        <button
          className={
            selected === 0
              ? `bg-[#032F2F] text-white py-2 px-4 rounded-full`
              : undefined
          }
          onClick={handler}
        >
          K-Means
        </button>
        <button
          className={
            selected === 1
              ? `bg-[#032F2F] text-white py-2 px-4 rounded-full`
              : undefined
          }
          onClick={handler}
        >
          K-Medoids
        </button>
      </div>

      <h1 className="font-extrabold text-xl lg:text-2xl">{title}</h1>
      <p className="font-light text-sm">{text}</p>

      <Input label="Magnitude:" />
      <Input label="Depth:" />
      <Input label="Distance:" />
      <div className="flex flex-row w-full gap-10 ">
        <div className="w-1/2">
          <label className="font-semibold p-2">Latitude</label>
          <input
            type="number"
            className="rounded-md border-b-2 text-lg w-full"
          />
        </div>
        <div className="w-1/2">
          <label className="font-semibold p-2">Longitude</label>
          <input
            type="number"
            className="rounded-md border-b-2 w-full text-lg"
          />
        </div>
      </div>

      <Input label="Province:" />
      <button className="text-white bg-[#032F2F] w-fit py-3 px-5 rounded-xl font-semibold ">
        Cluster
      </button>
    </div>
  );
}
