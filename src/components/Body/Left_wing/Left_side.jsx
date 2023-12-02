import Clock from './Clock';
import Sticker from './Sticker'; // Assuming image2 is the file for the Sticker component
import Navbar from './Navbar1';

function LeftWing() {
  return (
    <div className="flex flex-col justify-between w-[19.651rem] h-[38.065rem]  bg-primary ">
      <div>
        <Clock />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Sticker />
      </div>
    </div>
  );
}

export default LeftWing;
