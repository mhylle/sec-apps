export class MenuItem {
  label: string;
  icon: string;
  link: string;
  menuItems: MenuItem[];
  visible = false;
  enabled = true;
  accessLevel: string;
  action: () => void;
  stateFunction: () => boolean;
}
