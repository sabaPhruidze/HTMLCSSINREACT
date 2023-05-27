import church from "../assets/img/church.jpeg";
import locationSVG from "../assets/icons/locationSVG.svg";
import Rock from "../assets/img/rock.jpeg";
import sanFrancisco from "../assets/img/sanFrancisco.jpeg";
import navagio from "../Assets/img/navagio.jpeg";
import aoNang from "../Assets/img/aoNang.jpeg";
import phiphi from "../Assets/img/phiphi.jpeg";
export default function Places() {
  const cardData = [
    {
      imgSource: church,
      title: "Santorini, Greece",
    },
    {
      imgSource: Rock,
      title: "Vernazza, Italy",
    },
    {
      imgSource: sanFrancisco,
      title: "San Francisco",
    },
    {
      imgSource: navagio,
      title: "Navagio, Greece",
    },
    {
      imgSource: aoNang,
      title: "Ao Nang, Thailand",
    },
    {
      imgSource: phiphi,
      title: "Phi Phi Islands, Thailand",
    },
  ];
  return (
    <div className="places center-cont">
      <h1>Start Your Jorney</h1>
      <p>The most searched countries in March</p>
      <a href="" className="places"></a>
      <div className="places-list">
        {cardData.map((data: any, idx: number) => (
          <>
            <div className="places-card" key={idx}>
              <img
                src={data.imgSource}
                alt={data.title}
                className="location-main-photo"
              />
              <div className="place-bottom">
                <img src={locationSVG} alt="location" className="locationSVG" />
                <i>{data.title}</i>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
