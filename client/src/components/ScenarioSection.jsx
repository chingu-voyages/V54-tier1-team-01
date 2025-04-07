import React from "react";
import ReactMarkdown from "react-markdown";

const markdownContentTest = `
# Crafting Prompts with the Pentagram Framework

## Introduction

The Pentagram framework structures prompts using Persona, Task, Context, Output, and Constraints.

## Scenario:  Marketing Copy for a New App

Imagine you're working for a startup that has just launched a revolutionary new productivity app called "FlowState."  FlowState helps users manage their time and tasks more effectively by employing a unique "focus-flow" technique based on scientifically proven principles of peak performance. The app uses gamification elements to keep users engaged and offers personalized insights and reports to track progress.  Target users are busy professionals aged 25-45 who are looking to boost their productivity and reduce stress. Your company needs compelling marketing copy to attract these users.

## Your Task

Your task is to construct a single, well-structured prompt based on the Pentagram framework to generate marketing copy for the FlowState app.  Remember, each part of the pentagram must be clearly defined in your prompt:

* **Persona:** The role the AI should assume (e.g., experienced marketing copywriter).
* **Task:** The specific action the AI should perform (e.g., write marketing copy).
* **Context:**  Background information relevant to the task (e.g., the app's features, target audience).
* **Output:** The desired format of the output (e.g., a 200-word marketing blurb for social media).
* **Constraints:** Any limitations or guidelines for the output (e.g., tone, style, keywords).

Once you've crafted your prompt, submit it to me. I will then provide feedback on its effectiveness based on the Pentagram framework, helping you to refine your prompt engineering skills.
`;

export default function ScenarioSection(props) {
    return (
        <section className="scenario-section gemini bg-neutral-100 p-6 rounded-md mb-6">
            <ReactMarkdown>{props.scene}</ReactMarkdown>
        </section>
    );
}