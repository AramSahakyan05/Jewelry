import CONFIG from "../../config";

const Header = () => {
    const {location, jewelry, releases, gifts, shopName, search,  heart, bag, profile} = CONFIG.headerConfig;
  return (
      <header>
        <div className="col-1">
            <ul className="header-list">
                <li>
                    {location}
                </li>
                <li>
                    {jewelry}
                </li>
                <li>
                    {releases}
                </li>
                <li>
                    {gifts}
                </li>
            </ul>
        </div>
        <div className="col-2">
            <h1>{shopName}</h1>
        </div>
        <div className="col-3">
            <ul className="header-list">
                <li className="search-list-item">
                    <input type="text" placeholder="Search"/>
                    <img src={search} alt="" />
                </li>
                <li className="heart">
                    {heart}
                </li>
                <li className="bag">
                    <img src={bag} alt="" />
                </li>
                <li>
                    {profile}
                </li>
            </ul>
        </div>
      </header>
      )
}

export default Header
