import React, {useState, useEffect} from 'react';

import {FlatList, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Title,
  HeadList,
  TextHead,
  User,
  UserName,
  UserScore,
  UserThis,
  ButtonShowAnswers,
  TextButton,
  ItemList,
  ViewQuestion,
  TextExplanation,
  QuestionView,
} from './styles';

import {
  OptionMECorrect,
  OptionMEError,
  TextOption,
  QuestionText,
  OptionsTF,
  OptionTFCorrect,
  OptionTFError,
} from '../Quiz/styles';

import api from '../../service/api';

export default function Result(props) {
  const [disputes, setDisputes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

  async function fetchData() {
    const id = props.navigation.getParam('quizId');
    const {userId} = props.navigation.state.params;
    console.log(userId);
    StatusBar.setBarStyle('dark-content');
    try {
      const {data} = await api.post(`/unloggedUser/result/${id}`, {
        userId,
      });
      setDisputes(data.disputes);
      setQuestions(data.questions);
      setAnswers(data.answers);
    } catch (error) {
      console.tron.log(error);
    }
  }

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderAnswers(question, id) {
    const arrayOptions = [];
    arrayOptions.push(
      question.option1,
      question.option2,
      question.option3,
      question.option4,
      question.option5,
    );
    Object.assign(question, {options: arrayOptions});
    const {options} = question;

    const answer = answers.filter(a => a.questionId === id);

    return options.map(
      (option, index) =>
        option &&
        answer.length > 0 &&
        (JSON.parse(question.answer) === index ? (
          <OptionMECorrect
            key={index}
            correct={
              answer[0].selectedAnswer == index &&
              answer[0].selectedAnswer == question.answer
            }>
            <TextOption correct>{option}</TextOption>
          </OptionMECorrect>
        ) : (
          <OptionMEError
            key={index}
            incorrect={answer[0].selectedAnswer == index}>
            <TextOption>{option}</TextOption>
          </OptionMEError>
        )),
    );
  }

  function answerResp(id) {
    const answer = answers.filter(a => a.questionId === id);
    if (answer.length > 0) {
      return answer[0].selectedAnswer;
    }
  }

  return (
    <Container>
      <Title>Ranking</Title>
      <HeadList>
        <TextHead>Nome</TextHead>
        <TextHead>Pontuação</TextHead>
      </HeadList>
      <FlatList
        data={disputes}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) =>
          item.id !== props.navigation.getParam('disputeId') ? (
            <User>
              <UserName>
                {item.userId
                  ? item.User.name
                  : `${item.UnloggedUser.name} (Não registrado)`}
              </UserName>
              <UserScore>{item.score}</UserScore>
            </User>
          ) : (
            <UserThis>
              <UserName>
                {item.userId
                  ? item.User.name
                  : `${item.UnloggedUser.name} (Não registrado)`}
              </UserName>
              <UserScore>{item.score > 0 ? item.score : 0}</UserScore>
            </UserThis>
          )
        }
      />
      {!showAnswers ? (
        <ButtonShowAnswers onPress={() => setShowAnswers(true)}>
          <TextButton>Mostrar respostas</TextButton>
          <Icon name="chevron-down" color="#000" size={30} />
        </ButtonShowAnswers>
      ) : (
        <ButtonShowAnswers onPress={() => setShowAnswers(false)}>
          <TextButton>Ocultar respostas</TextButton>
          <Icon name="chevron-up" color="#000" size={30} />
        </ButtonShowAnswers>
      )}
      {showAnswers && (
        <FlatList
          data={questions}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => (
            <ItemList>
              {item.meQuestion ? (
                <React.Fragment>
                  <ViewQuestion>
                    <QuestionText>{index + 1}. </QuestionText>
                    <QuestionText>{item.meQuestion.question}</QuestionText>
                  </ViewQuestion>
                  {renderAnswers(item.meQuestion, item.id)}
                  {item.meQuestion.explanation &&
                    item.meQuestion.explanation != 'undefined' && (
                      <TextExplanation>
                        Justificativa: {item.meQuestion.explanation}
                      </TextExplanation>
                    )}
                </React.Fragment>
              ) : (
                <QuestionView key={item.id}>
                  <ViewQuestion>
                    <QuestionText>{index + 1}. </QuestionText>
                    <QuestionText>{item.tfQuestion.question}</QuestionText>
                  </ViewQuestion>

                  <OptionsTF>
                    {answerResp(item.id) !== 'skip' &&
                    item.tfQuestion.answer ==
                      JSON.parse(answerResp(item.id)) ? (
                      <>
                        <OptionTFCorrect
                          correct={item.tfQuestion.answer == true}
                          optionSelect={
                            JSON.parse(answerResp(item.id)) === true
                          }>
                          <TextOption correct={item.tfQuestion.answer == true}>
                            Verdadeiro
                          </TextOption>
                        </OptionTFCorrect>
                        <OptionTFCorrect
                          correct={item.tfQuestion.answer === false}
                          optionSelect={
                            JSON.parse(answerResp(item.id)) === false
                          }>
                          <TextOption correct={item.tfQuestion.answer == false}>
                            Falso
                          </TextOption>
                        </OptionTFCorrect>
                      </>
                    ) : (
                      <>
                        <OptionTFError
                          incorrect={item.tfQuestion.answer === true}
                          optionSelect={answerResp(item.id) == 'true'}>
                          <TextOption
                            correct={
                              answerResp(item.id) == item.tfQuestion.answer
                            }>
                            Verdadeiro
                          </TextOption>
                        </OptionTFError>
                        <OptionTFError
                          incorrect={item.tfQuestion.answer === false}
                          optionSelect={answerResp(item.id) === 'false'}>
                          <TextOption
                            correct={item.tfQuestion.answer === false}>
                            Falso
                          </TextOption>
                        </OptionTFError>
                      </>
                    )}
                  </OptionsTF>
                  {item.tfQuestion.explanation &&
                    item.tfQuestion.explanation != 'undefined' && (
                      <TextExplanation>
                        Justificativa: {item.tfQuestion.explanation}
                      </TextExplanation>
                    )}
                </QuestionView>
              )}
            </ItemList>
          )}
        />
      )}
    </Container>
  );
}
