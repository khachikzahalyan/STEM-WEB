import './About.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import React, { useState } from 'react';

const initialTexts = {
  text1: "STEM-ը՝ բնագիտություն (Science), տեխնոլոգիա (Technology), ճարտարագիտություն (Engineering) և մաթեմատիկա (Mathematics), կրթական մոտեցում է, որը միավորում է այս չորս կարևոր ոլորտները։  Այն նպաստում է սովորողների վերլուծական մտածողության, խնդիրների լուծման և նորարարական կարողությունների զարգացմանը։",
  text2: "STEM կրթության հիմնական նպատակն է պատրաստել սովորողներին ոչ միայն այդ ոլորտներում մասնագիտանալու, այլև ձևավորել 21-րդ դարի մարտահրավերներին դիմակայելու ունակ քաղաքացիներ՝ զինված գիտելիքով, հմտություններով ու ստեղծագործ մտածողությամբ։",
  text3: "Բնագիտությունն օգնում է հասկանալ շրջակա աշխարհը, տեխնոլոգիան՝ ստեղծել նորարար լուծումներ, ճարտարագիտությունը՝ կառուցել և կատարելագործել համակարգեր, իսկ մաթեմատիկան՝ տրամաբանական մտածողությամբ վերլուծել և հաշվարկել։ Միասին՝ STEM-ը դառնում է առաջընթացի շարժիչ ուժ։",
  text4: "Հայաստանում STEM կրթության զարգացումը խթանում է երիտասարդների նորարար մտածողությունը, ձեռնարկատիրական հմտությունները և պատրաստակամությունը՝ ներգրավվելու միջազգային գիտական ու տեխնոլոգիական համագործակցությունների մեջ։  Այս ոլորտների մասնագետների պահանջարկն արագորեն աճում է ամբողջ աշխարհում։",
  text5: "STEM-ը կարևոր դեր ունի ապագան կերտելու գործում։ Կամավորության, համագործակցության և կրթության միջոցով մենք ստեղծում ենք այնպիսի հնարավորություններ, որոնք ոգեշնչում են ապագա գիտնականներին, ինժեներներին ու ստեղծարարներին։",
  text6: "Իմացեք, թե ով է STEM դեսպանը և ինչպես կարող եք դառնալ մեկն այդպիսին։",
  text7: "Իմացեք, թե ինչպես հրավիրել STEM դեսպանի՝ ձեր դպրոցում դասավանդումն առավել հետաքրքիր դարձնելու համար։",
  text8: "Իմացեք, թե ինչպես ներգրավել STEM կամավորներ ձեր կազմակերպությունում՝ կրթության հզորացման նպատակով։",
  text9: "Մենք հավատում ենք, որ կարևոր է իրական STEM մասնագետների մասնակցությունը կրթական գործընթացում՝ դպրոցներում, երիտասարդական կենտրոններում և առցանց հարթակներում։",
  text10: "2002 թվականից սկսած՝ մենք համագործակցում ենք բիզնես և կրթական ոլորտների հետ՝ ներգրավելով հազարավոր երիտասարդների այս ոլորտներում։ Իրական փորձն ու խորհրդատվությունը կարող են խորապես ազդել նրանց ապագայի վրա։",
  text11: "Մենք չէինք կարող իրականացնել մեր առաքելությունը առանց մեր հիանալի գործընկերների՝ հովանավորների, ուսուցիչների և ընկերությունների, որոնք աջակցում են STEM նախաձեռնություններին։",
  text12: "Դարձեք գործընկեր և օգնեք երիտասարդներին բացահայտել STEM-ի առաջարկած հնարավորությունները։"
};

