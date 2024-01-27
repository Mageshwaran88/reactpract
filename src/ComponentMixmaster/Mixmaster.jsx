import React, { useState } from "react";
import "./Mixmaster.css";
import { Aboutpage } from "./Aboutpage";
import { Newsletter } from "./Newsletter";

export const Mixmaster = () => {
  const [mydata, setmydata] = useState([
    {
      name: "A1",
      glass: "Cocktail Glass",
      type: "Alcoholic",
      img: "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
    },
    {
      name: "GG",
      glass: "Collins Glass",
      type: "Alcoholic",
      img: "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
    },
    {
      name: "ABC",
      glass: "Shot Glass",
      type: "Alcoholic",
      img: "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
    },
    {
      name: "ACE",
      glass: "Martini Glass",
      type: "Alcoholic",
      img: "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
    },
    {
      name: "AC",
      glass: "Shot Glass",
      type: "Alcoholic",
      img: "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
    },
    {
      name: "AD",
      glass: "Shot Glass",
      type: "Alcoholic",
      img: "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
    },
    {
      name: "AU",
      glass: "Wine Glass",
      type: "Alcoholic",
      img: "https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg",
    },
    {
      name: "AAC",
      glass: "Beer Mug",
      type: "Alcoholic",
      img: "https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg",
    }
  ]);

  const [mywebsite, setmywebsite] = useState(true);
  const [myweb, setmyweb] = useState(true)

  const showmastercomp = () => {
    setmywebsite(true);
  };
  const showaboutcomp = () => {
    setmywebsite(false);
    setmyweb(true)
  };
  const shownewscomp = () => {
    setmywebsite(false)
    setmyweb(false);
  };

  return (
    <div>
      <div className="main">
        <div>
          <h1 className="myhead">Mixmaster</h1>
        </div>
        <div>
          <ul>
            <li onClick={showmastercomp}>Home</li>
            <li onClick={showaboutcomp}>About</li>
            <li onClick={shownewscomp}>Newsletter</li>
          </ul>
        </div>
      </div>
      { mywebsite ?
        <div>
          <div className="inputcontainer">
          <div className="subinput">
            <input type="text" />
            <button className="searchbutton">Search</button>
          </div>
        </div>
        <div className="container">
          {mydata.map((data) => (
            <div className="drinkcontainer">
              <img src={data.img} />
              <h1>{data.name}</h1>
              <h2>{data.glass}</h2>
              <p>{data.type}</p>
              <button className="detailbtn">Details</button>
            </div>
          ))}
        </div>
        </div>
    :
      myweb ? <Aboutpage/> : <Newsletter/>}
    </div>
  );
};
