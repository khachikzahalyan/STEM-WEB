import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Importance.css';

const initialTexts = {
  main: "STEM-ը (գիտություն, տեխնոլոգիաներ, ինժեներություն և մաթեմատիկա) ժամանակակից աշխարհի հիմքն է...",
  card1: "STEM կրթությունը զարգացնում է վերլուծական մտածողություն և խնդիրների լուծման հմտություններ։",
  card2: "Աշխարհի ապագան կախված է STEM մասնագիտություններից. դա աշխատաշուկայի հիմնական պահանջն է։",
  card3: "STEM-ն ազդում է տնտեսության, նորարարության և գլոբալ խնդիրների լուծման վրա։",
  quote: "«STEM-ը պարզապես կրթություն չէ։ Այն ապագայի բանալին է, որտեղ տեխնոլոգիաները ծառայում են մարդուն»։",
  misconception_intro: "STEM կրթությունը միայն գիտության և մաթեմատիկայի գիտելիքների զարգացում չէ։ Իր էությամբ STEM-ը օգնում է երեխաներին զարգացնել նոր մտածողություն՝ խթանելով հետաքրքրասիրությունը և վերլուծական հմտությունները։ Այս հմտությունները ձևավորելը վաղ տարիքից (մանկուց մինչև երրորդ դասարան), երբ միտքը առավել ճկուն է, հիմք է դնում ամբողջ կյանքի ընթացքում կիրառվող մտածողության ձևավորման համար։ Ստորև բերված են STEM-ի մասին տարածված մի քանի միֆեր, որոնք արժե հերքել՝ դրա օգուտները լիարժեք հասկանալու համար։",
  misconception1: "Իրականում STEM-ը անբաժանելի է այլ ոլորտներից և կարող է բարելավել այլ առարկաների ուսուցումը։ Օրինակ՝ հետազոտությունները ցույց են տվել, որ գիտության ուսուցումն օգնում է բարելավել գրագիտությունը, լեզվի ուսուցումը և գործադիր ֆունկցիաները։",
  misconception2: "Թեև տեխնոլոգիան STEM-ի մի մասն է, սակայն STEM կրթությունը հատկապես փոքր երեխաների դեպքում անհրաժեշտ չէ թվային սարքավորումներով։ Օրինակ՝ կոնստրուկտորներով խաղալը, այգեգործությամբ զբաղվելը կամ գլուխկոտրուկներ լուծելը նույնպես STEM-ի բաղադրիչներ են։ STEM ուսուցումը կարող է իրականանալ ցանկացած պահի՝ նվազագույն ռեսուրսներով։",
  misconception3: "Ծնողները, ովքեր գիտակցում են STEM-ի օգուտները, կարող են տանը խրախուսել դրա հետ կապված գործունեություն։ Օրինակ՝ Կրթության նախարարության կողմից ֆինանսավորվող Ready to Learn Initiative ծրագրի շրջանակում PBS-ը մշակել է խաղեր և հավելվածներ, որոնք օգնում են երեխաներին (2-ից 8 տարեկան) զարգացնել գրագիտության և գիտության հմտությունները։",
  misconception4: "STEM նախաձեռնությունները դեռ բախվում են հին կարծրատիպերի՝ կապված սեռի կամ ռասայի հետ։ Բացի այդ, STEM-ը ավելի հաճախ կենտրոնացվում է բարձր դասարանների վրա, ինչը զրկում է փոքր երեխաներին այդ կրթությունից։"
};

