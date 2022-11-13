import styles from "./About.css"
function Clinick_plus2() {
    return (
      <div>
        <div id="container">
        <div id="image">
           <img src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/a/aaa_3.jpg" alt="" />
        </div>
        <div id="info">
            <div>
                <h3 id="title_box">
                    <span id="title">Gillette Venus Breeze Razor With Avocado Oil</span>
                </h3>
                <span id="weight"></span>
                <div class="stock available" title="Availability">
                    <strong><i class="fa-solid fa-star star"></i>*</strong>
                    <strong><i class="fa-solid fa-star star"></i>*</strong>
                    <strong><i class="fa-solid fa-star star"></i>*</strong>
                    <strong><i class="fa-solid fa-star star"></i>*</strong>
                    <strong><i class="fa-solid fa-star star_black"></i>*</strong>
                    <h3>1 Review | Add Your Review</h3>
                </div>
                <div id="in_stock">
                    <div><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGqVzK-FgzePdaWYNsSkbPBvzkGDQqlXK-w&usqp=CAU"
                            alt=""/></div><span>In stock</span>
                </div>
                <div id="id_box">
                    <span id="SKU">SKU BBJ0003219</span>
                    <div id="id"></div>
                </div>

                <div class="price-box price-final_price">

                    <strike id="old_price">₹286.00</strike>
                    <span id="new_price">12% off</span>
                    <span>
                        <b id="discount">₹325.00 </b>
                    </span>
                </div>
                <p>(Inclusive of all taxes)</p>

                <div id="brand_box">
                    <span>Brand:Clinic Plus</span>
                    <p id="brandA"></p>
                </div>
                <div id="cart">
                    <p>Qty</p>
                    <select name="" id="Qty">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <button id="DTC">
                        <div ><img src="./cart-38-24.png" alt=""/></div><span id="ADDTOACART">Add To Cart</span>
                    </button>
                    <a href="" id="wishlist"><i class="fa-solid fa-heart"></i></a>
                </div>
                <div id="check_address">
                    <p>Check Delivery</p>
                    <input type="text" id="address" placeholder="Zipcode"></input>
                    <button id="check">Check</button>
                </div>
                <div id="policy">
                    <div>
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/genuine_product.png" alt=""/>
                        <p>100% GENUINE PRODUCT</p>
                    </div>
                    <div>
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/return_product.png" alt=""/>
                        <p>EASY RETURN POLICY</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="Detail">
        <div id="container1">
            <h4>Detail</h4>
            <p>This Strong & Long Health Shampoo from Clinic Plus contains milk protein and lysine for healthy, shining hair. This shampoo can be used by the whole family and is suitable for all hair types. It nourishes your hair and cleanses your scalp to prevent oil build up- so you can definitely use it daily! Team this up with a suitable Clinic Plus conditioner and hair oil for best results. Buy this shampoo right here.</p>
            <b class="namlk">Ingredients :</b><p>Sodium Laureth Sulphate, Silicone, Milk Protein, Lysine</p>
            <b class="namlk">MRP:890</b><br /><br />
            <b class="namlk">About  us</b><p> Launched in 1988, Clinic Plus is India's largest shampoo brand. With product upgradation from time to time, Clinic Plus retains its premier status with strong loyalty among consumers. HLL is the clear market leader in India's shampoo category with over 50% market share.</p><br />
            <b class="namlk">Origin:MadeInIndia</b>
            <br />
            <b class="namlk">NameofMfg/Importer/Brand:HindustanUnileverLtd</b><br />
            <b class="namlk">AddressofMfg/Importer/Brand:</b><p>Hindustan Unilever Ltd, Unilever House, B D Sawant Marg, Chakala Andheri East - 400099</p>
        </div>
       
    </div>
      </div>
    );
  }
  
  export default Clinick_plus2;
  