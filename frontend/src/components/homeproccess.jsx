import React from 'react'
import styles from './homeproccess.module.css';
import hourglass from "/hourglassicon.svg"
import statistics from "/statisticsicon.svg"
import statistics2 from "/statistics2.svg"
import world from "/worldicon.svg"


function homeproccess() {
    return (
        <div className={`${styles.homeproccess}`}>
            <div className={`${styles.homeproccesscontent}`}>
                <div className={`${styles.homeproccesscontent1}`}>
                    <div className={`${styles.homeproccesscontent1title}`}>PROCCESS</div>
                    <div className={`${styles.homeproccesscontenth1}`}>There have some easy steps to join with us!</div>
                    <div className={`${styles.homeproccesscontent2h3}`}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                    </div>

                    <div className={`${styles.homeproccesscontent1content}`}>
                        <div className={`${styles.homeproccesscontent1contenticon1}`}>1
                        </div>
                        <div className={`${styles.homeproccesscontent1contenttextarea}`}>
                            <div className={`${styles.homeproccesscontent1contenttextareah3}`}>Setup Account</div>
                            <div className={`${styles.homeproccesscontent1contenttextareah4}`}>We understand the importance of approaching each work integrally.</div>
                        </div>
                    </div>

                    <div className={`${styles.homeproccesscontent1content}`}>
                        <div className={`${styles.homeproccesscontent1contenticon2}`}>2
                        </div>
                        <div className={`${styles.homeproccesscontent1contenttextarea}`}>
                            <div className={`${styles.homeproccesscontent1contenttextareah3}`}>Consult with us</div>
                            <div className={`${styles.homeproccesscontent1contenttextareah4}`}>Increase social reach and productivity with our App Directory, a collection.</div>
                        </div>
                    </div>

                    <div className={`${styles.homeproccesscontent1content}`}>
                        <div className={`${styles.homeproccesscontent1contenticon3}`}>3
                        </div>
                        <div className={`${styles.homeproccesscontent1contenttextarea}`}>
                            <div className={`${styles.homeproccesscontent1contenttextareah3}`}>Payment & Boost</div>
                            <div className={`${styles.homeproccesscontent1contenttextareah4}`}>We encourage every team member to be a whole person. We have a flexible.</div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.homeproccesscontent2}`}>
                    <div className={`${styles.homeproccesscontent2title}`}>Growing with our clients</div>
                    <div className={`${styles.homeproccesscontenth1}`}>30 Years of Experience</div>
                    <div className={`${styles.homeproccesscontenth3}`}>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.
                        <br />Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</div>
                        <div className={`${styles.homeproccesscontent2banners}`}>
                            <div className={`${styles.homeproccesscontent2banner}`}>
                              <div className={`${styles.homeproccesscontent2bannerscontent}`}>
                                <img src={hourglass} />
                                <div className={`${styles.homeproccesscontent2bannerscontenth1}`}>Consistency</div>
                                <div className={`${styles.homeproccesscontent2bannerscontenth2}`}>Podcasting operational change management  workflow.</div>
                              </div>
                            </div>
                            <div className={`${styles.homeproccesscontent2banner}`}>
                              <div className={`${styles.homeproccesscontent2bannerscontent}`}>
                                <img src={statistics} />
                                <div className={`${styles.homeproccesscontent2bannerscontenth1}`}>Improvement</div>
                                <div className={`${styles.homeproccesscontent2bannerscontenth2}`}>Podcasting operational change management  workflow.</div>
                              </div>
                            </div>
                        </div>
                        <div className={`${styles.homeproccesscontent2banners}`}>
                            <div className={`${styles.homeproccesscontent2banner}`}>
                              <div className={`${styles.homeproccesscontent2bannerscontent}`}>
                                <img src={world} />
                                <div className={`${styles.homeproccesscontent2bannerscontenth1}`}>Branching</div>
                                <div className={`${styles.homeproccesscontent2bannerscontenth2}`}>Podcasting operational change management  workflow.</div>
                              </div>
                            </div>
                            <div className={`${styles.homeproccesscontent2banner}`}>
                              <div className={`${styles.homeproccesscontent2bannerscontent}`}>
                                <img src={statistics2} />
                                <div className={`${styles.homeproccesscontent2bannerscontenth1}`}>Company Growth</div>
                                <div className={`${styles.homeproccesscontent2bannerscontenth2}`}>Podcasting operational change management  workflow.</div>
                              </div>
                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
    )
}
export default homeproccess
