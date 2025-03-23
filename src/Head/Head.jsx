import React from "react";

const Head = ({ title }) => {
  React.useEffect(() => {
    document.title = title + " | Marcus";
  }, [title]);

  return <></>;
};

export default Head;
