import React from 'react';
import tom from './tom.jpg'
import sourdough from './sourdough.jpg'

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
                        <img src={sourdough} className="Sourdough-Picture"/>
                        </td>
                        <td className="Bio-Para">
                            <p className="Bio-Text">    This unsightly jar has been the home to a culture of lactobacilli and yeast, otherwise known as sourdough starter, for over 3 years now.
                                   All you need to do is regularly top it up with fresh flour and water, whilst letting mother nature handle the rest.</p>
                            <p className="Bio-Text">    Sourdough starter can be used as a replacement for packaged yeast in most recipes including crumpets, american pancakes and doughnuts.
                                   Sourdough bread has a unique tang/funk, due to the fermentation in the starter, which gives it a unique flavour of its own (unlike your average sandwich loaf)
                                   As well as the flavour, sourdough breads last longer and has <a link="https://www.theguardian.com/lifeandstyle/2013/jun/22/sourdough-bread-good-for-you">additional health benefits.</a>
                            </p>
                        </td>
                    </tr>
                </table>
                <p></p>
                <hr></hr>
                <p></p>
                <table>
                    <tr>
                        <td className="Bio-Para">
                            <p className="Bio-Text">!Replace this image with bread box! ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~</p>
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