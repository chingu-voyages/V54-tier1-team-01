import InputAreaBlock from "./InputAreaBlock";

/*Section 1*/
export default function InputSection() {
  return (
    <>
      <h2 className='text-xl md:text-3xl font-bold'>
        Working on your Pentagram prompt
      </h2>
      <form className='p-10 md:p-20'>
        <InputAreaBlock lab='Person:' text='Explain your role...' />
        <InputAreaBlock
          lab='Context:'
          text='Provide background information...'
        />
        <InputAreaBlock
          lab='Task:'
          text='Define what information you need...'
        />
        <InputAreaBlock
          lab='Output:'
          text='Define the format and details of the response...'
        />
        <InputAreaBlock
          lab='Constraints:'
          text='Limitations and guidelines that should be considered...'
        />
        <button className='p-4 border rounded-2xl bg-black text-white duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer'>
          Submit
        </button>
      </form>
    </>
  );
}
