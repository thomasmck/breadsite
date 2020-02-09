import React from 'react';
import tom from './tom.jpg'

function About() {
    return (
        <div className="About-Body">
            <h1>About the author</h1>
            <span>
                <table>
                    <tr>
                        <td className="Bio-Para">
                            <p className="Bio-Text"><b>Name: </b>Tom Mckelvey</p>
                            <p className="Bio-Text"><b>Job: </b>Software Engineer</p>
                            <p className="Bio-Text"><b>Description:</b></p>
                            <p className="Bio-Text">I am a keen baker of bread, particular sourdough, 
                                                    who wanted to bring a bit of technology to an otherwise old-fashioned hobby.</p>
                            <p className="Bio-Text">This site serves as a way to track the loafs that I have made and the data behind them.
                            The website is built using React (source code can be found here), with an arduino capturing data and a raspberry pi acting as the webserver.</p>
                        </td>
                        <td>
                        <img src={tom} className="Profile-Picture"/>
                        </td>
                    </tr>
                </table>
                <p></p>
                <hr></hr>
                <p></p>
                <table>
                    <tr>
                        <td>
                        <img src={tom} className="Profile-Picture"/>
                        </td>
                        <td className="Bio-Para">
                            <p>!Replace this image with sourdough!</p>
                        </td>
                    </tr>
                </table>
                <p></p>
                <hr></hr>
                <p></p>
                <table>
                    <tr>
                        <td className="Bio-Para">
                            <p className="Bio-Text">!Replace this image with bread box! ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
                        </td>
                        <td>
                        <img src={tom} className="Profile-Picture"/>
                        </td>
                    </tr>
                </table>
            </span>
        </div>
    )
}

export default About;