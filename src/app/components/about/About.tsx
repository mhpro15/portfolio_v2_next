import StackIcon from "tech-stack-icons";
import { TbHandFingerDown } from "react-icons/tb";
export const About = () => {
  return (
    <div className="p-5 mb-20 xl:text-lg text-[1rem] max-w-[800px] mx-auto">
      <p className="text-text-white mt-5">
        I am a software developer with a passion for building products that
        people love. I have experience in full-stack development, and I am not
        tied to any particular technology. I am always eager to learn new things
        and work with new technologies. This website was built as my practice
        with Next.js and custom component, hooks usage etc. Check out my tech
        stack below.
      </p>

      <div className="mt-5 flex flex-row gap-5 justify-between">
        <p className="font-bold">Frameworks</p>
        <div className="flex flex-wrap">
          <StackIcon name="reactjs" className="w-[3rem] mr-2" />
          <StackIcon
            name="nextjs"
            className="w-[3rem] bg-white px-1 mr-2 rounded-full p-1"
          />
          <StackIcon name="angular" className="w-[3rem] mr-2" />
          <StackIcon
            name="spring"
            className="w-[3rem] bg-white rounded-full p-1"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-row gap-5 justify-between ">
        <p className="font-bold">Database</p>
        <div className="flex flex-wrap">
          <StackIcon name="mongodb" className="w-[3rem] mr-2" />
          <StackIcon
            name="mysql"
            className="w-[3rem] mr-2 bg-white rounded-full p-2"
          />
          <StackIcon name="postgresql" className="w-[3rem] mr-2" />
          <StackIcon name="oracle" className="w-[3rem]" />
        </div>
      </div>

      <div className="mt-10 flex flex-row gap-5 justify-between">
        <p className="font-bold">Tools</p>
        <div className="flex flex-wrap">
          <StackIcon name="git" className="w-[3rem] mr-2" />
          <StackIcon
            name="github"
            className="w-[3rem] mr-2 bg-white rounded-full p-1"
          />
          <StackIcon name="docker" className="w-[3rem] mr-2" />
          <StackIcon name="npm" className="w-[3rem] mr-2" />
        </div>
      </div>

      <div className="mt-10 flex flex-row gap-5 justify-between">
        <p className="font-bold">Cloud</p>
        <div className="flex flex-wrap">
          <StackIcon
            name="aws"
            className="w-[3rem] mr-2 bg-white rounded-full p-1"
          />
          <StackIcon name="azure" className="w-[3rem] mr-2" />
        </div>
      </div>

      <div className="mt-10 flex flex-row gap-5 justify-between">
        <p className="font-bold">Programming Languages</p>
        <div className="flex flex-wrap">
          <StackIcon name="js" className="w-[3rem] mr-2" />
          <StackIcon name="typescript" className="w-[3rem] mr-2" />
          <StackIcon
            name="java"
            className="w-[3rem] mr-2 bg-white rounded-full p-1"
          />
          <StackIcon name="python" className="w-[3rem] mr-2" />
          <StackIcon name="csharp" className="w-[3rem] mr-2" />
        </div>
      </div>

      <p className="mt-20 text-center">
        Don&rsquo;t forget to check out my playlist below
      </p>
      <div className="mx-auto w-1">
        <TbHandFingerDown />
      </div>
    </div>
  );
};
