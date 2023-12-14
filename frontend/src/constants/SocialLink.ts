import { SocialLinkTypes } from "../types";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const SocialLinkList: SocialLinkTypes[] = [
  {
    id: 1,
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/",
  },
  {
    id: 2,
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/",
  },
  {
    id: 3,
    name: "Youtube",
    icon: FaYoutube,
    url: "https://www.youtube.com/",
  },
];
