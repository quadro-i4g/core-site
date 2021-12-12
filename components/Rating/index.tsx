import useMono from '../../hooks/useMono';
import Slider from './Slider';
import Image from 'next/image';
import MonoIcon from '../../assets/mono.png';
import colorize, { Grade } from '../../utils/colorize';

const Rating = () => {
  const { mono, loading, score } = useMono();

  return (
    <div className="md:space-y-32 space-y-10 pt-20">
      <h1 id="rate" className="text-6xl text-center font-medium">
        Your Credit Score
      </h1>

      <div
        className={`max-w-[1440px] mx-auto flex flex-col-reverse items-center gap-20 md:gap-0 md:items-stretch md:flex-row  ${
          !loading && score.score === 0 && 'grayscale opacity-40'
        }`}
      >
        <div className="md:w-1/3 hidden md:flex flex-col justify-center uppercase font-bold space-y-4">
          <p className="">Based on</p>
          <ul className="space-y-4 list-disc">
            <li>Payment History</li>
            <li>Investment Portfolio</li>
            <li>Credit Record</li>
          </ul>
        </div>
        <div className="md:w-1/3 flex justify-center transition-all duration-500 ease-in-out">
          <Slider score={score.score} />
        </div>
        <div className="text-center md:w-1/3 space-y-2">
          <span
            style={{ color: colorize(score.grade as Grade) }}
            className={`text-8xl font-medium`}
          >
            {score.grade}
          </span>
          <p>Your Grade</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <button
          disabled={Boolean(loading || score?.score)}
          className={`min-w-[240px] h-12 flex justify-center items-center bg-[#182CD1] bg-opacity-90 text-white rounded-lg ${
            !loading && !score?.score && 'animate-pulse'
          }`}
          onClick={() => mono.open()}
        >
          <div className="flex h-full items-center px-3 border-r border-opacity-30">
            <Image
              width={25}
              height={25}
              src={MonoIcon}
              alt="Mono"
              className={`${loading && 'animate-spin'}`}
            />
          </div>
          <div className="px-4">
            {loading
              ? 'Calculating your score'
              : score?.score
              ? 'Connected with Mono'
              : 'Link account with Mono'}
          </div>
        </button>
        <p className="text-gray-400">
          We use{' '}
          <a href="https://mono.co" className="text-black underline">
            Mono
          </a>{' '}
          to ensure the safety of your account details. We never get anywhere
          close to your account :)
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
