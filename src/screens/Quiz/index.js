import React, {useState, useEffect} from 'react';

import {Alert, BackHandler} from 'react-native';
import Modal from 'react-native-modal';

import ImageView from 'react-native-image-view';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FullScreen from '../../utils/FullScreen';

import {
  Container,
  StateQuestions,
  TextState,
  QuestionView,
  QuestionText,
  OptionsTF,
  OptionTF,
  OptionTFCorrect,
  OptionTFError,
  TextOption,
  OptionsME,
  OptionMECorrect,
  OptionMEError,
  OptionME,
  ImageQuestion,
  Actions,
  ButtonActions,
  TextActions,
  ViewError,
  ViewModalAlert,
  TitleModal,
  TextInfo,
  ViewButtons,
  ButtonModal,
  TextButton,
  ColorQuiz,
  Header,
} from './styles';

import {TextError} from '../../styles';

import api from '../../service/api';
import randomArray from '../../utils/randomArray';

import Loading from '../../components/Loading';

export default function Quiz(props) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [color, setColor] = useState();
  const [dispute, setDispute] = useState();
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState();
  const [answerCorrect, setAnswerCorrect] = useState(null);
  const [error, setError] = useState();
  const [alertModal, setAlertModal] = useState(false);
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);
  const [disabledButton, setDisabledButton] = useState();

  const indexQuestion = currentQuestion - 1;
  const id = props.navigation.state.params.item;
  const {feedbackAnswer} = props.navigation.state.params;

  function handleBackPress() {
    setAlertModal(true);
    FullScreen.enable();
    return true;
  }

  useEffect(() => {
    async function fetchData() {
      if (!id) {
        return props.navigation.goBack();
      }
      try {
        const {data} = await api.post('/startQuiz', {
          id,
        });
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        FullScreen.enable();
        setQuestions(randomArray(data.listQuiz));
        setDispute(data.dispute.id);
        setColor(data.color);
        return setLoading(false);
      } catch (err) {
        if (err.response.data.message === 'Este quiz já foi disputado!') {
          return Alert.alert('Erro', 'Quiz já disputado', [
            {text: 'OK', onPress: () => props.navigation.goBack()},
          ]);
        }
      }
    }
    fetchData();
  }, [id, props.navigation]);

  useEffect(
    () => () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      FullScreen.disable();
    },
    [],
  );

  function navigationResult() {
    BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    FullScreen.disable();
    props.navigation.replace('Result', {quizId: id, disputeId: dispute});
  }

  function handleAnswers(answerQuestion) {
    setAnswer(answerQuestion);
  }

  async function handleQuestions() {
    setError(null);
    if (!dispute) {
      return;
    }
    if (answer === null) {
      return setError('Nenhuma resposta selecionada!');
    }
    setDisabledButton(true);
    try {
      const {data} = await api.post('/answerQuestion', {
        disputeId: dispute,
        questionId: questions[indexQuestion].id,
        answer,
      });

      setDisabledButton(false);
      if (feedbackAnswer) {
        setAnswerCorrect(`${data.answer}`);
        return;
      }

      if (currentQuestion === questions.length) {
        Alert.alert('Status', 'Quiz finalizado!', [
          {text: 'Mostrar resultado', onPress: navigationResult},
          {text: 'Sair', onPress: () => props.navigation.goBack()},
        ]);
        return;
      }

      setAnswer(null);
      setAnswerCorrect(null);
      setCurrentQuestion(currentQuestion + 1);
      return;
    } catch (err) {
      setError('Tente novamente!');
      setDisabledButton(false);
    }
  }

  async function jumpQuestion() {
    if (!dispute) {
      return;
    }
    setDisabledButton(true);
    try {
      const {data} = await api.post('/answerQuestion', {
        disputeId: dispute,
        questionId: questions[indexQuestion].id,
        answer: 'skip',
      });

      setDisabledButton(false);
      if (feedbackAnswer) {
        setAnswerCorrect(`${data.answer}`);
        return;
      }

      if (currentQuestion === questions.length) {
        Alert.alert('Status', 'Quiz finalizado!', [
          {text: 'Mostrar resultado', onPress: navigationResult},
          {text: 'Sair', onPress: () => props.navigation.goBack()},
        ]);
        return;
      }

      setAnswer(null);
      setAnswerCorrect(null);
      setCurrentQuestion(currentQuestion + 1);
      return;
    } catch (err) {
      setError('Tente novamente!');
      setDisabledButton(false);
    }
  }

  function nextQuestion() {
    if (currentQuestion === questions.length) {
      Alert.alert('Status', 'Quiz finalizado!', [
        {text: 'Mostrar resultado', onPress: navigationResult},
        {text: 'Sair', onPress: () => props.navigation.goBack()},
      ]);
      return;
    }

    setAnswer(null);
    setAnswerCorrect(null);
    setCurrentQuestion(currentQuestion + 1);
  }

  function renderOptions(question) {
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

    return options.map(
      (option, index) =>
        option && (
          <OptionME
            key={index}
            correct={answer === index}
            onPress={() => handleAnswers(index)}>
            <TextOption correct={answer === index}>{option}</TextOption>
          </OptionME>
        ),
    );
  }

  function renderAnswers(question) {
    const {options} = question;

    return options.map(
      (option, index) =>
        option &&
        (JSON.parse(answerCorrect) === index ? (
          <OptionMECorrect
            key={index}
            correct={answer === index}
            onPress={() => handleAnswers(index)}>
            <TextOption correct={JSON.parse(answerCorrect) === index}>
              {option}
            </TextOption>
          </OptionMECorrect>
        ) : (
          <OptionMEError
            key={index}
            incorrect={answer === index}
            onPress={() => handleAnswers(index)}>
            <TextOption correct={false}>{option}</TextOption>
          </OptionMEError>
        )),
    );
  }

  function renderAnswersTF() {
    console.log(answer);
    if (answerCorrect === null) {
      return (
        <>
          <OptionTF
            correct={answer === true}
            onPress={() => handleAnswers(true)}>
            <TextOption correct={answer === true}>Verdadeiro</TextOption>
          </OptionTF>
          <OptionTF
            correct={answer === false}
            onPress={() => handleAnswers(false)}>
            <TextOption correct={answer === false}>Falso</TextOption>
          </OptionTF>
        </>
      );
    } else if (JSON.parse(answerCorrect) === answer) {
      return (
        <>
          <OptionTFCorrect
            correct={JSON.parse(answerCorrect) === true}
            optionSelect={answer === true}>
            <TextOption correct={JSON.parse(answerCorrect) === true}>
              Verdadeiro
            </TextOption>
          </OptionTFCorrect>
          <OptionTFCorrect
            correct={JSON.parse(answerCorrect) === false}
            optionSelect={answer === false}>
            <TextOption correct={JSON.parse(answerCorrect) === false}>
              Falso
            </TextOption>
          </OptionTFCorrect>
        </>
      );
    } else {
      return (
        <>
          <OptionTFError
            incorrect={JSON.parse(answerCorrect) === true}
            optionSelect={answer === true}>
            <TextOption
              correct={JSON.parse(answerCorrect) === true && answer !== true}>
              Verdadeiro
            </TextOption>
          </OptionTFError>
          <OptionTFError
            incorrect={JSON.parse(answerCorrect) === false}
            optionSelect={answer === false}>
            <TextOption
              correct={JSON.parse(answerCorrect) === false && answer !== false}>
              Falso
            </TextOption>
          </OptionTFError>
        </>
      );
    }
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          {console.log(color)}
          <Header>
            <StateQuestions>
              <TextState>Questão</TextState>
              <TextState>{`${currentQuestion}/${questions.length}`}</TextState>
            </StateQuestions>
            <ColorQuiz color={color} />
          </Header>
          {questions[indexQuestion].tfQuestion ? (
            <QuestionView>
              <QuestionText>
                {questions[indexQuestion].tfQuestion.question}
              </QuestionText>
              {questions[indexQuestion].tfQuestion.pathImage && (
                <>
                  <ImageQuestion
                    source={{
                      uri: questions[indexQuestion].tfQuestion.pathImage,
                    }}
                    resizeMode="contain"
                  />

                  <ImageView
                    images={[
                      {
                        source: {
                          uri: questions[indexQuestion].tfQuestion.pathImage,
                        },
                      },
                    ]}
                    imageIndex={0}
                    isVisible={isImageViewVisible}
                    onClose={() => setIsImageViewVisible(false)}
                  />
                </>
              )}
              <OptionsTF>{renderAnswersTF()}</OptionsTF>
            </QuestionView>
          ) : (
            <QuestionView>
              <QuestionText>
                {questions[indexQuestion].meQuestion.question}
              </QuestionText>
              {questions[indexQuestion].meQuestion.pathImage && (
                <>
                  <ImageQuestion
                    onPress={() => setIsImageViewVisible(true)}
                    source={{
                      uri: questions[indexQuestion].meQuestion.pathImage,
                    }}
                  />
                  <ImageView
                    images={[
                      {
                        source: {
                          uri: questions[indexQuestion].meQuestion.pathImage,
                        },
                      },
                    ]}
                    imageIndex={0}
                    isVisible={isImageViewVisible}
                    onClose={() => setIsImageViewVisible(false)}
                  />
                </>
              )}
              <OptionsME>
                {answerCorrect === null
                  ? renderOptions(questions[indexQuestion].meQuestion)
                  : renderAnswers(questions[indexQuestion].meQuestion)}
              </OptionsME>
            </QuestionView>
          )}
        </>
      )}
      {error && (
        <ViewError>
          <TextError>{error}</TextError>
        </ViewError>
      )}
      <Actions>
        {answerCorrect ? (
          <ButtonActions onPress={nextQuestion} color="#3F8DF3">
            {currentQuestion === questions.length ? (
              <TextActions>Finalizar</TextActions>
            ) : (
              <TextActions>Avançar</TextActions>
            )}
            <Icon name="chevron-right" size={24} color="#fff" />
          </ButtonActions>
        ) : (
          <>
            <ButtonActions
              disabled={disabledButton}
              onPress={jumpQuestion}
              color="#DC7633">
              <TextActions>Pular</TextActions>
              <Icon name="skip-next" size={24} color="#fff" />
            </ButtonActions>
            <ButtonActions
              disabled={disabledButton}
              onPress={handleQuestions}
              color="#28B463">
              <TextActions>Confirmar</TextActions>
              <Icon name="check" size={24} color="#fff" />
            </ButtonActions>
          </>
        )}
      </Actions>
      <Modal
        isVisible={alertModal}
        onBackButtonPress={() => setAlertModal(false)}
        onBackdropPress={() => setAlertModal(false)}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInTiming={200}
        backdropTransitionOutTiming={0}>
        <ViewModalAlert>
          <TitleModal>Sair</TitleModal>
          <TextInfo>
            Se abandonar o quiz você não poderá mais disputá-lo.
          </TextInfo>
          <TextInfo>Você realmente deseja sair?</TextInfo>
          <ViewButtons>
            <ButtonModal onPress={() => props.navigation.goBack()}>
              <TextButton>Ok</TextButton>
            </ButtonModal>
            <ButtonModal onPress={() => setAlertModal(false)}>
              <TextButton>Cancelar</TextButton>
            </ButtonModal>
          </ViewButtons>
        </ViewModalAlert>
      </Modal>
    </Container>
  );
}
