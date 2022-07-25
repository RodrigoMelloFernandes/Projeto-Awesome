import teamimg1 from '../../Images/team-img1.jpg'
import teamimg2 from '../../Images/team-img2.jpg'
import teamimg3 from '../../Images/team-img3.jpg'
import teamimg4 from '../../Images/team-img4.jpg'

function AwesomeTeam () {
    return(
        <section>
            <h2><span>awesome</span> team</h2>
            <img src={teamimg1} alt="teamimg1" />
            <h2>tracy</h2>
            <h3>Designer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
            <img src={teamimg2} alt="teamimg2" />
            <h2>mary</h2>
            <h3>Developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
            <img src={teamimg3} alt="teamimg3" />
            <h2>julia</h2>
            <h3>Director</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
            <img src={teamimg4} alt="teamimg4" />
            <h2>linda</h2>
            <h3>Manager</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
        </section>
    )
}

export default AwesomeTeam