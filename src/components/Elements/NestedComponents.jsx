import Button from "./Button/Button"
import Ipined from "./Iconku/Ipined"

const NestedComponents = (props) => {
    const {children, widthan = 'w-72'} = props
    return (
        <div className={`card ${widthan} bg-base-100 shadow-xl hover:shadow-lg hover:shadow-slate-800/50 outline-[#a8b3cf33] outline outline-1`}>

            {/* <div className="card-body"> */}
            { children }
            {/* </div> */}
        </div>
    )
}

const HeaderCard = (props) => {
    const {img_url = ''} = props
    return (
        <figure><img src={img_url} width="100%" alt="Shoes" /></figure>

    )
}

const BodyCard = (props) => {
    const {ttlcard = 'Lorem..', children, title=''} = props
    return (
            <div className="px-4 pb-8">
                <h2 className="card-title mt-4" title={title}>
                    {ttlcard}
                    {/* <Ipined /> */}
                </h2>
                {children}
            </div>
    )
}

const FooterCard = (props) => {
    const {children, labelan = '', handleAddCart, id} = props
    return (
        <div className="flex items-center justify-between px-4 pb-4">
            <h1 className="text-lg font-semibold text-white">{labelan}</h1>
            {children}
            <Button textbtn="Add to Cart" lebar="w-28" onClick={()=> handleAddCart(id)} />
        </div>
    )
}

NestedComponents.HeaderCard = HeaderCard
NestedComponents.BodyCard = BodyCard
NestedComponents.FooterCard = FooterCard


export default NestedComponents