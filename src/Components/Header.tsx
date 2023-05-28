export default function Header() {
  const HeaderData = [
    {
      context: "Home",
      href: "#home",
    },
    {
      context: "Blog",
    },
    {
      context: "Contacts",
    },
    {
      context: "Places",
      href: "#places",
    },
    {
      context: "Discount",
      href: "#discount",
    },
  ];
  return (
    <>
      <header>
        <div className="header-inner center-cont">
          <a href="/" className="logo">
            Travel.co
          </a>

          {HeaderData.map((data, idx) => (
            <ul className="menu" key={idx}>
              <li>
                <a href={data.href}>{data.context}</a>
              </li>
            </ul>
          ))}
          <a href="/" id="home"></a>
        </div>
      </header>
    </>
  );
}
