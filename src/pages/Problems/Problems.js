import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Problems.css';

const initialTexts = {
  intro: "Թեև STEM կրթությունը մեծ հնարավորություններ է ստեղծում, այսօր առկա են մի շարք լուրջ մարտահրավերներ, որոնք կրճատում են նրա հասանելիությունն ու արդյունավետությունը:",
  problem1: "Շատ դպրոցներում բացակայում են համապատասխան որակավորում ունեցող մասնագետներ, ովքեր կարող են ժամանակակից մեթոդներով դասավանդել բնագիտական և տեխնոլոգիական առարկաներ։ Այս հարցը հատկապես սրվում է գյուղական ու հեռավոր շրջաններում։",
  problem2: "Լաբորատոր սարքավորումների, համակարգիչների, ծրագրային ապահովման և ինտերնետի բացակայությունը սահմանափակում է ուսանողների գործնական փորձը STEM առարկաներում։",
  problem3: "Շատ կրթօջախներում շարունակում են կիրառվել ավանդական մեթոդներ, որոնք չեն խթանում ստեղծագործական և քննադատական մտածողությունը։ STEM-ը պահանջում է փորձնական, խնդիրակենտրոն ուսուցման նոր մոտեցումներ։",
  problem4: "Ուսանողները հաճախ չեն կարողանում տեսական գիտելիքները գործնական դաշտում կիրառել, ինչը նվազեցնում է նրանց մոտիվացիան։ Պրակտիկ նախագծերն ու համագործակցային ուսուցումը կարևոր են այս խնդիրն ապակողմնորոշելու համար։",
  problem5: "STEM ոլորտին վաղ տարիքից հետաքրքրություն չկայացնելը հանգեցնում է ընդհանուր մոտիվացիայի անկմանը։ Պետք է ստեղծել միջավայր, որտեղ գիտությունն ու տեխնոլոգիան կներկայացվեն որպես արկած և ստեղծագործություն։",
  conclusion: "Այս բոլոր մարտահրավերները հաղթահարվում են հստակ քաղաքականությամբ, ներդրումներով և նորարար ուսումնական մեթոդներով։ STEM-ը մեր ապագան է, ուստի կարևոր է, որ յուրաքանչյուր երեխա ունենա դրա զարգանալու հավասար հնարավորություն։"
};

const Problems = () => {
  const { isLoggedIn } = useAuth();
  const [texts, setTexts] = useState(initialTexts);
  const [editKey, setEditKey] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (key) => {
    setEditKey(key);
    setEditValue(texts[key]);
  };

  const handleSave = (key) => {
    setTexts(prev => ({
      ...prev,
      [key]: editValue
    }));
    setEditKey(null);
    setEditValue('');
  };

  return (
    <div className='problems-container'>
      <h1 className="problems-title">STEM կրթության հիմնական մարտահրավերները</h1>
      <div className="problems-context">
        <div className="problems-text-block">
          {editKey === 'intro' ? (
            <>
              <textarea
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="problems-textarea"
              />
              <button onClick={() => handleSave('intro')}>Save</button>
            </>
          ) : (
            <>
              <p className="problems-text">{texts.intro}</p>
              {isLoggedIn && (
                <button onClick={() => handleEdit('intro')}>Edit</button>
              )}
            </>
          )}
        </div>

        <h2 className="problems-subtitle">📌 1. Որակյալ ուսուցիչների պակաս</h2>
        <div className="problems-text-block">
          {editKey === 'problem1' ? (
            <>
              <textarea
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="problems-textarea"
              />
              <button onClick={() => handleSave('problem1')}>Save</button>
            </>
          ) : (
            <>
              <p className="problems-text">{texts.problem1}</p>
              {isLoggedIn && (
                <button onClick={() => handleEdit('problem1')}>Edit</button>
              )}
            </>
          )}
        </div>

        <h2 className="problems-subtitle">📌 2. Տեխնիկական ռեսուրսների անբավարարություն</h2>
        <div className="problems-text-block">
          {editKey === 'problem2' ? (
            <>
              <textarea
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="problems-textarea"
              />
              <button onClick={() => handleSave('problem2')}>Save</button>
            </>
          ) : (
            <>
              <p className="problems-text">{texts.problem2}</p>
              {isLoggedIn && (
                <button onClick={() => handleEdit('problem2')}>Edit</button>
              )}
            </>
          )}
        </div>

        <h2 className="problems-subtitle">📌 3. Հին, մեխանիկական դասավանդման մեթոդներ</h2>
        <div className="problems-text-block">
          {editKey === 'problem3' ? (
            <>
              <textarea
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="problems-textarea"
              />
              <button onClick={() => handleSave('problem3')}>Save</button>
            </>
          ) : (
            <>
              <p className="problems-text">{texts.problem3}</p>
              {isLoggedIn && (
                <button onClick={() => handleEdit('problem3')}>Edit</button>
              )}
            </>
          )}
        </div>

        <h2 className="problems-subtitle">📌 4. Տեորիայի և իրական կյանքի միջև կապի բացակայություն</h2>
        <div className="problems-text-block">
          {editKey === 'problem4' ? (
            <>
              <textarea
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="problems-textarea"
              />
              <button onClick={() => handleSave('problem4')}>Save</button>
            </>
          ) : (
            <>
              <p className="problems-text">{texts.problem4}</p>
              {isLoggedIn && (
                <button onClick={() => handleEdit('problem4')}>Edit</button>
              )}
            </>
          )}
        </div>

        <h2 className="problems-subtitle">📌 5. Հետաքրքրության պակաս վաղ տարիքից</h2>
        <div className="problems-text-block">
          {editKey === 'problem5' ? (
            <>
              <textarea
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="problems-textarea"
              />
              <button onClick={() => handleSave('problem5')}>Save</button>
            </>
          ) : (
            <>
              <p className="problems-text">{texts.problem5}</p>
              {isLoggedIn && (
                <button onClick={() => handleEdit('problem5')}>Edit</button>
              )}
            </>
          )}
        </div>

        <div className="problems-text-block">
          {editKey === 'conclusion' ? (
            <>
              <textarea
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="problems-textarea"
              />
              <button onClick={() => handleSave('conclusion')}>Save</button>
            </>
          ) : (
            <>
              <p className="problems-text">{texts.conclusion}</p>
              {isLoggedIn && (
                <button onClick={() => handleEdit('conclusion')}>Edit</button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Problems;