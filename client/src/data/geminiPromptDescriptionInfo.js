const PROMPTS = {
    test:``,
<<<<<<< HEAD
    onMountScenarioPrompt: () => { return `
=======
    onMountScenarioPrompt: () => { 
       /* basic prompt sent to gemini to formulate scenario */
      return `
>>>>>>> 89c709c (spike:mvpwflows: making the prompt creation based on functions)
      You are a teacher teaching a student how to make prompts using the pentagram framework. Pentagram framework for making a prompt should consists in 5 parts: Persona (the role that the AI has to assume), a Task, the Context of the task, a desired Output format and some Constraints to the output. Your student is a user who is learning prompt engineering who don't know how to make prompts based on the pentagram framework. Your task is to provide the student with either a case or an scenario for which he / she should make a composite Pentagram-based prompt. Think of variety of scenarios in many fields (eg. music, engineering, software, policy, etc). The resulting prompt based on the scenario provided by you would then be sent to an AI which in turn will provide advice about the quality of that prompt. So it is a training that goes in that order:
      1. you provide the scenario and ask to make either one, several or a full prompt for that scenario based on pentagram framework
      2. the user follows your instructions, make the prompt and send that to you
      3. you provide a review, like a teacher, of the quality of the prompt based on the pentagram framework
      Do the step one mentioned above. Present the result in markdown format with a clear title, a concise introduction of the pentagram framework (no more than 20 words), an scenario section, and a section shortly describing what the student must do and what will happen next. Subtitels of the sections should be always set in (##) markdown.
      `},
      onSubmissionPrompt: (scene)=>{
<<<<<<< HEAD
=======
        /* basic prompt sent to gemini to assess input prompts */
>>>>>>> 89c709c (spike:mvpwflows: making the prompt creation based on functions)
        return `
                You have been previously asked to formulate the following task and scenario for a student: ${scene}.
                Now it is time to evaluate the prompts made by the student. Provide a concise evaluation in markdown format of no more than 3 sentences per component of the Pentagram prompt framework given by the student:
                    `
<<<<<<< HEAD
=======
      },
      addPromptComponent: (prompt, promptCompList, promptCompSource)=>{
        /* adds input sub prompts to an existing prompt */
        for(let i = 0; i < promptCompList.length; i++){
          prompt = prompt +' '+ promptCompList[i] + ': ' + promptCompSource[promptCompList[i]] + '.\n'
        }
        return prompt;
>>>>>>> 89c709c (spike:mvpwflows: making the prompt creation based on functions)
      }

}

export default PROMPTS