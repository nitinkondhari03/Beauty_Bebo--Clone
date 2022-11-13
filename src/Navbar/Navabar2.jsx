import {useState} from 'react';
function Navbar2(){
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering1, setIsHovering1] = useState(false)
    const [isHovering2, setIsHovering2] = useState(false)
    const [isHovering3, setIsHovering3] = useState(false)
    const [isHovering4, setIsHovering4] = useState(false)
    const [isHovering5, setIsHovering5] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };
  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };
  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };
  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };
  

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };
  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };

  const handleMouseOver4 = () => {
    setIsHovering4(true);
  };
  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };
  const handleMouseOver5 = () => {
    setIsHovering5(true);
  };
  const handleMouseOut5 = () => {
    setIsHovering5(false);
  };
    return (
        <div>
    <div id="navbar">
        <div class="option">
           <div id="makeup" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><p>MAKEUP</p></div>
            <div id="skin" onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}><p >SKIN</p></div>
            <div id="hair" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}><p >HAIR</p></div>
            <div id="personal" onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}><p >PERSONAL CARE</p></div>
            <div id="mom" onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4}><p>MOM & BABY CARE</p></div>
            <div id="frag"><p >FRAGRANCE</p></div>
            <div id="aurveda"><p >AYURVEDA</p></div>
            <div id="brand"onMouseOver={handleMouseOver5} onMouseOut={handleMouseOut5}><p >BRAND</p></div>
        </div>
        <div id="cart-div">
            <img src="https://delightful-duckanoo-17fff8.netlify.app/cart-38-24.png" alt=""/>
            <span>My Cart - </span>
            <span id="irfancart"> 00</span>
        </div>
    </div>
    {isHovering &&  <div class='okdfff' >
    <div class="mainface">
<h4>FACE</h4>
<p>BB Cream</p>
<p>Blush</p>
<p>Bronzer</p>
<p>CC Cream</p>
<p>Contour</p>
<p>Concealer</p>
<p>Compact & Powder</p>
<p>Face Primer</p>
<p>Foundation</p>
<p>Highlighters</p>
<p>Loose Powder</p>
<p>Makeup Kits</p>
<p>Makeup Remover</p>
<p>Setting Spray</p>
</div>
<div class="mainface">
<h4>EYE</h4>
<p>Contact Lenses</p>
<p>Eye Kit</p>
<p>Eyeliner</p>
<p>Eye Shadow</p>
<p>Eye Primer</p>
<p>Eye-Palettes</p>
<p>Eye Makeup Remover</p>
<p>Eye Brow Enhancers</p>
<p>False Eyelashes</p>
<p>Kajal</p>
<p>Mascara</p>
<p>Under Eye Concealer</p>
</div>
<div class="mainface">
<h4>LIPS</h4>
<p>Lipstick</p>
<p>Liquid Lipstick</p>
<p>Lip Liner</p>
<p>Lip Gloss</p>
<p>Lip Balm</p>
<p>Lip Crayon</p>
<p>Lip Stain</p>
<p>Lip Plumper</p>
</div>
<div class="mainface">
<h4>NAILS</h4>
<p>Manicure & Pedicure Kits</p>
<p>Nail Polish</p>
<p>Nail Care</p>
<p>Nail Polish Sets</p>
<p>Nail Art Kits</p>
<p>Nail Polish Remover</p>
</div>
<div class="mainface">
<h4>TOOLS BRUSHES</h4>
<p>Blush Brush</p>
<p>Eyelash Curlers</p>
<p>Eye Brush</p>
<p>Face Brush</p>
<p>Lip Brush</p>
<p>Makeup Pouches</p>
<p>Mirrors</p>
<p>Sponges & Applicators</p>
<p>Sharpeners</p>
<p>Tweezers</p>
</div>
   </div>}

   {isHovering1 &&  <div class='okdfff' >
    <div class="mainface">
<h4>EYE CARE</h4>
<p>Dark Circles</p>
<p>Eye Contour Care</p>
<p>Eye Cream</p>
<p>Eye Masks</p>
<p>Eye Serums</p>
<p>Puffiness</p>
<p>Under Eye Creams</p>
<p>Under Eye Wrinkles</p>
</div>
<div class="mainface">
<h4>FACE CARE</h4>
<p>Anti- Ageing Creams</p>
<p>Bleach Creams</p>
<p>Brightening Cream</p>
<p>Face Wash</p>
<p>Facial Wipes</p>
<p>Face Oil</p>
<p>Face Cleansers</p>
<p>Facial Kits</p>
<p>Face Tools</p>
<p>Moisturizer</p>
<p>Mask & Peels</p>
<p>Serum</p>
<p>Toner & Astringents</p>
<p>Cleansing Creams</p>
</div>
<div class="mainface">
<h4>BODY CARE</h4>
<p>All Cream</p>
<p>Body Moisturizers</p>
<p>Body Sun Care</p>
<p>Brightening Lotion</p>
<p>Dark Circles & Wrinkles</p>
<p>Day Cream</p>
<p>Foot Cream</p>
<p>Hair Remover Cream</p>
<p>Hand Creams</p>
<p>Hands & Feet</p>
<p>Kits & Combos</p>
<p>Night Cream</p>
<p>Neck Creams</p>
</div>
   </div>}
   {isHovering2 &&  <div class='okdfff' >
    <div class="mainface">
<h4>HAIR CARE</h4>
<p>Color Protection</p>
<p>Dandruff</p>
<p>Dry Shampoo</p>
<p>Gels & Waxes</p>
<p>Hair Spray</p>
<p>Hair Color/ Dye</p>
<p>Hair Creams & Masks</p> 
<p>Hair Styling</p>
<p>Hairfall & Thinning </p>
<p>Straighteners </p>
</div>
<div class="mainface">
<h4>HAIR LOSS</h4>
<p>Conditioner</p>
<p>Hair Oil</p>
<p>Hair Serum</p>
<p>Hair Growth Solutions</p>
<p>Shampoo</p>
</div>



   </div>}
   {isHovering3 &&  <div class='okdfff' >
    <div class="mainface">
<h4>BATH & BODY</h4>
<p>Body Cleansers</p>
<p>Body Massage Oil</p>
<p>Body Wash</p>
<p>Creams</p>
<p>Essential Oils</p>
<p>Foot Cream</p>
<p>Scrubs & Exfoliants</p>
<p>Ubtan & Face packs</p>
</div>
<div class="mainface">
<h4>BATHING ACCESSORIES</h4>
<p>Bath Brushes</p>
<p>Loofahs</p>
<p>Shower Caps</p>
<p>Sponges</p>
</div>
<div class="mainface">
<h4>BATH & SHOWER</h4>
<p>BATH & SHOWER</p>
<p>Body Soaps</p>
<p>Shower Gel</p>
</div>
   </div>}
   {isHovering4 &&  <div class='okdfff' >
    <div class="mainface">
<h4>FACE</h4>
<p>BB Cream</p>
<p>Blush</p>
<p>Bronzer</p>
<p>CC Cream</p>
<p>Contour</p>
<p>Concealer</p>
<p>Compact & Powder</p>
<p>Face Primer</p>
<p>Foundation</p>
<p>Highlighters</p>
<p>Loose Powder</p>
<p>Makeup Kits</p>
<p>Makeup Remover</p>
<p>Setting Spray</p>
</div>
<div class="mainface">
<h4>EYE</h4>
<p>Contact Lenses</p>
<p>Eye Kit</p>
<p>Eyeliner</p>
<p>Eye Shadow</p>
<p>Eye Primer</p>
<p>Eye-Palettes</p>
<p>Eye Makeup Remover</p>
<p>Eye Brow Enhancers</p>
<p>False Eyelashes</p>
<p>Kajal</p>
<p>Mascara</p>
<p>Under Eye Concealer</p>
</div>
<div class="mainface">
<h4>LIPS</h4>
<p>Lipstick</p>
<p>Liquid Lipstick</p>
<p>Lip Liner</p>
<p>Lip Gloss</p>
<p>Lip Balm</p>
<p>Lip Crayon</p>
<p>Lip Stain</p>
<p>Lip Plumper</p>
</div>
<div class="mainface">
<h4>NAILS</h4>
<p>Manicure & Pedicure Kits</p>
<p>Nail Polish</p>
<p>Nail Care</p>
<p>Nail Polish Sets</p>
<p>Nail Art Kits</p>
<p>Nail Polish Remover</p>
</div>
<div class="mainface">
<h4>TOOLS BRUSHES</h4>
<p>Blush Brush</p>
<p>Eyelash Curlers</p>
<p>Eye Brush</p>
<p>Face Brush</p>
<p>Lip Brush</p>
<p>Makeup Pouches</p>
<p>Mirrors</p>
<p>Sponges & Applicators</p>
<p>Sharpeners</p>
<p>Tweezers</p>
</div>
   </div>}
   {isHovering5 &&  <div id='aklsndlas' >
  <div id='lasklaskndl'>
  <h3>Top Brands</h3>
    <button>View All</button>
  </div> 
  <div id='bjisd'></div>
  <div class='kSAlak'>
    <button>LAKME</button>
    <button>L-OREAL-PARIS</button>
    <button>JOY</button>
    <button>AROMA MAGIC</button>
    <button>LOTUS HERBALS</button>
    <button>BIOTIQUE</button>
  </div>
  <div class='kSAlak' id='njsdn'>
    <button>VLCC</button>
    <button>VEGA</button>
    <button>MAYBELLINE</button>
    <button>MAMAEARTH</button>
    <button>CHICCO</button>
    <button>NEUTROGENA</button>
  </div>
   </div>}
</div>
    )
}
export default Navbar2