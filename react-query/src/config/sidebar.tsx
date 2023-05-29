export type showFunc = () => boolean;

export interface IMenuItem {
  key: string; // Must same with route name
  title: string;
  icon: JSX.Element;
  url: string;
  show: boolean | showFunc;
  activeByRouteNames?: Array<string>;
  children?: Array<IMenuItem>;
}

export const menuItems: IMenuItem[] = [
  {
    key: "dashboard",
    title: "Bảng điều khiển",
    icon: <i className="fas fa-home !text-primary" />,
    url: "/",
    show: true,
  },
  {
    key: "todo",
    title: "Todo",
    icon: <i className="fas fa-cogs !text-primary" />,
    url: "/todo",
    show: true,
  },
  {
    key: "product",
    title: "Product",
    icon: <i className="fas fa-tag !text-primary" />,
    url: "/product",
    show: true,
  },
];
