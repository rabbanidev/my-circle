import moon from "./icon/moon.svg";
import sun from "./icon/sun.svg";
import home from "./icon/home.svg";
import notification from "./icon/notification.svg";
import plus from "./icon/plus.svg";
import user from "./icon/user.svg";
import love from "./icon/love.svg";
import share from "./icon/share.svg";
import message from "./icon/message.svg";
import continueIcon from "./icon/continue.svg";
import close from "./icon/close.svg";
import menu from "./icon/menu.svg";

interface IAssests {
  icons: {
    sun: string;
    moon: string;
    home: string;
    notification: string;
    plus: string;
    user: string;
    love: string;
    share: string;
    message: string;
    continue: string;
    close: string;
    menu: string;
  };
}

const assets: IAssests = {
  icons: {
    sun,
    moon,
    home,
    notification,
    plus,
    user,
    love,
    share,
    message,
    close,
    menu,
    continue: continueIcon,
  },
};

export default assets;
