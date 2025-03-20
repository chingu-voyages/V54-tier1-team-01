import InputAreaBlock from "./InputAreaBlock";
import DESCRIPTION from "../data/InputDescriptionInfo";

/*Section 1*/
export default function InputSection() {
  /*Form handling function*/
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h2 className='text-xl md:text-3xl font-bold'>
        Working on your Pentagram prompt
      </h2>
      <form
        name='prompt-form'
        method='POST'
        onSubmit={handleSubmit}
        className='p-10 md:p-20'
      >
        {DESCRIPTION.map((item, index) => (
          <InputAreaBlock
            key={index}
            id={index}
            fieldName={item.label}
            fieldText={item.text}
          />
        ))}
        <button
          type='submit'
          className='p-4 border rounded-2xl bg-black text-white duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer'
        >
          Submit
        </button>
      </form>
    </>
  );
}
