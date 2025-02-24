
import { useState } from 'react'
import './App.css'

function App() {

const [Num , setNum] = useState(1);
const [Class , setClass] = useState("");
const [Class1 , setClass1] = useState("activBox");
const [Img , setImg] = useState("1");

const plus = ()=>{
  setNum(Num+1)

};
const minus = ()=>{
  setNum(Num-1)
  if (Num<2) {
    setNum(1)
  }
};










  return (
    <>
     <div className="container">
   <nav >
    <img src="/imgs/nikeLogo.svg" alt="" />
<ul className='nav_ul'>
  <li><a href="">Women</a></li>
  <li><a href="">Men</a></li>
  <li><a href="">Kids</a></li>
  <li><a href="">Collections</a></li>
</ul>

   </nav>
   <div className={Class === "" ? "hero" : "hero activeProductOn"} >
<div className="hero_info">
<div className="sidebar">
  <span className='span1'>01</span>
  <span>02</span>
  <span>03</span>
</div>

<div className="title">
  <h1>Nike Air <br /> 
  Max Pre-Day</h1>
  <p>Taking the classic look of heritage Nike Running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.A true nod to the past with a design made from at least 20% recycled material by weight.</p>
<div className="price">
 <div className="prise_button">
  <button onClick={()=>{
    plus()
  }}>+</button>
  <span>{Num} </span>
  <button onClick={()=>{
    minus()
  }}>-</button>
 </div>
  <span>₹{11495.00*Num }</span>
</div>
</div>
{/* 11,495.00 */}
</div>

  <img className='fixed_img' src="/imgs/hero_img.png" alt="" />

<div className="Productappearance">
<i onClick={()=>{
setClass("")
setImg(1)
}} class="fa-solid fa-circle-right"></i>
<div className="ProductImg">
<img src={`/imgs/hero_img${Img}.png`} alt="" />

</div>


</div>

</div>

<section className='activeBox'>
  <div className="section_imgs">
 <div className="section_boxs">
 <div id={Img==1 ? "IdBox":""} onClick={()=>{
  setClass("activeProductOn")
  setImg(1);
 }}  className="section_box">

    <img src="/imgs/hero_img1.png" alt="" />

    </div>
    <div id={Img==2 ? "IdBox":""} onClick={()=>{
      
      setClass("activeProductOn")
      setImg(2);
    }} className="section_box">
    <img src="/imgs/hero_img2.png" alt="" />
    </div>  
    <div id={Img==3 ? "IdBox":""} onClick={()=>{
      setClass("activeProductOn")
      setImg(3);
    }} className="section_box">
    <img src="/imgs/hero_img3.png" alt="" />
    </div>
 </div>
<div className="watchIcon">
  <img src="/imgs/watchIcon.svg" alt="" />
  <span>Watch Video</span>
</div>
  </div>
</section>


     </div>





    </>
  )
}

export default App
