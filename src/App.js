import React, { useEffect, useState } from "react";
import "./App.css";

import { goToNext, goToPrevious, setSteps } from "./store/slices/stepSlice";
import { useDispatch, useSelector } from "react-redux";

import { UilDiary } from "@iconscout/react-unicons";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { UilArrowRight } from "@iconscout/react-unicons";

import { Starter } from "./components/stepsPages/Starter";
import { NameQuestion } from "./components/stepsPages/NameQuestion";
import { DateQuestion } from "./components/stepsPages/DateQuestion";
import { EmotionsBeforeTournamentQuestion } from "./components/stepsPages/EmotionsBeforeTournamentQuestion";
import { EmotionsOptionQuestion } from "./components/stepsPages/EmotionsOptionQuestion";
import { SenseOfDutyQuestion } from "./components/stepsPages/SenseOfDutyQuestion";
import { SenseOfDutyOptionsQuestion } from "./components/stepsPages/SenseOfDutyOptionsQuestion";
import { InnerLevelOfReadinessQuestion } from "./components/stepsPages/InnerLevelOfReadinessQuestion";
import { ReadinessLevelRatingQuestion } from "./components/stepsPages/ReadinessLevelRatingQuestion";
import { HappinessBeforeTournamentLevelRatingQuestion } from "./components/stepsPages/HappinessBeforeTournamentLevelRatingQuestion";
import { AnxietyBeforeTournamentLevelRatingQuestion } from "./components/stepsPages/AnxietyBeforeTournamentLevelRatingQuestion";
import { TasksForTournamentQuestion } from "./components/stepsPages/TasksForTournamentQuestion";
// import { LetsTalkAboutWarmupQuestion } from "./components/stepsPages/LetsTalkAboutWarmupQuestion";
// import { WarmupWaysQuestion } from "./components/stepsPages/WarmupWaysQuestion";
// import { EmotionsDuringWarmupQuestion } from "./components/stepsPages/EmotionsDuringWarmupQuestion";
// import { WarmupSummaryQuestion } from "./components/stepsPages/WarmupSummaryQuestion";

import {
  joyEmotions,
  fearEmotions,
  despairEmotions,
  shameEmotions,
  angerEmotions,
  loathingEmotions,
  indifferenceEmotions,
  warmupJoyEmotions,
  warmupFearEmotions
} from "./components/elements/emotionsDescriptions";

import { initialSteps } from "./store/slices/stepSlice";

const warmupWays = [
  {
    code: "noWarmup",
    description: "Не разминаюсь",
    questionCloser: "все разминались, а ты нет"
  },
  {
    code: "playingWithSomebody",
    description: "Играю с кем-нибудь",
    questionCloser: "играл с кем-то на разминке"
  },
  {
    code: "justHittingBalls",
    description: "Просто бью по шарам",
    questionCloser: "просто бил по шарам на разминке"
  },
  {
    code: "workingOnTechnique",
    description: "Отрабатываю технику",
    questionCloser: "отрабатывал технику на разминке"
  },
];
const warmupSummaries = [
  {
    code: "yes",
    description: "Да",
  },
  {
    code: "no",
    description: "Нет",
  },
  {
    code: "fiftyFifty",
    description: "50/50",
  },
  {
    code: "noWarmup",
    description: "Не разминался",
  },
];

const tg = window.Telegram.WebApp;

