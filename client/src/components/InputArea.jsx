/* Field for entering a request */
export default function InputArea({ id, fieldName, fieldText }) {
  return (
    <>
      <label
        className='flex-1/4 text-md md:text-xl text-left font-bold'
        htmlFor={id}
      >
        {fieldName}:
      </label>
      <textarea
        className='w-full h-24 p-2 border-2 border-black rounded focus:outline-none focus:border-amber-500'
        id={id}
        placeholder={fieldText}
        name={fieldName}
        minLength='10'
        maxLength='150'
        required
      />
    </>
  );
}
