import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Service {
  service_title: string;
  service_description: string;
  service_color: string;
  service_image: string;
  service_video: string;
}

export interface PageData {
  hero_title: string;
  hero_description: string;
  hero_color: string;
  services: Service[];
  seo_title: string;
  seo_keywords: string | null;
  seo_description: string;
  og_image: string | null;
}

export interface ServicesResponse {
  success: boolean;
  msg: string;
  data: PageData;
  pagination: any | null;
}

