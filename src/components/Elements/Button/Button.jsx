const Button = (props) => {
  let stsbtn = false
  const { textbtn = "click", lebar='w-20', posisi = '', disabled = stsbtn, onClick } = props;
  return (
    <button
      className={`py-3 rounded ${lebar} font-semibold bg-blue-800 text-white hover:shadow-lg hover:shadow-blue-600/50 hover:bg-blue-600 hover:text-white ${posisi}`}
      onClick={ () => onClick() }
      disabled={disabled}
    >
      {textbtn}
    </button>
  );
};

export default Button;