const Importance = () => {
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
    <section className="section">
      <div className="title">
        <h1>Ինչու՞ է STEM կրթությունը կարևոր</h1>
        <div className="importance-text-block">
          {editKey === 'main' ? (
            <>
              <textarea
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="importance-textarea"
              />
              <button onClick={() => handleSave('main')}>Save</button>
            </>
          ) : (
            <>
              <p>{texts.main}</p>
              {isLoggedIn && (
                <button onClick={() => handleEdit('main')}>Edit</button>
              )}
            </>
          )}
        </div>
      </div>

      <div className="card-grid-importance">
        <div className="card-importance">
          <img
            src="https://images.unsplash.com/photo-1596496181871-9681eacf9764?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Innovation"
          />
          <div className="card-content">
            <h2>Քննադատական մտածողություն</h2>
            <div className="importance-text-block">
              {editKey === 'card1' ? (
                <>
                  <textarea
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    className="importance-textarea"
                  />
                  <button onClick={() => handleSave('card1')}>Save</button>
                </>
              ) : (
                <>
                  <p>{texts.card1}</p>
                  {isLoggedIn && (
                    <button onClick={() => handleEdit('card1')}>Edit</button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="card-importance">
          <img
            src="https://soeonline.american.edu/wp-content/uploads/sites/2/2022/08/blog-stem-important-960x640-1.jpg"
            alt="Future Professions"
          />
          <div className="card-content">
            <h2>Ապագայի մասնագիտություններ</h2>
            <div className="importance-text-block">
              {editKey === 'card2' ? (
                <>
                  <textarea
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    className="importance-textarea"
                  />
                  <button onClick={() => handleSave('card2')}>Save</button>
                </>
              ) : (
                <>
                  <p>{texts.card2}</p>
                  {isLoggedIn && (
                    <button onClick={() => handleEdit('card2')}>Edit</button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="card-importance">
          <img
            src="https://soeonline.american.edu/wp-content/uploads/sites/2/2022/08/blog-stem-960x640-1.jpg"
            alt="STEM Education"
          />
          <div className="card-content">
            <h2>Հասարակական զարգացում</h2>
            <div className="importance-text-block">
              {editKey === 'card3' ? (
                <>
                  <textarea
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    className="importance-textarea"
                  />
                  <button onClick={() => handleSave('card3')}>Save</button>
                </>
              ) : (
                <>
                  <p>{texts.card3}</p>
                  {isLoggedIn && (
                    <button onClick={() => handleEdit('card3')}>Edit</button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="importance-text-block">
        {editKey === 'quote' ? (
          <>
            <textarea
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
              className="importance-textarea"
            />
            <button onClick={() => handleSave('quote')}>Save</button>
          </>
        ) : (
          <>
            <blockquote>{texts.quote}</blockquote>
            {isLoggedIn && (
              <button onClick={() => handleEdit('quote')}>Edit</button>
            )}
          </>
        )}
      </div>

      <div className='steam-iimportance'>
        <div>
          <h1>Սխալ պատկերացումներ STEM կրթության վերաբերյալ</h1>
          <div className="importance-text-block">
            {editKey === 'misconception_intro' ? (
              <>
                <textarea
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="importance-textarea"
                />
                <button onClick={() => handleSave('misconception_intro')}>Save</button>
              </>
            ) : (
              <>
                <p>{texts.misconception_intro}</p>
                {isLoggedIn && (
                  <button onClick={() => handleEdit('misconception_intro')}>Edit</button>
                )}
              </>
            )}
          </div>
        </div>
        <div>
          <h2>📌 Միֆ. STEM-ը զարգանում է ոչ-STEM առարկաների հաշվին</h2>
          <div className="importance-text-block">
            {editKey === 'misconception1' ? (
              <>
                <textarea
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="importance-textarea"
                />
                <button onClick={() => handleSave('misconception1')}>Save</button>
              </>
            ) : (
              <>
                <p>{texts.misconception1}</p>
                {isLoggedIn && (
                  <button onClick={() => handleEdit('misconception1')}>Edit</button>
                )}
              </>
            )}
          </div>
          <h2>📌 Միֆ. STEM նշանակում է ավելորդ թվային տեխնոլոգիաներ դասարանում</h2>
          <div className="importance-text-block">
            {editKey === 'misconception2' ? (
              <>
                <textarea
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="importance-textarea"
                />
                <button onClick={() => handleSave('misconception2')}>Save</button>
              </>
            ) : (
              <>
                <p>{texts.misconception2}</p>
                {isLoggedIn && (
                  <button onClick={() => handleEdit('misconception2')}>Edit</button>
                )}
              </>
            )}
          </div>
          <h2>📌 Միֆ. STEM ուսուցումը միայն դասարանում է տեղի ունենում</h2>
          <div className="importance-text-block">
            {editKey === 'misconception3' ? (
              <>
                <textarea
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="importance-textarea"
                />
                <button onClick={() => handleSave('misconception3')}>Save</button>
              </>
            ) : (
              <>
                <p>{texts.misconception3}</p>
                {isLoggedIn && (
                  <button onClick={() => handleEdit('misconception3')}>Edit</button>
                )}
              </>
            )}
          </div>
          <h2>📌 Միֆ. STEM ծրագրերը միայն որոշ երեխաների համար են</h2>
          <div className="importance-text-block">
            {editKey === 'misconception4' ? (
              <>
                <textarea
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="importance-textarea"
                />
                <button onClick={() => handleSave('misconception4')}>Save</button>
              </>
            ) : (
              <>
                <p>{texts.misconception4}</p>
                {isLoggedIn && (
                  <button onClick={() => handleEdit('misconception4')}>Edit</button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importance;