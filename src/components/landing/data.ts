export interface Offer {
  id: string;
  offer: string;
  desc: string;
  image: string;
}

type PlanBenefits = {
  id: string;
  benefit: string;
}
export interface Plans {
  id: string;
  price: string;
  descr: string;
  planBenefits: PlanBenefits[];
  plan: string;
  btnTitle: string;
  popular: boolean;
}

export interface Reviewers {
  id: string;
  name: string;
  review: string;
  image: string;
  position: string;
}

export const offers = [
  {
    id: '1',
    offer: 'Comprehensive eBook Management',
    desc: 'Effortlessly manage your entire eBook catalog with our intuitive interface. Add, update, and organize your titles in one centralized platform.',
    image: 'usettings'
  },
  {
    id: '2',
    offer: 'Advanced Sales Analytics',
    desc: 'Gain deep insights into your sales performance with real-time data. Track your revenue, identify trends, and make informed decisions to boost your business.',
    image: 'analytics'
  },
  {
    id: '3',
    offer: 'Integrated Marketing Tools',
    desc: 'Maximize your reach with built-in marketing features. Create campaigns, promote your eBooks, and connect with readers through targeted strategies.',
    image: 'tools'
  },
  {
    id: '4',
    offer: 'Secure Payment Processing',
    desc: 'Ensure safe and smooth transactions with our secure payment gateway. Accept multiple payment methods and protect your customers’ data.',
    image: 'lock'
  },
  {
    id: '5',
    offer: 'Customizable Author Pages',
    desc: 'Showcase your work with personalized author pages. Highlight your bestsellers, share your story, and engage with your audience directly.',
    image: 'customize'
  },
  {
    id: '6',
    offer: '24/7 Support',
    desc: 'Get the help you need, whenever you need it. Our dedicated support team is available around the clock to assist with any questions or issues.',
    image: 'support'
  },

]

export const pricingPlans: Plans[] = [
  {
    id: '1',
    price: '64',
    descr: 'Perfect for using in a personal website or a client project.',
    planBenefits: [
      {
        id: '1',
        benefit: '1 User'
      },
      {
        id: '2',
        benefit: 'All UI components'
      },
      {
        id: '3',
        benefit: 'Lifetime access'
      },
      {
        id: '4',
        benefit: 'Free updates'
      },
      {
        id: '5',
        benefit: 'Use on 1 (one) project'
      },
      {
        id: '6',
        benefit: '3 Months support'
      },
    ],
    plan: 'personal',
    btnTitle: 'personal',
    popular: false
  },
  {
    id: '2',
    price: '124',
    descr: 'Perfect for using in a business website or a client project.',
    planBenefits: [
      {
        id: '1',
        benefit: '1 User'
      },
      {
        id: '2',
        benefit: 'All UI components'
      },
      {
        id: '3',
        benefit: 'Lifetime access'
      },
      {
        id: '4',
        benefit: 'Free updates'
      },
      {
        id: '5',
        benefit: 'Use on 1 (one) project'
      },
      {
        id: '6',
        benefit: '3 Months support'
      },
    ],
    plan: 'business',
    btnTitle: 'business',
    popular: true
  },
  {
    id: '3',
    price: '200',
    descr: 'Perfect for using in a team business or a client Business.',
    planBenefits: [
      {
        id: '1',
        benefit: '1 User'
      },
      {
        id: '2',
        benefit: 'All UI components'
      },
      {
        id: '3',
        benefit: 'Lifetime access'
      },
      {
        id: '4',
        benefit: 'Free updates'
      },
      {
        id: '5',
        benefit: 'Use on 1 (one) project'
      },
      {
        id: '6',
        benefit: '3 Months support'
      },
    ],
    plan: 'teams',
    btnTitle: 'professional',
    popular: false
  },
];

export const reviewers: Reviewers[] = [
  {
    id: '1',
    review: 'SmartWallet has transformed the way I manage my digital assets. The secure storage and user-friendly interface make it a game-changer for someone like me who\'s invested in cryptocurrencies.',
    image: 'avatar3',
    name: 'Savannah Nguyen',
    position: 'Marketing Coordinator'
  },
  {
    id: '2',
    review: 'I\'ve never felt so confident in a financial app before. The transparency, seamless transactions, and rewards programs make SmartWallet my go-to choice for managing my investments.',
    image: 'avatar2',
    name: 'Annette Black',
    position: 'Medical Assistant'
  },
  {
    id: '3',
    review: 'As a newcomer to the world of crypto, SmartWallet\'s step-by-step guides and exceptional customer support helped me navigate the complexities effortlessly. It\'s a must-have for anyone looking to venture into digital assets.',
    image: 'avatar1',
    name: 'Marvin McKinney',
    position: 'President of Sales'
  },
];

const resources = [
  {
    id: 1,
    link: 'Saas Development'
  },
  {
    id: 2,
    link: 'Our Products'
  },
  {
    id: 3,
    link: 'Our Products'
  },
  {
    id: 4,
    link: 'User Strategy'
  },
];

const company = [
  {
    id: 4,
    link: 'About Landio'
  },
  {
    id: 5,
    link: 'Contact & Support'
  },
  {
    id: 6,
    link: 'Success History'
  },
  {
    id: 7,
    link: 'Setting & Privacy'
  },
]

const quickLinks = [
  {
    id: 9,
    link: 'Premium Support'
  },
  {
    id: 10,
    link: 'Our Services'
  },
  {
    id: 11,
    link: 'Know Our Team'
  },
  {
    id: 12,
    link: 'Download App'
  },
]

export const footerLinks = [
  {
    id: '1',
    title: 'Resources',
    links: resources,
  },
  {
    id: '2',
    title: 'Company',
    links: company,
  },
  {
    id: '3',
    title: 'Quick Links',
    links: quickLinks,
  },
]