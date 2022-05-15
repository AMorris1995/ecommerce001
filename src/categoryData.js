const categoryData = [
    {
        category: "Computing",
        collapsed: true,
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
