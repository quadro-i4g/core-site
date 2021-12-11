import Slider from './Slider';

const Rating = () => {
  return (
    <div id="rate">
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
    </div>
  );
};

export default Rating;
