import Profile from "./Profile.vue";
import Logo from "../components/logo/Logo.vue";
import LogoMini from "../components/logo/LogoMini.vue";
import Footer from "../views/app/include/Footer.vue";
import PopupModelLayout from "../components/popup-modal-layout/PopupModalLayout.vue";
import ProfilePopover from "../components/popover-layout/ProfilePopover.vue";
import Logout from "../views/auth/Logout.vue";
import VerifiedBadge from "../components/VerifiedBadge.vue";
import DarkMode from "../components/DarkMode.vue";

export default {
  install: (app) => {
    app.component("Profile", Profile);
    app.component("Logo", Logo);
    app.component("LogoMini", LogoMini);
    app.component("Footer", Footer);
    app.component("PopupModelLayout", PopupModelLayout);
    app.component("ProfilePopover", ProfilePopover);
    app.component("Logout", Logout);
    app.component("VerifiedBadge", VerifiedBadge);
    app.component("DarkMode", DarkMode);
  },
};
