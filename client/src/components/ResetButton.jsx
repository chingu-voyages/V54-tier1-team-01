/* Button to clear the entered text */
export default function ResetButton({ inputID }) {
  const textDelete = () => {
    let textValue = document.getElementById(inputID);
    textValue.value = "";
  };

  return (
    <button
      type='button'
      className='p-4 border rounded-2xl bg-black text-white duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer'
      onClick={textDelete}
    >
      Reset
    </button>
  );
}
