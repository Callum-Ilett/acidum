import styled from "styled-components";
import Link from "next/link";
import { Close as CloseIcon, Menu as MenuIcon } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const links = [
  { name: "Home", path: "home" },
  { name: "Upcoming Events", path: "upcoming-events" },
  { name: "Services", path: "services" },
  { name: "Recent DJ Sets", path: "recent-dj-sets" },
  { name: "Latest News", path: "latest-news" },
  { name: "Gallery", path: "gallery" },
  { name: "Book a Reservation", path: "reservation" },
];

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen && setIsOpen(false);
  }, [router]);

  return (
    <>
      <Navbar>
        <Link href="/">
          <Logo src="/images/logo.png" alt="Acidum Logo" />
        </Link>

        <MenuToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </MenuToggle>
      </Navbar>

      <Menu isOpen={isOpen}>
        {links.map(({ name, path }) => (
          <Link key={name} href={`#${path}`}>
            <Menu.Item>{name}</Menu.Item>
          </Link>
        ))}
      </Menu>
    </>
  );
};

const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6em;
  padding: 0em 1.5em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${({ theme }) => theme.mediaQuery("md")`
		border-bottom: 1px solid transparent;
    position: absolute;
    top: 0;

    z-index: 10;
		width: 100%;
		display: none;
  `}
`;

const Logo = styled.img`
  width: 120px;
  object-fit: contain;
`;

const MenuToggle = styled.div`
  .MuiSvgIcon-root {
    color: white;
    font-size: 3.5rem;
  }

  ${({ theme }) => theme.mediaQuery("md")`display: none;`};
`;

const Menu: any = styled.ul<{ isOpen: boolean }>`
  height: ${({ isOpen }) => (isOpen ? "calc(100vh - 6em)" : "0px")};
  overflow: hidden;
  transition: height 0.3s ease-in;
  background: ${({ theme }) => theme.primary};

  ${({ theme }) => theme.mediaQuery("md")`display: none;`};
`;

const Item = styled.li`
  padding: 1em 1.5em;
  font-weight: bold;
  font-family: "Teko", sans-serif;
  font-size: 2.2rem;
  color: #03051a;
  position: relative;

  :first-child {
    color: white;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.03) 100%
    );
  }
`;

Menu.Item = Item;

export default Header;
