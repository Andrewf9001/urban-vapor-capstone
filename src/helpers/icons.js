import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faSearch,
  faPhone,
  faEnvelope,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(
    faFacebookF,
    faInstagram,
    faTwitter,
    faSearch,
    faPhone,
    faEnvelope,
    faShoppingCart
  );
};

export default Icons;
