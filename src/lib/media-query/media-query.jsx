import { useMediaQuery } from "react-responsive";

export const IsDesktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return isDesktop ? children : null;
};

export const IsTablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  return isTablet ? children : null;
};

export const IsMobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? children : null;
};

export const IsDefault = ({ children }) => {
  const isDefault = useMediaQuery({ minWidth: 766 });

  return isDefault ? children : null;
};

const bp = {
  mobile: 360,
  tablet: 768,
  desktop: 1024,
};

export const mq = (n) => `@media (min-width: ${bp[n]}px)`;

/**created mqx for in which @media (min-width: ${bp[n]}px) not supported */
export const mqx = (n) => `@media (minWidth: ${bp[n]}px)`;

export const mqMax = (n) => `@media (max-width: ${bp[n]}px)`;
