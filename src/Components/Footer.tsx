import facebook from "../assets/icons/facebook-f.svg";
import twitter from "../Assets/icons/twitter.svg";
import instagram from "../Assets/icons/instagram.svg";
import linkedin from "../Assets/icons/linkedin.svg";

export default function Footer() {
  const dataSVG = [facebook, twitter, instagram, linkedin];
  return (
    <footer>
      <div className="footer-div1">
        <h1>Travel.co</h1>
        <div className="d-flex">
          {dataSVG.map((data: any, idx: number) => (
            <img src={data} alt="icon" key={idx} />
          ))}
        </div>
        <p>
          Travel makes one modest. You see what a tiny place you occupy in the
          world.
        </p>
      </div>
      <div className="footer-div2">
        <a href="#">Website Templates </a>
        <p>created with</p>
        <a href="#"> Website Builder Software </a>.
      </div>
    </footer>
  );
}
