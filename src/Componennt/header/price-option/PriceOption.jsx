

const PriceOption = ({option}) => {

   const {price,name,description}=option
    return (
        <div className="text-black text-center bg-yellow-200 rounded-2xl p-5 my-3 space-y-3 flex flex-col"> 
            <h1><span className="font-bold text-7xl">{price}</span>/mon</h1>
            <p className="text-2xl font-bold">{name}</p>
            <p className="flex-grow">{description}</p> 
            <button className="btn">buy now</button>
        </div>
    );
};

export default PriceOption;