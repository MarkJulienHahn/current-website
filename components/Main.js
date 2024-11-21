import React from "react";

import Infosection from "../components/Infosection";
import LogosFoerderer from "../components/LogosFoerderer";
import LogosMedia from "../components/LogosMedia";
import LogosCoop from "../components/LogosCoop";
import Team from "./Team";

const Main = ({ english, editorial, about, currently, logos, downloads }) => {
  return (
    <div>
      <Infosection
        english={english}
        editorial={editorial}
        about={about}
        currently={currently}
      />

      <LogosFoerderer
        english={english}
        published={logos?.publishedFoerderer}
        logos={logos?.logosFoerderer}
      />

      <Team downloads={downloads} />

      <LogosMedia
        english={english}
        published={logos?.publishedMedia}
        logos={logos?.logosMedia}
      />
      <LogosCoop
        english={english}
        published={logos?.publishedCoop}
        logos={logos?.logosCoop}
      />
    </div>
  );
};

export default Main;
