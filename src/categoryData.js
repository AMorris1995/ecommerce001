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
                children: [
                    "All Laptops",
                    "Windows laptops",
                    "MacBook",
                    "Chromebooks",
                    "Gaming Laptops",
                ],
                collapsed: true,
            },
            {
                subCategory: "Desktop PCs",
                children: [
                    "All Desktops",
                    "Windows PCs",
                    "Tower PCs",
                    "Gaming PCs",
                ],
                collapsed: true,
            },
            {
                subCategory: "Computer accessories",
                children: [
                    "Graphics tablets",
                    "Headsets and microphones",
                    "Keyboards",
                    "Mice",
                    "PC speakers",
                    "Power and cables",
                    "Webcams",
                ],
                collapsed: true,
            },
        ],
    },
    {
        category: "Gaming",
        icon: <IoGameControllerOutline size={20} />,
        collapsed: true,
        description: "",
        subCategorys: [
            {
                subCategory: "Consoles",
                children: [
                    "PlayStation Consoles",
                    "Xbox Consoles",
                    "Nintendo Consoles",
                ],
                collapsed: true,
            },
            {
                subCategory: "Console games",
                children: ["PlayStation Games", "Xbox Games", "Nintendo Games"],
                collapsed: true,
            },
            {
                subCategory: "Controllers",
                children: [
                    "PlayStation Controllers",
                    "Xbox Controllers",
                    "Nintendo Controllers",
                ],
                collapsed: true,
            },
        ],
    },
];

export default categoryData;
