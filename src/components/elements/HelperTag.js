import tickIcon from "../../assets/images/tick-icon.svg"

export const HelperTag = () => {
  return (
    <div className="helper-tag">
      <span className="tick-icon"><img src={tickIcon}/></span>
      <span className="helper-tag-text">выберите один или несколько вариантов</span>
    </div>
  );
};
