import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Home.css';

const initialTexts = {
  intro1: "Բնագիտություն, տեխնիկա, ճարտարագիտություն և մաթեմատիկա՝ այս չորս ուղղությունները համատեղ հայտնի են որպես STEM։ Մեր առջև բացվում է ապագայի մի հորիզոն, որտեղ նորարարությունը, ստեղծագործությունը և վերլուծական մտածողությունը դառնում են ամենակարևոր հմտությունները։ Այս կայքը նպատակ ունի հարթակ հանդիսանալ սովորողների, ուսուցիչների և հետաքրքրված անձանց համար, ովքեր ցանկանում են զարգանալ այս ոլորտներում։",
  intro2: "STEM-ը պարզապես ուսում չէ — այն մտածելու ձև է։ Այն սովորեցնում է մեզ տեսնել խնդիրները որպես հնարավորություններ, մոտենալ կյանքին վերլուծական հայացքով և վստահ քայլել դեպի անորոշ ապագա՝ գիտելիքով զինված։",
  list1: "Ուսումնասիրել բնագիտության հրաշալի աշխարհը՝ սկսած մոլեկուլներից մինչև գալակտիկաներ",
  list2: "Ծանոթանալ տեխնոլոգիաների վերջին զարգացումներին՝ արհեստական բանականությունից մինչև ռոբոտաշինություն",
  list3: "Սովորել ինժեներական մտածելակերպ՝ նախագծել, ստեղծել, փորձարկել",
  list4: "Ամրապնդել մաթեմատիկական հիմքը՝ թվերի ուժով լուծել բարդագույն խնդիրներ",
  desc1: "Արդյո՞ք STEM-ը քեզ համար է։\nԵթե երբևէ հարց ես տվել՝ «Ինչո՞ւ է երկինքը կապույտ» կամ փորձել ես ինքնուրույն ինչ-որ բան սարքել, դա արդեն նշանակում է, որ քո մեջ ապրում է գիտնական կամ ինժեներ։ STEM-ը օգնում է այդ հետաքրքրասիրությունը վերածել գիտելիքի և հաջողության։",
  desc2: "Ճշգրիտ և բնական գիտությունները փոխում են աշխարհը։ Դրանք թույլ են տալիս ոչ միայն հասկանալ, այլև փոխել իրականությունը։ Սովորիր մեզ հետ, զարգացրու հմտքներդ և պատրաստվիր մի աշխարհում աշխատելու, որտեղ փոփոխությունը անընդհատ է, և գիտելիքը՝ ամենաթանկ ռեսուրսը։",
  highlight: "🌟 Մեր նպատակն է՝ ոգեշնչել քեզ սովորել, ստեղծել և կիսվել քո գաղափարներով STEM համայնքում։ Միացիր մեզ այսօր՝ որպես ապագայի առաջնորդ։"
};

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const { isLoggedIn } = useAuth();
  const [texts, setTexts] = useState(initialTexts);
  const [editKey, setEditKey] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    setAnimate(true);
  }, []);

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
    <div className={`home-container ${animate ? 'fade-in' : ''}`}>
      <main className="home-main">
        <h1 className="home-title">📚 Բարի գալուստ STEM Աշխարհ</h1>
        <img
          alt="logo"
          src="https://embassy.education/wp-content/uploads/2021/03/1.-STEM-education-reasons.jpg"
        />
        <div className="home-container-content">
          <div className="home-text-block">
            {editKey === 'intro1' ? (
              <>
                <textarea
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="home-textarea"
                />
                <button onClick={() => handleSave('intro1')}>Save</button>
              </>
            ) : (
              <>
                <p>{texts.intro1}</p>
                {isLoggedIn && (
                  <button onClick={() => handleEdit('intro1')}>Edit</button>
                )}
              </>
            )}
          </div>
          <div className="home-text-block">
            {editKey === 'intro2' ? (
              <>
                <textarea
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="home-textarea"
                />
                <button onClick={() => handleSave('intro2')}>Save</button>
              </>
            ) : (
              <>
                <p>{texts.intro2}</p>
                {isLoggedIn && (
                  <button onClick={() => handleEdit('intro2')}>Edit</button>
                )}
              </>
            )}
          </div>
        </div>

        <div className="what-find-content">
          <h2>🔬 Մեր կայքում դուք կարող եք՝</h2>
          <ul>
            {['list1', 'list2', 'list3', 'list4'].map(key => (
              <li key={key}>
                {editKey === key ? (
                  <>
                    <input
                      value={editValue}
                      onChange={e => setEditValue(e.target.value)}
                      className="home-input"
                    />
                    <button onClick={() => handleSave(key)}>Save</button>
                  </>
                ) : (
                  <>
                    {texts[key]}
                    {isLoggedIn && (
                      <button onClick={() => handleEdit(key)}>Edit</button>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="home-text-block">
            {editKey === 'desc1' ? (
              <>
                <textarea
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="home-textarea"
                />
                <button onClick={() => handleSave('desc1')}>Save</button>
              </>
            ) : (
              <>
                <p>{texts.desc1}</p>
                {isLoggedIn && (
                  <button onClick={() => handleEdit('desc1')}>Edit</button>
                )}
              </>
            )}
          </div>

          <div className="home-text-block">
            {editKey === 'desc2' ? (
              <>
                <textarea
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="home-textarea"
                />
                <button onClick={() => handleSave('desc2')}>Save</button>
              </>
            ) : (
              <>
                <p>{texts.desc2}</p>
                {isLoggedIn && (
                  <button onClick={() => handleEdit('desc2')}>Edit</button>
                )}
              </>
            )}
          </div>

          <div className="home-text-block">
            {editKey === 'highlight' ? (
              <>
                <textarea
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="home-textarea"
                />
                <button onClick={() => handleSave('highlight')}>Save</button>
              </>
            ) : (
              <>
                <p className="home-highlight">{texts.highlight}</p>
                {isLoggedIn && (
                  <button onClick={() => handleEdit('highlight')}>Edit</button>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;