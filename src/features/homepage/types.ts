export interface ProductProps {
  image: string;
  price: string;
  title: string;
}

export interface CategoryProps {
  category: string;
  icon: JSX.Element;
  href: string;
}

export interface SectionProps {
  sectionName?: string;
  sectionTitle: string;
  sectionTitleColor?: string;
  sectionDescriptionColor?: string;
  sectionDescription: string[];
  sectionButton: string;
  alignText?: "left" | "right" | "center";
  buttonHeight?: string;
  sectionAosAnimation?: string;
  sectionTitleAosAnimation?: string;
  sectionDescriptionAosAnimation?: string;
  buttonHref?: string;
}
