import { FaMobileAlt, FaRegComment, FaHtml5 } from 'react-icons/fa';


function WeAreAwesome () {
    return (
        <section>
            <h2>We are <span>Awesome</span></h2>

            <div>
                <FaMobileAlt/>
            </div>
            <h2>fully responsive</h2>
            <p>Awesome responsive template is provided by <a href="">templatemo</a> website. This is Bootstrap v3.3.2 layout built on HTML5 CSS3. You can use this for any purpose. Please tell your friends about it.</p>

            <div>
                <FaRegComment/>
            </div>
            <h2>free support</h2>
            <p>Credits go to <a href="">Pixabay</a> for homepage image and <a href="">Unsplash</a> for portfolio images. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>

            <div>
                <FaHtml5/>
            </div>
            <h2>HTML5 &amp; CSS3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet.</p>

        </section>
    )
}

export default WeAreAwesome