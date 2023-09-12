import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Development:HTML,CSS,JavaScript,Typescript and React",
          "Back End Development: NodeJS , ExpressJS and MongoDB",
          "Other Skills: PWA , various Payment systems , SEO to React apps",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
