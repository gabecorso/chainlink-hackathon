const seedData =  {
    user: {firstName: "Victor",
    walletAddress: "0xc0ffee254729296a45a3885639AC7E10F9d54979",
    tokens: [
         {
            tokenName: "ethereum",
            ticker: "ETH",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
            quantity: 1.45,
        },
        {
            tokenName: "codeBerry",
            icon: "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1502910380/diilvtog7xtxak3hhia5.png",
            ticker: "CB",
            quantity: 100,
        },
    ]},

    companies: [],
    notifications: [
        {
            message: "Governance Proposal #1 has expired",
            img: "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1502910380/diilvtog7xtxak3hhia5.png",
            dateTime: "about 2 hours ago"
        },
        {
            message: "@Latedec made an offer on your token",
            img: "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1502910380/diilvtog7xtxak3hhia5.png",
            dateTime: "about 3 hours ago"
        },
        {
            message: "Governance Proposal #1 is expiring soon",
            img: "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1502910380/diilvtog7xtxak3hhia5.png",
            dateTime: "about 4 hours ago"
        },
        {
            message: "Your ETH/DAI loan was successful",
            img: "https://www.coinopsy.com/media/img/quality_logo/Aave.png",
            dateTime: "about 4 hours ago"
        },
        {
            message: "Your account was verified",
            img: "",
            dateTime: "about 2 days ago"
        },
        {
            message: "Submit your documents",
            img: "",
            dateTime: "about 2 days ago"
        },
    ],
    tasks: [ 
        {
            title: "Upcoming Deadlines", 
            tasks: [{title: "Add a profile picture", dateDue: "May 13th, 2021"}]
        },
        {
            title: "Submit Documents", 
            tasks: [{title: "Bank statements"}, {title: "Articles of Organization"}]
        },
        {
            title: "Governance", 
            tasks: [{title:"CB Proposal #4", dateDue: "May 14th, 2021"}, {title:"LBBQ Proposal #12", dateDue: "May 15th, 2021"},{title:"CB Q3 Airdrop", dateDue: "June 1st, 2021"},]
        },
        {
            title: "Loans Due", 
            tasks: [{title: "Outstanding $3,000 ETH/ DAI", dateDue: "June 1st, 2021"}]
        },
    ],
    companyCategories: [
        "Agriculture", "Art", "Automotive", "Beauty", "Cafe", "Cleaning", "Communication", "Banking", "Construction", "Consulting", "Consumer Staples", "Crafts", "Drones", "Ecommerce", "Education", "Energy", "Events", "Family", "Fashion", "Finance", "Gambling", "Fitness", "Food", "Gaming", "Garden", "Health", "Home", "Insurance", "Kids", "Luxury", "Marketing", "Mining", "Music", "News", "Nonprofit", "Outdoors","Pets", "Podcast", "Photography", "Printing", "Real Estate", "Research", "Restaurant", "Space", "Skincare", "Storage", "Tattoo", "Technology", "Virtual Reality", "Utilities",
    ]

};

export default seedData;