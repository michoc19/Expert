import formateDate from '../../utils/formateDate';

const ExpertAbout = ({FullName,about,qualifications,experiences}) => {
  return (
    <div>
      <div className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
        <h3>About</h3>
        <span className="text-irisBlueColor font-bold text-[24px] leading-9">
          {FullName} (Ali ahmed)
        </span>
      </div>
      <p className="text_para text-[14px] leading-5">
        {about}
      </p>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
        <ul className="pt-4 md:p-5">
                 <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
    <div>
      <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
        {formateDate("12-04-2010")}-{formateDate("12-04-2012")}
      </span>
      <p className="text-[16px] leading-6 font-medium text-textColor">
        PHD in Computer sience.
      </p>
    </div>
    <p className="text-[14px] leading-5 font-medium text-textColor">
      Ensias, Rabat.
    </p>
  </li>
       </ul> 
       <ul className="pt-4 md:p-5">
                 <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
    <div>
      <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
      {formateDate("12-04-2010")}-{formateDate("12-04-2012")}
      </span>
      <p className="text-[16px] leading-6 font-medium text-textColor">
        PHD in Computer sience.
      </p>
    </div>
    <p className="text-[14px] leading-5 font-medium text-textColor">
      Ensias, Rabat.
    </p>
  </li>
       </ul>
      </div>
      <div className="mt-12">
  <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
    Experience
  </h3>
  <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
  <li className="p-4 rounded bg-[#fff9ee]">
      <span className="text-yellowColor text-[15px] leading-6 font-semibold">
        {formateDate("07-04-2010")} - {formateDate("08-13-2014")}
      </span>
      <p className="text-[16px] leading-6 font-medium text-textColor">
        computer scientiste
      </p>
      <p className="text-[14px] leading-5 font-medium text-textColor">
       Oracle,rabat.
      </p>
    </li>
    <li className="p-4 rounded bg-[#fff9ee]">
      <span className="text-yellowColor text-[15px] leading-6 font-semibold">
        {formateDate("07-04-2010")} - {formateDate("08-13-2014")}
      </span>
      <p className="text-[16px] leading-6 font-medium text-textColor">
        computer scientiste
      </p>
      <p className="text-[14px] leading-5 font-medium text-textColor">
       Oracle,rabat.
      </p>
    </li>
  </ul>
</div>
    </div>
  );
};

export default ExpertAbout;