import React from "react";
import dancingBaby from "assets/img/dancingbaby.gif";

const NotFound = () => (
  <section className="intro intro_not_found">
    <div className="intro--main">
      <p>
        You {`didn't`} find the page you were looking for but at least you found
        a dancing baby!
      </p>
      <img src={dancingBaby} alt="Dancing baby" />
    </div>
  </section>
);

export default NotFound;
