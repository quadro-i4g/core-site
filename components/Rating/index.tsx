import useMono from '../../hooks/useMono';
import Slider from './Slider';

const Rating = () => {
  const mono = useMono();

  return (
    <div className="md:space-y-40 space-y-10 pt-20">
      <h1 id="rate" className="text-6xl text-center font-medium">
        Your Credit Score
      </h1>

      <div className="max-w-[1440px] grayscale mx-auto flex flex-col-reverse items-center gap-20 md:gap-0 md:items-stretch md:flex-row">
        <div className="md:w-1/3 hidden md:block">
          <ul className="uppercase font-bold space-y-8">
            <li>Payment History</li>
            <li>Investment Portfolio</li>
            <li>Credit Record</li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <Slider />
        </div>
        <div className="text-center md:w-1/3">
          <span className="text-8xl text-[#32e1a0] font-medium">B</span>
          <p>Your Grade</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <button
          className="px-8 bg-primary-green text-white p-3 rounded-md"
          onClick={() => mono.open()}
        >
          Connect account
        </button>
        <p className="text-gray-400">
          We use Mono to ensure the safety of your account details. We never get
          anywhere close to your account :)
        </p>
      </div>
    </div>
  );
};

export default Rating;
