import React, { useEffect, useState } from "react";
import "./App.css";

import logo from "./assets/images/sportivity-logo.svg"
import heroImage from "./assets/images/hero-image.svg"

import { goToNext, goToPrevious, setSteps } from "./store/slices/stepSlice";
import { useDispatch, useSelector } from "react-redux";

import { UilDiary } from "@iconscout/react-unicons";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { UilArrowRight } from "@iconscout/react-unicons";

import { Intermediator } from "./components/stepsPages/Intermediator";
import { SingleLineTextInput } from "./components/stepsPages/SingleLineTextInput";
import { MultiLineTextInput } from "./components/stepsPages/MultiLineTextInput";
import { LevelRatingQuestion } from "./components/stepsPages/LevelRatingQuestion";
import { DateQuestion } from "./components/stepsPages/DateQuestion";
import { EmotionsBeforeQuestion } from "./components/stepsPages/EmotionsBeforeQuestion";
import { EmotionsOptionQuestion } from "./components/stepsPages/EmotionsOptionQuestion";
import { SenseOfDutyQuestion } from "./components/stepsPages/SenseOfDutyQuestion";
import { SenseOfDutyOptionsQuestion } from "./components/stepsPages/SenseOfDutyOptionsQuestion";
import { DidYouWinQuestion } from "./components/stepsPages/DidYouWinQuestion";
import { BreakingPointQuestion } from "./components/stepsPages/BreakingPointQuestion";
import { BreakingPointDirectionQuestion } from "./components/stepsPages/BreakingPointDirectionQuestion";
import { BreakingPointCausesQuestion } from "./components/stepsPages/BreakingPointCausesQuestion";
import { SenseOfDutyDuringMatchQuestion } from "./components/stepsPages/SenseOfDutyDuringMatchQuestion";
import { SenseOfDutyDuringMatchOptionsQuestion } from "./components/stepsPages/SenseOfDutyDuringMatchOptionsQuestion";
import { Finisher } from "./components/stepsPages/Finisher";

import {
  beforeTournamentEmotions,
  mostInterestingMatchBeforeEmotions,
  breakingPointEmotions,
  afterMatchEmotions,
  tournamentResultsEmotions,
} from "./components/elements/emotionsDescriptions";

const tg = window.Telegram.WebApp;

function App() {

  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="container">
      {isStarted ? <AppInner /> : <AppStarter setIsStarted={setIsStarted} />}
    </div>
  );
}

export default App;

const AppStarter = ({ setIsStarted }) => {
  return <div className="starter-container">
    <div className="logo-header">
      <img src={logo} />
    </div>
    <div className="hero-image">
      <img src={heroImage} />
    </div>
    <div className="hero-title">Привет, дорогой друг.<br />Ты сыграл турнир, давай поговорим о нём?</div>
    <div className="hero-subtitle">После заполнения вышлем тебе полноценную заполненную страницу твоего личного спортивного дневника</div>
    <div className="start-button-container">
      <button className="start-button" onClick={() => setIsStarted(true)}>Давай</button>
    </div>
  </div>
}

