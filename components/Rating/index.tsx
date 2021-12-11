import useMono from '../../hooks/useMono';
import Slider from './Slider';

const Rating = () => {
  const mono = useMono();

  return (
    <div id="rate" className="space-y-40">
      <h1 className="text-6xl text-center font-medium">Your Credit Score</h1>

      <div className="max-w-[1440px] mx-auto flex">
        <div className="w-1/3">
          <ul className="uppercase font-bold space-y-8">
            <li>Payment History</li>
            <li>Investment Portfolio</li>
            <li>Credit Record</li>
          </ul>
        </div>
        <div className="w-1/3">
          <Slider />
        </div>
        <div className="text-center w-1/3">
          <span className="text-8xl text-[#32e1a0] font-medium">A</span>
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
          We use Mono to ensure the safety of your account. We never get
          anywhere close to your account :)
        </p>
      </div>
    </div>
  );
};

export default Rating;
