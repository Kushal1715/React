import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import RequestQuote from "../components/RequestQuote";
import OurClients from "../components/OurClients";
import Testimonials from "../components/Testimonials";
import Numbers from "../components/Numbers";
import Services from "../components/Services";
import OurWorkPortfolio from "../components/OurWorkPortfolio";
import TitleDisplayCard from "../components/TitleDisplayCard";
const ServicesLayout = () => {
  const [title, setTitle] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const split = pathname.split("/");
    const lastPath = split[split.length - 1];
    const replaceHypons = lastPath.replace(/-/g, " ").toUpperCase();
    setTitle(replaceHypons);
  }, [location.pathname]);
  return (
    <>
      <TitleDisplayCard title={title} />
      <Outlet />
      <OurWorkPortfolio />
      <Services />
      <Numbers />
      <Testimonials />
      <OurClients />
      <RequestQuote />
    </>
  );
};

export default ServicesLayout;
