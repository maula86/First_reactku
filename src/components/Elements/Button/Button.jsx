const Button = (props) => {
  let stsbtn = false
  const { textbtn = "click", tinggi='py-3', lebar='w-20', posisi = '', bgbtn = 'bg-blue-800', hvbgbtn = 'hover:shadow-blue-600/50 hover:bg-blue-600',  disabled = stsbtn, onClick, type = 'button' } = props;
  return (
    <button
      className={`${tinggi} rounded ${lebar} font-semibold ${bgbtn} text-white hover:shadow-lg ${hvbgbtn} hover:text-white ${posisi}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {textbtn}
    </button>
  );
};

export default Button;
