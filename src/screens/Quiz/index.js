import React, { useState, useEffect } from 'react';

import { Button } from 'react-native';

import {
  Container, StateQuestions, TextState, QuestionView, QuestionText,
} from './styles';

import api from '../../service/api';

import Loading from '../../components/Loading';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [loading, setLoading] = useState(true);

  const indexQuestion = currentQuestion - 1;

  // function renderOptions(question) {
  //   const arrayOptions = [];
  //   arrayOptions.push(
  //     question.option1,
  //     question.option2,
  //     question.option3,
  //     question.option4,
  //     question.option5,
  //   );
  //   Object.assign(question, { options: arrayOptions });

  //   const { options } = question;

  //   return options.map(
  //     (option, index) => option !== null && (
  //         <DivOption key={index} position={index} answer={question.answer}>
  //           <p>{option}</p>
  //         </DivOption>
  //       ),
  //   );
  // }

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get('/questionsQuiz/16');
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.tron.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      {loading ? <Loading />
        : (
          <>
            <StateQuestions>
              <TextState>Questão</TextState>
              <TextState>{`${currentQuestion}/${questions.length}`}</TextState>
            </StateQuestions>
            {questions[indexQuestion].tfQuestion ? (
              <QuestionView>
                <QuestionText>
                  {console.tron.log(questions[indexQuestion])}
                  {questions[indexQuestion].tfQuestion.question}
                </QuestionText>
              </QuestionView>
            ) : (
              <QuestionView>
                <QuestionText>
                  {questions[indexQuestion].meQuestion.question}
                </QuestionText>
              </QuestionView>
            )}
          </>
        )
      }
      <Button title="Próximo" onPress={() => setCurrentQuestion(currentQuestion + 1)} />
    </Container>
  );
}
