import { exp } from "../../../data/exp";

export const Experienece = () => {
  return (
    <div className="p-10  font-lato bg-glass-box rounded-xl mx-3 ">
      <p className="text-header-white text-2xl">Work Experience</p>
      {exp.map((item, index) => (
        <div key={index}>
          <br />
          <br />

          <p className="text-text-white">{item.company}</p>
          <p className="text-header-white mb-2 text-lg">{item.title}</p>
          <ul className="list-disc pl-5">
            {item.description.map((desc, index) => (
              <li key={index} className="text-text-white ">
                {desc}
              </li>
            ))}
          </ul>

          <p className="text-text-white mt-2">{item.duration}</p>
        </div>
      ))}
    </div>
  );
};
