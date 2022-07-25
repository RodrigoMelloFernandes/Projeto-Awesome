import { FaPhone, FaRegEnvelope, FaMapMarkerAlt,  FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

function ContactAwesome () {
    return (
        <footer>
            <h2>contact <span>awesome</span></h2>

            <h3>name</h3>
            <input type="text" />

            <h3>email</h3>
            <input type="text" />

            <h3>message</h3>
            <input type="text" />

            <button>Enviar</button>

            <h2>our adress</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>

            <div>
                <FaPhone/>
            </div>
            <p>010-020-0340</p>
            <div>
                <FaRegEnvelope/>
            </div>
            <p>awesome@company.com</p>
            <div>
                <FaMapMarkerAlt />
            </div>
            <p>663 New Walk Roadside, Birdeye View, GO 11020</p>

            <hr />

            <h3>we are social</h3>

            <div><FaFacebookF/></div>
            <div><FaTwitter/></div>
            <div><FaInstagram/></div>
            
            <p>Copyright © 2084 Company Name</p>  
                


        </footer>
    )
}

export default ContactAwesome