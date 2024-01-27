import handIcon from "../assets/hand_icon.png";
import arrowIcon from "../assets/arrow.png";
import heroImage from "../assets/hero_image.png";

const HeroSerction = () => {
  return (
    <div className="h-full bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] to-60% flex">
      <div className="flex flex-1 flex-col justify-center gap-5">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div>
            <p>new</p>
            <img src={handIcon} alt="hand-icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div>
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="arrow-icon" />
        </div>
      </div>
      <div>
        <img src={heroImage} alt="hero-image" />
      </div>
    </div>
  );
};

export default HeroSerction;
