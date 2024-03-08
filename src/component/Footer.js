import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  RiTelegramFill,
  RiDiscordFill,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiRedditFill,
} from "react-icons/ri";
// import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <div className="footer-items">
                <div className="copyright-area py-2">
                  &copy;Copyright, All Rights Reserved by Defi Launch App
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
