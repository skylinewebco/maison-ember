export const restaurant = {
  name: "Maison Ember",
  cuisine: "Modern European Fine Dining",
  city: "Houston, Texas",
  address: "1700 Post Oak Blvd, Houston, TX 77056",
  phone: "+1 (713) 555-0147",
  email: "hello@maisonember.com",
  hours: "Monday–Sunday | 5:30 PM – 11:00 PM",
  tagline: "An intimate dining experience shaped by fire, flavor & craft.",
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Our Kitchen", href: "/our-kitchen" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  badge?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const homeMenuCategories: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    items: [
      { name: "Ember-Seared Scallops", price: "$24", description: "Brown butter, citrus, herbs", badge: "CHEF'S PICK" },
      { name: "Charred Octopus", price: "$22", description: "Smoked paprika, fingerling potato, olive" },
      { name: "Truffle Burrata", price: "$19", description: "Heirloom tomato, basil oil, aged balsamic" },
      { name: "Roasted Heirloom Beets", price: "$16", description: "Goat cheese, candied walnut, sherry vinaigrette", badge: "SEASONAL" },
    ],
  },
  {
    id: "mains",
    title: "Main Courses",
    items: [
      { name: "Ember-Grilled Prime Steak", price: "$48", description: "Bone marrow butter, charred shallot jus", badge: "CHEF'S PICK" },
      { name: "Herb-Crusted Lamb", price: "$42", description: "Rosemary jus, roasted root vegetables" },
      { name: "Pan-Seared Sea Bass", price: "$39", description: "Saffron beurre blanc, fennel, citrus" },
      { name: "Wild Mushroom Risotto", price: "$28", description: "Aged parmesan, black truffle, chive" },
    ],
  },
  {
    id: "pasta",
    title: "Pasta & Risotto",
    items: [
      { name: "Truffle Tagliolini", price: "$29", description: "Black truffle, brown butter, parmesan", badge: "SEASONAL" },
      { name: "Lobster Ravioli", price: "$34", description: "Champagne cream, chive, roe" },
      { name: "Saffron Risotto", price: "$27", description: "Carnaroli rice, shellfish reduction" },
      { name: "Roasted Garlic Gnocchi", price: "$25", description: "Brown butter sage, aged pecorino" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Dark Chocolate Tart", price: "$14", description: "Sea salt caramel, cocoa nib" },
      { name: "Burnt Basque Cheesecake", price: "$13", description: "Vanilla bean, macerated berries", badge: "CHEF'S PICK" },
      { name: "Pistachio Panna Cotta", price: "$12", description: "Rose water, candied pistachio" },
      { name: "Ember Pear Tarte Tatin", price: "$14", description: "Caramelized pear, vanilla mascarpone" },
    ],
  },
];

export const fullMenuCategories: MenuCategory[] = [
  homeMenuCategories[0],
  {
    id: "soups-salads",
    title: "Soups & Salads",
    items: [
      { name: "Roasted Tomato Bisque", price: "$14", description: "Basil oil, herb crostini" },
      { name: "Maison Caesar", price: "$16", description: "Little gem, anchovy, aged parmesan, sourdough crumb" },
      { name: "French Onion Soup", price: "$15", description: "Gruyère, thyme, brioche crouton", badge: "CHEF'S PICK" },
      { name: "Charred Wedge", price: "$17", description: "Blue cheese, bacon lardon, buttermilk dressing" },
    ],
  },
  homeMenuCategories[2],
  homeMenuCategories[1],
  {
    id: "sides",
    title: "Sides",
    items: [
      { name: "Truffle Fries", price: "$12", description: "Parmesan, herb aioli" },
      { name: "Charred Broccolini", price: "$13", description: "Chili flake, garlic, lemon" },
      { name: "Creamed Spinach", price: "$14", description: "Nutmeg, aged gruyère" },
      { name: "Duck Fat Potatoes", price: "$13", description: "Rosemary, flake salt" },
    ],
  },
  homeMenuCategories[3],
  {
    id: "cocktails",
    title: "Signature Cocktails",
    items: [
      { name: "Ember Old Fashioned", price: "$18", description: "Smoked bourbon, demerara, orange oil", badge: "SIGNATURE" },
      { name: "Post Oak Negroni", price: "$17", description: "Gin, Campari, sweet vermouth, blood orange" },
      { name: "Saffron Sour", price: "$16", description: "Saffron gin, lemon, egg white" },
      { name: "Charred Rosemary Spritz", price: "$15", description: "Prosecco, elderflower, smoked rosemary" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Every course felt intentional — from the first bite to the final dessert. Maison Ember is an experience, not simply a dinner.",
    name: "Daniel R.",
  },
  {
    quote:
      "The kind of restaurant Houston has been waiting for. Warm service, bold flavor, and a room that feels like it was made for celebration.",
    name: "Amara L.",
  },
  {
    quote:
      "Ember-grilled steak was the best I've had in the city. Every detail, from the lighting to the last pour of wine, was considered.",
    name: "Marcus T.",
  },
];
