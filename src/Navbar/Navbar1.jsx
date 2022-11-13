import { Link } from "react-router-dom"
import style from "./Navbar.css"

function Navbar1 (){
    const handlechanhe=()=>{
        document.getElementById("nabahs").innerHTML="alskdnflkanbk"
    }
    return(
        <div id="logospage">
         <Link to="/"><div>
            <img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"  />
           </div>
           </Link>
           <div id="searchS">
            <div id="AllCat">
                
                <select name="" id="lsdkld">
                    <option value="">All categories</option>
                    <option value="Makeup">--Makeup</option>
                    <option value="">----Face</option>
                    <option value="">Foundation</option>
                    <option value="">Blush</option>
                    <option value="">Highlighters</option>
                    <option value="">Concealer</option>
                    <option value="">Face Primer</option>
                    <option value="">Contour</option>
                    <option value="">Bronzer</option>
                    <option value="">Eye</option>
                    <option value="">Eyeliner</option>
                    <option value="">Mascara</option>
                    <option value="">Kajal</option>
                    <option value="">Eye Primer</option>
                    <option value="">Eye Kit</option>
                    <option value="">Under Eye Concealer</option>
                    <option>----EYE</option>
                    <option>Contact Lenses</option>
                    <option>Eye Kit</option>
                    <option>Eyeliner</option>
<option>Eye Shadow</option>
<option>Eye Primer</option>
<option>Eye-Palettes</option>
<option>Eye Makeup Remover</option>
<option>Eye Brow Enhancers</option>
<option>False Eyelashes</option>
<option>Kajal</option>
<option>Mascara</option>
<option>Under Eye Concealer</option>
                     
                </select>
                
            </div>
            <span id="spanes">|</span>
            <input type="text" id="IPS" placeholder="Enter your search..."/>
            <div id="subS"><button><img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png" alt=""/>
            </button>
            </div>
        </div>
        <div id="wS">
            <div class="whistS"> <img src="https://logodix.com/logo/1332846.png" alt=""/></div>
            <div id="Acc">
                <div id="accu" onClick={handlechanhe}><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QBaCgmJMTArP6E3KYOR6yN7LXXwXqCai5bGQqyCNyLEG_SapYTkGkDTmcVoDZXlQv-o&usqp=CAU"
                        alt=""/></div>
               <Link to="Registeration" style={{textDecoration:"none"}}> <p id="UserName">My Account</p></Link>
            </div>
            
        </div>
        </div>
    )
}
export default Navbar1