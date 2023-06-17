import { Menubar } from "primereact/menubar";
import { useHistory, useLocation } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        history.push("/");
      },
    },
    {
      label: "Adicionar Pokemon",
      icon: "pi pi-plus",
      command: () => {
        history.push("/add");
      },
    },
    {
      label: "Editar Pokemon",
      icon: "pi pi-pencil",
      command: () => {
        history.push("/edit");
      },
    },
  ];

  /*const activeIndex: any = items.findIndex(
    (item) => location.pathname.indexOf(item.command().slice(1)) !== -1
  );*/

  return <Menubar model={items} />;
};

export default Menu;