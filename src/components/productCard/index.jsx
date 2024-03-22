const CardProducts = ({ picture, productName, price}) => {
    return (
      <>
        <div>
          <div className="relative w-full h-[300px]">
            <img src={picture} width={"100%"} height={"100%"} className="object-cover max-w-full min-h-full" />            
          </div>
          
          <h1 className="pt-1 font-mono text-2xl font-bold">{productName}</h1>
          
          <div className="flex gap-1">            
              <h1 className="">{price} |</h1>;           
          </div>          
                   
        </div>
      </>
    );
  };
  
  export default CardProducts;
  