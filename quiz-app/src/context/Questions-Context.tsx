import { createContext, ReactNode, useState } from "react";
import questions from "../questions";
import { QuestionsTypes } from "../types/questions-types";

type Props = {
  children: ReactNode;
};

type AnswerType = {
  id: string;
  answer: string;
  rightAnswer: string;
  color: string;
};

type ResultType = {
  right: number;
  wrong: number;
  empty: number;
};

type QuestionsContextType = {
  questions: QuestionsTypes;
  nextQuiz: (text: string) => void;
  modal: boolean;
  final: AnswerType[];
  grade?: ResultType;
  restart: () => void;
};

export const QuestionsContext = createContext<QuestionsContextType>({
  questions: { id: "", text: "", answer: [] },
  nextQuiz: () => {},
  modal: false,
  final: [],
  grade: undefined,
  restart: () => {},
});

let rigthAnswer: number = 0;
let emptyAnswer: number = 0;
let wrongAnswer: number = 0;

export default function QuestionsContextProvider({ children }: Props) {
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState<AnswerType[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [grade, setGrade] = useState<ResultType>();

  let result: ResultType;

  function restart() {
    setQuestion(0);
    setAnswer([]);
    setModalIsOpen(false);
    setGrade(undefined);
    rigthAnswer = 0;
    emptyAnswer = 0;
    wrongAnswer = 0;
  }

  function getQuiz(text: string) {
    let color: string = " text-red-400";

    if (text === "") {
      emptyAnswer += 1;
    } else if (text === questions[question].rightAnswer) {
      rigthAnswer += 1;
      color = " text-green-400";
    } else {
      wrongAnswer += 1;
    }

    setAnswer((prev) => [
      ...prev,
      {
        id: questions[question].id,
        answer: text,
        rightAnswer: questions[question].rightAnswer,
        color: color,
      },
    ]);

    if (question < questions.length - 1) {
      setQuestion((prev) => prev + 1);
    } else {
      result = {
        right: (rigthAnswer / 7) * 100,
        empty: (emptyAnswer / 7) * 100,
        wrong: (wrongAnswer / 7) * 100,
      };

      setGrade(result);
      setModalIsOpen(true);
    }
  }

  const current: QuestionsTypes = {
    id: questions[question].id,
    text: questions[question].text,
    answer: questions[question].answers,
  };

  const myValue: QuestionsContextType = {
    questions: current,
    nextQuiz: getQuiz,
    modal: modalIsOpen,
    final: answer,
    grade: grade,
    restart: restart,
  };
  return (
    <QuestionsContext.Provider value={myValue}>
      {children}
    </QuestionsContext.Provider>
  );
}
