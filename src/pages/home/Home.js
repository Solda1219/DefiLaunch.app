import React from "react";
import { Link } from "react-router-dom";
import { usePadStatus } from "./helper/useStats";
import logo from "../../images/logo.png";

export default function Home() {
  const stats = usePadStatus();

  return (
    <React.Fragment>
      <section id="home" className="project-area pt-1">
        <div className="container px-2 px-sm-2 py-0.1">
          <div className="row my-5">
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card d-flex flex-column justify-content-center align-items-center text-center my-2 pt-4 pb-4">
                <img src={logo} alt="Brand Logo" width="50px" />
                <h4 className="my-2">Create</h4>
                <p className="">
                Zero code knowledge. Create, Crowdfund, Participate & Launch.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card d-flex flex-column justify-content-center align-items-center text-center my-2 pt-4 pb-4">
                <img src={logo} alt="Brand Logo" width="50px" />
                <h4 className="my-2">Token</h4>
                <p>Create a custom token on multiple networks for only 0.002ETH.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card d-flex flex-column justify-content-center align-items-center text-center my-2 pt-4 pb-4">
                <img src={logo} alt="Brand Logo" width="50px" />
                <h4 className="my-2">Launch</h4>
                <p>Create a launch to deploy your token live & raise funds for 0.002ETH.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card d-flex flex-column justify-content-center align-items-center text-center my-2 pt-4 pb-4">
                <img src={logo} alt="Brand Logo" width="50px" />
                <h4 className="my-2">Lock</h4>
                <p>
                Lock your liquidity (LP) and/or tokens on our token locker for free.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card d-flex flex-column justify-content-center align-items-center text-center my-2 pt-4 pb-4">
                <img src={logo} alt="Brand Logo" width="50px" />
                <h4 className="my-2">Airdrops</h4>
                <p className="">
                Farm multiple airdrops on various networks and chains from one platform.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card d-flex flex-column justify-content-center align-items-center text-center my-2 pt-4 pb-4">
                <img src={logo} alt="Brand Logo" width="50px" />
                <h4 className="my-2">Mint NFT's</h4>
                <p>
Increase contract interaction & network activity. Buy and sell NFT's cheap ($0.17).</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card d-flex flex-column justify-content-center align-items-center text-center my-2 pt-4 pb-4">
                <img src={logo} alt="Brand Logo" width="50px" />
                <h4 className="my-2">Transfer</h4>
                <p>
                  Bridge & transfer tokens between multiple networks. Powered by LayerZero.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
              <div className="card d-flex flex-column justify-content-center align-items-center text-center my-2 pt-4 pb-4">
                <img src={logo} alt="Brand Logo" width="50px" />
                <h4 className="my-2">Swap</h4>
                <p>
                Create activity and
increase visibility with volume.
Optimized for airdrops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
