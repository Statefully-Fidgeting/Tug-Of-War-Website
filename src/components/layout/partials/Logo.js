import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src="https://cdn.glitch.com/96e3a537-d786-44ff-b2b9-52453aa455dc%2Flogo.png?v=1598621093786"
            alt="Open"
            width={32}
            height={32} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;