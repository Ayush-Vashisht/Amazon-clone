import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      
        <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD23/ACQ/GWhero/PC_Hero_3000x1200_KV_DAY_OFF_ft._CB601628864_.jpg"
            alt=""
            />

        <div className="home_row">
          <Product
            id="164615765"
            title="OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)"
            price={17+","+999}
            
            image="https://m.media-amazon.com/images/I/413u56t+CiL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="164614534"
            title="OnePlus 11 5G (Eternal Green, 8GB RAM, 128GB Storage)"
            price={56+","+999}
            image="https://m.media-amazon.com/images/I/61amb0CfMGL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="16461685"
            title="OnePlus Nord 3 5G (Misty Green, 8GB RAM, 128GB Storage)"
            price={33+","+999}
            image="https://m.media-amazon.com/images/I/61ngnTanGnL._SX679_.jpg"
            rating={3}
          />
          <Product
            id="164614435"
            title="Apple iPhone 14 (128 GB) - Blue"
            price={66+","+999}
            image="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="164611231"
            title=" OnePlus Nord Buds True Wireless in Ear Earbuds with Mic (Black Slate)"
            price={2+","+798}
            image="https://m.media-amazon.com/images/I/514NPRZ1AQL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="164610908"
            title="OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic (Magico Black)"
            price={1+","+598}
            image="https://m.media-amazon.com/images/I/51UhwaQXCpL._SX679_.jpg"
            rating={3}
          />
          <Product
            id="1646121"
            title="BL Flip 5 Wireless Portable Bluetooth Speaker (Without Mic, Blue)"
            price={5+","+997}
            image="https://m.media-amazon.com/images/I/71CC5cSzqoL._SX679_.jpg"
            rating={5}
          />
          <Product
            id="164618643"
            title="boAt Rockerz 450 Bluetooth On Ear Headphones with Mic (Luscious Black)"
            price={1+","+298}
            image="https://m.media-amazon.com/images/I/51xxA+6E+xL._SX679_.jpg"
            rating={3}
          />
          <Product
            id="1646112345"
            title="ASUS RGB Gaming Wired On Ear Headset  ROG Delta   ( White )"
            price={17+","+999}
            image="https://m.media-amazon.com/images/I/51XXYvbE5NL._SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
        <Product
            id="16461345"
            title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)"
            price={74+","+990}
            image="https://m.media-amazon.com/images/I/81wxS8abrgL._SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
