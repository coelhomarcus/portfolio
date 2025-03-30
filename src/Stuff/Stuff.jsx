import React from "react";
import Head from "../Head/Head";
import Text from "../Components/Text/Text";
import Button from "../Components/Button/Button";

import { SiMonkeytype } from "react-icons/si";
import { FaSteam, FaYoutube, FaItchIo } from "react-icons/fa6";

const Stuff = () => {
  return (
    <div className="main">
      <Head title="Outros" />
      <Text h1="Outros" />
      <Text
        h2="Sites & Rede Sociais"
        p="Alguns sites/redes sociais que utilizo"
      />

      <div className="flexRow">
        <Button href="https://www.youtube.com/@coelhomarcus" title="My Channel">
          <FaYoutube />
        </Button>
        <Button href="https://coelhomarcus.itch.io/" title="My Itch.io Profile">
          <FaItchIo />
        </Button>
        <Button
          href="https://monkeytype.com/profile/coelhomarcus"
          title="MonkeyType"
        >
          <SiMonkeytype />
        </Button>
        <Button href="https://steamcommunity.com/id/bakanull/" title="My Steam">
          <FaSteam />
        </Button>
      </div>
      <Text h2="YouTube" p="Meu canal no youtube sobre a bolha dev" />
      <iframe
        style={{
          border: "2px solid red",
          borderRadius: "8px",
        }}
        width="auto"
        height="450"
        src="https://www.youtube.com/embed/flyHtXyZ6S0?si=hXPVqKh3jADzeVzn"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <Text
        h2="Bits & Bugs"
        p="Nossa comunidade no discord feita por devs para devs! 😁"
      />
      <iframe
        style={{ border: "2px solid #7289da", borderRadius: "8px" }}
        src="https://discord.com/widget?id=1353895304423936092&theme=dark"
        width="auto"
        height="450"
        allowtransparency="true"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};

export default Stuff;
