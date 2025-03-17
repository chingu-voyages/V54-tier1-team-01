import Button from "./ResetButton";
import Input from "./InputArea";

/* Contains a field for entering a search query and button for clearing text */
export default function InputAreaBlock() {
  return (
    <div className='flex flex-col sm:flex-row items-start gap-3 pb-10'>
      <Input />
      <Button />
    </div>
  );
}
