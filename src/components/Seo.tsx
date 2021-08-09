import React from "react";
import Helmet from "react-helmet";

interface PropsSeo {
  title?: string;
}

const Seo: React.FC<PropsSeo> = ({ title }: PropsSeo) => {
  return (
    <Helmet>
      <title>
        {title ? "Rahmat Agung Julians - " : "Rahmat Agung Julians"}
      </title>
    </Helmet>
  );
};

export default Seo;
