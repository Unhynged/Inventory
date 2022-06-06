//function ItemsDisplay(props) {
//    return (
//        <div>
//            { props.items.map((item) => { 
//                return (
//                    <div>
//                        <p>Id: {item.id}</p>
//                        <p>Name: {item.name}</p>
//                        <p>Price: {item.price}</p>
//                        <p>Type: {item.type}</p>
//                        <p>Brand: {item.brand}</p>
//                    </div>
//                );
//            })}
//        </div>
//    );
//} 

function ItemsDisplay(props) {
    const showItem = (item) => {
        return (
            <div>
                <p>Id: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Type: {item.type}</p>
                <p>Brand: {item.brand}</p>
            </div>
        );
    };

    return <div>{props.items.map(showItem)}</div>
}

export default ItemsDisplay;

// Using .map() to Render Data
// inside the return function create { props.items.map(() => { })}
// This function is going to return is a component that should be rendered for everysingle one of these items.
//
//