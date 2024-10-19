import React from "react";
import "./subscribe.css";
import { ReactSVG } from "react-svg";
import CancelSvg from "../close-circle.svg";

export default function SubscribeModal() {
  return (
    <>
      <div className="subscribe-modal">
        <ReactSVG
          beforeInjection={(svg) => {
            svg.classList.add("subscribe-modal-cancel");
          }}
          src={CancelSvg}
        />
        <h2>Subscribe to Newsletter</h2>
        <p>
          By subscribing to our newsletter, you'll be the first to know about
          new listings, market trends, and much more. Don’t miss out. Sign up
          for our newsletter today and stay ahead of the game.{" "}
          <strong>Join over 1,000 subscribers.</strong>
        </p>
        <form>
          <label htmlFor="">Full Name</label>
          <br />
          <input type="text" name="" id="" placeholder="Enter your name" />{" "}
          <br />
          <br />
          <label htmlFor="">Email Address</label>
          <br />
          <input type="text" name="" id="" placeholder="Enter your email" />
          <br />
          <button type="button"> Subscribe</button>
        </form>
      </div>
    </>
  );
}
