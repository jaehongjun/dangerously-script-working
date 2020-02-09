import React, { useEffect, useRef } from "react";

const InnerHtml = ({ html }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const viewHtml = document.createRange().createContextualFragment(html); // Create a 'tiny' document and parse the html string
    divRef.current.appendChild(viewHtml); // Append it so it can be executed
  }, [html]);

  return <div ref={divRef} />;
};

export default InnerHtml;
