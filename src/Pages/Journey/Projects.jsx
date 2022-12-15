import React from 'react'
import styles from './journey.module.css'

const Projects = () => {
  return (
    <section className={styles.projectSection}>
        <div className={styles.container}>
            <div className={styles.projectSectionHead}>Projects</div>
       
        <div className={styles.projectsGridLayout}>

            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-back" className={styles.projectCard}>
                <div className={styles.projectName}>ALTRU FUNDS</div>
                {/* <div className={styles.stack}> REACT JS, NODE JS </div> */}
                <div className={styles.projectDescription}>A fundraising solution built to help people with financial needs create and monitor campaigns with payment integration. </div>
                <div className={styles.teamName}> Built by Team Hobbes</div>
                <div className={styles.projectLinkWrapper} ><a className={styles.projectLink} href="https://feministco2020.netlify.app/" target="blank">View Project</a></div>

            </div>


            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-back" className={styles.projectCard}>
            {/* <div className={styles.stack}> REACT JS, NODE JS </div> */}
            <div className={styles.projectName}>SayIT</div>
            <div className={styles.projectDescription}>A platform that helps citizens to make anonymous reports about corruption and misappropriation of funds in their society and work places.</div>
            <div className={styles.teamName}> Built by Tech Stars</div>
            <div className={styles.projectLinkWrapper} ><a className={styles.projectLink} href="https://feministco2020.netlify.app/" target="blank">View Project</a></div>
            </div>


            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-back"  className={styles.projectCard}>
            {/* <div className={styles.stack}> REACT JS, NODE JS </div> */}
            <div className={styles.projectName}>SetterAPP</div>
            <div className={styles.projectDecription}> An Ad-tech solution that helps small and medium scale enterprises to manage multiple social media accounts.</div>
            <div className={styles.teamName}> Built by Pace Setters</div>
            <div className={styles.projectLinkWrapper} ><a className={styles.projectLink} href="https://setterapp.vercel.app/" target="blank">View Project</a></div>
            </div>


            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-back" className={styles.projectCard}>
            {/* <div className={styles.stack}> REACT JS, NODE JS </div> */}
            <div className={styles.projectName}>Tiide HR</div>
            <div className={styles.projectDescription}> An employee management system that helps small and medium scale enterprises to streamlines administrative activities with a secure database.</div>
            <div className={styles.teamName}> Built by Team High Tiide</div>
            <div className={styles.projectLinkWrapper} ><a className={styles.projectLink} href="https://tiidehr.netlify.app/" target="blank">View Project</a></div>
            </div>


            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-back" className={styles.projectCard}>
            {/* <div className={styles.stack}> REACT JS, NODE JS </div> */}
            <div className={styles.projectName}>Code Ask</div>
            <div className={styles.projectDescription}>💡 A Questions and Answer platform that allows software developers to find answers to their coding related problems with StackOverflow integration.</div>
            <div className={styles.teamName}> Built by Data Pirates</div>
            <div className={styles.projectLinkWrapper} ><a className={styles.projectLink} href="https://feministco2020.netlify.app/" target="blank">View Project</a></div>
            </div>


            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-back" className={styles.projectCard}>
            {/* <div className={styles.stack}> REACT JS, NODE JS </div> */}
            <div className={styles.projectName}>Agro Ease</div>
            <div className={styles.projectDescription}> 🥦 An Agri-tech e-commerce platform built for farmers that incorporates functionalties such as referrals and revenue sharing.</div>
            <div className={styles.teamName}> Built by Alpha Devs</div>
            <div className={styles.projectLinkWrapper} ><a className={styles.projectLink} href="https://feministco2020.netlify.app/" target="blank">View Project</a></div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Projects