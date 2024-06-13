import { Button, DropdownMenu } from "@radix-ui/themes";
import { TfiMenuAlt } from "react-icons/tfi";
import Style from "../components/headFoot.module.css";

const NavBar = () => {
  const menuLinks = [
    { label: "R&D", href: "/research-development" },
    { label: "Strategy Consulting", href: "/consulting" },
    { label: "Big Data", href: "/planning-execution" },
    { label: "Industries", href: "/industries" },
    { label: "Recruit & Staff", href: "/recruiting" },
    { label: "Our Company", href: "/about-itoncall" },
    { label: "Careers", href: "/careers" },
  ];

  const contactTex = "Contact Us";

  return (
    <>
      <nav
        id="navigation"
        className="space-x-20 border-b px-5 h-20 items-center grid grid-cols-3"
      >
        <div
          id="header-logo"
          className=" flex relative items-center col-span-2 " //md:h-20 md:w-80 h-15
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
        <aside className="flex lg:hidden space-x-6 mr-20 justify-end ">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft">
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
