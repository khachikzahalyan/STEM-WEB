import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { list, technologyList, engineeringList, mathList } from "./config";
import { useAuth } from "../../context/AuthContext";
import "./Sources.css";

const Sources = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const [editSectionIdx, setEditSectionIdx] = useState(null);
  const [editItemIdx, setEditItemIdx] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const [sections, setSections] = useState([
    { title: "🔬 Գիտություն (Science)", data: list },
    { title: "💻 Տեխնոլոգիա (Technology)", data: technologyList },
    { title: "🏗️ Ճարտարագիտություն (Engineering)", data: engineeringList },
    { title: "📐 Մաթեմատիկա (Mathematics)", data: mathList },
  ]);

  const handleEdit = (sectionIdx, itemIdx) => {
    setEditSectionIdx(sectionIdx);
    setEditItemIdx(itemIdx);
    setEditTitle(sections[sectionIdx].data[itemIdx].title);
    setEditDescription(sections[sectionIdx].data[itemIdx].description);
  };

  const handleSave = () => {
    setSections(prevSections => {
      const newSections = [...prevSections];
      const newData = [...newSections[editSectionIdx].data];
      newData[editItemIdx] = {
        ...newData[editItemIdx],
        title: editTitle,
        description: editDescription
      };
      newSections[editSectionIdx] = {
        ...newSections[editSectionIdx],
        data: newData
      };
      return newSections;
    });
    setEditSectionIdx(null);
    setEditItemIdx(null);
    setEditTitle('');
    setEditDescription('');
  };

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
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (!(editSectionIdx === sectionIndex && editItemIdx === itemIndex)) {
                    navigate(`/detail/${sectionIndex}/${itemIndex}`);
                  }
                }}
              >
                {editSectionIdx === sectionIndex && editItemIdx === itemIndex ? (
                  <>
                    <input
                      className="sources-card-title"
                      value={editTitle}
                      onChange={e => setEditTitle(e.target.value)}
                    />
                    <textarea
                      className="sources-card-description"
                      value={editDescription}
                      onChange={e => setEditDescription(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                  </>
                ) : (
                  <>
                    <h3 className="sources-card-title">
                      {itemIndex + 1}) {item.title}
                    </h3>
                    <p className="sources-card-description">{item.description}</p>
                    {isLoggedIn && (
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          handleEdit(sectionIndex, itemIndex);
                        }}
                      >
                        Edit
                      </button>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sources;