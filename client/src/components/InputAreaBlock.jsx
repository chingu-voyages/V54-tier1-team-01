import Button from "./ResetButton";
import Input from "./InputArea";

/* Contains a field for entering a search query and button for clearing text */
export default function InputAreaBlock() {
  return (
    <div className='flex justify-start gap-3'>
      <Input />
      <Button />
    </div>
  );
}
