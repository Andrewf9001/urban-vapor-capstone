import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faLock,
  faShoppingCart,
  faBars
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock,
    faShoppingCart,
    faBars,
    faFacebookSquare,
    faInstagram
  );
};

export default Icons;