const About = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const [texts, setTexts] = useState(initialTexts);
  const [editKey, setEditKey] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleJoinWebinar = () => {
    navigate('/booking');
  };

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
    <div className="about-container">
      <div className='about-title-content'>
        <h1 className="about-title"> Ի՞նչ է STEM-ը</h1>
        {['text1', 'text2', 'text3', 'text4'].map(key => (
          <div key={key} className="about-text-block">
            {editKey === key ? (
              <>
                <textarea
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="about-textarea"
                />
                <button onClick={() => handleSave(key)}>Save</button>
              </>
            ) : (
              <>
                <p className="about-text">{texts[key]}</p>
                {isLoggedIn && (
                  <button onClick={() => handleEdit(key)}>Edit</button>
                )}
              </>
            )}
          </div>
        ))}
      </div>
     
      <div className='connection-title-content'>
        <h2 className="connection-title">
          Այստեղ է սկսվում ձեր ճանապարհը դեպի STEM
        </h2>
        <div className="about-text-block">
          {editKey === 'text5' ? (
            <>
              <textarea
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                className="about-textarea"
              />
              <button onClick={() => handleSave('text5')}>Save</button>
            </>
          ) : (
            <>
              <p className="connection-description">{texts.text5}</p>
              {isLoggedIn && (
                <button onClick={() => handleEdit('text5')}>Edit</button>
              )}
            </>
          )}
        </div>
      </div>
      
      <div className="card-grid">
        <div className="card">
          <img
            src="https://images.ctfassets.net/pc40tpn1u6ef/7AxyadojyPBSl0KqGijI7B/5d6a6749687b1191af8dea78adeee0fc/Stem-Smashing-Mixer-0075.jpg?w=640&q=75"
            alt="Volunteer"
            className="card-image"
          />
          <div className="card-body">
            <h3>Կամավորություն</h3>
            <div className="about-text-block">
              {editKey === 'text6' ? (
                <>
                  <textarea
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    className="about-textarea"
                  />
                  <button onClick={() => handleSave('text6')}>Save</button>
                </>
              ) : (
                <>
                  <p>{texts.text6}</p>
                  {isLoggedIn && (
                    <button onClick={() => handleEdit('text6')}>Edit</button>
                  )}
                </>
              )}
            </div>
            <button className="card-button" onClick={handleJoinWebinar}>Մասնակցել վեբինարին</button>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.ctfassets.net/pc40tpn1u6ef/m5Rraoe18exF5aooelCos/4487474e2a02979323af46e6453b698f/Untitled_design_-_2022-10-18T120746.272.png?w=640&q=75"
            alt="Request"
            className="card-image"
          />
          <div className="card-body">
            <h3>Հրավեր</h3>
            <div className="about-text-block">
              {editKey === 'text7' ? (
                <>
                  <textarea
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    className="about-textarea"
                  />
                  <button onClick={() => handleSave('text7')}>Save</button>
                </>
              ) : (
                <>
                  <p>{texts.text7}</p>
                  {isLoggedIn && (
                    <button onClick={() => handleEdit('text7')}>Edit</button>
                  )}
                </>
              )}
            </div>
            <button className="card-button" onClick={handleJoinWebinar}>Մասնակցել վեբինարին</button>
          </div>
        </div>

        <div className="card">
          <img
            src="https://mamul.am/images/photos/200423/karavarutyuny-hastatec-koronav-n177019-1.jpg"
            alt="Work with us"
            className="card-image"
          />
          <div className="card-body">
            <h3>Աշխատեք մեզ հետ</h3>
            <div className="about-text-block">
              {editKey === 'text8' ? (
                <>
                  <textarea
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    className="about-textarea"
                  />
                  <button onClick={() => handleSave('text8')}>Save</button>
                </>
              ) : (
                <>
                  <p>{texts.text8}</p>
                  {isLoggedIn && (
                    <button onClick={() => handleEdit('text8')}>Edit</button>
                  )}
                </>
              )}
            </div>
            <button className="card-button" onClick={handleJoinWebinar}>Մասնակցել վեբինարին</button>
          </div>
        </div>
      </div>

      <section className="about-section">
        <div className="about-row">
          <div className="about-text-col">
            <h2 className="about-subtitle">Ինչպես է աշխատում STEM-ը</h2>
            <h3 className="about-highlight">«Չես կարող պատկերացնել այն, ինչ չես տեսել»․ իրական STEM մասնագետների ուժը</h3>
            <div className="about-text-block">
              {editKey === 'text9' ? (
                <>
                  <textarea
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    className="about-textarea"
                  />
                  <button onClick={() => handleSave('text9')}>Save</button>
                </>
              ) : (
                <>
                  <p>{texts.text9}</p>
                  {isLoggedIn && (
                    <button onClick={() => handleEdit('text9')}>Edit</button>
                  )}
                </>
              )}
            </div>
            <div className="about-text-block">
              {editKey === 'text10' ? (
                <>
                  <textarea
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    className="about-textarea"
                  />
                  <button onClick={() => handleSave('text10')}>Save</button>
                </>
              ) : (
                <>
                  <p>{texts.text10}</p>
                  {isLoggedIn && (
                    <button onClick={() => handleEdit('text10')}>Edit</button>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="about-media-col">
            <iframe
              className="about-video"
              src="https://www.youtube.com/embed/5GWhwUN9iaY?start=3"
              title="STEM Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-row reverse">
          <div className="about-text-col">
            <h2 className="about-subtitle">Աջակցեք մեր աշխատանքին՝ ներդրելով ապագայի մեջ</h2>
            <div className="about-text-block">
              {editKey === 'text11' ? (
                <>
                  <textarea
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    className="about-textarea"
                  />
                  <button onClick={() => handleSave('text11')}>Save</button>
                </>
              ) : (
                <>
                  <p>{texts.text11}</p>
                  {isLoggedIn && (
                    <button onClick={() => handleEdit('text11')}>Edit</button>
                  )}
                </>
              )}
            </div>
            <div className="about-text-block">
              {editKey === 'text12' ? (
                <>
                  <textarea
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)}
                    className="about-textarea"
                  />
                  <button onClick={() => handleSave('text12')}>Save</button>
                </>
              ) : (
                <>
                  <p><strong>{texts.text12}</strong></p>
                  {isLoggedIn && (
                    <button onClick={() => handleEdit('text12')}>Edit</button>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="about-media-col">
            <img
              src="https://images.ctfassets.net/pc40tpn1u6ef/32NqyTgpCgzDXwEkfOedEB/b465ff70d8c91adcafbb5a891baff180/Untitled_design__74_.jpg?w=640&q=75"
              alt="STEM Team"
              className="about-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About