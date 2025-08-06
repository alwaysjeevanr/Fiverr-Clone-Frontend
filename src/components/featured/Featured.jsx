import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <>
      <div className="featured">
        <div className="imgs">
          <video
            src="https://fiverr-res.cloudinary.com/video/upload/f_auto:video,q_auto:best/v1/video-attachments/generic_asset/asset/18ad23debdc5ce914d67939eceb5fc27-1738830703211/Desktop%20Header%20new%20version"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="container">
          <div className="left">
            <h1>Our freelancers </h1>
            <h1> will take it from here</h1>
            <div className="search">
              <div className="searchInput">
                <input
                  type="text"
                  placeholder="Search for any service..."
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              <button onClick={handleSubmit}>
                <img src="./img/search.png" alt="search" />
              </button>
            </div>
            <div className="popular">
              <button>Web Design</button>
              <button>WordPress</button>
              <button>Logo Design</button>
              <button>AI Services</button>
            </div>
          </div>
          <div className="trustedBy">
            <p>Trusted by:</p>
            <div className="trusted-logos">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
                alt="Facebook"
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
                alt="Google"
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
                alt="Netflix"
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
                alt="P&G"
              />
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
                alt="PayPal"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
