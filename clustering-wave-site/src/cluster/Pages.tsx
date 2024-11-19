import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImageSide from "./components/ImageSide";

import data from "./data/for-layout";

import FormSide from "./components/FormSide";
import { useState } from "react";

export default function Pages() {
  const [selected, setSelected] = useState<number>(0);

  function handlerButton() {
    setSelected((prev) => {
      return prev === 0 ? 1 : 0;
    });
  }

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-2 gap-7 p-10">
        <FormSide
          title={data[selected].label}
          text={data[selected].text}
          handler={handlerButton}
          selected={selected}
        />

        <ImageSide
          image={data[selected].image}
          title={data[selected].label}
          text={data[selected].text}
        />
      </div>
      <Footer />
    </>
  );
}
