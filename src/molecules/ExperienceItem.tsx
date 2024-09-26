import { Image } from "../utils/images";
import { ExperienceProps } from "../types/portfolio.type";

const ExperienceItem = (props: ExperienceProps) => {
  const { title, duration, companyName, description, tools } = props;

  return (
    <div className="experiences__item">
      <div className="experiences__info">
        <img
          src={Image.POINT}
          className="experiences__bullet-point"
          alt="Point"
        />
        <div className="experiences__date">{duration}</div>
        <div className="experiences__company-name">{title}</div>
        <div className="experiences__position">{companyName}</div>
        <div className="experiences__work-description">{description}</div>
        <div className="experiences__tech-badges">
          <p>Tools used:</p>
          {tools.map((tool, index) => (
            <img
              key={index}
              src={tool.icon}
              className="experiences__tech-badge"
              alt={tool.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
