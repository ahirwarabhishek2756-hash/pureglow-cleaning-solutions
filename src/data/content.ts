import type { LucideIcon } from 'lucide-react';
import { BookOpen, Building2, ClipboardList, Clock, FileText, Gem, Headset, Heart, Layers, Target } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  description: string;
  details: string;
  bestFor: string;
  image: string;
  imageAlt: string;
}

export const products: Product[] = [
  {
    id: 'glass',
    name: 'Glass Cleaner',
    description: 'For windows, mirrors, and glass surfaces.',
    details:
      'Designed for quick wipe-downs of windows, mirrors and glass surfaces. Spray lightly, wipe with a clean cloth and buff dry for a tidy finish.',
    bestFor: 'Windows, mirrors, glass tabletops',
    image: 'https://images.pexels.com/photos/7641265/pexels-photo-7641265.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A person cleaning a glass window with a spray bottle and cloth',
  },
  {
    id: 'kitchen',
    name: 'Kitchen Cleaner',
    description: 'For kitchen countertops, cookers, and everyday kitchen surfaces.',
    details:
      'Made for regular cleaning of worktops, cupboard fronts and cooking areas. Use on surfaces suited to the product and rinse where the label advises.',
    bestFor: 'Worktops, cupboard doors, cooker hobs',
    image: 'https://images.pexels.com/photos/5591854/pexels-photo-5591854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Someone wiping a kitchen counter in a modern kitchen',
  },
  {
    id: 'bathroom',
    name: 'Bathroom Cleaner',
    description: 'For sinks, tiles, showers, and bathroom surfaces.',
    details:
      'Built for routine cleaning of basins, taps, tiles and shower areas. Keep the room ventilated and follow the directions on the label.',
    bestFor: 'Sinks, tiles, showers, taps',
    image: 'https://images.pexels.com/photos/5591461/pexels-photo-5591461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A woman cleaning a bathroom mirror with a spray bottle',
  },
  {
    id: 'floor',
    name: 'Floor Cleaner',
    description: 'For suitable sealed hard floors.',
    details:
      'Suitable for routine mopping of sealed hard floors such as tiles, vinyl and laminate. Test on a small area first and check the label for suitable floor types.',
    bestFor: 'Tiles, vinyl, laminate, sealed floors',
    image: 'https://images.pexels.com/photos/7513163/pexels-photo-7513163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A woman mopping a wooden floor at home',
  },
  {
    id: 'car',
    name: 'Car Cleaner',
    description: 'For car exterior and interior cleaning.',
    details:
      'Designed for everyday wiping of car interiors and light exterior cleaning. Avoid using on hot surfaces and test on an inconspicuous area first.',
    bestFor: 'Dashboards, interiors, body panels',
    image: 'https://images.pexels.com/photos/7154634/pexels-photo-7154634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Hands cleaning a car with a spray cleaner and microfiber cloth',
  },
  {
    id: 'disinfectant',
    name: 'Surface Disinfectant',
    description: 'For appropriate high-touch surfaces, subject to the product label.',
    details:
      'For use on hard, non-porous surfaces that are frequently touched. Always read the label for instructions, contact time and safety information before use.',
    bestFor: 'Door handles, switches, desks, high-touch areas',
    image: 'https://images.pexels.com/photos/7876767/pexels-photo-7876767.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Gloved hands cleaning cabinet handles with a spray bottle',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutCards: Feature[] = [
  {
    title: 'Our Goal',
    description: 'To make everyday cleaning simple and convenient, with the right product for each part of your space.',
    icon: Target,
  },
  {
    title: 'Quality First',
    description: 'We present every product with clear, practical information so you can choose with confidence.',
    icon: Gem,
  },
  {
    title: 'Customer Focus',
    description: 'We listen to the questions our customers ask and make it easy to get the help they need.',
    icon: Heart,
  },
];

export const services: Feature[] = [
  {
    title: 'Household Cleaning Products',
    description: 'Clear details on everyday cleaners for kitchens, bathrooms, floors and glass throughout your home.',
    icon: Building2,
  },
  {
    title: 'Office and Workplace Solutions',
    description: 'Cleaning supplies suited to shared spaces, reception areas, meeting rooms and staff kitchens.',
    icon: Layers,
  },
  {
    title: 'Product Information and Selection Guidance',
    description: 'Plain-language help choosing the right product for each surface, room or vehicle.',
    icon: BookOpen,
  },
  {
    title: 'Bulk Product Inquiries',
    description: 'Tell us what your home or business needs and we will help you plan a bulk order.',
    icon: ClipboardList,
  },
];

export const whyChooseUs: Feature[] = [
  {
    title: 'Clear Product Information',
    description: 'Each product comes with straightforward details on where and how it is meant to be used.',
    icon: FileText,
  },
  {
    title: 'Convenient Product Categories',
    description: 'From kitchens and bathrooms to cars and offices, find the right product category for each area.',
    icon: Layers,
  },
  {
    title: 'Simple Browsing Experience',
    description: 'A clean layout that lets you move from product to enquiry in just a few taps or clicks.',
    icon: Clock,
  },
  {
    title: 'Customer-Focused Support',
    description: 'Our team listens to your questions and helps you choose products that match your needs.',
    icon: Headset,
  },
];
