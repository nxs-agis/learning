import Header from "./components/Header";

import Information from "./components/Information";
import InformationData from "./data/Information-data";

export default function Pages() {
  return (
    <>
      <Header />
      <main>
        <div className="z-10 flex flex-col bg-white shadow-xl rounded-lg lg:rounded-2xl mt-[-50px] w-[90%] mx-auto h-fit p-10">
          <div className="grid grid-cols-2 gap-7">
            <div>
              <p className="text-[#0B7176] text-xs lg:text-base">Easy to Use</p>
              <h1 className="text-2xl lg:text-5xl text-[#021716] font-bold py-3">
                Start to Earthquake Clustering
              </h1>
            </div>
            <p className="text-[#0B7176] text-wrap text-xs lg:text-base">
              Earthquake clustering with two different method which is K-Means
              and K-Medoids was it most powerfull method for do clustering
              stuff.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-7">
            {InformationData.map((data) => (
              <Information
                img={data.img}
                header={data.header}
                text={data.text}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
