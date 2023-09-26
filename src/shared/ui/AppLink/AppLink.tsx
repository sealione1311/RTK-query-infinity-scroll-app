import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import classes from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to, className, children, ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classes.appLink}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
