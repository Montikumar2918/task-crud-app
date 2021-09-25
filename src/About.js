import "./About.css"
function About() {
    return (
        <>
         
            <div className="row">
                <div className="img-container">
                <img className="Header-logo" src="/monti.jpg" width="30%" height='30%' alt="Logo" />
                    <h1 className="text-start"  width="33%"  height='33%'  > Monti  Kumar </h1>
            </div>

                <div className="details">
                    <h3 className="text-start">Name: <span className="text-info" style={{ color: 'black' }}>Monti Kumar</span></h3>
                    <h3 className="text-start">Education: <span className="text-info">B-tech (Information Technology)</span></h3>
                    <h3 className="text-start">Current: <span className="text-info">Learning MERN FULL STACK from Guvi</span></h3>

            </div>
        </div>
         </>
        );
 }
  export default About;