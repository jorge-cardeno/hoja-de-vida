import {
  PersonalData,
  SocialMedia,
  Main
} from '@/components';;

const Index = () => {
  return (
    <div className="flex">
      {/* Columna izquierda */}
      <div className="w-1/4 p-4 grid justify-center">
        <PersonalData />
      </div>

      {/* Columna central */}
      <div className="w-2/3 top-0">
        <Main/>
      </div>

      {/* Columna derecha */}
      <div className="w-1/8 p-20 pl-10">
        <SocialMedia/>
      </div>
    </div>
  )
};

export default Index;