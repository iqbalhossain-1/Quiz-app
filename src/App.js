import QuizCard from "./component/QuizCard";

function App() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="text-3xl font-bold">Quiz app</div>
      <QuizCard />
    </div>
  );
}

export default App;
