import { useParams, useNavigate } from "react-router-dom";
import { list, technologyList, mathList, engineeringList } from "./config";
import "./SourcesDetails.css";

const allSections = [
  { title: "🔬 Գիտություն (Science)", data: list },
  { title: "💻 Տեխնոլոգիա (Technology)", data: technologyList },
  { title: "🏗️ Ճարտարագիտություն (Engineering)", data: engineeringList },
  { title: "📐 Մաթեմատիկա (Mathematics)", data: mathList },
];

const SourcesDetail = () => {
  const { sectionIndex, itemIndex } = useParams();
  const navigate = useNavigate();

  const section = allSections[sectionIndex];
  const item = section?.data?.[itemIndex];

  if (!item) return <p>Տվյալը չի գտնվել։</p>;

  return (
<div className="sources-detail-root">
  <button className="sources-detail-back-btn" onClick={() => navigate(-1)}>← Վերադառնալ</button>

  <h1 className="sources-detail-title">{item.title}</h1>

  {item.subTitle && <h2 className="sources-detail-subtitle">{item.subTitle}</h2>}

  <p className="sources-detail-description">{item.description}</p>

  {Array.isArray(item.details) && item.details.length > 0 && (
    <div className="sources-detail-extra">
      {item.details.map((text, index) => (
        <p key={index} className="sources-detail-paragraph">{text}</p>
      ))}
    </div>
  )}
</div>

  );
};

export default SourcesDetail;
