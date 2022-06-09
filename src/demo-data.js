
const data = {
    name: '首頁',
    children: [
        {
            name: `Today's Deals`,
            link: `/Todays Deals`,
            children: [],
        },
        {
            name: `Your Recommendations`,
            link: '/blog',
            children: [],
        },
        {
            name: `Shop By Department`,
             link: '/blog',
            children: [
                {
                    name: `Amazon Music`,
                    children: [
                        {
                            name: `Amazon Music Unlimited`,
                            link: '/blog',
                            children: [],
                        },
                        {
                            name: `Prime Music`,
                          link: '/blog',
                            children: [],
                        },
                        {
                            name: `CDs and Vinyl`,
                            llink: '/blog',
                            children: [],
                        },
                    ],
                },
                {
                    name: `Prime Vedios`,
                    children: [
                        {
                            name: `All Vedio`,
                            link: '/blog',
                            children: [],
                        },
                        {
                            name: `Included with Prime`,
                            link: '/blog',
                            children: [],
                        },
                        {
                            name: `Rent or Buy`,
                           link: '/blog',
                            children: [],
                        },
                    ],
                },
                {
                    name: `Treasure Truck`,
                    link: '/bl',
                    children: [],
                },
                {
                    name: `Amazon Restaurants`,
                     link: '/blog',
                    children: [
                        {
                            name: `Thai`,
                           link: '/blog',
                            children: [],
                        },
                        {
                            name: `Chinese`,
                           link: '/blog',
                            children: [],
                        },
                        {
                            name: `American`,
                             link: '/blog',
                            children: [],
                        },
                        {
                            name: `Indian`,
                            link: '/blog',
                            children: [],
                        },
                        {
                            name: `Popular Restaurants`,
                             link: '/blog',
                            children: [
                                {
                                    name: `Popular Restaurants 1`,
                                     link: '/blog',
                                    children: [],
                                },
                                {
                                    name: `Popular Restaurants 2`,
                                     link: '/blog',
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
