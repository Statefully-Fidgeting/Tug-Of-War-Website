import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};
const ScoringInfo = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeaderWar = {
    title: "War"
    // paragraph:
    // "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis."
  };

  const sectionHeaderUnited = {
    title: "United"
    // paragraph:
    // "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis."
  };
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeaderWar} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src="https://cdn.glitch.com/96e3a537-d786-44ff-b2b9-52453aa455dc%2F1.png?v=1600704724130"
                      alt="Features tile icon 01"
                      // width={64}
                      // height={64}
                      
                    />
                  </div>
                </div>
                {/* <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">1</h4>
                  <p className="m-0 text-sm">
                    The arena where you and your friends team up to defeat the
                    devil. You can do so by uniting and choosing the most apt,
                    yet having the most common answer
                  </p>
                </div> */}
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                      src = "https://cdn.glitch.com/96e3a537-d786-44ff-b2b9-52453aa455dc%2F2.png?v=1600704727302"
                      alt="Features tile icon 01"
                      // width={64}
                      // height={64}
                      
                    />
                  </div>
                </div>
                {/* <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">War</h4>
                  <p className="m-0 text-sm">
                    The arena where you divide yourselves into two team to
                    compete against your own friends! Buckle up and enjoy the
                    ride while you see which team knows it's members the best!
                  </p>
                </div> */}
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                  <Image
                      src="https://cdn.glitch.com/96e3a537-d786-44ff-b2b9-52453aa455dc%2F3.png?v=1600704728676"
                      alt="Features tile icon 01"
                      // width={64}
                      // height={64}
                      
                    />
                  </div>
                </div>
                {/* <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Duo</h4>
                  <p className="m-0 text-sm">
                    A game for you and that special one that teases your bond to
                    the limits!
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className={innerClasses}>
          <SectionHeader data={sectionHeaderUnited} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src="https://cdn.glitch.com/96e3a537-d786-44ff-b2b9-52453aa455dc%2F4.png?v=1600704731128"
                      alt="Features tile icon 01"
                      // width={64}
                      // height={64}
                      
                    />
                  </div>
                </div>
                {/* <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">1</h4>
                  <p className="m-0 text-sm">
                    The arena where you and your friends team up to defeat the
                    devil. You can do so by uniting and choosing the most apt,
                    yet having the most common answer
                  </p>
                </div> */}
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                      src="https://cdn.glitch.com/96e3a537-d786-44ff-b2b9-52453aa455dc%2F5.png?v=1600704733438"
                      alt="Features tile icon 01"
                      // width={64}
                      // height={64}
                      
                    />
                  </div>
                </div>
                {/* <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">War</h4>
                  <p className="m-0 text-sm">
                    The arena where you divide yourselves into two team to
                    compete against your own friends! Buckle up and enjoy the
                    ride while you see which team knows it's members the best!
                  </p>
                </div> */}
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                  <Image
                      src="https://cdn.glitch.com/96e3a537-d786-44ff-b2b9-52453aa455dc%2F6.png?v=1600704738280"
                      alt="Features tile icon 01"
                      // width={64}
                      // height={64}
                      
                    />
                  </div>
                </div>
                {/* <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Duo</h4>
                  <p className="m-0 text-sm">
                    A game for you and that special one that teases your bond to
                    the limits!
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

ScoringInfo.propTypes = propTypes;
ScoringInfo.defaultProps = defaultProps;

export default ScoringInfo;
