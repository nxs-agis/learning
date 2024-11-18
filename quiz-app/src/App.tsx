import Container from "./components/Container";
import Header from "./components/Header";
import QuestionsContextProvider from "./context/Questions-Context";

export default function App() {
  return (
    <QuestionsContextProvider>
      <Header />
      <Container />
    </QuestionsContextProvider>
  );
}
