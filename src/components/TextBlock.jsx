import Button from "./Button";
import TextInput from "./TextInput";

export default function TextBlock() {
  return (
    <div className='flex justify-start gap-3'>
      <TextInput />
      <Button />
    </div>
  );
}
