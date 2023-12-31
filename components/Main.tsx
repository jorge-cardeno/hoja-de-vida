import {
    BannerProfile,
    EducationGrid,
    Footer,
    IntroductorySection,
    KnowledgeCardGrid,
    PortfolioGrid,
  } from '@/components';

export const Main = () => {
  return (
    <div>
        {/* Contenido de la columna central */}
        <BannerProfile/>
        <IntroductorySection title="My Knowledge" paragraph="I stand out for my ability to work in a team,
                    make effective decisions,
                    and maintain a proactive attitude in software development environments.
                    My skill set encompasses key technologies such as HTML5, CSS3, Bootstrap 4,
                    WordPress, JavaScript (React, Vue), Node, Meteor, API REST, Git, and MongoDB.
                    I have the ability to work under methodologies like SCRUM and Kanban.F"/>
        <KnowledgeCardGrid/>
        <IntroductorySection title="Education" paragraph="My academic background is a fundamental pillar
                    in my professional development. Over the years, I have dedicated time and effort to obtain
                    a solid educational foundation that supports my experience in web development"/>
        <EducationGrid/>
        <IntroductorySection
          title="Portfolio"
          paragraph="Welcome to my portfolio! I'm passionate about web development with extensive experience
          in creating attractive and functional websites. In this space, I will share a selection of my most
          prominent projects, where you can explore my skills!"/>
        <PortfolioGrid/>
        <Footer/>
    </div>
  )
}
