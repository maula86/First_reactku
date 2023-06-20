const Labelku = (props) => {
    const {forku = 'label', textLabel = 'Label'} = props
  return (
    <label htmlFor={forku} className="label cursor-pointer">
      <span className="label-text font-semibold text-slate-500">{textLabel}</span>
    </label>
  );
};

export default Labelku
