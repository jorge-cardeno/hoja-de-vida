import { FaReact, FaWordpress, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { KnowledgeCard } from './KnowledgeCard';

export const KnowledgeCardGrid = () => {
  return (
    <section>
        <div className="grid grid-cols-3 gap-4 mt-10">
            <KnowledgeCard
                icon={<FaHtml5/>}
                title="HTML"
                paragraph="Strong experience in HTML. Capable of developing semantic
                and accessible web structures and content"/>
            <KnowledgeCard
                icon={<FaCss3Alt/>}
                title="CSS"
                paragraph="Extensive experience in CSS for website design, creating
                attractive and responsive interfaces"/>
            <KnowledgeCard
                icon={<FaNodeJs/>}
                title="JavaScript"
                paragraph="Broad knowledge of JavaScript. Able to create interactive
                and dynamic applications."/>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
            <KnowledgeCard
                icon={<FaReact/>}
                title="React"
                paragraph="Experience creating modern and interactive interfaces,
                leveraging the advantages of React to enhance the user experience"/>
            <KnowledgeCard
                icon={<FaWordpress/>}
                title="WordPress"
                paragraph="Extensive experience in WordPress. Capable of developing attractive
                and functional websites, customizing themes, and managing content"/>
            <KnowledgeCard
                icon={<FaGitAlt/>}
                title="Git"
                paragraph="Proficient in Git. Able to track changes, manage branches, and collaborate
                effectively in development teams using Git."/>
        </div>
    </section>
  )
}
