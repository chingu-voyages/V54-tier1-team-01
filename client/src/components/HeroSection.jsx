import Header from "./Header";
import HeroImg from "../images/heroImg.png";

export default function HeroSection() {
  return (
    <section className='relative min-h-screen px-2 sm:px-4 md:px-9 bg-radial from-white via-neutral-200 to-neutral-50 overflow-hidden'>
      <Header />
      <div className='w-3/4 h-[calc(100vh-100px)] flex justify-center items-end sm:items-center'>
        <div className='w-3/4 flex flex-col items-center gap-7 text-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-br from-(--primary-color) to-(--primary-dark-color)/80 bg-clip-text text-transparent'>
            Pentaprompt
          </h1>
          <p className='text-(--primary-dark-color)'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et
            condimentum purus. Fusce facilisis sapien nec purus porta
          </p>
          <button className='px-10 py-2 bg-(--brand-color) rounded-4xl font-bold text-(--secondary-color)'>
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
