import { Link, useNavigate } from "react-router-dom";
import { role } from "../../lib/data";
import { errorNotification, successNotification } from "../../utils/helpers";
import { adminLogout } from "../../api";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "instructor", "student", "parent"],
      },
      {
        icon: "/lesson.png",
        label: "Product Categories",
        href: "/categories",
        visible: ["admin", "instructor", "student", "parent"],
      },
      {
        icon: "/exam.png",
        label: "Products",
        href: "/products",
        visible: ["admin", "instructor"],
      },
      {
        icon: "/exam.png",
        label: "Shipping",
        href: "/shipping",
        visible: ["admin", "instructor"],
      },
      // {
      //   icon: "/message.png",
      //   label: "Messages",
      //   href: "/list/messages",
      //   visible: ["admin", "instructor", "student", "parent"],
      // },
    ],
  },

  {
    title: "PEOPLE",
    items: [
      {
        icon: "/student.png",
        label: "System Admins",
        href: "/admins",
        visible: ["admin", "instructor", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Users",
        href: "/users",
        visible: ["admin", "instructor", "student", "parent"],
      },
    ],
  },

  {
    title: "ORDERS",
    items: [
      {
        icon: "/announcement.png",
        label: "All Orders",
        href: "/orders",
        visible: ["admin", "instructor", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Pending Orders",
        href: "/orders/pending",
        visible: ["admin", "instructor", "student", "parent"],
      },
      {
        icon: "/exam.png",
        label: "Completed Orders",
        href: "/orders/completed",
        visible: ["admin", "instructor", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Cancelled Orders",
        href: "/orders/canceled",
        visible: ["admin", "instructor", "student", "parent"],
      },
    ],
  },

  {
    title: "OTHER",
    items: [
      // {
      //   icon: "/profile.png",
      //   label: "Profile",
      //   href: "/profile",
      //   visible: ["admin", "instructor", "student", "parent"],
      // },
      // {
      //   icon: "/setting.png",
      //   label: "Settings",
      //   href: "/settings",
      //   visible: ["admin", "instructor", "student", "parent"],
      // },
    ],
  },
];

const Menu = () => {
  const history = useNavigate();

  const handleLogout = async () => {
    const response = await adminLogout();
    if (response.status === 200) {
      successNotification(response.data.message);
      history("/login");
    } else {
      errorNotification(response?.data?.error);
    }
  };

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-[6px]" key={i.title}>
          <span className="hidden lg:block text-gray-300 font-light mt-8 mb-0">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  to={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 py-2 md:px-2 rounded-md hover:bg-titusSky"
                >
                  <img
                    src={`/assets/images/${item.icon}`}
                    alt=""
                    height={20}
                    width={20}
                  />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}

      <div
        onClick={handleLogout}
        className="flex items-center justify-center lg:justify-start gap-4 text-gray-400 py-2 md:px-2 rounded-md hover:bg-titusSky cursor-pointer"
      >
        <img src={`/assets/images/logout.png`} alt="" height={20} width={20} />
        <span className="hidden lg:block">Logout</span>
      </div>
    </div>
  );
};

export default Menu;
