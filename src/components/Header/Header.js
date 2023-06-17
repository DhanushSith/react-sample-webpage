import React  from "react";
import "./Header.css"
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="bgheadder">
            <img src="./1.jpeg" className="bgimg" />
          </div>
          <div className="flex-container align-item head_bg">
            <div className="flex-item3">
              {/* <div className="mentor">
                <h1>
                  <a href="#">presento.</a>
                </h1>
              </div> */}


            </div>
            <div className="flex-item9">
              <div className="nav-bar">
                <ul class="nav-list">
                  <li className="nav-links active">
                    <a href="#">HOME</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">ABOUT</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">RESUME</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">SERVICES</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">PORTFOLIO</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">DROP DOWN</a>
                  </li>
                  <li className="nav-links">
                    <a href="#">CONTACT</a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="title">Laura Thomson</h1>
                <h4 className="subtitle">
                  I'M A PROFESSIONAL PHOTOGRAPHER IN NEW YORK CITY
                </h4>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="about_me_sec">
        <div className="abot_head">
          <h1 className="about_tit">ABOUT ME</h1>
          <h1 className="about_tit2">ABOUT ME</h1>
        </div>
        <div className="abot_head_sub">
          <h1 className="about_tit_sub">
            Sit sint consectetur velit quisquam cupiditate impedit suscipit
            alias
          </h1>
        </div>
        <div className="about_img_sec">
          <img src="./2.png" />
          <div>
            <div className="about_details_sec1">
              <div className="about_details">
                <p>
                  <span class="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                  <b>Name:</b> Laura Thomso
                </p>
                <p>
                  <span class="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                  <b>Website:</b> www.example.com
                </p>
                <p>
                  <span class="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                  <b>Phone:</b> +123 456 7890
                </p>
                <p>
                  <span class="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                  <b>City:</b> New York, USA
                </p>
              </div>
              <div className="about_details2">
                <p>
                  <span class="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                  <b>Age:</b> 30
                </p>
                <p>
                  <span class="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                  <b>Degree:</b> Master
                </p>
                <p>
                  <span class="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                  <b>PhEmailone:</b> email@example.com
                </p>
                <p>
                  <span class="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                  <b>Freelance:</b> Available
                </p>
              </div>
            </div>
            <div className="about_details_sec2">
              <div className="about_work">
                <span className="material-symbols-outlined smile">
                  sentiment_satisfied
                </span>
                <div>
                  <h1>232</h1>
                  <p>
                    <b>Happy Clients</b> consequuntur voluptas nostrum aliquid
                    ipsam architecto ut.
                  </p>
                </div>
              </div>
              <div className="about_work">
                <span className="material-symbols-outlined smile">work</span>
                <div>
                  <h1>521</h1>
                  <p>
                    <b>Projects</b> adipisci atque cum quia aspernatur totam
                    laudantium et quia
                  </p>
                </div>
              </div>
            </div>
            <div className="about_details_sec2">
              <div className="about_work">
                <span className="material-symbols-outlined smile">
                  schedule
                </span>
                <div>
                  <h1>18</h1>
                  <p>
                    <b>Years of experience</b> aut commodi quaerat modi aliquam
                    nam ducimus aut voluptat
                  </p>
                </div>
              </div>
              <div className="about_work">
                <span className="material-symbols-outlined smile">
                  military_tech
                </span>
                <div>
                  <h1>16</h1>
                  <p>
                    <b>Awards</b> rerum asperiores dolor alias quo reprehenderit
                    eum et nemo pad derr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
};




export default Header;



