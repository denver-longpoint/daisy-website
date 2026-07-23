// Single source of truth for site-wide constants.
export const SITE = {
  name: 'Daisy Cottage',
  tagline: 'Cape Cod Vacation Rental',
  brand: 'Daisy Cottage | Cape Cod Vacation Rental',
  domain: 'https://www.dayscottages.rentals',
  address: "276 N Shore Rd, Daisy, Unit 1, North Truro, MA",
  phone: '508-364-5530',
  phoneHref: 'tel:+15083645530',
  email: 'woodendllc@gmail.com',
  instagram: 'https://www.instagram.com/daisy.cottage',
  instagramHandle: '@daisy.cottage',
  airbnb: 'https://www.airbnb.com/rooms/16603493',
};

// Primary navigation — matches the live Squarespace nav exactly:
// INFO · RENT (dropdown) · NEWS & BLOG · CONTACT (button)
export const NAV = [
  { label: 'Info', href: '/' },
  {
    label: 'Rent',
    href: '/reserve-the-cottage',
    children: [
      { label: 'Reserve the Cottage', href: '/reserve-the-cottage' },
      { label: 'Summer Season', href: '/summerrentals' },
      { label: 'Short Term Rental', href: '/short-term-rental' },
      { label: 'Rental Rates', href: '/rent-daisy-cottage' },
      { label: 'House Rules', href: '/house-rules' },
    ],
  },
  { label: 'News & Blog', href: '/daisy-cottage-news' },
  { label: 'Photos & Video', href: '/photos-video' },
];
