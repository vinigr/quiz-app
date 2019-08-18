import React, { useState, useEffect } from 'react';

import { Button } from 'react-native';

import {
  Container, StateQuestions, TextState,
  QuestionView, QuestionText, OptionsTF,
  OptionTF, TextOption, OptionsME, OptionME, ImageQuestion,
} from './styles';

import api from '../../service/api';

import Loading from '../../components/Loading';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(2);
  const [loading, setLoading] = useState(true);

  const indexQuestion = currentQuestion - 1;

  function renderOptions(question) {
    const arrayOptions = [];
    arrayOptions.push(
      question.option1,
      question.option2,
      question.option3,
      question.option4,
      question.option5,
    );
    Object.assign(question, { options: arrayOptions });

    const { options } = question;

    return options.map(
      (option, index) => option !== null && (
      <OptionME key={index}>
        <TextOption>{option}</TextOption>
      </OptionME>
      ),
    );
  }

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
                {!questions[indexQuestion].tfQuestion.pathImage && (
                  <ImageQuestion source={{ uri: 'https://s3.amazonaws.com/qcon-assets-production/images/provas/37927/imagem-026.jpg' }} />
                )}
                <OptionsTF>
                  <OptionTF>
                    <TextOption>Verdadeiro</TextOption>
                  </OptionTF>
                  <OptionTF>
                    <TextOption>Falso</TextOption>
                  </OptionTF>
                </OptionsTF>
              </QuestionView>
            ) : (
              <QuestionView>
                <QuestionText>
                  {questions[indexQuestion].meQuestion.question}
                </QuestionText>
                {!questions[indexQuestion].meQuestion.pathImage && (
                  <ImageQuestion
                    source={{ uri: 'https://www.infoescola.com/wp-content/uploads/2018/02/Clipboard01-763.jpg' }}
                  />
                )}
                <OptionsME>
                  {renderOptions(questions[indexQuestion].meQuestion)}
                </OptionsME>
              </QuestionView>
            )}
          </>
        )
      }
      <Button title="Anterior" onPress={() => setCurrentQuestion(currentQuestion - 1)} />
      <Button title="Próximo" onPress={() => setCurrentQuestion(currentQuestion + 1)} />
    </Container>
  );
}
