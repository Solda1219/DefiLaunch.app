import React, { useState, useMemo, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { FaExchangeAlt, FaHome, FaListAlt, FaCoins, FaRocket, FaShieldAlt, FaLock } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { Menu, MenuItem, ProSidebar, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import styled from 'styled-components';
import queryString from 'query-string';
import logo from '../images/logo_main.png'; // Adjusted path to match your file structure
import { SiSurveymonkey } from "react-icons/si";



const Menuitem = styled(MenuItem)`
  :hover {
    background-color: #ffdb58;
    padding: 5px;
    border-radius: 10px;
  }
`;

export function useRouter() {
  const params = useParams();
  const location = useLocation();

  return useMemo(() => {
    return {
      push: location.push,
      replace: location.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      location,
    };
  }, [params, location]);
}

const MainLayout = (props) => {
  const router = useRouter();

  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= 575;

  const [collapsed, setCollapsed] = useState(isMobile);
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const onClickMenuItem = () => {
    if (isMobile) setCollapsed(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <ProSidebar collapsed={collapsed}>
        <SidebarHeader>
          <img src={logo} alt="Brand Logo" height="40px" /> {/* Using imported logo */}
          <div className="toggleMenu" onClick={onClickMenuIcon}>
            <AiOutlineMenu />
          </div>
        </SidebarHeader>
        <Menu iconShape="square">
          <Menuitem
            icon={<FaHome />}
            className={`${router.pathname === "/" ? "active" : ""}`}
          >
            <Link to="/" onClick={onClickMenuItem}>
              Home
            </Link>
          </Menuitem>
          {/* <SubMenu
            title="Bridge"
            icon={<FaListAlt />}
            className={`${router.pathname === "/sale-list" ? "active" : ""}`}
          > 
            <MenuItem
              className={`${
                router.pathname === "/bridge" ||
                router.pathname === "/my-contribution"
                  ? "active"
                  : ""
              }`}
            >
              <Link to="/bridge" onClick={onClickMenuItem}>
                Bridge
              </Link>
            </MenuItem>
          </SubMenu>

            */}

          <SubMenu
            title="Launchpad"
            icon={<FaListAlt />}
            className={`${router.pathname === "/sale-list" ? "active" : ""}`}
          >
            <MenuItem
              className={`${
                router.pathname === "/sale-list" ||
                router.pathname === "/my-contribution"
                  ? "active"
                  : ""
              }`}
            >
              <Link to="/sale-list" onClick={onClickMenuItem}>
                View Launches
              </Link>
            </MenuItem>
          </SubMenu>

          <SubMenu
            title="Create Token"
            icon={<FaCoins />}
            className={`${
              router.pathname === "/token" ||
              router.pathname === "/my-contribution"
                ? "active"
                : ""
            }`}
          >
            <MenuItem
              className={`${router.pathname === "/token" ? "active" : ""}`}
            >
              <Link to="/token" onClick={onClickMenuItem}>
                Custom Token
              </Link>
            </MenuItem>
          </SubMenu>

          <SubMenu
            title="Create Launch"
            icon={<FaRocket />}
            className={`${
              router.pathname === "/presale" ||
              router.pathname === "/fairlaunch" ||
              router.pathname === "/sale-list" ||
              router.pathname === "/my-contribution"
                ? "active"
                : ""
            }`}
          >
            <Menuitem
              className={`${router.pathname === "/presale" ? "active" : ""}`}
            >
              <Link to="/presale" onClick={onClickMenuItem}>
                Crowd Sale
              </Link>
            </Menuitem>
            <MenuItem
              className={`${router.pathname === "/fairlaunch" ? "active" : ""}`}
            >
              <Link to="/fairlaunch" onClick={onClickMenuItem}>
                Fair Launch
              </Link>
            </MenuItem>
          </SubMenu>

          {/*  <SubMenu
            title="Create"
            icon={<FaRocket />}
            className={`${
              router.pathname === "/presale" ||
              router.pathname === "/fairlaunch" ||
              router.pathname === "/sale-list" ||
              router.pathname === "/token" ||
              router.pathname === "/my-contribution"
                ? "active"
                : ""
            }`}
          >
            <Menuitem
              className={`${router.pathname === "/presale" ? "active" : ""}`}
            >
              <Link to="/presale" onClick={onClickMenuItem}>
                Create launchpad
              </Link>
            </Menuitem>
            <MenuItem
              className={`${router.pathname === "/fairlaunch" ? "active" : ""}`}
            >
              <Link to="/fairlaunch" onClick={onClickMenuItem}>
                Create fair launch
              </Link>
            </MenuItem>
            <MenuItem
              className={`${router.pathname === "/token" ? "active" : ""}`}
            >
              <Link to="/token" onClick={onClickMenuItem}>
                Create token
              </Link>
            </MenuItem>
            <MenuItem
              className={`${
                router.pathname === "/sale-list" ||
                router.pathname === "/my-contribution"
                  ? "active"
                  : ""
              }`}
            >
              <Link to="/sale-list" onClick={onClickMenuItem}>
                Launchpad list
              </Link>
            </MenuItem>
          </SubMenu> */}
          {/*         <SubMenu
            title="Private Sale"
            icon={<FaShieldAlt />}
            className={`${
              router.pathname === "/privatesale" ||
              router.pathname === "/prvsale-list" ||
              router.pathname === "/prv-contribution"
                ? "active"
                : ""
            }`}
          >
            <Menuitem
              className={`${
                router.pathname === "/privatesale" ? "active" : ""
              }`}
            >
              <Link to="/privatesale" onClick={onClickMenuItem}>
                Private Sale
              </Link>
            </Menuitem>
            <MenuItem
              className={`${
                router.pathname === "/prvsale-list" ||
                router.pathname === "/prv-contribution"
                  ? "active"
                  : ""
              }`}
            >
              <Link to="/prvsale-list" onClick={onClickMenuItem}>
                Private Sale List
              </Link>
            </MenuItem>
          </SubMenu>
            */}
         
         <SubMenu
            title="Token Locker"
            icon={<FaLock />}
            className={`${
              router.pathname === "/lock" ||
              router.pathname === "/token-locked" ||
              router.pathname === "/liquidity-locked"
                ? "active"
                : ""
            }`}
          >
            <Menuitem
              className={`${router.pathname === "/lock" ? "active" : ""}`}
            >
              <Link to="/lock" onClick={onClickMenuItem}>
                Create Lock
              </Link>
            </Menuitem>
            <MenuItem
              className={`${
                router.pathname === "/token-locked" ? "active" : ""
              }`}
            >
              <Link to="/token-locked" onClick={onClickMenuItem}>
                Token List
              </Link>
            </MenuItem>
            <MenuItem
              className={`${
                router.pathname === "/liquidity-locked" ? "active" : ""
              }`}
            >
              <Link to="/liquidity-locked" onClick={onClickMenuItem}>
                LP List
              </Link>
            </MenuItem>
          </SubMenu>
          {/* <Menuitem icon={<SiAdobeaudition />}>
             <Link to="/kycaudit" >
              KYC & Audit
            </Link> 
          </Menuitem>*/}
          <Menuitem icon={<FaExchangeAlt />}>
            <a href="https://transfer.defilaunch.app" target="_blank">
              Transfer Bridge
            </a>
          </Menuitem>
          <Menuitem icon={<SiSurveymonkey />}>
            <a href="https://nftmarket.defilaunch.app/" target="_blank">
              NFT Market
            </a>
          </Menuitem>
          <Menuitem icon={<BsDiscord />}>
            <a href="https://discord.gg/TsvvJUS58m" target="_blank">
              Discord
            </a>
          </Menuitem>
        </Menu>
      </ProSidebar>
    </>
  );
};
export default MainLayout;
