/* Field for entering a request */
export default function InputArea({ lab, text }) {
  return (
    <>
      <label
        className='flex-1/4 text-md md:text-xl text-left font-bold'
        for='prompt'
      >
        {lab}
      </label>
      <textarea
        className='w-full h-24 p-2 border rounded'
        id='prompt'
        placeholder={text}
      />
    </>
  );
}
