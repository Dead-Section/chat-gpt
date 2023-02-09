import React from 'react'
import People from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css';

const text = "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."


const Header = () => {
return (
<div className="gpt3__header section__padding" id="home">
  <div className="gpt3__header-content">
    <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
    <p>{text}</p>


    <div className="gpt3__header-content__input">
      <input type="email" placeholder="Your Email Address" />
      <button typ2="button">Get Started</button>
    </div>

    <div className="gpt3__header-content__people">
      <img src={People} />
      <p>1,600 people requested access a visit in last 24 hours</p>
    </div>

    <div className="gpt3__header-image">
    <img src={ai} />
    </div>
  </div>
</div>
)
}

export default Header
