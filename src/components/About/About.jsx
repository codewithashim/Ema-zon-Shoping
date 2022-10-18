import React, { useContext } from "react";
import { AuthContex } from "../Context/UserContex";

const About = () => {
  const { user } = useContext(AuthContex);

  return (
    <section style={{ paddingTop: "5rem" }}>
      <span>{user?.email}</span>
    </section>
  );
};

export default About;
