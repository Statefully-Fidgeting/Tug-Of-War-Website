import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const Testimonial = ({
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
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Reviews",
    paragraph: "Hear it from our beloved users"
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Awsome Game to play with your friends and family.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    RocKin_ Sh
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://play.google.com/store/apps/details?id=com.statefullyfidgeting.tugofwar&reviewId=gp%3AAOqpTOFR-GxyE6WfssZjYRB6VUEGrSRpN9HO3V3ZG7aA5atdpFHYofIUYkIuB8g3R8agh1kqmJwqnU83w5LEdA">
                      See feedback
                    </a>
                  </span>
                </div>
              </div>

              //review 2
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Awesome game to play with friends and family and also can no few of there secret too.. 😅😊😊
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                  Lucifer Gouda
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://play.google.com/store/apps/details?id=com.statefullyfidgeting.tugofwar&showAllReviews=true">
                      See feedback
                    </a>
                  </span>
                </div>
              </div>

              //review 3
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  It's amazing to play as a group.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                  rahul shenoy
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://play.google.com/store/apps/details?id=com.statefullyfidgeting.tugofwar&showAllReviews=true">
                      See feedback
                    </a>
                  </span>
                </div>
              </div>

              //review 4
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  The game is very good..And I loved it..I think everyone should download it...😍😍😀😀😀
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                  Tejas Kamath
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://play.google.com/store/apps/details?id=com.statefullyfidgeting.tugofwar&showAllReviews=true">
                      See feedback
                    </a>
                  </span>
                </div>
              </div>


              //review 5
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  This is so adorable! You could try switching the questions up more often. While testing the game with my friend who posted the link to this on her status, 3 questions out of 15 were of the same type. Not same - similar. So maybe you could make subsets of similar questions and extract one question per subset in a game :) Just a suggestion! I'm hardly a coder and its easy to give advice when it doesn't apply to you. Nonetheless, you could try this if possible. I'm a fan🙌
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                  Meghna Singh
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://play.google.com/store/apps/details?id=com.statefullyfidgeting.tugofwar&showAllReviews=true">
                      See feedback
                    </a>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
