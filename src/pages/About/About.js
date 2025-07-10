import './About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

  const handleJoinWebinar = () => {
    navigate('/booking');
  };
  return (
    <div className="about-container">
      <h1 className="about-title">Ի՞նչ է STEM-ը</h1>

      <p className="about-text">
        STEM-ը՝ բնագիտություն (Science), տեխնոլոգիա (Technology), ճարտարագիտություն (Engineering) և մաթեմատիկա (Mathematics), կրթական մոտեցում է, որը միավորում է այս չորս կարևոր ոլորտները։  
        Այն նպաստում է սովորողների վերլուծական մտածողության, խնդիրների լուծման և նորարարական կարողությունների զարգացմանը։
      </p>

      <p className="about-text">
        STEM կրթության հիմնական նպատակն է պատրաստել սովորողներին ոչ միայն այդ ոլորտներում մասնագիտանալու, այլև ձևավորել 21-րդ դարի մարտահրավերներին դիմակայելու ունակ քաղաքացիներ՝ զինված գիտելիքով, հմտություններով ու ստեղծագործ մտածողությամբ։
      </p>

      <p className="about-text">
        Բնագիտությունն օգնում է հասկանալ շրջակա աշխարհը, տեխնոլոգիան՝ ստեղծել նորարար լուծումներ, ճարտարագիտությունը՝ կառուցել և կատարելագործել համակարգեր, իսկ մաթեմատիկան՝ տրամաբանական մտածողությամբ վերլուծել և հաշվարկել։ Միասին՝ STEM-ը դառնում է առաջընթացի շարժիչ ուժ։
      </p>

      <p className="about-text">
        Հայաստանում STEM կրթության զարգացումը խթանում է երիտասարդների նորարար մտածողությունը, ձեռնարկատիրական հմտությունները և պատրաստակամությունը՝ ներգրավվելու միջազգային գիտական ու տեխնոլոգիական համագործակցությունների մեջ։  
        Այս ոլորտների մասնագետների պահանջարկն արագորեն աճում է ամբողջ աշխարհում։
      </p>

      <h2 className="connection-title">
        Այստեղ է սկսվում ձեր ճանապարհը դեպի STEM
      </h2>

      <p className="connection-description">
        STEM-ը կարևոր դեր ունի ապագան կերտելու գործում։ Կամավորության, համագործակցության և կրթության միջոցով մենք ստեղծում ենք այնպիսի հնարավորություններ, որոնք ոգեշնչում են ապագա գիտնականներին, ինժեներներին ու ստեղծարարներին։
      </p>

      <div className="card-grid">
        <div className="card">
          <img
            src="https://images.ctfassets.net/pc40tpn1u6ef/7AxyadojyPBSl0KqGijI7B/5d6a6749687b1191af8dea78adeee0fc/Stem-Smashing-Mixer-0075.jpg?w=640&q=75"
            alt="Volunteer"
            className="card-image"
          />
          <div className="card-body">
            <h3>Կամավորություն</h3>
            <p>Իմացեք, թե ով է STEM դեսպանը և ինչպես կարող եք դառնալ մեկն այդպիսին։</p>
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
            <p>Իմացեք, թե ինչպես հրավիրել STEM դեսպանի՝ ձեր դպրոցում դասավանդումն առավել հետաքրքիր դարձնելու համար։</p>
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
            <p>Իմացեք, թե ինչպես ներգրավել STEM կամավորներ ձեր կազմակերպությունում՝ կրթության հզորացման նպատակով։</p>
            <button className="card-button" onClick={handleJoinWebinar}>Մասնակցել վեբինարին</button>
          </div>
        </div>
      </div>

      <section className="about-section">
        <div className="about-row">
          <div className="about-text-col">
            <h2 className="about-subtitle">Ինչպես է աշխատում STEM-ը</h2>
            <h3 className="about-highlight">«Չես կարող պատկերացնել այն, ինչ չես տեսել»․ իրական STEM մասնագետների ուժը</h3>
            <p>
              Մենք հավատում ենք, որ կարևոր է իրական STEM մասնագետների մասնակցությունը կրթական գործընթացում՝ դպրոցներում, երիտասարդական կենտրոններում և առցանց հարթակներում։
            </p>
            <p>
              2002 թվականից սկսած՝ մենք համագործակցում ենք բիզնես և կրթական ոլորտների հետ՝ ներգրավելով հազարավոր երիտասարդների այս ոլորտներում։ Իրական փորձն ու խորհրդատվությունը կարող են խորապես ազդել նրանց ապագայի վրա։
            </p>
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
            <p>
              Մենք չէինք կարող իրականացնել մեր առաքելությունը առանց մեր հիանալի գործընկերների՝ հովանավորների, ուսուցիչների և ընկերությունների, որոնք աջակցում են STEM նախաձեռնություններին։
            </p>
            <p><strong>Դարձեք գործընկեր և օգնեք երիտասարդներին բացահայտել STEM-ի առաջարկած հնարավորությունները։</strong></p>
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

export default About;
