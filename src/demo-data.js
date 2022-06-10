
const data = {
    name: '首頁',
    children: [
        {
            name: `Today's Deals`,
            link: `/todaysdeal`,
            children: [],
        },
        {
            name: `Your Recommendations`,
            link: '/recommendations',
            children: [],
        },
        {
            name: `Shop By Department`,
            link: '/shopdepartment',
            children: [
                {
                    name: `Amazon Musicss`,
                    children: [
                        {
                            name: `Amazon Music Unlimited`,
                            link: `/amzonmusic`,
                            children: [],
                        },
                        {
                            name: `Prime Music`,
                            link: `/primemusic`,
                            children: [],
                        },
                        {
                            name: `CDs and Vinyl`,
                            link: `/cd`,
                            children: [],
                        },
                    ],
                },
                {
                    name: `Prime Vedios`,
                    link: '/prime',
                    children: [
                        {
                            name: `All Vedio`,
                            link: '/allvideo',
                            children: [],
                        },
                        {
                            name: `Included with Prime`,
                            link: '/prime',
                            children: [],
                        },
                        {
                            name: `Rent or Buy`,
                            link: '/rent',
                            children: [],
                        },
                    ],
                },
                {
                    name: `Treasure Truck`,
                    link: '/tresure',
                    children: [],
                },
                {
                    name: `Amazon Restaurants`,
                    link: '/restaurat',
                    children: [
                        {
                            name: `Thai`,
                            link: '/thai',
                            children: [],
                        },
                        {
                            name: `Chinese`,
                            link: '/chines',
                            children: [],
                        },
                        {
                            name: `American`,
                            link: '/amercan',
                            children: [],
                        },
                        {
                            name: `Indian`,
                            link: '/indin',
                            children: [],
                        },
                        {
                            name: `Popular Restaurants`,
                            link: '/resta',
                            children: [
                                {
                                    name: `Popular Restaurants 1`,
                                    link: '/resta3',
                                    children: [],
                                },
                                {
                                    name: `Popular Restaurants 2`,
                                    link: '/resta4',
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
