import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Tug Of War
              {/* <span className="text-color-primary">startups</span> */}
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                An unmatched casual gaming experience for you & your
                friends,partner or family!
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    style={{ borderRadius: 16 }}
                    color="primary"
                    wideMobile
                    href="https://play.google.com/store/apps/details?id=com.statefullyfidgeting.tugofwar"
                  >
                    Get it on Google Play
                  </Button>
                  {/*<Button
                    tag="a"
                    style={{borderRadius:16}}
                    color="dark"
                    wideMobile
                    href="/scoring"
                  >
                    How to win
                  </Button>*/}
                  <Button
                    tag="a"
                    style={{ borderRadius: 16 }}
                    color="green"
                    wideMobile
                    href="https://www.anytimefair.com/toyfair/booth/stall1.php?slug=i1416"
                  >
                    Visit us at India Toy Fair 2021
                  </Button>

                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
              <iframe style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }} src="https://www.youtube.com/embed/hKS32bCdN1k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
              </div>
            {/*<Image
              className="has-shadow"
              src="https://cdn.glitch.com/96e3a537-d786-44ff-b2b9-52453aa455dc%2FTV%20Banner.png?v=1600592501328"
              alt="Hero"
              width={896}
              height={504}
            />*/}
            {/* </a> */}
          </div>
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/hKS32bCdN1k"
            videoTag="iframe"
          /> */}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
