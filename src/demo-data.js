
const data = {
    name: '首頁',
    children: [
        {
            name: `Today's Deals`,
            link: `/`,
            children: [],
        },
        {
            name: `Your Recommendations`,
            link: '/',
            children: [],
        },
        {
            name: `Shop By Department`,
            children: [
                {
                    name: `Amazon Music`,
                    children: [
                        {
                            name: `Amazon Music Unlimited`,
                            link: `/`,
                            children: [],
                        },
                        {
                            name: `Prime Music`,
                            link: `/`,
                            children: [],
                        },
                        {
                            name: `CDs and Vinyl`,
                            link: `/`,
                            children: [],
                        },
                    ],
                },
                {
                    name: `Prime Vedios`,
                    children: [
                        {
                            name: `All Vedio`,
                            link: '/',
                            children: [],
                        },
                        {
                            name: `Included with Prime`,
                            link: '/',
                            children: [],
                        },
                        {
                            name: `Rent or Buy`,
                            link: '/',
                            children: [],
                        },
                    ],
                },
                {
                    name: `Treasure Truck`,
                    link: '/',
                    children: [],
                },
                {
                    name: `Amazon Restaurants`,
                    children: [
                        {
                            name: `Thai`,
                            link: '/',
                            children: [],
                        },
                        {
                            name: `Chinese`,
                            link: '/',
                            children: [],
                        },
                        {
                            name: `American`,
                            link: '/',
                            children: [],
                        },
                        {
                            name: `Indian`,
                            link: '/',
                            children: [],
                        },
                        {
                            name: `Popular Restaurants`,
                            children: [
                                {
                                    name: `Popular Restaurants 1`,
                                    link: '/',
                                    children: [],
                                },
                                {
                                    name: `Popular Restaurants 2`,
                                    link: '/',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default data;
