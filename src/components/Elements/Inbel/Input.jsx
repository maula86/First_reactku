const InputKu = (props) => {
    const {type = 'text', id = 'id', nameInput = 'nameInput', placeholder = 'Type here'} = props
    return (
        <input 
            type={type} 
            id={id}
            name={nameInput}
            placeholder={placeholder}
            className="bg-[#f1f1f1] dark:bg-[#25313e] dark:text-white rounded w-72 py-2 px-3 placeholder:opacity-50" />
    )
}

export default InputKu