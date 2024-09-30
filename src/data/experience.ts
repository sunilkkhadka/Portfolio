import { v4 as uuidv4 } from "uuid";

import { Image } from "../utils/images";
import { ExperienceProps } from "../types/portfolio.type";

const experienceData: ExperienceProps[] = [
  {
    id: uuidv4(),
    title: "Freelance",
    companyName: "Fanofa",
    duration: "Jul 2024 - Sep 2024",
    description:
      "Created REST APIs for an ecommerce platform that specializes in advertising products. Integrated Paypal subscription system as well as chat feature using SDKs and Web Sockets.",
    tools: [
      {
        icon: Image.GOLANG,
        alt: "Golang",
      },
      {
        icon: Image.MYSQL,
        alt: "MySQL",
      },
      {
        icon: Image.WEBSOCKET,
        alt: "Web Socket",
      },
      {
        icon: Image.DOCKER,
        alt: "Docker",
      },
      {
        icon: Image.POSTMAN,
        alt: "Postman",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Software Engineer",
    companyName: "Machnet Technologies Inc.",
    duration: "Jul 2022 - Apr 2024",
    description:
      "Developed user interfaces for management dashboards and client onboarding using React.js and TypeScript. Boosted performance by integrating RESTful APIs with React Query, reducing API calls. Contributed to planning and documenting client features, ensuring clear requirements and efficient development.",
    tools: [
      {
        icon: Image.REACT,
        alt: "React Js",
      },
      {
        icon: Image.GOLANG,
        alt: "Golang",
      },
      {
        icon: Image.MYSQL,
        alt: "MySQL",
      },
      {
        icon: Image.REACTQUERY,
        alt: "React Query",
      },
      {
        icon: Image.JAVASCRIPT,
        alt: "JavaScript",
      },
      {
        icon: Image.TYPESCRIPT,
        alt: "TypeScript",
      },
      {
        icon: Image.SASS,
        alt: "SASS",
      },
      {
        icon: Image.DOCKER,
        alt: "Docker",
      },
      {
        icon: Image.JENKINS,
        alt: "Jenkins",
      },
      {
        icon: Image.POSTMAN,
        alt: "Postman",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Software Engineer Trainee",
    companyName: "Machnet Technologies Inc.",
    duration: "Apr 2022 - Jul 2024",
    description:
      "Developed static web pages using HTML, CSS, SCSS, and JavaScript. Implemented responsive designs with media queries, ensuring adaptability across all screen sizes. Optimized loading speed by 70% through image compression, format conversion, and lazy-loading. Integrated Google Analytics via Tag Manager to track traffic and user activity.",
    tools: [
      {
        icon: Image.HTML,
        alt: "HTML",
      },
      {
        icon: Image.CSS,
        alt: "CSS",
      },
      {
        icon: Image.JAVASCRIPT,
        alt: "JavaScript",
      },
      {
        icon: Image.TYPESCRIPT,
        alt: "TypeScript",
      },
      {
        icon: Image.SASS,
        alt: "SASS",
      },
    ],
  },
];

export default experienceData;
