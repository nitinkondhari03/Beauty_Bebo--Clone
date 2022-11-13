import styles from "./table.css"
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";

import About from "../Routes/About"
function Home2(){
    return(
        <div>
             <div id="image3" ><img src="https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg" alt=""/></div>
             <div id="heading">
              <p>HOT DEALS</p>
            
             </div>
    
             <div id="attto">
              <Link to="./about" style={{textDecoration:"none"}}>
                <div id="noasnl"><img id="nort" src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-202.jpg" alt="" />
                 <p id="mjki">Clinic Plus Strong & Long Health Shampoo</p>
                 <div id="rating">***<span>(3)</span></div>
                 <div id="tomar"><h4 id="motive2">₹445.00</h4>
                 <h4 id="tomar3">₹223.00</h4>
                 <h4 id="tomar4">50%off</h4>
                 </div>
                 <div id="btndiv"><button>Add To Cart</button>
                 <span id="heart2">🤍</span>
                 </div>
                </div>
                </Link>
                <Link to="./clinick_plus"style={{textDecoration:"none"}}>
                <div id="noasnl"><img id="nort" src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-202.jpg" alt="" />
                 <p id="mjki">Clinic Plus Strong & Long Health Shampoo - 650ml Each (Pack Of 2)</p>
                 <div id="rating">**<span>(2)</span></div>
                 <div id="tomar"><h4 id="motive2">₹890.00</h4>
                 <h4 id="tomar3">₹445.00 </h4>
                 <h4 id="tomar4">50%off</h4>
                 </div>
                 <div id="btndiv"><button>Add To Cart</button>
                 <span id="heart2">🤍</span>
                 </div>
                </div>
                </Link>
                <Link to="./clinick_plus1"style={{textDecoration:"none"}}>
                <div id="noasnl"><img id="nort" src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_5_2.jpg" alt="" />
                 <p id="mjki">Clinic Plus Strong & Long Health Shampoo 340ml Each - Pack Of 2</p>
                 <div id="rating">***<span>(3)</span></div>
                 <div id="tomar"><h4 id="motive2">₹318.00</h4>
                 <h4 id="tomar3">₹191.00</h4>
                 <h4 id="tomar4">40%off</h4>
                 </div>
                 <div id="btndiv"><button>Add To Cart</button>
                 <span id="heart2">🤍</span>
                 </div>
                </div>
                </Link>
                <Link to="./clinick_plus2"style={{textDecoration:"none"}}>
                <div id="noasnl"><img id="nort" src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/a/aaa_3.jpg" alt="" />
                 <p id="mjki">Gillette Venus Breeze Razor With Avocado Oil</p>
                 <div id="rating">*****<span>(6)</span></div>
                 <div id="tomar"><h4 id="motive2">₹286.00</h4>
                 <h4 id="tomar3">₹325.00</h4>
                 <h4 id="tomar4">12%off</h4>
                 </div>
                 <div id="btndiv"><button>Add To Cart</button>
                 <span id="heart2">🤍</span>
                 </div>
                </div>
                </Link>
             </div>
            <div class="next">
              <div ><img src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif" alt=""/> </div>
              <div ><img src="https://www.beautybebo.com/pub/media/ads/lotus_banner.gif" alt=""/></div>
            </div>
            <div id="sign">
        <div id="maion" ><img src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png" alt=""/>
            <p class="signC" >Makeup</p>
        </div>
        <div ><img src="https://www.beautybebo.com/pub/media/catalog/category/skin.png" alt=""/>
            <p class="signC">Skin</p>
        </div>
        <div ><img src="https://www.beautybebo.com/pub/media/catalog/category/hair.png" alt=""/>
            <p class="signC">Hair</p>
        </div>
        <div ><img src="https://www.beautybebo.com/pub/media/catalog/category/personal-care.png"
                alt=""/>
            <p class="signC">PersonalCare</p>
        </div>
        <div ><img src="https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png"
                alt=""/>
            <p class="signC">mom-baby-care</p>
        </div>
        <div ><img src="https://www.beautybebo.com/pub/media/catalog/category/eye_1.png" alt=""/>
            <p class="signC">Hair</p>
        </div>
        <div ><img src="https://www.beautybebo.com/pub/media/catalog/category/fragrance_3.png" alt=""/>
            <p class="signC">Fragrence</p>
        </div>
    </div>
    <div id="attto">
                <div><img src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d28bf778903487024816_1.jpg" alt="" />
                 <p>Miss Claire Blusher Kit - 3660-B-3</p>
                 <div id="rating">***<span>(3)</span></div>
                 <div id="tomar"><h4 id="motive2"></h4>
                 <h4 id="tomar3">₹410.00</h4>
                 <h4 id="tomar4"></h4>
                 </div>
                 <div id="btndiv"><button>Add To Cart</button>
                 <span id="heart2">🤍</span>
                 </div>
                </div>
                <div><img src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/3/7/3732f778903487000209_1.jpg" alt="" />
                 <p>CMiss Claire Eyeshadow Kit - 3716-11-3</p>
                 <div id="rating">**<span>(2)</span></div>
                 <div id="tomar"><h4 id="motive2"></h4>
                 <h4 id="tomar3">₹395.00</h4>
                 <h4 id="tomar4"></h4>
                 </div>
                 <div id="btndiv"><button>Add To Cart</button>
                 <span id="heart2">🤍</span>
                 </div>
                </div>
                <div><img src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/d/bdd30238903487002319_1.jpg" alt="" />
                 <p>Miss Claire M20 - Pointed Blending Brush (L)</p>
                 <div id="rating">***<span>(3)</span></div>
                 <div id="tomar"><h4 id="motive2"></h4>
                 <h4 id="tomar3">₹375.00</h4>
                 <h4 id="tomar4"></h4>
                 </div>
                 <div id="btndiv"><button>Add To Cart</button>
                 <span id="heart2">🤍</span>
                 </div>
                </div>
                <div><img src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/1/610f0238903487002296_1.jpg" alt="" />
                 <p>Miss Claire M19 - Eyeshadow Blending Brush</p>
                 <div id="rating">**<span>(2)</span></div>
                 <div id="tomar"><h4 id="motive2"></h4>
                 <h4 id="tomar3">₹375.00</h4>
                 <h4 id="tomar4"></h4>
                 </div>
                 <div id="btndiv"><button>Add To Cart</button>
                 <span id="heart2">🤍</span>
                 </div>
                </div>
             </div>
             <div id="image4" ><img src="https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg" alt=""/></div>
        </div>
    )
}
export default Home2