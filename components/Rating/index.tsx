import useMono from '../../hooks/useMono';
import Slider from './Slider';
import { FiLoader } from 'react-icons/fi';

const Rating = () => {
  const { mono, loading, score } = useMono();

  return (
    <div className="md:space-y-40 space-y-10 pt-20">
      <h1 id="rate" className="text-6xl text-center font-medium">
        Your Credit Score
      </h1>

      <div
        className={`max-w-[1440px] mx-auto flex flex-col-reverse items-center gap-20 md:gap-0 md:items-stretch md:flex-row  ${
          !loading && !score && 'grayscale'
        }`}
      >
        <div className="md:w-1/3 hidden md:flex justify-center">
          <ul className="uppercase font-bold space-y-8">
            <li>Payment History</li>
            <li>Investment Portfolio</li>
            <li>Credit Record</li>
          </ul>
        </div>
        <div className="md:w-1/3 flex justify-center transition-all duration-500 ease-in-out">
          <Slider score={score} />
        </div>
        <div className="text-center md:w-1/3 space-y-2">
          <span className="text-8xl text-[#32e1a0] font-medium">
            {grading(score)}
          </span>
          <p>Your Grade</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <button
          disabled={Boolean(loading || score)}
          className={`px-8 min-w-[200px] h-12 flex justify-center bg-primary-green text-white p-3 rounded-md ${
            !loading && !score && 'animate-pulse'
          }`}
          onClick={() => mono.open()}
        >
          {loading ? (
            <FiLoader className="animate-spin text-2xl" />
          ) : score ? (
            'Connected with Mono'
          ) : (
            'Connect account'
          )}
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

const grading = (score: number) => {
  let grade = '';

  if (score > 0 && score <= 29) grade = 'F';
  else if (score >= 30 && score <= 49) grade = 'E';
  else if (score >= 50 && score <= 64) grade = 'D';
  else if (score >= 65 && score <= 79) grade = 'C';
  else if (score >= 80 && score <= 89) grade = 'B';
  else if (score >= 90 && score <= 100) grade = 'A';
  else {
    grade = 'N/A';
  }

  return grade;
};
