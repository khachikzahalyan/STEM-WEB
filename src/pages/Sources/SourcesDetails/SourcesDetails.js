import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { list, technologyList, mathList, engineeringList } from "./config";
import { useAuth } from "../../../context/AuthContext";
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
  const { isLoggedIn } = useAuth();

  const section = allSections[sectionIndex];
  const item = section?.data?.[itemIndex];

  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(item?.title || "");
  const [editDescription, setEditDescription] = useState(item?.description || "");

  if (!item) return <p>Տվյալը չի գտնվել։</p>;

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <div className="sources-detail-root">
      <button className="sources-detail-back-btn" onClick={() => navigate(-1)}>← Վերադառնալ</button>

      {editMode ? (
        <>
          <input
            className="sources-detail-title"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
          />
          <textarea
            className="sources-detail-description"
            value={editDescription}
            onChange={e => setEditDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h1 className="sources-detail-title">{editTitle}</h1>
          {item.subTitle && <h2 className="sources-detail-subtitle">{item.subTitle}</h2>}
          <p className="sources-detail-description">{editDescription}</p>
          {isLoggedIn && (
            <button onClick={() => setEditMode(true)}>Edit</button>
          )}
        </>
      )}

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