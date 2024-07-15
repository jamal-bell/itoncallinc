import React from "react";
import classnames from "classnames";
import Style from "../components/CustomStyle.module.css";

const Footer = () => {
  const serviceMenu = [
    { label: "Digital", href: "/" },
    { label: "Information Technology", href: "/" },
    { label: "Data", href: "/" },
  ];

  return (
    <>
      <div>
        <div className="p-5 text-center">Contact Us</div>
        <div className="space-x-5 border-t px-5 items-center grid grid-cols-3 bg-slate-50 ">
          <div id="location" className="md:grid-flow-row">
            <div
              id="footer-logo"
              className="flex relative items-center col-span-2" //md:h-20 md:w-80 h-15
            >
              <img
                className={Style.logoAttribute}
                alt="I.T. ON CALL INC."
                src="/itoncall-logo.png"
              />
              <div className="text-x font-bold ml-5 ">I.T. ON CALL INC</div>
            </div>
            <div className="block bg-slate-50 tracking-widest pt-5 md:w-80 ">
              <div>75 S Broadway 4 FL #1015</div>
              <div>White Plains, NY 10601</div>
              <a href="tel:914.848.1900">914.848.1900</a>
            </div>
          </div>
          <div>
            <h3>Services</h3>
            <h4>R&D</h4>
            <h4>Strategy Consulting</h4>
            <h4>Technology Solutions</h4>
          </div>
          <div>Col 3</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
