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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolorem sint iure hic nostrum nulla sed! Voluptas amet, adipisci sit dolorem inventore quae accusamus error doloribus fuga quidem accusantium quas.",
    tags: ["html", "css", "scss", "javascript", "typescript"],
    links: [
      {
        show: true,
        url: "https://tabapay.com",
        icon: FaExternalLinkAlt,
      },
    ],
  },
];

export default projectData;
