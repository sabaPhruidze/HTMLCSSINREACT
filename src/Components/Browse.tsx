import facebook from "../assets/icons/facebook-f.svg";
import twitter from "../Assets/icons/twitter.svg";
import instagram from "../Assets/icons/instagram.svg";
import youtube from "../Assets/icons/youtube.svg";
import linkedin from "../Assets/icons/linkedin.svg";

export default function Browse() {
  const dataSVG = [facebook, twitter, instagram, youtube, linkedin];
  const card1Data = [
    "Outdoor Activities",
    "Cultural & Thematic Tours",
    "Family Friendly Tours",
    " Holiday & Seasonal Tours",
  ];
  const card2Data = [
    "Outdoor Activities",
    "Cultural & Thematic Tours",
    "Family Friendly Tours",
    " Holiday & Seasonal Tours",
  ];
  return (
    <div className="browse-container">
      <div className="center-cont">
        <div className="places-list">
          <div className="card-1">
            <h1 className="d-block">Browse Tours By Activity</h1>
            {card1Data.map((data: string, idx: number) => (
              <a href="" className="d-block" key={idx}>
                {data}
              </a>
            ))}
          </div>
          <div className="card-2">
            {card2Data.map((data: string, idx: number) => (
              <a href="" className="d-block" key={idx}>
                {data}
              </a>
            ))}
          </div>
          <div className="card-3">
            <h1>Newsletter</h1>
            <p>Subscribe for updates & promotions</p>
            <form action="path/to/php/file.php" method="post">
              <div className="emailSend">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter a valid email address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
            <div className="icons d-flex">
              {dataSVG.map((data: any, idx: number) => (
                <img src={data} alt="icon" key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
