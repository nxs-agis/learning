import IMAGES from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-24">
      <img src={IMAGES} alt="quiz-logo" className="w-24 h-24 my-4" />
      <h1 className="font-bold text-xl text-purple-100">REACTQUIZ</h1>
    </header>
  );
}
