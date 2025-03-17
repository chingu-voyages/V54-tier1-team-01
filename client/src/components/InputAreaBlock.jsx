import Button from "./ResetButton";
import Input from "./InputArea";

/* Contains a field for entering a search query and button for clearing text */
export default function InputAreaBlock({ lab, text }) {
  return (
    <div className='flex flex-col sm:flex-row items-start gap-3 pb-10'>
      <Input lab={lab} text={text} />
      <Button />
    </div>
  );
}
