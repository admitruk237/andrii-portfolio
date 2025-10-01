type StackItem = {
  name: string;
};

type Project = {
  num: string;
  title: string;
  categoty: string;
  discription: string;
  stack: StackItem[];
};

type Props = {
  project: Project;
};

export const ProjectInfo = ({ project }: Props) => {
  return (
    <div className="flex flex-col gap-[30px] h-[50%] ">
      <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
        {project.num}
      </div>
      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
        {project.title}
      </h2>
      <p>{project.categoty}</p>
      <p className="text-white/60">{project.discription}</p>
      <ul className="flex gap-4 flex-wrap">
        {project.stack.map((item, index) => (
          <li key={index} className="text-accent">
            {item.name}
            {index !== project.stack.length - 1 ? ',' : '.'}
          </li>
        ))}
      </ul>
      <div className="border border-white/20"></div>
    </div>
  );
};
