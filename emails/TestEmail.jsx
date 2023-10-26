import React, { useEffect, useState} from 'react';
import EmailRender from "./components/RenewButton";
import ReactDOM from "react-dom";
import PromoSection from './promotion/PromoSection';
import MemeKingSection from './meme-king/MemeKingSection';
import RenewButton from "./components/RenewButton"
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

function TestEmail() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Company Name</title>
      <style media="all" type="text/css" dangerouslySetInnerHTML={{__html: "\n    @media screen and (max-width: 479px) {\n\n      html,\n      body {\n        overflow-x: hidden;\n      }\n\n      body {\n        width: 100%;\n        position: relative;\n      }\n\n      /* table {\n        width: 80% !important;\n        display: contents;\n      } */\n\n      a {\n        width: 80%;\n        padding: 10px 25vw;\n      }\n\n      table h1 {\n        font-size: 24px !important;\n      }\n\n      table h2 {\n        font-size: 20px !important;\n      }\n\n      table h3 {\n        font-size: 14px !important;\n      }\n\n      p {\n        font-size: 20px !important;\n        margin: 0px 40px;\n        padding-bottom: 25px;\n      }\n\n      div[id=\"render\"] {\n        margin: 0 8vw 0 8vw !important;\n      }\n\n .meme-king-title{\nfont-size: 18px !important;}     div.meme-king table {\n        display: block;\n        height: 270px !important;\n        margin: 0 3% 0 3%;\n      }\n\n      div.meme-king p{\n        margin: 12px 10px !important;\n        padding: 0 !important;\n        text-align: center;\n        overflow-y: scroll;\n        height: 120px !important;\n        overflow-wrap: break-word;\n      }\n\n      div.meme-king p::-webkit-scrollbar {\n        display: none;\n      }\n\n      div.meme-king h1 {\n        word-wrap: break-word;\n      }\n\n      \n\n\n      .grid {\n        display: block;\n margin: 0 auto;\n width: 80%;       }\n    }\n\n    @media screen and (max-width: 640px) and (min-width: 480px) {\n\n      table[id=\"main-app\"] {\n        display: block;\n        width: 80vw !important;\n        margin: auto;\n      }\n\n      a {\n        width: 80%;\n        padding: 10px 20vw;\n      }\n\n      table h1 {\n        font-size: 22px !important;\n      }\n\n      table h2 {\n        font-size: 18px !important;\n      }\n\n      table h3 {\n        font-size: 12px !important;\n      }\n\n      p {\n        font-size: 18px !important;\n        margin: 0px 40px;\n        padding-bottom: 25px;\n      }\n\n      div[id=\"render\"] {\n        margin: 0 8vw 0 8vw !important;\n      }\n\n  .meme-king-title{\nfont-size: 18px !important;}    div.meme-king table {\n        display: inline-block;\n        height: 210px !important;\n        margin: 2% 3% auto !important;\n     }\n\n      div.meme-king p{\n        margin: 12px 15px !important;\n        padding: 0 !important;\n        text-align: center;\n      }\n\n      .promo-title {\n        padding: 10px 0 10px 0 !important;\n      }\n\n      .grid {\n     display: block;\n margin: 0 auto;\n width: 80%;     }\n    }\n\n    @media screen and (min-width: 641px) and (max-width: 820px) {\n      table {\n        display: block;\n      }\n\n      table[id=\"main-app\"] {\n        display: block;\n        width: 80vw !important;\n        margin: auto;\n      }\n\n      a {\n        padding: 10px 15vw;\n        font-size: 16px !important;\n      }\n\n      table h1 {\n        font-size: 20px !important;\n      }\n\n      table h2 {\n        font-size: 16px !important;\n      }\n\n      table h3 {\n        font-size: 10px !important;\n      }\n\n      p {\n        font-size: 16px !important;\n        margin: 0px 40px;\n        padding-bottom: 25px;\n      }\n\n      div[id=\"render\"] {\n        margin: 0 8vw 0 8vw !important;\n      }\n\n  .meme-king-title{\nfont-size: 18px !important;}    div.meme-king table {\n        height: 180px !important;\n        margin: 0 10% 0 10%;\n      }\n\n           div.meme-king p{\n        margin: 15px 20px !important;\n        padding: 0 !important;\n        text-align: center;\n      }\n\n      div.grid table {\n        height: 250px;\n      }\n\n      .promo-img {\n        height: 250px !important;\n      }\n\n      .grid {\n    display: block;\n margin: 0 auto;\n width: 80%;       }\n\n      .promo-title {\n        padding: 10px 0 10px 0 !important;\n      }\n\n    }\n\n    @media screen and (min-width: 821px) {\n      table {\n        display: block;\n      }\n\n      table[id=\"main-app\"] {\n        display: block;\n        width: 80vw !important;\n        margin: auto;\n      }\n\n      a {\n        padding: 10px 15vw;\n        font-size: 16px !important;\n      }\n\n      table h1 {\n        font-size: 20px !important;\n      }\n\n      table h2 {\n        font-size: 16px !important;\n      }\n\n      table h3 {\n        font-size: 10px !important;\n      }\n\n      p {\n        font-size: 16px !important;\n        margin: 0px 40px;\n        padding-bottom: 25px;\n      }\n\n      div[id=\"render\"] {\n        margin: 0 8vw 0 8vw !important;\n      }\n\n      div.meme-king table {\n        height: 150px !important;\n        margin: 0 10% 0 10%;\n      }\n\n      div.grid table {\n        height: 250px;\n      }\n\n      div.meme-king p{\n        margin: 15px 25px !important;\n        padding: 0 !important;\n        text-align: center;\n      }\n\n      .promo-img {\n        height: 250px !important;\n      }\n\n      .grid {\n        display: block;\n         max-width: 80%;\n margin: 0 auto;\n    }\n\n      .promo-title {\n        padding: 10px 0 10px 0 !important;\n      }\n    }\n  " }} />
      <table id="main-app" border={0} cellSpacing={0} cellPadding={0} bgcolor="white">
        <tbody><tr>
            <td>
              <table border={0} cellSpacing={0} cellPadding={0} style={{color: '#0f3462', fontFamily: 'sans-serif'}}>
                <tbody><tr>
                    <td>
                      <h2 style={{textAlign: 'center', margin: '0px', paddingBottom: '25px', marginTop: '25px'}}>
                        <i>Daily</i><span style={{color: 'lightcoral'}}>MemeS</span></h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img 
                        src="https://image.spreadshirtmedia.com/image-server/v1/compositions/T127A1PA4192PT21X6Y13D1010388313W2105H689/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/meme-box-logo-small-buttons.jpg" 
                        height="90px" style={{display: 'block', margin: 'auto', paddingBottom: '25px', width: '50%', objectFit: 'cover'}} />
                    </td>
                  </tr>
                  <tr>
                    <td style={{textAlign: 'center'}}>
                      <h1 style={{margin: '0px', paddingBottom: '25px', textTransform: 'uppercase'}}>monthly reminder</h1>
                      <h2 style={{margin: '0px', paddingBottom: '25px', fontSize: '22px'}}> Please renew your subscription</h2>
                      <p> Your meme subscription is ending. Not good. You will be notified when the subscription expires. </p>
                      <p>
                        
                        To renew your subscription please click the link at the bottom and enter your name, credit card number,
                        expiration date, cvv, your address, what you ate today,
                        how many memes you've watched for past 10 days
                      </p>
                      <h2 style={{margin: '0px', paddingBottom: '25px'}}>Expire: 03 November</h2>
                    </td>
                  </tr>
                  <tr>
                    <td style={{textAlign: 'center'}}>
                      <h1 style={{margin: '0px', paddingBottom: '25px', paddingTop: '15px', textTransform: 'uppercase', textWrap: "balance"}}>
                        We are constantly expanding. Currently we have over 2 billion subscribers
                      </h1>
                      <h2 style={{margin: '0px', paddingBottom: '25px', fontSize: '22px', width: "80%", margin: "auto"}}> The meme crew also looking for a person
                        willing to take position of Meme King</h2>
                      <p>
                        To be Meme King you must:
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="meme-king grid" id="meme-king-section">
                        <MemeKingSection />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h1 style={{margin: '0px', paddingBottom: '25px', paddingTop: '15px', textAlign: 'center'}}>
                        In the meantime, here are some memes you might like:
                      </h1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="grid" id="promotion-section">
                        <PromoSection />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{textAlign: 'center', margintop: '10px', display: 'block'}}>
                      <div id="render"  style={{display: "inline-block", textAlign: 'center'}}>
                        <RenewButton />
                      </div>
                      <h2 style={{paddingTop: '25px', lineHeight: 1, margin: '0px', textAlign: "center"}}>
                        <a href="https://youtu.be/dBLxroL78RQ?si=pg6VbA7-WRXyQnyR" style={{textDecoration: 'none', padding: 0}}>Need Help?</a>
                      </h2>
                      <div style={{marginBottom: '25px', fontSize: '15px', marginTop: '7px'}}>
                      </div>
                    </td>
                  </tr>
                </tbody></table>
            </td>
          </tr>
        </tbody></table>
    </div>
  )
}

export default TestEmail;
