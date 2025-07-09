import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Ի՞նչ է STEM-ը</h1>

      <p className="about-text">
        STEM-ը կրճատում է բնագիտություն (Science), տեխնոլոգիա (Technology), ճարտարագիտություն (Engineering) և մաթեմատիկա (Mathematics) բառերից։
        Այն կրթական մոտեցում է, որը միավորում է այս չորս կարևոր ոլորտները՝ աջակցելով սովորողներին զարգացնել վերլուծական մտածողություն, խնդիրների լուծման հմտություններ և նորարարական մոտեցումներ։
      </p>

      <p className="about-text">
        STEM կրթության նպատակն է նախապատրաստել սովորողներին ոչ միայն այս ոլորտներում մասնագիտանալու համար,
        այլ նաև պատրաստել նրանց 21-րդ դարի մարտահրավերներին՝ ձևավորելով մտածող, գիտելիքով զինված և ստեղծագործ քաղաքացիներ։
      </p>

      <p className="about-text">
        Բնագիտությունը օգնում է մեզ հասկանալ բնական երևույթները, տեխնոլոգիան՝ ստեղծել նոր լուծումներ,
        ճարտարագիտությունը՝ կառուցել արդյունավետ համակարգեր, իսկ մաթեմատիկան՝ տրամաբանական ու ճշգրիտ վերլուծություններ կատարել։
        Միասին վերցրած՝ STEM-ը կարևոր գործիք է հասարակության կայուն զարգացման համար։
      </p>

      <p className="about-text">
        Հայաստանում STEM կրթության զարգացումը խթանում է ուսանողների նորարար մտածողությունը, ձեռներեց հմտությունները և միջազգային գիտական համագործակցությանը մասնակցելու պատրաստակամությունը։
        Ապագայի աշխատաշուկայում STEM ոլորտների մասնագետների պահանջարկը շարունակաբար աճում է։
      </p>

      <h2 className="connection-title">
        Կապի մասին է խոսքը, և ահա որտեղ է սկսվում ձեր ճանապարհը
      </h2>

      <p className="connection-description">
        STEM-ը (Բնագիտություն, Տեխնոլոգիա, Ճարտարագիտություն և Մաթեմատիկա) առանցքային դեր ունի ապագան ձևավորելու գործում։
        Կամավորության, համագործակցության և կրթության միջոցով մենք ստեղծում ենք հնարավորություններ, որոնք ոգեշնչում են ապագա գիտնականներին և ինժեներներին։
      </p>

      <div className="card-grid">
        <div className="card">
          <img src="https://images.ctfassets.net/pc40tpn1u6ef/7AxyadojyPBSl0KqGijI7B/5d6a6749687b1191af8dea78adeee0fc/Stem-Smashing-Mixer-0075.jpg?w=640&q=75" alt="Volunteer" className="card-image" />
          <div className="card-body">
            <h3>Կամավորություն</h3>
            <p>
              Իմացեք, թե ինչով է զբաղվում STEM դեսպանը և ինչպես կարող եք դառնալ մեկը։
            </p>
            <button className="card-button">Մասնակցել վեբինարին</button>
          </div>
        </div>

        <div className="card">
          <img src="https://images.ctfassets.net/pc40tpn1u6ef/m5Rraoe18exF5aooelCos/4487474e2a02979323af46e6453b698f/Untitled_design_-_2022-10-18T120746.272.png?w=640&q=75" alt="Request" className="card-image" />
          <div className="card-body">
            <h3>Հրավեր</h3>
            <p>
              Իմացեք, թե ինչպես կարող եք հրավիրել STEM դեսպանի՝ ձեր դպրոցում STEM առարկաների դասավանդումը հարստացնելու համար։
            </p>
            <button className="card-button">Մասնակցել վեբինարին</button>
          </div>
        </div>

        <div className="card">
          <img src="https://mamul.am/images/photos/200423/karavarutyuny-hastatec-koronav-n177019-1.jpg" alt="Work with us" className="card-image" />
          <div className="card-body">
            <h3>Աշխատեք մեզ հետ</h3>
            <p>
              Իմացեք, թե ինչպես կարող եք ներգրավել արդյունավետ կամավորություն ձեր կազմակերպությունում և դառնալ STEM դեսպանության գործընկեր։
            </p>
            <button className="card-button">Մասնակցել վեբինարին</button>
          </div>
        </div>
      </div>
      <section className="about-section">
        <div className="about-row">
          <div className="about-text-col">
            <h2 className="about-subtitle">Ինչպես է աշխատում STEM-ը</h2>
            <h3 className="about-highlight">«Չես կարող պատկերացնել այն, ինչ չես տեսել» իրական STEM մասնագետների ուժը</h3>
            <p>
              Մենք հավատում ենք, որ կարևոր է իրական STEM մասնագետներին և օրինակելի կերպարներին ներգրավել կրթական գործընթացում՝
              դպրոցներում, երիտասարդական կենտրոններում և առցանց հարթակներում։
            </p>
            <p>
              2002 թվականից մենք համագործակցում ենք բիզնեսի և կրթական ոլորտի հետ՝ միլիոնավոր երիտասարդների ներգրավելով այս ոլորտներում։
              Իրական փորձն ու խորհրդատվությունը կարող են խորապես ազդել նրանց ապագայի վրա։
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
              Մենք չէինք կարող փոխել կյանքեր առանց մեր հիանալի գործընկերների՝ հովանավորների ու գործարարների, 
              ովքեր իրենց դռներն են բացում կամավոր STEM դեսպանների համար։
            </p>
            <p><strong>Դարձեք գործընկեր և օգնեք երիտասարդներին բացահայտել STEM ոլորտի հնարավորությունները։</strong></p>
          </div>

          <div className="about-media-col">
            <img src="https://images.ctfassets.net/pc40tpn1u6ef/32NqyTgpCgzDXwEkfOedEB/b465ff70d8c91adcafbb5a891baff180/Untitled_design__74_.jpg?w=640&q=75" alt="STEM Team" className="about-image" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
