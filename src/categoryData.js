import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoGameControllerOutline } from "react-icons/io5";
const categoryData = [
    {
        category: "Computing",
        collapsed: true,
        icon: <HiOutlineDesktopComputer size={20} />,
        description: "",
        subCategorys: [
            {
                subCategory: "Laptops",
                children: ["All Laptops", "Windows laptops"],
                collapsed: true,
            },
            { subCategory: "Desktop PCs", collapsed: true },
            { subCategory: "Computer accessories", collapsed: true },
        ],
    },
    {
        category: "Gaming",
        icon: <IoGameControllerOutline size={20} />,
        collapsed: true,
        description: "",
        subCategorys: [
            { subCategory: "Laptops", collapsed: true },
            { subCategory: "Desktop PCs", collapsed: true },
            { subCategory: "Computer accessories", collapsed: true },
        ],
    },
];

export default categoryData;
