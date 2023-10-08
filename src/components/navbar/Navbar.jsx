import React, { useState } from "react";
import navStyle from "./Navbar.module.css";
import logoImg from "../../assets/logo (2).svg";
import { FaUser, FaRegUser, FaUsers } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineCloudServer, AiOutlineContacts } from "react-icons/ai";
import { ImWordpress } from "react-icons/im";
import { BiServer } from "react-icons/bi";
import { BiCloudLightning } from "react-icons/bi";
import { LiaServerSolid } from "react-icons/lia";
import { VscServer } from "react-icons/vsc";
import { TbWorldWww } from "react-icons/tb";
import { MdImportantDevices } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbServerBolt } from "react-icons/tb";
import { VscServerEnvironment } from "react-icons/vsc";
import { Drawer } from "antd";
import { Menu, Switch } from "antd";
import { useNavigate } from "react-router-dom";
import { domain, hosting, domainPrice ,moreOption} from "../../data/Hosting";

// Navbar component
const Navbar = () => {
  // State variables for managing dropdown menus and the mobile drawer
  const [dropdownMenu, setDownMenu] = useState(false);
  const [dropdownSelling, setDownSelling] = useState(false);
  const [dropdownDomain, setDownDomain] = useState(false);
  const [dropdownMore, setDownMore] = useState(false);
  const [open, setOpen] = useState(false);
  const nevigate = useNavigate();
  // Function to open the mobile drawer
  const showDrawer = () => {
    setOpen(true);
  };

  // Function to close the mobile drawer
  const onClose = () => {
    setOpen(false);
  };

  // Function to handle dropdown menu clicks
  const dropdounHandler = (type) => {
    // Depending on the type, toggle the corresponding dropdown and close others
    if (type === "HostingDropdown") {
      setDownMenu(!dropdownMenu);
      setDownSelling(false);
      setDownMore(false);
      setDownDomain(false);
    }
    if (type === "ResellingDropdown") {
      setDownSelling(!dropdownSelling);
      setDownMenu(false);
      setDownDomain(false);
      setDownMore(false);
    }
    if (type === "DomainDropdown") {
      setDownDomain(!dropdownDomain);
      setDownMenu(false);
      setDownMore(false);
      setDownSelling(false);
    }
    if (type === "DropDownMore") {
      setDownMenu(false);
      setDownMore(!dropdownMore);
      setDownDomain(false);
      setDownSelling(false);
    }
  };

  return (
    <header className={navStyle.headerSection}>
      {/* Logo Section */}

      <div className={navStyle.logoSection} onClick={() => nevigate("/")}>
        <img src={logoImg} alt="Hostgenics" className="main-logo" />
      </div>

      {/* Menu Section */}
      <nav className={navStyle.menuSection}>
        <a href="">Home</a>

        {/* Hosting Dropdown */}
        <div
          className={navStyle.hostingDropdown}
          onClick={() => dropdounHandler("HostingDropdown")}
        >
          <span>Hosting</span>
          <span
            className={"material-symbols-outlined" || navStyle.dropDownIcon}
          >
            {dropdownMenu ? "arrow_drop_up" : "arrow_drop_down"}
          </span>
          {dropdownMenu && (
            <div className={navStyle.hostingOption}>
              {hosting.map((data, index) => (
                <div className={navStyle.hostingSection} key={index}>
                  <div>
                    <img src={data.imgUrl} alt="mmm" />
                  </div>
                  <div>
                    <h6>{data.name}</h6>
                    <p>{data.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Domain Dropdown */}
        <div
          className={navStyle.domainDropdown}
          onClick={() => dropdounHandler("DomainDropdown")}
        >
          <span>Domain</span>
          <span
            className={"material-symbols-outlined" || navStyle.dropDownIcon}
          >
            {dropdownDomain ? "arrow_drop_up" : "arrow_drop_down"}
          </span>
          {dropdownDomain && (
            <div className={navStyle.domainOption}>
              <div className={navStyle.domainOptionOne}>
                {domain.map((res, index) => (
                  <div key={index} className={navStyle.domainSection}>
                    <div>
                      <img src={res.imgUrl} alt="" />
                    </div>
                    <div className={navStyle.domainInfo}>
                      <h6>{res.name}</h6>
                      <p>{res.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* domain */}
              <div className={navStyle.domainOptionTwo}>
                {domainPrice.map((domainInfo, index) => (
                  <div key={index} className={navStyle.domainPriceSection}>
                    <h2>{domainInfo.name}</h2>
                    <span>{domainInfo.offer}</span>
                    <p>{domainInfo.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Affiliate */}
        <a href="">Affiliate</a>

        {/* More Dropdown */}
        <div
          className={navStyle.moreDropdown}
          onClick={() => dropdounHandler("DropDownMore")}
        >
          <span>More</span>
          <span
            className={"material-symbols-outlined" || navStyle.dropDownIcon}
          >
            {dropdownMore ? "arrow_drop_up" : "arrow_drop_down"}
          </span>
          {dropdownMore && 
          <div className={navStyle.menuDropContainer}>
            {
             moreOption.map((more,index)=>(
              <div key={index} className={navStyle.menuDropOption} onClick={()=>nevigate(more.path)}>
               <div>
                <img src={"jj"} alt="image not load" />
               </div>
               <div>
                Lorem ipsum dolor sit amet consectetur.
               </div>
              </div>

             )) 
            }
          </div>
          }
        </div>
      </nav>

      {/* Login Section */}
      <div className={navStyle.loginSection}>
        <div className={navStyle.loginBtn}>
          <FaUser size={17} />
          <a href="">Login</a>
        </div>

        <div className={navStyle.sideMenu} style={{}}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "30px", fontWeight: 200 }}
            onClick={showDrawer}
          >
            {open ? "close" : "menu"}
          </span>
          <Sideber onClose={onClose} open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const Sideber = ({ open, onClose, setOpen }) => {
  const [theme, setTheme] = useState("dark");

  const [current, setCurrent] = useState("1");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem("Home", "Home", <HiOutlineHome size={19} />),
    getItem("Hosting", "Hosting", <AiOutlineCloudServer size={25} />, [
      getItem("Shared Hosting", "SharedHosting", <BiServer size={19} />),
      getItem(
        "WordPress Hosting",
        "WordPressHosting",
        <ImWordpress size={19} />
      ),
      getItem("Cloud Hosting", "CloudHosting", <BiCloudLightning size={19} />),
      getItem(
        "Premium Hosting",
        "PremiumHosting",
        <LiaServerSolid size={19} />
      ),
    ]),

    getItem("Reseller Hosting", "ResellerHosting", <VscServer size={18} />),

    getItem("Domain", "Domain", <TbServerBolt size={18} />, [
      getItem(
        "Domain Ragistration",
        "DomainRagistration",
        <TbWorldWww size={18} />
      ),
      getItem(
        "Domain Transfer",
        "DomainTransfer",
        <VscServerEnvironment size={18} />
      ),
      getItem(
        "Domain Pricing",
        "DomainPricing",
        <MdOutlinePriceChange size={18} />
      ),
      getItem(
        "Top Level Domain",
        "TopLevelDomain",
        <MdImportantDevices size={18} />
      ),
    ]),

    getItem("Affiliate", "Affiliate", <FaUsers size={18} />),

    getItem("Contact Us", "Contact", <AiOutlineContacts size={18} />, [
      getItem(
        "Domain Ragistration",
        "DomainRagistration",
        <TbWorldWww size={20} />
      ),
      getItem(
        "Domain Transfer",
        "DomainTransfer",
        <VscServerEnvironment size={20} />
      ),
      getItem(
        "Domain Pricing",
        "DomainPricing",
        <MdOutlinePriceChange size={20} />
      ),
      getItem(
        "Top Level Domain",
        "TopLevelDomain",
        <MdImportantDevices size={18} />
      ),
    ]),

    getItem("Login User", "Login", <FaRegUser size={18} />),
  ];

  return (
    <Drawer
      placement="left"
      width={"280px"}
      style={{ height: "100%" }}
      closeIcon={false}
      open={open}
      onClose={onClose}
    >
      <div className={navStyle.reslogoSection}>
        <div>
          <img src={logoImg} alt="Logo" />
        </div>
        <section className={navStyle.arrowbackIcon}>
          <span
            className={"material-symbols-outlined"}
            style={{ fontSize: "25px" }}
            onClick={() => setOpen(false)}
          >
            {open ? "arrow_back" : null}
          </span>
        </section>
      </div>

      <div className={navStyle.menuContainar}>
        <Menu
          theme={theme}
          onClick={onClick}
          style={{ height: "100%", width: "100%" }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </div>

      <div className={navStyle.theme}>
        <span>Theme</span>
        <Switch
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
    </Drawer>
  );
};
