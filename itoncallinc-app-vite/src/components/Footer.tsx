import { MdOutlinePhonelinkRing, MdAlternateEmail } from "react-icons/md";
import Style from "../components/ComponentStyle.module.css";
import { Table } from "@radix-ui/themes";
import { menuLinks } from "./MenuList.module";
import { subsidiaryLinks } from "./Subsidiaries.module";

const Footer = () => {
  return (
    <>
      <div className="border-b-1 mb-2">
        <div className="pt-5 pb-5 bg-banner text-white text-lg font-semibold">
          <div className="text-center">
            <h3>Contact Us</h3>
            <p>Filler</p>
          </div>
          <div className="p-3 text-white ">
            <div className="block bg-slate-50 tracking-widest font-light mb-2">
              <div className="grid grid-cols-2">
                <div>75 S Broadway 4 FL #1015</div>{" "}
                <div>White Plains, NY 10601</div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <a
                className="no-underline mr-2 font-light"
                href="tel:914.848.1900"
              >
                <MdOutlinePhonelinkRing size="20" inline-block color="white" />
                <span className="ml-2 tracking-wide text-white">
                  1+ 914.848.1900
                </span>
              </a>
              <a
                className="no-underline tex-sm"
                href="mailto:info@itoncallinc.com"
              >
                <MdAlternateEmail size="20" inline-block color="white" />
                <span className="ml-2  font-light tracking-wide text-white ">
                  info@itoncallinc.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="space-x-5 border-t px-2 items-center bg:grid grid-cols-3 pt-5">
          <div id="location" className="md:grid-flow-row">
            <div
              id="footer-logo"
              className="flex items-center justify-center" //md:h-20 md:w-80 h-15
            >
              <img
                className={Style.logoAttribute}
                alt="I.T. ON CALL INC."
                src="/itoncall-logo.png"
              />
            </div>
          </div>
          <div id="services">
            <Table.Root>
              <Table.Body>
                <Table.Row>
                  <Table.ColumnHeaderCell>
                    <div className="text-center">I.T. ON CALL INC.</div>
                  </Table.ColumnHeaderCell>
                </Table.Row>
                {menuLinks.map((link) => {
                  return (
                    <Table.Row>
                      <Table.Cell align="center">
                        <a className="no-underline" href={link.href}>
                          {link.label}
                        </a>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Root>
          </div>
          <Table.Root>
            <Table.Body>
              <Table.Row>
                <Table.ColumnHeaderCell>
                  <div className="text-center">Our Companies</div>
                </Table.ColumnHeaderCell>
              </Table.Row>
              {subsidiaryLinks.map((link) => {
                return (
                  <Table.Row>
                    <Table.Cell align="center">
                      <a className="no-underline" href={link.href}>
                        <img alt={link.label} src={link.image} />
                      </a>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Root>
        </div>
      </div>
    </>
  );
};

export default Footer;
