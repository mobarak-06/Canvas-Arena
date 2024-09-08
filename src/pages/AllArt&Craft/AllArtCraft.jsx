import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../../components/CraftItems/CraftItemCard";

const AllArtCraft = () => {
    const allItems = useLoaderData();
    console.log(allItems);
    return (
        <div className="grid grid-cols-2 gap-10 mx-24 mt-20">
            {
                allItems.map(item => <CraftItemCard key={item._id} craftItem={item} />)
            }
        </div>
    );
};

export default AllArtCraft;