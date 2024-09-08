import { useEffect, useState } from "react";
import CraftItemCard from "../../components/CraftItems/CraftItemCard";

const AllArtCraft = () => {
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
            <div className="grid grid-cols-2 gap-10 mx-24 mt-20">
            {
                items.map(item => <CraftItemCard key={item._id} craftItem={item} />)
            }
        </div>
        </div>
    );
};

export default AllArtCraft;