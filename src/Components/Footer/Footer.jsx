import React from "react";
import "../Footer/Footer.css";
import App from "../../Images/AppS.webp";
import Phone from "../../Images/Google play.webp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import zomatologo from "../../Images/Zomato black.avif";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="top1">
          <img src={zomatologo} alt="" />
          <div className="lang">
            <select>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="London">London</option>
              <option value="America">America</option>
              <option value="France">France</option>
              <option value="Brazil">Brazil</option>
              <option value="England">England</option>
              <option value="South Africa">South Africa</option>
              <option value="Rusia">Rusia</option>
            </select>
            <select>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Polish">Polish</option>
            </select>
          </div>
        </div>
        <div className="bottom1">
          <div className="bottomContent">
            <h4>ABOUT ZOMATO</h4>
            <p>who we are</p>
            <p>blog</p>
            <p>work with us</p>
            <p>Investor Relations</p>
            <p>Report Fraud</p>
            <p>Contact Us</p>
          </div>
          <div className="bottomContent">
            <h4>ZOMAVERSE</h4>
            <p>Zomato</p>
            <p>Blinkit</p>
            <p>Feeding India</p>
            <p>HyperPure</p>
            <p>Zomaland</p>
          </div>
          <div className="bottomContent">
            <h4>FOR RESTAURANTS</h4>
            <p>Patner with Us</p>
            <p>Apps For you</p>
            <p>For Enterprises</p>
            <p>Zomato for work</p>
          </div>
          <div className="bottomContent">
            <h4>LEARN MORE</h4>
            <p>Privecy</p>
            <p>Security</p>
            <p>Terms</p>
            <p>Sitemap</p>
          </div>
          <div className="bottomContent">
            <h4>SOCIAL LINKS</h4>
            <div className="links">
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <FacebookIcon />
            </div>
            <img src={App} alt="app" />
            <img src={Phone} alt="app" />
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <p>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
