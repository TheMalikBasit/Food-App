import { useState, useEffect } from "react";
import AllFoods from "@/components/Menu";

const refreshMyPage = ({ orderItems }: { orderItems: number }) => {
    const [orderedItems, setOrderedItems] = useState<any[]>([]);

    useEffect(() => {
        const newItemID: number = Number(orderItems);

        const selectedItem = AllFoods.find(item => item.ID === newItemID);

        if (selectedItem && !orderedItems.some(item => item.ID === newItemID)) {
            setOrderedItems(prevItems => [...prevItems, selectedItem]); // Corrected to use prevItems
        }
    }, [orderItems]); // Include orderItems as a dependency so it runs when it changes

    return { orderedItems };
};

export default refreshMyPage;
