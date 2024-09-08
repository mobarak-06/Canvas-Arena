import { useEffect, useState } from "react";

const CraftItems = () => {
    const[items, setItems] = useState([]);
    console.log(items);
    useEffect(() => {
        fetch('http://localhost:5000/allCraftItems')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setItems(data);
        })
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default CraftItems;