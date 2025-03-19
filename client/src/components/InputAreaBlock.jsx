import Button from "./ResetButton";
import Input from "./InputArea";

/* Contains a field for entering a search query and button for clearing text */
<<<<<<< HEAD
export default function InputAreaBlock({ id, fieldName, fieldText }) {
  return (
    <div className='flex flex-col sm:flex-row items-start gap-3 pb-10'>
      <Input id={id} fieldName={fieldName} fieldText={fieldText} />
=======
export default function InputAreaBlock({ id, name, text }) {
  return (
    <div className='flex flex-col sm:flex-row items-start gap-3 pb-10'>
      <Input id={id} name={name} text={text} />
>>>>>>> 2d5d183 (spike:mvpwflows: general modificaitons to the fomr and sketched implementation of an async call after submission of a prompt)
      <Button />
    </div>
  );
}
