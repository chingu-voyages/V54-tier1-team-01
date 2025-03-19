/* Field for entering a request */
<<<<<<< HEAD
export default function InputArea({ id, fieldName, fieldText }) {
=======
export default function InputArea({ id, name, text }) {
>>>>>>> 2d5d183 (spike:mvpwflows: general modificaitons to the fomr and sketched implementation of an async call after submission of a prompt)
  return (
    <>
      <label
        className='flex-1/4 text-md md:text-xl text-left font-bold'
        htmlFor={id}
      >
<<<<<<< HEAD
        {fieldName}:
=======
        {name}
>>>>>>> 2d5d183 (spike:mvpwflows: general modificaitons to the fomr and sketched implementation of an async call after submission of a prompt)
      </label>
      <textarea
        className='w-full h-24 p-2 border rounded'
        id={id}
<<<<<<< HEAD
        placeholder={fieldText}
        name={fieldName}
=======
        name={name}
        placeholder={text}
>>>>>>> 2d5d183 (spike:mvpwflows: general modificaitons to the fomr and sketched implementation of an async call after submission of a prompt)
      />
    </>
  );
}
