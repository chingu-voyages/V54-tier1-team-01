import Header from "./Header";
import HeroImg from "../images/heroImg.png";

export default function HeroSection() {
  return (
    <section className='min-h-screen relative p-2 sm:p-4 md:p-9 overflow-hidden'>
      <Header />
      <div className='w-2/3 h-[calc(100vh-172px)] flex justify-center items-center'>
        <div className='w-4/5 flex flex-col items-center gap-7 text-center'>
          <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold mb-6'>
            Pentaprompt
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et
            condimentum purus. Fusce facilisis sapien nec purus porta
          </p>
          <button className='px-10 py-2 bg-amber-600 rounded-4xl font-bold'>
            Create prompt
          </button>
        </div>
      </div>
      <img
        src={HeroImg}
        className='absolute top-0 -right-26 sm:-right-10 md:right-0 h-screen object-cover'
        alt='AI girl'
      />
    </section>
  );
}
