import PrimaryButton from "../buttons/primaryButton";

const NewsLetter = () => {
  return (
    <div className="flex items-center w-full">
      <div className="flex-col flexBetween xl:flex-row max-w-[1120px] gap-y-5 gap-x-[67px] border-b border-gray/20 py-10 mx-auto">
        <p className="text-4xl font-semibold sm:text-6xl font-nunito whitespace-nowrap">
          Subscribe To Our Newsletter
        </p>
        <div className="flex-col w-full sm:flex-row gap-y-3 flexCenter">
          <input
            className="sm:w-[440px] w-[280px] h-10 px-4 border border-gray/20 rounded-lg sm:rounded-l-lg xs:rounded-r-none placeholder-gray/50 focus:outline-none focus:ring-customGreen/50 focus:border-customGreen/50"
            placeholder="Enter your email address here"
            type="text"
            name="search"
          />
          <PrimaryButton style="sm:-translate-x-1" text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
