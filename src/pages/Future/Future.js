import React from "react";
import "./future.css";

const Future = () => {
  return (
    <div className="future-container">
      <h1>ԱՊԱԳԱՅԻ ՏԵՍԼԱԿԱՆԸ՝ STEM ԿՐԹՈՒԹՅԱՆ ՄԻՋՈՑՈՎ</h1>

      <div className="section_future">
        <img
          src="https://embassy.education/wp-content/uploads/2021/03/1.-STEM-education-reasons.jpg"
          alt="STEM Future"
        />
        <div>
          <h2>Ինչու է STEM-ը կարևոր ապագայում</h2>
          <ul>
            <li>Աշխարհը արագ փոփոխվում է․ տեխնոլոգիաները թափ են առնում։</li>
            <li>Ապագայի աշխատաշուկան պահանջում է STEM գիտելիքներ։</li>
            <li>Կրիտիկական մտածողություն և վերլուծություն՝ 21-րդ դարի հմտություններ։</li>
          </ul>
        </div>
      </div>

      <div className="section_future reverse">
        <img
          src="https://images.unsplash.com/photo-1596496181871-9681eacf9764?q=80&w=1186&auto=format&fit=crop"
          alt="STEM Professions"
        />
        <div>
          <h2>Ապագայի մասնագիտություններ</h2>
          <ul>
            <li>Տվյալագետ (Data Scientist)</li>
            <li>Արհեստական բանականության ինժեներ</li>
            <li>Կիբեռանվտանգության մասնագետ</li>
            <li>Ռոբոտաշինության ինժեներ</li>
            <li>Վիրտուալ իրականության մշակող</li>
          </ul>
        </div>
      </div>

      <div className="section_future">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1186&q=80"
          alt="STEM Collaboration"
        />
        <div>
          <h2>Ինչպիսին պետք է լինի STEM կրթությունը ապագայում</h2>
          <ul>
            <li>Աշխատել իրական նախագծերի վրա՝ պրակտիկա և խնդիրների լուծում։</li>
            <li>Ներառել արվեստը՝ STEAM մոտեցում։</li>
            <li>Խթանել համագործակցություն և թիմային ուսուցում։</li>
            <li>Օգտագործել տեխնոլոգիան՝ որպես գործիք, ոչ թե նպատակ։</li>
          </ul>
        </div>
      </div>

     <div className="final_section">
  <h2>Եզրակացություն</h2>
  <p>
    STEM կրթությունը ոչ միայն գիտելիքների հաղորդում է, այլև մտածողության մշակույթ։ Այն զարգացնում է տրամաբանական մտածողություն, թիմային աշխատանք, ստեղծագործականություն և հարմարվելու կարողություն՝ փոփոխվող աշխարհին։
  </p>
  <p>
    Ապագայի հասարակության մեջ կհաջողեն նրանք, ովքեր կկարողանան լուծել բարդ խնդիրներ, ստեղծել նոր տեխնոլոգիաներ և աշխատել տարբեր ոլորտների մասնագետների հետ։ Այս ամենի հիմքը դրվում է հենց դպրոցում՝ STEM կրթության միջոցով։
  </p>
  <p>
    Եթե մենք ցանկանում ենք պատրաստել ուժեղ, անկախ և առաջադեմ սերունդ, STEM ներդրումները պետք է սկսվեն հենց այսօր։
  </p>
</div>

    </div>
  );
};

export default Future;
