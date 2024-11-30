import React, { useEffect, useState } from 'react'
import data from '../test.json'

const URL = 'https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple';
const QuizCard = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentquestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    // useEffect(() => {

    //     fetch(URL)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setQuestions(data.results)
    //             console.log(questions);

    //         })

    // }, [])
    useEffect(() => {
        console.log(data)
        setQuestions(data.results);
        console.log(questions.map((ques) => ques.correct_answer));


    }, [])
    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerClick = (answer) => {
        if (answer === currentQuestion.correct_answer) {
            setScore(score + 1);
        }
        setCurrentquestionIndex(currentQuestionIndex + 1);
    }
    const restartQuiz = () => {
        setCurrentquestionIndex(0);
        setScore(0);
    }
    if (questions.length === 0) {
        return <div>loading...</div>
    }
    if (currentQuestionIndex >= questions.length) {
        return (
            <div className='flex flex-col gap-3 bg-red-400 p-10 mt-10 rounded-lg text-white'>
                <h1 className=''>quiz completed</h1>
                <p className=''>your score:{score}/{questions.length}</p>
                <button className='bg-green-800 px-4 py-2 rounded-lg' onClick={() => restartQuiz()}>
                    restart quiz</button>
            </div>)
    }



    const shuffle = [...currentQuestion.incorrect_answers];
    const correct_ans_index = Math.floor(Math.random() * 4);
    shuffle.splice(correct_ans_index, 0, currentQuestion.correct_answer);

    return (
        <div className='bg-black text-white w-[700px]  rounded-xl pt-10 mt-10 px-10 py-10'>
            <h2 className='font-bold mb-3'>question {currentQuestionIndex + 1}</h2>
            <p className='text-lg mb-5 font-semibold'>{currentQuestion.question}</p>
            <ul className=''>
                {shuffle.map((ans) => (
                    <li className='flex justify-center  mb-2 px-4 py-2 bg-slate-500 rounded-lg hover:bg-slate-700 cursor-pointer' key={ans} onClick={() => handleAnswerClick(ans)}>
                        {ans}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default QuizCard