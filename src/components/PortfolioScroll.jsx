import React, { useEffect, useRef } from "react";
import Player from "./Player";

import video1 from "../assets/videos/welcome.mp4";
import img1 from "../assets/videos/welcome.webp";

import video2 from "../assets/videos/videos.mp4";
import img2 from "../assets/videos/videos.webp";

import video3 from "../assets/videos/app.mp4";
import img3 from "../assets/videos/app.webp";

import video4 from "../assets/videos/purchase.mp4";
import img4 from "../assets/videos/purchase.webp";

import video5 from "../assets/videos/space.mp4";
import img5 from "../assets/videos/space.webp";

import video6 from "../assets/videos/planet-jump.mp4";
import img6 from "../assets/videos/planet-jump.webp";

import video7 from "../assets/videos/tradeshow-ipad.mp4";
import img7 from "../assets/videos/tradeshow-ipad.webp";

import imgWood0 from "../assets/wood/0.jpg";
import imgWood1 from "../assets/wood/1.jpg";
import imgWood2 from "../assets/wood/2.jpg";
import imgWood3 from "../assets/wood/3.jpg";
import imgWood4 from "../assets/wood/4.jpg";
import imgWood5 from "../assets/wood/5.jpg";

import resumeImg from "../assets/resume/kyler-resume.png";
import resumePdf from "../assets/resume/kyler-resume.pdf";

function PortfolioScroll({ type }) {
  const webData = [
    {
      id: 6,
      title: "Planet Jumper Mobile Game",
      video: video6,
      img: img6,
      shortText: "Cross-platform mobile game, top-down space racing.",
      text: "Multiplayer cross-platform mobile game built with AWS and GDscript. Escape the black hole before your opponent in this top-down space racing game. Designed with Godot Game Engine.",
    },
    {
      id: 5,
      title: "Land F/X Tradeshow iPads",
      video: video7,
      img: img7,
      shortText: "Interactive sales tool for tradeshow booths built with CSS and jQuery. Intuitive easy-touch navigation and locally hosted content.",
      text: "Interactive sales tool for tradeshow booths built with CSS and jQuery. Eyecatching auto-playing videos and webpage exploration. Converted web-based content into locally hosted content. Designed for iPads, also converted for use on handout USBs.",
    },
    {
      id: 4,
      title: "Land F/X Purchase",
      video: video4,
      img: img4,
      shortText: "Purchasing page built with CSS, JS, PHP, MySQL.",
      text: "Web application built with HTML, CSS, JS, PHP, MySQL. A purchase page that connects to PayPal's Payflow purchasing API. Simple and clean design. Manages, sanitizes, and updates data in company administration system. Custom control for admins.",
    },
    {
      id: 3,
      title: "Land F/X Mobile App",
      video: video3,
      img: img3,
      shortText: "Co-authored mobile app built with Xamarin Forms in C#",
      text: "Mobile App built with Xamarin Forms in C#, XAML, PHP, MySQL. Allows account creation. Displays learning video library, upcoming events, and news to clients. Available in Apple App Store and Google Play Store.",
    },
    {
      id: 1,
      title: "30-Day Challenge",
      video: video1,
      img: img1,
      shortText:
        "Software learning program built with IE6 compliant CSS and JS.",
      text: "In-software web app built with HTML, CSS, JS. Software learning program used by new clients, trial users, and even as part of university curriculums. 45+ lessons that interfaced directly with the software to confirm completion or failure.",
    },
    {
      id: 2,
      title: "Video Library",
      video: video2,
      img: img2,
      shortText: "Video library built with CSS, JS, PHP, MySQL.",
      text: "Web app built with HTML, CSS, JS, PHP, MySQL. Organized 500+ videos into 13+ categories and an adjusting number of subcategories. Weighted Javascript search based on titles then descriptions. Single state page that adjusted content without reload.",
    },
    {
      id: 5,
      title: "Flight Event",
      video: video5,
      img: img5,
      shortText: "Webpage built with HTML, CSS, JS, PHP.",
      text: "Webpage built with HTML, CSS, JS, PHP. Invitation page to join a tradeshow event at the San Diego Air and Space Museum.",
    },
  ];

  const woodData = [
    {
      id: 5,
      title: "Light Roast Coffee and Side Table",
      video: "",
      img: imgWood5,
      shortText: "This live edge coffee table is made of sycamore wood.",
      text: "This live edge coffee table is made of sycamore wood. The side table is made of redwood.",
    },
    {
      id: 0,
      title: "Modern Kalimba",
      video: "",
      img: imgWood0,
      shortText: "Thumb flicking instrument with a modern sleek design.",
      text: "Thumb flicking instrument with a modern sleek design, given to a friend as a thank you gift. The design was done with a table saw and a drill. It's made with Cherry wood.",
    },
    {
      id: 1,
      title: "Shiny-heart Fox",
      video: "",
      img: imgWood1,
      shortText:
        "This small wooden fox was a Valentines Day gift with a shiny heart.",
      text: "This small wooden fox was a Valentines Day gift with a shiny heart. It's made with walnut, red oak, and maple. I used a bandsaw and super glue almost exclusively.",
    },
    {
      id: 2,
      title: "Camping in the Wood",
      video: "",
      img: imgWood2,
      shortText:
        "Made with cherry wood, this wood picture was a Father's Day gift. Table saw and round sanding bit.",
      text: "Made with cherry wood, this wood picture was a Father's Day gift. Table saw and round sanding bit.",
    },
    {
      id: 3,
      title: "Flowers Kalimba",
      video: "",
      img: imgWood3,
      shortText:
        "Another Kalimba made with cherry wood. The resonance holes are the flower petals.",
      text: "This is another Kalimba made with cherry wood. The resonance holes are the flower petals.",
    },
    {
      id: 4,
      title: "Big Brown Coffee Table",
      video: "",
      img: imgWood4,
      shortText:
        "This live edge coffee table is made of maple wood and tinted with dark tung oil. It was a wedding gift.",
      text: "This live edge coffee table is made of maple wood and tinted with dark tung oil. It was a wedding gift.",
    },
  ];

  let data = webData;
  let portBool = true;

  if (type == "wood") {
    data = woodData;
    portBool = true;
  } else if (type == "resume") {
    //data = resumeURL;
    portBool = false;
  } else {
    data = webData;
    portBool = true;
  }

  function PortfolioLayout() {
    return (
      <div className="flex flex-col gap-6 p-2">
        {data.map(({ id, title, text, video, img }) => (
          <article
            key={id}
            className="portfolioItemText bg-gray-100 p-4 shadow-md"
          >
            <div className="portfolio_title">
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            <div className="portfolio_video mt-4">
              <Player id={id} vidSrc={video} imgSrc={img} />
            </div>
            <div className="portfolio_shortText mt-4">
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  function ResumeLayout() {
    return (
      <div>
        <img src={resumeImg} className="px-2"></img>
        <a href={resumePdf} className="p-2 text-blue-500">
          Click here to download the PDF
        </a>
      </div>
    );
  }

  return (
    <div>
      {portBool ? (
        <PortfolioLayout></PortfolioLayout>
      ) : (
        <ResumeLayout></ResumeLayout>
      )}
    </div>
  );
}

export default PortfolioScroll;
