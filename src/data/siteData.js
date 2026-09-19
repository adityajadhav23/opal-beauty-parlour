/**
 * Opal Beauty Parlour — all editable website content lives here.
 *
 * Replace placeholder values before publishing.
 */

export const business = {
  name: "Opal Beauty Parlour",
  shortName: "Opal",
  tagline: "Beauty • Care • Confidence",
  motto: "Clean and Prompt",
  foundedYear: 1997,
  location: "Sangli, Maharashtra",
  city: "Sangli",
  state: "Maharashtra",
  country: "India",
  address:
    "Kupwad MIDC Rd, behind Ganpati Mandir, Sharda Housing Society, Laxminagar, Sangli Miraj Kupwad, Maharashtra 416416",
  hours: "[OPENING HOURS]",
  logo: "/images/opal-logo.png",
};

export const seo = {
  title: "Opal Beauty Parlour | Beauty & Salon Services in Sangli",
  description:
    "Opal Beauty Parlour in Sangli — beauty, hair and personal care since 1997. Clean and Prompt.",
  siteUrl: "https://YOUR_WEBSITE_URL",
};

export const owner = {
  heading: "Meet the Owner",
  name: "Mrs. Manisha Jadhav",
  role: "Founder",
  bio: "",
  instagram: "https://www.instagram.com/manishajadhav.07/",
  photo: {
    src: "/images/owner-manisha-2.png",
    alt: "Mrs. Manisha Jadhav, founder of Opal Beauty Parlour",
    position: "center 62%",
  },
};

export const contact = {
  phone: "+919552724846",
  phoneDisplay: "+91 95527 24846",
  backupPhone: "+919011862003",
  backupPhoneDisplay: "+91 90118 62003",
  whatsapp: "919552724846",
  instagram: "https://www.instagram.com/opal_beauty_parlour/",
  googleMaps: "https://maps.app.goo.gl/HcSRGd8N5731VoEZ9",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Opal+Beauty+Parlour,+Kupwad+MIDC+Rd,+behind+Ganpati+Mandir,+Sharda+Housing+Society,+Laxminagar,+Sangli+Miraj+Kupwad,+Maharashtra+416416&output=embed",
  whatsappGroup: "https://chat.whatsapp.com/EFzFX1wvoHXAcmcQDNI4Sd",
};

const unsetValues = new Set([
  "",
  "PHONE_NUMBER",
  "WHATSAPP_NUMBER",
  "INSTAGRAM_URL",
  "GOOGLE_MAPS_URL",
  "GOOGLE_MAPS_EMBED_URL",
  "WHATSAPP_CHANNEL_URL",
  "[STREET ADDRESS]",
  "[OPENING HOURS]",
]);

export function isSet(value) {
  return Boolean(value) && !unsetValues.has(value.trim?.() ?? value);
}

export const links = {
  phone: isSet(contact.phone) ? `tel:${contact.phone}` : "#contact",
  backupPhone: isSet(contact.backupPhone) ? `tel:${contact.backupPhone}` : "#contact",
  whatsapp: isSet(contact.whatsapp)
    ? `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`
    : "#contact",
  instagram: isSet(contact.instagram) ? contact.instagram : "#contact",
  maps: isSet(contact.googleMaps) ? contact.googleMaps : "#map",
  whatsappGroup: isSet(contact.whatsappGroup) ? contact.whatsappGroup : "#contact",
};

export const images = {
  hero: {
    src: "/images/parlour-products.png",
    alt: "Opal Beauty Parlour interior",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    category: "Hair Care",
    items: [
      { id: "haircut", name: "Haircut", description: "", icon: "Scissors", price: "" },
      { id: "hair-styling", name: "Hair Styling", description: "", icon: "Sparkles", price: "" },
      { id: "hair-treatment", name: "Hair Treatment", description: "", icon: "Droplets", price: "" },
    ],
  },
  {
    category: "Skin Care",
    items: [
      { id: "cleanup", name: "Cleanup", description: "", icon: "Sparkle", price: "" },
      { id: "facial", name: "Facial", description: "", icon: "Flower2", price: "" },
      { id: "skin-care", name: "Skin Care", description: "", icon: "Leaf", price: "" },
    ],
  },
  {
    category: "Beauty Services",
    items: [
      { id: "threading", name: "Threading", description: "", icon: "Minus", price: "" },
      { id: "waxing", name: "Waxing", description: "", icon: "Feather", price: "" },
      { id: "manicure", name: "Manicure", description: "", icon: "Hand", price: "" },
      { id: "pedicure", name: "Pedicure", description: "", icon: "Heart", price: "" },
    ],
  },
  {
    category: "Bridal / Occasions",
    items: [
      { id: "bridal-makeup", name: "Bridal Makeup", description: "", icon: "Crown", price: "" },
      { id: "party-makeup", name: "Party Makeup", description: "", icon: "WandSparkles", price: "" },
      { id: "special-styling", name: "Occasion Styling", description: "", icon: "Gem", price: "" },
    ],
  },
];

export const whyChooseUs = [
  { id: "personalized", title: "Personalized Care", description: "", icon: "HeartHandshake" },
  { id: "comfortable", title: "Comfortable Space", description: "", icon: "Sofa" },
  { id: "quality", title: "Quality Finish", description: "", icon: "Sparkles" },
  { id: "satisfaction", title: "Trusted Locally", description: "", icon: "BadgeCheck" },
];

export const gallery = [
  {
    id: "products",
    src: "/images/parlour-products.png",
    alt: "Opal Beauty Parlour interior with product shelves",
    label: "Parlour interior",
    span: "wide",
  },
  {
    id: "wash",
    src: "/images/parlour-wash.png",
    alt: "Hair wash station at Opal Beauty Parlour",
    label: "Hair wash",
    span: "wide",
  },
  {
    id: "accessories",
    src: "/images/parlour-accessories.png",
    alt: "Hair accessories at Opal Beauty Parlour",
    label: "Accessories",
    span: "wide",
  },
  {
    id: "clips",
    src: "/images/parlour-clips.png",
    alt: "Hair clips and bands at Opal Beauty Parlour",
    label: "Hair accessories",
    span: "wide",
  },
  {
    id: "owner",
    src: "/images/owner-manisha-2.png",
    alt: "Mrs. Manisha Jadhav, founder of Opal Beauty Parlour",
    label: "Mrs. Manisha Jadhav",
    span: "tall",
  },
  {
    id: "owner-2",
    src: "/images/owner-manisha-1.png",
    alt: "Mrs. Manisha Jadhav",
    label: "Mrs. Manisha Jadhav",
    span: "tall",
  },
];

export const testimonialsEnabled = true;

export const testimonials = [
  {
    id: 1,
    quote:
      "Mam you should write a book on your thoughts. You are not just a beautician — you are a great personality.",
    name: "A 22-year-old client",
    detail: "",
    placeholder: false,
  },
  {
    id: 2,
    quote: "You look the same as when you started the salon. What is your magic?",
    name: "One of the oldest clients",
    detail: "",
    placeholder: false,
  },
  {
    id: 3,
    quote: "Your hands are so soft, and your conversations make me visit again and again.",
    name: "A regular client",
    detail: "",
    placeholder: false,
  },
];

export const about = {
  eyebrow: "Since 1997",
  title: "A parlour with heart",
  paragraphs: [
    "Women’s beauty care in Sangli — personal, unhurried, and always Clean and Prompt.",
  ],
};
