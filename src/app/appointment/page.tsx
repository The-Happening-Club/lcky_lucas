"use client";

import React, { useReducer } from "react";
import Image from "next/image";
import classed from "@classed/react";
import { appointmentData } from "../data/appointmentdata";

type AppointmentState = {
  step: number;
  data: {
    name?: string;
    surename?: string;
    consulting?: boolean;
    style?: {
      width: number;
      heigth: number;
      type: string;
      color: string;
      position: string;
      posImg: string;
      refImg: string;
    };
    ageCheck?: boolean;
    parentCheck?: boolean;
    date?: string;
    email?: string;
  };
};

type Action =
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SKIP_STEPS"; skip: number }
  | { type: "SET_FIELD"; field: string; value: string };

function appointmentReducer(
  state: AppointmentState,
  action: Action
): AppointmentState {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: Math.max(state.step - 1, 0) };
    case "SKIP_STEPS":
      return { ...state, step: state.step + action.skip };
    case "SET_FIELD":
      return {
        ...state,
        data: { ...state.data, [action.field]: action.value },
      };
    default:
      return state;
  }
}

const ClassedContentContainer = classed(
  "div",
  "flex flex-col justify-center items-center text-center gap-4"
);

const ClassedParagraph = classed("p", "text-lg");

const ClassedProgressContainer = classed(
  "div",
  "flex justify-between items-center w-full h-2 p-10"
);

const ClassedButtonContainer = classed(
  "div",
  "flex w-full justify-center gap-4 duration-500 ease-out transition-all"
);

export default function Appointment() {
  const [state, dispatch] = useReducer(appointmentReducer, {
    step: 0,
    data: {},
  });

  const currentStep = appointmentData[state.step];

  async function handleSubmit() {
    try {
      const response = await fetch("/api/mail", {
        method: "post",
        body: "",
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const responseData = await response.json();
      alert("Message successfully sent: " + responseData.message);
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  const handleButtonClick = (buttonType: string) => {
    if (buttonType === "forward") {
      dispatch({ type: "NEXT_STEP" });
    } else if (buttonType === "backward") {
      dispatch({ type: "PREV_STEP" });
    } else if (buttonType === "send") {
      handleSubmit();
    }
  };

  return (
    <main className="grid grid-cols-1 items-center h-screen bg-gradient-to-t from-[#000000] to-[#2A2A2A] px-4">
      <div className="flex justify-center items-center w-full h-fit p-4">
        <div className="flex h-48 w-48 bg-black rounded-full aspect-square overflow-hidden">
          <Image
            src={`/${currentStep.imageUrl}`}
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>

      <ClassedContentContainer>
        <h1 className="font-bold text-5xl">{currentStep.header}</h1>
        {currentStep.text ? (
          <ClassedParagraph>{currentStep.text}</ClassedParagraph>
        ) : null}
        {currentStep.inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            required={input.required}
            className="bg-stone-950 border-slate-600 text-slate-300 border drop-shadow-xl shadow-inner w-96 p-2 rounded-full text-center text-4xl uppercase"
            onChange={(e) => {
              dispatch({
                type: "SET_FIELD",
                field: "name",
                value: e.target.value,
              });
            }}
          />
        ))}
      </ClassedContentContainer>

      <ClassedButtonContainer>
        {currentStep.buttons.map((button, index) => (
          <button
            key={index}
            className={`py-2 px-4 ${
              button.disabled
                ? "text-gray-600 border-gray-600"
                : "text-lckyred border-lckyred"
            } border rounded-full max-w-60 min-w-48`}
            onClick={() => handleButtonClick(button.type)}
          >
            {button.text}
          </button>
        ))}
      </ClassedButtonContainer>

      <ClassedProgressContainer>
        {appointmentData.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index <= state.step ? "bg-lckyred" : "bg-gray-800"
            }`}
          ></div>
        ))}
      </ClassedProgressContainer>
    </main>
  );
}