const AppInner = () => {

  const dispatch = useDispatch();
  const currentStep = useSelector(state => state.steps.currentStep);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  const [masterValue, setMasterValue] = useState({
    tournamentName: "",
    tournamentDate: "",
    emotionsBeforeTournament: [],
    emotionsBeforeTournamentDetails: {
      joy: [],
      fear: [],
      despair: [],
      shame: [],
      anger: [],
      loathing: [],
      indifference: [],
    },
    senseOfDuty: null,
    senseOfDutyOptions: [],
    readinessLevelRating: 0,
    happinessBeforeTournamentLevelRating: 0,
    anxietyBeforeTournamentLevelRating: 0,
    tasksForTournament: "",
    mostInterestingMatchOpponents: "",
    mostInterestingMatchVictory: null,
    mostInterestingMatchResult: "",
    mostInterestingMatchBeforeEmotions: [],
    mostInterestingMatchBeforeEmotionsDetails: {
      joy: [],
      fear: [],
      despair: [],
      shame: [],
      anger: [],
      loathing: [],
      indifference: [],
    },
    readinessLevelBeforeMatchRating: 0,
    happinessBeforeMatchLevelRating: 0,
    anxietyBeforeMatchLevelRating: 0,
    tasksForThisMatch: "",
    breakingPoint: null,
    emotionsDuringMatch: [],
    emotionsBeforeBreakingPoint: [],
    emotionsDuringMatchDetails: {
      joy: [],
      fear: [],
      despair: [],
      shame: [],
      anger: [],
      loathing: [],
      indifference: [],
    },
    emotionsBeforeBreakingPointDetails: {
      joy: [],
      fear: [],
      despair: [],
      shame: [],
      anger: [],
      loathing: [],
      indifference: [],
    },
    satisfactionDuringMatchRating: 0,
    happinessDuringMatchRating: 0,
    anxietyDuringMatchRating: 0,
    breakingPointDirection: null,
    breakingPointCauses: [],
    satisfactionBeforeBreakingPointRating: 0,
    happinessBeforeBreakingPointRating: 0,
    anxietyBeforeBreakingPointRating: 0,
    emotionsAfterBreakingPoint: [],
    emotionsAfterBreakingPointDetails: {
      joy: [],
      fear: [],
      despair: [],
      shame: [],
      anger: [],
      loathing: [],
      indifference: [],
    },
    satisfactionAfterBreakingPointRating: 0,
    happinessAfterBreakingPointRating: 0,
    anxietyAfterBreakingPointRating: 0,
    senseOfDutyDuringMatch: null,
    senseOfDutyDuringMatchOptions: [],
    emotionsAfterMatch: [],
    emotionsAfterMatchDetails: {
      joy: [],
      fear: [],
      despair: [],
      shame: [],
      anger: [],
      loathing: [],
      indifference: [],
    },
    readinessLevelAfterMatchRating: 0,
    happinessLevelAfterMatchRating: 0,
    anxietyLevelAfterMatchRating: 0,
    tournamentResultsPlace: "",
    tournamentResultsEmotions: [],
    tournamentResultsEmotionsDetails: {
      joy: [],
      fear: [],
      despair: [],
      shame: [],
      anger: [],
      loathing: [],
      indifference: [],
    },
    readinessLevelAfterTournamentRating: 0,
    happinessLevelAfterTournamentRating: 0,
    anxietyLevelAfterTournamentRating: 0,
    tournamentWins: "",
    tournamentFails: "",
    tournamentTodos: "",
  });

  const changeMasterValue = (key, value) => {
    setMasterValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const changeMasterValueObject = (key, innerKey, value) => {
    const obj = { ...masterValue[key] };
    obj[innerKey] = value;
    setMasterValue((prev) => ({
      ...prev,
      [key]: obj,
    }));
  };

  useEffect(() => {
    if (!masterValue.senseOfDuty) {
      setMasterValue((prev) => ({
        ...prev,
        senseOfDutyOptions: [],
      }));
    }
    if (!masterValue.senseOfDutyDuringMatch) {
      setMasterValue((prev) => ({
        ...prev,
        senseOfDutyDuringMatchOptions: [],
      }));
    }
  }, [masterValue.senseOfDuty, masterValue.senseOfDutyDuringMatch])

  useEffect(() => {
    const emotionBeforeTournamentArr = [];
    const mostInterestingMatchBeforeEmotionsArr = [];
    const emotionsDuringMatchArr = [];
    const emotionsBeforeBreakingPointArr = [];
    const emotionsAfterBreakingPointArr = [];
    const emotionsAfterMatchArr = [];
    const tournamentResultsEmotionsArr = [];

    const chunk_5_initialNoBreakingPoint = [
      "emotionsDuringMatch",
      "satisfactionDuringMatchRating",
      "happinessDuringMatchRating",
      "anxietyDuringMatchRating"];

    const chunk_5_initialBreakingPoint = [
      "emotionsBeforeBreakingPoint",
      "breakingPointDirection",
      "breakingPointCauses",
      "satisfactionBeforeBreakingPointRating",
      "happinessBeforeBreakingPointRating",
      "anxietyBeforeBreakingPointRating",
      "emotionsAfterBreakingPoint",
      "satisfactionAfterBreakingPointRating",
      "happinessAfterBreakingPointRating",
      "anxietyAfterBreakingPointRating",
    ];

    const steps = {
      chunk_1: [
        "letsTalk",
        "tournamentName",
        "tournamentDate",
        "emotionsBeforeTournament"
      ],
      chunk_2: [
        "senseOfDuty",
      ],
      chunk_3: [
        "innerLevelOfReadiness",
        "readinessLevelRating",
        "happinessBeforeTournamentLevelRating",
        "anxietyBeforeTournamentLevelRating",
        "tasksForTournament",
        "mostInterestingMatch",
        "mostInterestingMatchOpponents",
        "mostInterestingMatchVictory",
        "mostInterestingMatchResult",
        "mostInterestingMatchBeforeEmotions",
      ],
      chunk_4: [
        "innerLevelOfReadinessBeforeMatch",
        "readinessLevelBeforeMatchRating",
        "happinessBeforeMatchLevelRating",
        "anxietyBeforeMatchLevelRating",
        "tasksForThisMatch",
        "letsTalkAboutThisMatch",
        "breakingPoint"
      ],
      chunk_5: [],
      chunk_6: [
        "senseOfDutyDuringMatch",
      ],
      chunk_7: [
        "letsTalkAboutEmotionsAfterMatch",
        "emotionsAfterMatch",
      ],
      chunk_8: [
        "readinessLevelAfterMatchRating",
        "happinessLevelAfterMatchRating",
        "anxietyLevelAfterMatchRating",
        "letsTalkAboutTournamentResults",
        "tournamentResultsPlace",
        "tournamentResultsEmotions",
      ],
      chunk_9: [
        "readinessLevelAfterTournamentRating",
        "happinessLevelAfterTournamentRating",
        "anxietyLevelAfterTournamentRating",
        "tournamentWins",
        "tournamentFails",
        "tournamentTodos",
        "finisher",
      ],
    }

    if (!!masterValue.emotionsBeforeTournament.length) {
      masterValue.emotionsBeforeTournament.map((code) => {
        emotionBeforeTournamentArr.push("emotionBeforeTournament_" + code);
      });
    }

    if (!!masterValue.senseOfDuty) {
      steps.chunk_2.push("senseOfDutyOptions");
    }

    if (!!masterValue.mostInterestingMatchBeforeEmotions.length) {
      masterValue.mostInterestingMatchBeforeEmotions.map((code) => {
        mostInterestingMatchBeforeEmotionsArr.push("mostInterestingMatchBeforeEmotion_" + code);
      });
    }

    if (masterValue.breakingPoint === true) {
      steps.chunk_5 = chunk_5_initialBreakingPoint;
    } else if (masterValue.breakingPoint === false) {
      steps.chunk_5 = chunk_5_initialNoBreakingPoint;
    } else {
      steps.chunk_5 = [];
    }

    if (!masterValue.breakingPoint && !!masterValue.emotionsDuringMatch.length) {
      masterValue.emotionsDuringMatch.map((code) => {
        emotionsDuringMatchArr.push("emotionDuringMatch_" + code);
      });
      chunk_5_initialNoBreakingPoint.splice(1, 0, ...emotionsDuringMatchArr);
      steps.chunk_5 = chunk_5_initialNoBreakingPoint;
    }

    if (!!masterValue.breakingPoint && !!masterValue.emotionsBeforeBreakingPoint.length) {
      masterValue.emotionsBeforeBreakingPoint.map((code) => {
        emotionsBeforeBreakingPointArr.push("emotionBeforeBreakingPoint_" + code);
      });
      chunk_5_initialBreakingPoint.splice(1, 0, ...emotionsBeforeBreakingPointArr);
      steps.chunk_5 = chunk_5_initialBreakingPoint;
    }
    if (!!masterValue.breakingPoint && !!masterValue.emotionsAfterBreakingPoint.length) {
      masterValue.emotionsAfterBreakingPoint.map((code) => {
        emotionsAfterBreakingPointArr.push("emotionAfterBreakingPoint_" + code);
      });
      chunk_5_initialBreakingPoint.splice(7 + emotionsBeforeBreakingPointArr.length, 0, ...emotionsAfterBreakingPointArr);
      steps.chunk_5 = chunk_5_initialBreakingPoint;
    }

    if (!!masterValue.senseOfDutyDuringMatch) {
      steps.chunk_6.push("senseOfDutyDuringMatchOptions");
    }

    if (!!masterValue.emotionsAfterMatch.length) {
      masterValue.emotionsAfterMatch.map((code) => {
        emotionsAfterMatchArr.push("emotionAfterMatch_" + code);
      });
      steps.chunk_7 = [...steps.chunk_7, ...emotionsAfterMatchArr];
    }

    if (!!masterValue.tournamentResultsEmotions.length) {
      masterValue.tournamentResultsEmotions.map((code) => {
        tournamentResultsEmotionsArr.push("tournamentResultsEmotion_" + code);
      });
    }

    const resultSteps = [
      ...steps.chunk_1,
      ...emotionBeforeTournamentArr,
      ...steps.chunk_2,
      ...steps.chunk_3,
      ...mostInterestingMatchBeforeEmotionsArr,
      ...steps.chunk_4,
      ...steps.chunk_5,
      ...steps.chunk_6,
      ...steps.chunk_7,
      ...steps.chunk_8,
      ...tournamentResultsEmotionsArr,
      ...steps.chunk_9
    ];
    dispatch(setSteps(resultSteps));

  }, [
    masterValue.emotionsBeforeTournament,
    masterValue.senseOfDuty,
    masterValue.senseOfDutyDuringMatch,
    masterValue.mostInterestingMatchBeforeEmotions,
    masterValue.breakingPoint,
    masterValue.emotionsDuringMatch,
    masterValue.emotionsBeforeBreakingPoint,
    masterValue.emotionsAfterBreakingPoint,
    masterValue.emotionsAfterMatch,
    masterValue.tournamentResultsEmotions,
  ]);


  const stepsComponents = {
    letsTalk: (
      <Intermediator
        title="Привет, ты сыграл турнир, давай поговорим о нем?"
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    tournamentName: (
      <SingleLineTextInput masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tournamentName"}
        title={"Начнем с того, что было до турнира. Как назывался турнир?"}
      />
    ),
    tournamentDate: (
      <DateQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    emotionsBeforeTournament: (
      <EmotionsBeforeQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey="emotionsBeforeTournament"
        title="Отлично, а с какими чувствами ты едешь на этот турнир?"
      />
    ),
    emotionBeforeTournament_joy: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"joy"}
        emotionsOptions={beforeTournamentEmotions.joy}
      />
    ),
    emotionBeforeTournament_fear: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"fear"}
        emotionsOptions={beforeTournamentEmotions.fear}
      />
    ),
    emotionBeforeTournament_despair: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"despair"}
        emotionsOptions={beforeTournamentEmotions.despair}
      />
    ),
    emotionBeforeTournament_shame: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"shame"}
        emotionsOptions={beforeTournamentEmotions.shame}
      />
    ),
    emotionBeforeTournament_anger: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"anger"}
        emotionsOptions={beforeTournamentEmotions.anger}
      />
    ),
    emotionBeforeTournament_loathing: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"loathing"}
        emotionsOptions={beforeTournamentEmotions.loathing}
      />
    ),
    emotionBeforeTournament_indifference: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"indifference"}
        emotionsOptions={beforeTournamentEmotions.indifference}
      />
    ),
    senseOfDuty: (
      <SenseOfDutyQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    senseOfDutyOptions: (
      <SenseOfDutyOptionsQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    innerLevelOfReadiness: (
      <Intermediator
        title="Отлично, ты справился! Давай теперь отследим твой внутренний уровень готовности к турниру, уровень радости и уровень волнения"
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    readinessLevelRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"readinessLevelRating"}
        title={"Оцени свою готовность к турниру от 1 до 10, где 1 - абсолютно не готов, а 10 - готов на 100%"}
        descriptorLimitBottom={"Абсолютно не готов"}
        descriptorLimitTop={"Готов на 100%"}
      />
    ),
    happinessBeforeTournamentLevelRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"happinessBeforeTournamentLevelRating"}
        title={"Оцени уровень радости перед турниром от 1 до 10, где 1 - очень грустно, а 10 - очень много радости"}
        descriptorLimitBottom={"Очень грустно"}
        descriptorLimitTop={"Очень много радости"}
      />
    ),
    anxietyBeforeTournamentLevelRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"anxietyBeforeTournamentLevelRating"}
        title={"Оцени уровень волнения перед турниром от 1 до 10, где 1 - тотальное спокойствие, а 10 - максимальная тревога"}
        descriptorLimitBottom={"Тотальное спокойствие"}
        descriptorLimitTop={"Максимальная тревога"}
      />
    ),
    tasksForTournament: (
      <MultiLineTextInput
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        title="Супер! Какие задачи на турнир ты перед собой поставил?"
        masterValueKey="tasksForTournament"
      />
    ),
    mostInterestingMatch: (
      <Intermediator
        title="Супер, теперь давай разберем твой самый запоминающийся матч на этом турнире"
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    mostInterestingMatchOpponents: (
      <SingleLineTextInput
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"mostInterestingMatchOpponents"}
        title={"С кем играл?"}
      />
    ),
    mostInterestingMatchVictory: (
      <DidYouWinQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    mostInterestingMatchResult: (
      <SingleLineTextInput
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"mostInterestingMatchResult"}
        title={"Какой был итоговый счет?"}
      />
    ),
    mostInterestingMatchBeforeEmotions: (
      <EmotionsBeforeQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey="mostInterestingMatchBeforeEmotions"
        title="Отлично, а что ты чувствовал перед матчем?"
      />
    ),
    mostInterestingMatchBeforeEmotion_joy: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"mostInterestingMatchBeforeEmotionsDetails"}
        emotion={"joy"}
        emotionsOptions={mostInterestingMatchBeforeEmotions.joy}
      />
    ),
    mostInterestingMatchBeforeEmotion_fear: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"mostInterestingMatchBeforeEmotionsDetails"}
        emotion={"fear"}
        emotionsOptions={mostInterestingMatchBeforeEmotions.fear}
      />
    ),
    mostInterestingMatchBeforeEmotion_despair: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"mostInterestingMatchBeforeEmotionsDetails"}
        emotion={"despair"}
        emotionsOptions={mostInterestingMatchBeforeEmotions.despair}
      />
    ),
    mostInterestingMatchBeforeEmotion_shame: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"mostInterestingMatchBeforeEmotionsDetails"}
        emotion={"shame"}
        emotionsOptions={mostInterestingMatchBeforeEmotions.shame}
      />
    ),
    mostInterestingMatchBeforeEmotion_anger: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"mostInterestingMatchBeforeEmotionsDetails"}
        emotion={"anger"}
        emotionsOptions={mostInterestingMatchBeforeEmotions.anger}
      />
    ),
    mostInterestingMatchBeforeEmotion_loathing: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"mostInterestingMatchBeforeEmotionsDetails"}
        emotion={"loathing"}
        emotionsOptions={mostInterestingMatchBeforeEmotions.loathing}
      />
    ),
    mostInterestingMatchBeforeEmotion_indifference: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"mostInterestingMatchBeforeEmotionsDetails"}
        emotion={"indifference"}
        emotionsOptions={mostInterestingMatchBeforeEmotions.indifference}
      />
    ),
    innerLevelOfReadinessBeforeMatch: (
      <Intermediator
        title="Отлично, ты справился! Давай теперь отследим твой внутренний уровень готовности к матчу, уровень радости и уровень волнения"
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    readinessLevelBeforeMatchRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"readinessLevelBeforeMatchRating"}
        title={"Оцени свой уровень готовности к матчу по шкале от 1 до 10, где 1 - абсолютно не готов, а 10 - готов на 100%"}
        descriptorLimitBottom={"Абсолютно не готов"}
        descriptorLimitTop={"Готов на 100%"}
      />
    ),
    happinessBeforeMatchLevelRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"happinessBeforeMatchLevelRating"}
        title={"Оцени уровень радости перед матчем от 1 до 10, где 1 - очень грустно, а 10 - очень много радости"}
        descriptorLimitBottom={"Очень грустно"}
        descriptorLimitTop={"Очень много радости"}
      />
    ),
    anxietyBeforeMatchLevelRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"anxietyBeforeMatchLevelRating"}
        title={"Оцени уровень волнения перед матчем от 1 до 10, где 1 - тотальное спокойствие, а 10 - максимальная тревога"}
        descriptorLimitBottom={"Тотальное спокойствие"}
        descriptorLimitTop={"Максимальная тревога"}
      />
    ),
    tasksForThisMatch: (
      <MultiLineTextInput
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tasksForThisMatch"}
        title={"Супер! Какие задачи на этот матч ты перед собой поставил?"}
      />
    ),
    letsTalkAboutThisMatch: (
      <Intermediator
        title="Теперь давай поговорим о самом матче"
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    breakingPoint: (
      <BreakingPointQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    emotionsDuringMatch: (
      <EmotionsBeforeQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey="emotionsDuringMatch"
        title="Отлично, а что ты чувствовал во время матча?"
      />
    ),
    emotionDuringMatch_joy: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsDuringMatchDetails"}
        emotion={"joy"}
        emotionsOptions={breakingPointEmotions.joy}
      />
    ),
    emotionDuringMatch_fear: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsDuringMatchDetails"}
        emotion={"fear"}
        emotionsOptions={breakingPointEmotions.fear}
      />
    ),
    emotionDuringMatch_despair: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsDuringMatchDetails"}
        emotion={"despair"}
        emotionsOptions={breakingPointEmotions.despair}
      />
    ),
    emotionDuringMatch_shame: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsDuringMatchDetails"}
        emotion={"shame"}
        emotionsOptions={breakingPointEmotions.shame}
      />
    ),
    emotionDuringMatch_anger: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsDuringMatchDetails"}
        emotion={"anger"}
        emotionsOptions={breakingPointEmotions.anger}
      />
    ),
    emotionDuringMatch_loathing: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsDuringMatchDetails"}
        emotion={"loathing"}
        emotionsOptions={breakingPointEmotions.loathing}
      />
    ),
    emotionDuringMatch_indifference: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsDuringMatchDetails"}
        emotion={"indifference"}
        emotionsOptions={breakingPointEmotions.indifference}
      />
    ),
    satisfactionDuringMatchRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"satisfactionDuringMatchRating"}
        title={"Оцени свою удовлетворенность от своих действий во время матча по шкале от 1 до 10, где 1 - абсолютно не доволен, а 10 - очень доволен"}
        descriptorLimitBottom={"Абсолютно не доволен"}
        descriptorLimitTop={"Очень доволен"}
      />
    ),
    happinessDuringMatchRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"happinessDuringMatchRating"}
        title={"Оцени уровень радости во время матча от 1 до 10, где 1 - очень грустно, а 10 - очень много радости"}
        descriptorLimitBottom={"Очень грустно"}
        descriptorLimitTop={"Очень много радости"}
      />
    ),
    anxietyDuringMatchRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"anxietyDuringMatchRating"}
        title={"Оцени уровень волнения во время матча от 1 до 10, где 1 - тотальное спокойствие, а 10 - максимальная тревога"}
        descriptorLimitBottom={"Тотальное спокойствие"}
        descriptorLimitTop={"Максимальная тревога"}
      />
    ),
    emotionsBeforeBreakingPoint: (
      <EmotionsBeforeQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey="emotionsBeforeBreakingPoint"
        title="Отлично, а что ты чувствовал до переломного момента?"
      />
    ),
    emotionBeforeBreakingPoint_joy: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeBreakingPointDetails"}
        emotion={"joy"}
        emotionsOptions={breakingPointEmotions.joy}
      />
    ),
    emotionBeforeBreakingPoint_fear: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeBreakingPointDetails"}
        emotion={"fear"}
        emotionsOptions={breakingPointEmotions.fear}
      />
    ),
    emotionBeforeBreakingPoint_despair: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeBreakingPointDetails"}
        emotion={"despair"}
        emotionsOptions={breakingPointEmotions.despair}
      />
    ),
    emotionBeforeBreakingPoint_shame: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeBreakingPointDetails"}
        emotion={"shame"}
        emotionsOptions={breakingPointEmotions.shame}
      />
    ),
    emotionBeforeBreakingPoint_anger: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeBreakingPointDetails"}
        emotion={"anger"}
        emotionsOptions={breakingPointEmotions.anger}
      />
    ),
    emotionBeforeBreakingPoint_loathing: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeBreakingPointDetails"}
        emotion={"loathing"}
        emotionsOptions={breakingPointEmotions.loathing}
      />
    ),
    emotionBeforeBreakingPoint_indifference: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeBreakingPointDetails"}
        emotion={"indifference"}
        emotionsOptions={breakingPointEmotions.indifference}
      />
    ),
    breakingPointDirection: (
      <BreakingPointDirectionQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    breakingPointCauses: (
      <BreakingPointCausesQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    satisfactionBeforeBreakingPointRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"satisfactionBeforeBreakingPointRating"}
        title={"Оцени свою удовлетворенность от своих действий во время матча по шкале от 1 до 10, где 1 - абсолютно не доволен, а 10 - очень доволен"}
        descriptorLimitBottom={"Абсолютно не доволен"}
        descriptorLimitTop={"Очень доволен"}
      />
    ),
    happinessBeforeBreakingPointRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"happinessBeforeBreakingPointRating"}
        title={"Оцени уровень радости во время матча от 1 до 10, где 1 - очень грустно, а 10 - очень много радости"}
        descriptorLimitBottom={"Очень грустно"}
        descriptorLimitTop={"Очень много радости"}
      />
    ),
    anxietyBeforeBreakingPointRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"anxietyBeforeBreakingPointRating"}
        title={"Оцени уровень волнения во время матча от 1 до 10, где 1 - тотальное спокойствие, а 10 - максимальная тревога"}
        descriptorLimitBottom={"Тотальное спокойствие"}
        descriptorLimitTop={"Максимальная тревога"}
      />
    ),
    emotionsAfterBreakingPoint: (
      <EmotionsBeforeQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey="emotionsAfterBreakingPoint"
        title="Отлично, а что ты чувствовал после переломного момента?"
      />
    ),
    emotionAfterBreakingPoint_joy: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterBreakingPointDetails"}
        emotion={"joy"}
        emotionsOptions={breakingPointEmotions.joy}
      />
    ),
    emotionAfterBreakingPoint_fear: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterBreakingPointDetails"}
        emotion={"fear"}
        emotionsOptions={breakingPointEmotions.fear}
      />
    ),
    emotionAfterBreakingPoint_despair: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterBreakingPointDetails"}
        emotion={"despair"}
        emotionsOptions={breakingPointEmotions.despair}
      />
    ),
    emotionAfterBreakingPoint_shame: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterBreakingPointDetails"}
        emotion={"shame"}
        emotionsOptions={breakingPointEmotions.shame}
      />
    ),
    emotionAfterBreakingPoint_anger: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterBreakingPointDetails"}
        emotion={"anger"}
        emotionsOptions={breakingPointEmotions.anger}
      />
    ),
    emotionAfterBreakingPoint_loathing: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterBreakingPointDetails"}
        emotion={"loathing"}
        emotionsOptions={breakingPointEmotions.loathing}
      />
    ),
    emotionAfterBreakingPoint_indifference: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterBreakingPointDetails"}
        emotion={"indifference"}
        emotionsOptions={breakingPointEmotions.indifference}
      />
    ),
    satisfactionAfterBreakingPointRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"satisfactionAfterBreakingPointRating"}
        title={"Оцени свою удовлетворенность от своих действий во время матча по шкале от 1 до 10, где 1 - абсолютно не доволен, а 10 - очень доволен"}
        descriptorLimitBottom={"Абсолютно не доволен"}
        descriptorLimitTop={"Очень доволен"}
      />
    ),
    happinessAfterBreakingPointRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"happinessAfterBreakingPointRating"}
        title={"Оцени уровень радости во время матча от 1 до 10, где 1 - очень грустно, а 10 - очень много радости"}
        descriptorLimitBottom={"Очень грустно"}
        descriptorLimitTop={"Очень много радости"}
      />
    ),
    anxietyAfterBreakingPointRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"anxietyAfterBreakingPointRating"}
        title={"Оцени уровень волнения во время матча от 1 до 10, где 1 - тотальное спокойствие, а 10 - максимальная тревога"}
        descriptorLimitBottom={"Тотальное спокойствие"}
        descriptorLimitTop={"Максимальная тревога"}
      />
    ),
    senseOfDutyDuringMatch: (
      <SenseOfDutyDuringMatchQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    senseOfDutyDuringMatchOptions: (
      <SenseOfDutyDuringMatchOptionsQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    letsTalkAboutEmotionsAfterMatch: (
      <Intermediator
        title="Теперь давай поговорим о чувствах после матча?"
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    emotionsAfterMatch: (
      <EmotionsBeforeQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey="emotionsAfterMatch"
        title="Отлично, а что ты чувствовал после матча?"
      />
    ),
    emotionAfterMatch_joy: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterMatchDetails"}
        emotion={"joy"}
        emotionsOptions={afterMatchEmotions.joy}
      />
    ),
    emotionAfterMatch_fear: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterMatchDetails"}
        emotion={"fear"}
        emotionsOptions={afterMatchEmotions.fear}
      />
    ),
    emotionAfterMatch_despair: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterMatchDetails"}
        emotion={"despair"}
        emotionsOptions={afterMatchEmotions.despair}
      />
    ),
    emotionAfterMatch_shame: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterMatchDetails"}
        emotion={"shame"}
        emotionsOptions={afterMatchEmotions.shame}
      />
    ),
    emotionAfterMatch_anger: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterMatchDetails"}
        emotion={"anger"}
        emotionsOptions={afterMatchEmotions.anger}
      />
    ),
    emotionAfterMatch_loathing: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterMatchDetails"}
        emotion={"loathing"}
        emotionsOptions={afterMatchEmotions.loathing}
      />
    ),
    emotionAfterMatch_indifference: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsAfterMatchDetails"}
        emotion={"indifference"}
        emotionsOptions={afterMatchEmotions.indifference}
      />
    ),
    readinessLevelAfterMatchRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"readinessLevelAfterMatchRating"}
        title={"Оцени свою удовлетворенность от своих действий после матча по шкале от 1 до 10, где 1 - абсолютно не доволен, а 10 - очень доволен"}
        descriptorLimitBottom={"Абсолютно не доволен"}
        descriptorLimitTop={"Очень доволен"}
      />
    ),
    happinessLevelAfterMatchRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"happinessLevelAfterMatchRating"}
        title={"Оцени уровень радости после матча  от 1 до 10, где 1 - очень грустно, а 10 - очень много радости"}
        descriptorLimitBottom={"Очень грустно"}
        descriptorLimitTop={"Очень много радости"}
      />
    ),
    anxietyLevelAfterMatchRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"anxietyLevelAfterMatchRating"}
        title={"Оцени уровень волнения после матча от 1 до 10, где 1 - тотальное спокойствие, а 10 - максимальная тревога"}
        descriptorLimitBottom={"Тотальное спокойствие"}
        descriptorLimitTop={"Максимальная тревога"}
      />
    ),
    letsTalkAboutTournamentResults: (
      <Intermediator
        title="Супер! Теперь давай поговорим об итогах турнира?"
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    tournamentResultsPlace: (
      <SingleLineTextInput
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tournamentResultsPlace"}
        title={"Какое место ты занял?"}
      />
    ),
    tournamentResultsEmotions: (
      <EmotionsBeforeQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey="tournamentResultsEmotions"
        title="Отлично, а что ты чувствовал по итогу турнира?"
      />
    ),
    tournamentResultsEmotion_joy: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tournamentResultsEmotionsDetails"}
        emotion={"joy"}
        emotionsOptions={tournamentResultsEmotions.joy}
      />
    ),
    tournamentResultsEmotion_fear: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tournamentResultsEmotionsDetails"}
        emotion={"fear"}
        emotionsOptions={tournamentResultsEmotions.fear}
      />
    ),
    tournamentResultsEmotion_despair: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tournamentResultsEmotionsDetails"}
        emotion={"despair"}
        emotionsOptions={tournamentResultsEmotions.despair}
      />
    ),
    tournamentResultsEmotion_shame: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tournamentResultsEmotionsDetails"}
        emotion={"shame"}
        emotionsOptions={tournamentResultsEmotions.shame}
      />
    ),
    tournamentResultsEmotion_anger: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tournamentResultsEmotionsDetails"}
        emotion={"anger"}
        emotionsOptions={tournamentResultsEmotions.anger}
      />
    ),
    tournamentResultsEmotion_loathing: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tournamentResultsEmotionsDetails"}
        emotion={"loathing"}
        emotionsOptions={tournamentResultsEmotions.loathing}
      />
    ),
    tournamentResultsEmotion_indifference: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tournamentResultsEmotionsDetails"}
        emotion={"indifference"}
        emotionsOptions={tournamentResultsEmotions.indifference}
      />
    ),
    readinessLevelAfterTournamentRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"readinessLevelAfterTournamentRating"}
        title={"Оцени свою удовлетворенность от своих действий по итогу турнира от 1 до 10, где 1 - абсолютно не готов, а 10 - готов на 100%"}
        descriptorLimitBottom={"Абсолютно не готов"}
        descriptorLimitTop={"Готов на 100%"}
      />
    ),
    happinessLevelAfterTournamentRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"happinessLevelAfterTournamentRating"}
        title={"Оцени уровень радости по итогу турнира от 1 до 10, где 1 - очень грустно, а 10 - очень много радости"}
        descriptorLimitBottom={"Очень грустно"}
        descriptorLimitTop={"Очень много радости"}
      />
    ),
    anxietyLevelAfterTournamentRating: (
      <LevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"anxietyLevelAfterTournamentRating"}
        title={"Оцени уровень волнения по итогу турнира от 1 до 10, где 1 - тотальное спокойствие, а 10 - максимальная тревога"}
        descriptorLimitBottom={"Тотальное спокойствие"}
        descriptorLimitTop={"Максимальная тревога"}
      />
    ),
    tournamentWins: (
      <MultiLineTextInput
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tournamentWins"}
        title={"Напиши пару предложений о турнире. Что получалось?"}
      />
    ),
    tournamentFails: (
      <MultiLineTextInput
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tournamentFails"}
        title={"Что не получалось?"}
      />
    ),
    tournamentTodos: (
      <MultiLineTextInput
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"tournamentTodos"}
        title={"Над чем тебе стоит поработать?"}
      />
    ),
    finisher: (
      <Finisher masterValue={masterValue} tg={tg} />
    )
  };


  return (
    <>
      <div className="header">
        <UilDiary className="icon" />
        <h3>Твой спортивный дневник</h3>
      </div>
      <div className="step-body">{stepsComponents[currentStep]}</div>
      <div className="footer">
        <div className="buttons-bar">
          <button
            className="button-previous"
            disabled={currentStep === "letsTalk"}
            onClick={() => dispatch(goToPrevious())}
          >
            <UilArrowLeft />
          </button>
          <button
            className="button-next"
            disabled={nextButtonDisabled || currentStep === "finisher"}
            onClick={() => dispatch(goToNext())}
          >
            <span>Далее</span>
            <UilArrowRight />
          </button>
        </div>
      </div>
    </>
  )
}
