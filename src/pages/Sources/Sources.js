import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { list, technologyList, engineeringList, mathList } from "./config";
import "./Sources.css";

const Sources = () => {
  const navigate = useNavigate();

  const [sections] = useState([
    { title: "🔬 Գիտություն (Science)", data: list },
    { title: "💻 Տեխնոլոգիա (Technology)", data: technologyList },
    { title: "🏗️ Ճարտարագիտություն (Engineering)", data: engineeringList },
    { title: "📐 Մաթեմատիկա (Mathematics)", data: mathList },
  ]);

  return (
    <div className="sources-root">
      <h1 className="sources-main-title">📚 STEM Նյութեր</h1>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="sources-section">
          <h2 className="sources-section-title">{section.title}</h2>
          <div className="sources-grid">
            {section.data.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="sources-card"
                onClick={() => navigate(`/detail/${sectionIndex}/${itemIndex}`)}
                style={{ cursor: "pointer" }}
              >
                <h3 className="sources-card-title">{itemIndex + 1}) {item.title}</h3>
                <p className="sources-card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sources;
