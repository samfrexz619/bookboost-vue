export interface Offer {
  id: string;
  offer: string;
  desc: string;
  image: string;
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