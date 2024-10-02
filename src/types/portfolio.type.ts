import { IconType } from "react-icons";

export type ImageIconProps = {
  icon: string;
  alt: string;
};

export type ExperienceProps = {
  id: string;
  title: string;
  companyName: string;
  duration: string;
  description: string;
  tools: ImageIconProps[];
  isVisible?: boolean;
  delay: number;
};

export type ProjectProps = {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    show: boolean;
    url: string;
    icon: IconType;
  }[];
  isVisible?: boolean;
  delay: number;
};
