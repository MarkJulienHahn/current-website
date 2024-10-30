import React from "react";

import Infosection from "../components/Infosection";
import Team from "../components/Team";
import LogosFoerderer from "../components/LogosFoerderer";
import LogosSponsoren from "../components/LogosSponsoren";
import LogosMedia from "../components/LogosMedia";
import LogosCoop from "../components/LogosCoop";

const Main = ({
  english,
  editorial,
  about,
  team,
  programm,
  downloads,
  currently,
  logos,
  beteiligte,
}) => {
  return (
    <div>
      <Infosection
        english={english}
        editorial={editorial}
        about={about}
        programm={programm}
        beteiligte={beteiligte}
        currently={currently}
      />

      {/* <Team english={english} team={team} downloads={downloads} /> */}

      <LogosFoerderer
        english={english}
        published={logos.publishedFoerderer}
        logos={logos.logosFoerderer}
      />
      {/* <LogosSponsoren
        english={english}
        published={logos.publishedSponsoren}
        logos={logos.logosSponsoren}
      /> */}
      <LogosMedia
        english={english}
        published={logos.publishedMedia}
        logos={logos.logosMedia}
      />
      <LogosCoop
        english={english}
        published={logos.publishedCoop}
        logos={logos.logosCoop}
      />
    </div>
  );
};

export default Main;
