import React from "react";
import Tasks from "./components/Tasks";

const Others = () => {
  return (
    <div className="wrapper">
      <h2 className="heading">See what others are getting done</h2>
      <div className="Subheading">
        <h4 className="Subheading_1">Moving home</h4>
        <h4 className="Subheading_2">Starting a business</h4>
        <h4 className="Subheading_3">Fixing stuff</h4>
        <h4 className="Subheading_4">Hosting a party</h4>
        <h4 className="Subheading_5">Something different</h4>
      </div>
      <p className="para_1">
        Got a few boxes to shift, an apartment or entire house? Get your home
        moved just the way you want, by whom you want, when you want. Let
        Airtasker shoulder the load.
      </p>
      <p className="para_2">
        Taking a big leap and need some expert advice or assistance? Airtasker
        can help you get some cracking marketing collateral, admin muscle or a
        few extra hands to help ease the burden.
      </p>
      <p className="para_3">
        Do you have a hole in the wall that needs plugging? Perhaps a TV that
        needs mounting? Or maybe you have that perfect shade of green, but no
        time to paint? Get a Tasker to help.
      </p>
      <p className="para_4">
        Got something to celebrate and the guest list all ready, but need
        everything else? Let Airtasker help you find the best bartenders, party
        planners, photographers and entertainment in the land.
      </p>
      <p className="para_5">
        Got something to celebrate and the guest list all ready, but need
        everything else? Let Airtasker help you find the best bartenders, party
        planners, photographers and entertainment in the land.
      </p>
      <Tasks />
      <button className="button">Get started now</button>
    </div>
  );
};

export default Others;
