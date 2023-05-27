export default function Header() {
  return (
    <>
      <header>
        <div className="header-inner center-cont">
          <a href="/" className="logo">
            Travel.co
          </a>
          <ul className="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="readMore.html">Blog</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
            <li>
              <a href="#places">Places</a>
            </li>
            <li>
              <a href="#discount">Discount</a>
            </li>
          </ul>
          <a href="/" id="home"></a>
        </div>
      </header>
    </>
  );
}
