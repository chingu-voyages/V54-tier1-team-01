import InputAreaBlock from "./InputAreaBlock";

/*Section 1*/
export default function InputSection() {
  return (
    <>
      <h2 className='text-xl md:text-3xl font-bold'>
        Working on your Pentagram prompt
      </h2>
      <form className='p-10 md:p-20'>
        <InputAreaBlock />
        <button className='p-4 border rounded-2xl bg-black text-white duration-300 ease-in-out hover:bg-white hover:text-black hover:cursor-pointer'>
          Submit
        </button>
      </form>
    </>
  );
}
