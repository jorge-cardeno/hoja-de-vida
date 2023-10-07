interface KnowledgeCardProps {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
}

export const KnowledgeCard = ({title, paragraph, icon}: KnowledgeCardProps) => {
  return (
    <section>
      <div className="grid bg-white rounded-lg p-4 text-center justify-center">
        <div className="text-8xl text-blue-600 mb-2 mx-auto">
          {icon}
        </div>
        <h3 className="text-3xl font-semibold">{title}</h3>
        <p>{paragraph}</p>
      </div>
    </section>
  )
}
