import { v4 as uuidv4 } from "uuid";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Thumbnail } from "../utils/images";
import { ProjectProps } from "../types/portfolio.type";

const projectData: ProjectProps[] = [
  {
    id: uuidv4(),
    thumbnail: Thumbnail.TABAPAY,
    title: "TabaPay.com",
    description:
      "Build and maintain static landing page for TabaPay primarily using html, css and javascript. Implemented image compression and perfomance optimization by minimizing bundle size and converting image format to .webp, resulting in significat peromance boost by 70%. Tools like lighthouse and browserstack were used for performance diagnostic and cross browser compatibility",
    tags: ["html", "css", "scss", "javascript", "typescript"],
    links: [
      {
        show: true,
        url: "https://tabapay.com",
        icon: FaExternalLinkAlt,
      },
    ],
  },
  {
    id: uuidv4(),
    thumbnail: Thumbnail.TABAPAY_DASHBOARD,
    title: "TabaPay Dashboard",
    description:
      "A dashboard site for TabaPay that handles operations like clients and sub clients on-boarding, user management, role based access control (RBAC). Created user interfaces using React.js and TypeScript. Integrate react query to efficiently cache api response for better performance. Create and integrate RESTful APIs using golang for the backend. Implemented JWT to remember user session and session based authentication and authorization.",
    tags: ["SCSS", "React JS", "TypeScript", "Golang", "MySQL"],
    links: [],
  },
];

export default projectData;
