
# The Problem: An AIHelper for making good Pentagram Prompts

From the requirements, we understood that...

> the client sought a basic solution to assist users in creating Pentagram prompts.

We began this project by analyzing Chingu's requirements, prioritizing the 'right solution' before designing a suitable website.

# Vision, Mission and Objectives

Our Product Vision is... 

**Empowering Users to Master AI Prompts.** 

Our Mission is...

> To empower users of all skill levels to confidently create effective AI prompts by providing a structured, interactive, and educational web application that enhances their ability to generate accurate, efficient, and impactful results from AI models.


#### Key Objectives:

* ✅ Provide a step-by-step methodology for building clear and effective AI prompts.
* ✅ Offer real-time feedback and suggestions to help users refine their prompts.
* ✅ Enable users to track their learning progress and understand best practices.


#### Core Benefits:

*  Improved Prompt Quality: Users will develop stronger AI prompts that yield better results.
*  Learning by Doing: Through hands-on guidance, users will build prompt skills that improve over time.
*  AI Confidence: Users will gain deeper insights into how AI models respond to different prompt structures.

# Our App

Our project resulted in a simple **sandbox** or **playground** for aspiring prompt engineers, particularly those looking to master the Pentagram framework.

In our app, GeminiAI generates random, simulated scenarios, challenging users to craft optimal Pentagram prompts. The user assumes the role of a *student*.

![Image](https://github.com/user-attachments/assets/874ed02c-9d14-4875-a627-9174a7f3cfe7)

Users complete a form with each Pentagram prompt component, adhering to validation rules and character limits. They can reset the input areas of the form individually if needed.

![Image](https://github.com/user-attachments/assets/8bf2db53-9fa4-4556-8772-cdcc1ea80332)

Upon submission, GeminiAI evaluates the *effectiveness* of each **prompt component** (persona, task, context, output, and constraints) and provides feedback on **token usage**. This token information is included because token consumption directly impacts *costs* in generative chat APIs, thereby helping users develop **cost-effective** Pentagram prompts.

![Image](https://github.com/user-attachments/assets/20093bdb-c2ec-467c-9e4f-542534eb9f10)

Users can revise and resubmit their prompts for further evaluation until satisfied, or refresh the page for a new scenario.


# Team Documents

## Functionality

![functionality, Spring 2, Evaristo ](https://github.com/user-attachments/assets/3dce34f4-bd82-4e04-b5f0-29fdf3befa12)

## Original proposal for folder structure (@Drogers1999):
```
/src
│── components
│ │── Header.jsx
│ │ │── Logo.jsx
│ │ │── Nav.jsx
│ │── Section01.jsx (Form Input)
│ │ │── HeaderSection.jsx
│ │ │── Form.jsx
│ │ │── InputArea.jsx
│ │ │── SubmitButton.jsx
│ │── Section02.jsx (API Response)
│ │ │── ResponseDisplay.jsx
│ │── Footer.jsx
│── App.jsx
│── index.js
│── styles.css
```
## Wireframes used during development:
* https://app.mockflow.com/view/M0T2bLIwKrb
* https://app.mockflow.com/view/Mk9OLNw7Krb, by @Drogers1999

## Ideas for possible future releases

### landing page (by @NadiiaLashtun)

![Image](https://github.com/user-attachments/assets/737fc1f0-3aab-462f-ab71-fa083a95f478)

### layout and functionality for expected better UX, specially on mobile

![Image](https://github.com/user-attachments/assets/db21fad6-9539-4ff0-ab6d-0a9db0e4fae0)


# Our Team

### Scrum Master:
- Moshood (scrum master): GitHub and or linkedin (still not available)

### Developers:
- evaristoc (developer / po): [GitHub](https://github.com/evaristoc)
- Nadiia (developer): [GitHub](https://github.com/NadiiaLashtun)
- danR0gers (developer): [GitHub](https://github.com/Drogers1999)

