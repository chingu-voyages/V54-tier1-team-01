/* Field for entering a request */
export default function InputArea({ id, fieldName, fieldText }) {
  return (
    <>
      <label
        className='flex-1/4 text-md md:text-xl text-left font-bold'
        htmlFor={id}
      >
        {fieldName}
      </label>
      <textarea
        className='w-full h-24 p-2 border rounded'
        id={id}
        placeholder={fieldText}
        name={fieldName}
      />
    </>
  );
}
