import React from "react";
import Link from "next/link";
import Logo from "/public/images/logo.png";
import Image from "next/image";

const Footer = (props) => {
  return (
    <div className="tp-site-footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-image">
              {/* <Link className="logo" href="/"><Image src={Logo} alt="" /></Link> */}
            </div>
          </div>
          <div className="col-12">
            <div className="link-widget">
              <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/share/1BvWMSP1Hz"
                    target="_blank"
                  >
                    <i className="ti-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/ImranWali2001?t=tEvt9WGCdXmG1F0-z5SG2g&s=09"
                    target="_blank"
                  >
                    <i className="ti-twitter-alt"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/imran-wali-b0a6a82b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <i className="ti-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/" target="_blank">
                    <i className="ti-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/" target="_blank">
                    <i className="ti-vimeo-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="copyright">
              <p>© 2025 Imran Wali. All Rights Are Reserved..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
