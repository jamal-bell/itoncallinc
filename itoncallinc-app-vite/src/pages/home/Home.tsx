import { StrictMode } from "react";
import Style from "./HomeStyle.module.css";
import { Heading, Button, Link } from "@radix-ui/themes";

function Home() {
  return (
    <StrictMode>
      <section
        className="p-14 tracking-wider"
        style={{ paddingTop: "8rem", letterSpacing: "5px" }}
      >
        <Heading>
          Take The Next Step From Digital Transformation To Evolution
        </Heading>
        <Button>I'm ready for the next step</Button>
        <p>
          Not ready yet?<Link>Click here.</Link>
        </p>
      </section>
      <section>
        <div id="mission" className={Style.missionBlock}>
          <span className="text-xl">Our mission</span> is to empower businesses
          to achieve their full potential and lead transformative change in a
          rapidly evolving world.
        </div>
        <p className="p-4">
          We use our capabilities to meet our client's needs and enhance their
          capabilities to impact the world.
        </p>
      </section>
      <section>
        <h2 className={Style.sectionTitles}>
          <span>Digital Transformation</span>
        </h2>
        <div className="p-4">
          <Heading weight="regular" size="5">
            Digital Transformation as a Catalyst for Evolution
          </Heading>
        </div>
      </section>
      <section>
        <h2 className={Style.sectionTitles}>
          <span>Recruit & Staff</span>
        </h2>{" "}
        <div
          id="rs"
          className="p-4"
          style={{
            backgroundImage:
              "url('../../assets/pexels-field-engineer-147254-442151.jpg')",
          }}
        >
          <Heading weight="regular" size="5">
            The Tight Talent and Capabilities to Drive and Sustain Business
            Processes
          </Heading>
        </div>
      </section>
      <section>
        <h2 className={Style.sectionTitles}>
          <span>Evolution</span>
        </h2>
        <div className="p-4">
          <Heading weight="regular" size="5">
            Transform, Adapt, and Automate for Continuous Evolution
          </Heading>
        </div>
      </section>
      <section>
        <h2 className={Style.sectionTitles}>
          <span>R&D</span>
        </h2>
        <div className="p-4">
          <Heading weight="regular" size="5">
            Competitive Advantages Through Data-Driven Preparation and
            Innovative Improvements
          </Heading>
        </div>
      </section>
    </StrictMode>
  );
}

export default Home;
