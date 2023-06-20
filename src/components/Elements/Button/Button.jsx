
const Button = (props) => {
    const {textbtn = 'click'} = props
    return (
        <button className="py-3 rounded font-semibold bg-blue-800 text-white mt-8 hover:shadow-lg hover:shadow-blue-600/50 hover:bg-blue-600 hover:text-white">{textbtn}</button>
    )
}

export default Button