function App() {

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
    // warmupWays: "",
    // emotionsDuringWarmup: [],
    // emotionsDuringWarmupDetails: {
    //   joy: [],
    //   fear: [],
    //   sorrow: [],
    //   anger: [],
    //   loathing: [],
    // },
    // warmupSummary: "",
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
  }, [masterValue.senseOfDuty])

  useEffect(() => {
    const emotionBeforeTournamentArr = [];
    let senseOfDutyOptions = 0;
    // const emotionsDuringWarmupArr = [];

    const _initialSteps = [...initialSteps];

    if (!!masterValue.emotionsBeforeTournament.length) {
      masterValue.emotionsBeforeTournament.map((code) => {
        emotionBeforeTournamentArr.push("emotionBeforeTournament_" + code);
      });
    }
    _initialSteps.splice(4, 0, ...emotionBeforeTournamentArr);

    if (!!masterValue.senseOfDuty) {
      senseOfDutyOptions = 1;
      _initialSteps.splice(5 + emotionBeforeTournamentArr.length, 0, "senseOfDutyOptions");
    }

    // if (!!masterValue.emotionsDuringWarmup.length) {
    //   masterValue.emotionsDuringWarmup.map((code) => {
    //     emotionsDuringWarmupArr.push("emotionsDuringWarmup_" + code);
    //   });
    // }

    // _initialSteps.splice(13 + emotionBeforeTournamentArr.length + senseOfDutyOptions, 0, ...emotionsDuringWarmupArr);

    dispatch(setSteps(_initialSteps));

  }, [
    masterValue.emotionsBeforeTournament,
    masterValue.senseOfDuty,
    // masterValue.emotionsDuringWarmup
  ]);


  const stepsComponents = {
    letsTalk: (
      <Starter
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    tournamentName: (
      <NameQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
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
      <EmotionsBeforeTournamentQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    emotionBeforeTournament_joy: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"joy"}
        emotionsOptions={joyEmotions}
      />
    ),
    emotionBeforeTournament_fear: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"fear"}
        emotionsOptions={fearEmotions}
      />
    ),
    emotionBeforeTournament_despair: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"despair"}
        emotionsOptions={despairEmotions}
      />
    ),
    emotionBeforeTournament_shame: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"shame"}
        emotionsOptions={shameEmotions}
      />
    ),
    emotionBeforeTournament_anger: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"anger"}
        emotionsOptions={angerEmotions}
      />
    ),
    emotionBeforeTournament_loathing: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"loathing"}
        emotionsOptions={loathingEmotions}
      />
    ),
    emotionBeforeTournament_indifference: (
      <EmotionsOptionQuestion
        masterValue={masterValue}
        changeMasterValueObject={changeMasterValueObject}
        setNextButtonDisabled={setNextButtonDisabled}
        masterValueKey={"emotionsBeforeTournamentDetails"}
        emotion={"indifference"}
        emotionsOptions={indifferenceEmotions}
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
      <InnerLevelOfReadinessQuestion
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    readinessLevelRating: (
      <ReadinessLevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    happinessBeforeTournamentLevelRating: (
      <HappinessBeforeTournamentLevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    anxietyBeforeTournamentLevelRating: (
      <AnxietyBeforeTournamentLevelRatingQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    tasksForTournament: (
      <TasksForTournamentQuestion
        masterValue={masterValue}
        changeMasterValue={changeMasterValue}
        setNextButtonDisabled={setNextButtonDisabled}
      />
    ),
    // letsTalkAboutWarmup: (
    //   <LetsTalkAboutWarmupQuestion
    //     setNextButtonDisabled={setNextButtonDisabled}
    //   />
    // ),
    // warmupWays: (
    //   <WarmupWaysQuestion
    //     masterValue={masterValue}
    //     changeMasterValue={changeMasterValue}
    //     warmupWays={warmupWays}
    //     setNextButtonDisabled={setNextButtonDisabled}
    //   />
    // ),
    // emotionsDuringWarmup: (
    //   <EmotionsDuringWarmupQuestion
    //     masterValue={masterValue}
    //     changeMasterValue={changeMasterValue}
    //     warmupWays={warmupWays}
    //     setNextButtonDisabled={setNextButtonDisabled}
    //   />
    // ),
    // emotionsDuringWarmup_joy: (
    //   <EmotionsOptionQuestion
    //     masterValue={masterValue}
    //     changeMasterValueObject={changeMasterValueObject}
    //     setNextButtonDisabled={setNextButtonDisabled}
    //     masterValueKey={"emotionsDuringWarmupDetails"}
    //     emotion={"joy"}
    //     emotionsOptions={warmupJoyEmotions}
    //   />
    // ),
    // emotionsDuringWarmup_fear: (
    //   <EmotionsOptionQuestion
    //     masterValue={masterValue}
    //     changeMasterValueObject={changeMasterValueObject}
    //     setNextButtonDisabled={setNextButtonDisabled}
    //     masterValueKey={"emotionsDuringWarmupDetails"}
    //     emotion={"fear"}
    //     emotionsOptions={warmupFearEmotions}
    //   />
    // ),
    // warmupSummary: (
    //   <WarmupSummaryQuestion
    //     masterValue={masterValue}
    //     changeMasterValue={changeMasterValue}
    //     warmupSummaries={warmupSummaries}
    //     setNextButtonDisabled={setNextButtonDisabled}
    //   />
    // ),
  };

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="container">
      <div className="header">
        <UilDiary className="icon" />
        <h3>Твой спортивный дневник</h3>
      </div>
      <div className="step-body">{stepsComponents[currentStep]}</div>
      <div className="footer">
        {/* <div className="progress-bar"></div> */}
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
            disabled={nextButtonDisabled}
            onClick={() => dispatch(goToNext())}
          >
            <span>Далее</span>
            <UilArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
