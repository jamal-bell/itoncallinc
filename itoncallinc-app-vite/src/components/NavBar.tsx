import { Button, DropdownMenu } from "@radix-ui/themes";
import { TfiMenuAlt } from "react-icons/tfi";
import Style from "../components/ComponentStyle.module.css";
import { menuLinks } from "./MenuList.module";

const NavBar = () => {
  const contactTex = "Contact Us";

  return (
    <>
      <nav
        id="navigation"
        className=" fixed space-x-20 border-b px-2 h-20 items-center grid grid-cols-3  bg-white"
      >
        <div
          id="header-logo"
          className="flex relative items-center col-span-2" //md:h-20 md:w-80 h-15
        >
          <img
            className={Style.logoAttribute}
            alt="I.T. ON CALL INC."
            src="/itoncall-logo.png"
          />
          <div className="text-x font-bold ml-5 ">I.T. ON CALL INC</div>
        </div>

        <menu
          id="menu"
          className="hidden md:flex space-x-6 mr-20 justify-end" // col-span-2
        >
          {menuLinks.map((link) => {
            return (
              <li key={link.href}>
                <a className="no-underline" href={link.href}>
                  {link.label}
                </a>
              </li>
            );
          })}
          <li key="break">|</li>
          <li key="contact">
            <a className="no-underline" href="/contact-us">
              {contactTex}
            </a>
          </li>
        </menu>
        <aside className="flex lg:hidden space-x-6 mr-20 justify-end">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft" aria-label="menu icon">
                <TfiMenuAlt />
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              {menuLinks.map((link) => {
                return (
                  <DropdownMenu.Item
                    className="no-underline"
                    key={link.href}
                    href={link.href}
                  >
                    {link.label}
                  </DropdownMenu.Item>
                );
              })}
              <DropdownMenu.Item
                className="no-underline"
                key="contact"
                href="/contact-us"
              >
                {contactTex}
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </aside>
      </nav>
    </>
  );
};

export default NavBar;
