
import Slider from "../Sliders/Slider"
import styles from "./table.css"
function Home (){
    return (
        <div id="div">
        <div>
            <div id="collab"><img
                    src="https://th.bing.com/th/id/OIP.iqNs1IG90Ed_38iEVPyWHAHaE8?w=254&h=180&c=7&r=0&o=5&pid=1.7"
                    alt=""/>
                <h4>ALL CATEGORIES</h4>
            </div>
            <div class="akash">
                <div class="akash2"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png"
                        alt=""/>
                    <p>Makeup</p>
                </div>
                <h2></h2>
            </div>

            <div class="akash">
                <div class="akash2"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png"
                        alt=""/>
                    <p>Skin</p>
                </div>
                <h2 class="b"></h2>
            </div>
            <div class="akash">
                <div class="akash2"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png"
                        alt=""/>
                    <p>Hair</p>
                </div>
                <h2 class="b"></h2>
            </div>
            <div class="akash">
                <div class="akash2"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png"
                        alt=""/>
                    <p>PersonalCare</p>
                </div>
                <h2 class="b"></h2>
            </div>
            <div class="akash">
                <div class="akash2"> <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png"
                        alt=""/>
                    <p>mom&BabyCare</p>
                </div>
                <h2 class="b"></h2>
            </div>
            <div class="akash">
                <div class="akash2"> <img src="https://www.beautybebo.com/pub/media/fragrance.png"
                        alt=""/>
                    <p>Fragrance</p>
                </div>
                <h2 class="b"></h2>
            </div>
            <div class="akash">
                <div class="akash2"> <img src="https://www.beautybebo.com/pub/media/ayurveda.png"
                        alt=""/>
                    <p>Ayurveda</p>
                </div>
                <h2 class="b"></h2>
            </div>
            

        </div>

        <div>
            <div id="slide">

                <div onclick="mySum()">
                    <Slider/>
                </div>

            </div>
        </div>
    
    </div>

    )
}
export default Home

