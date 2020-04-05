import React from 'react';
import { Button, Menu, MenuDivider, MenuItem, Popover, Position, Breadcrumbs, IBreadcrumbProps} from "@blueprintjs/core";
import styles from './Header.module.scss';
// import './styles.scss';

// interface ILayoutProps {
//   header: ReactNode,
//   body: ReactNode,
//   footer?: ReactNode,
// };

const ScreenHeader: React.FunctionComponent = () => {
  const exampleMenu: JSX.Element = (
    <Menu>
      <MenuItem icon="layers" text="Decks" />
      <MenuItem icon="automatic-updates" text="Programs" />
      <MenuItem icon="eye-open" text="All memos" />
      <MenuItem icon="chart" text="Statistic" />
      <MenuDivider />
      <MenuItem icon="document-open" text="Templates" />
      <MenuDivider />
      <MenuItem icon="trash" text="Deleted items" />
      <MenuDivider />
      <MenuItem icon="user" text="Profile" />
      <MenuItem icon="cog" text="Settings" />
    </Menu>
  );
  const profileMenu: JSX.Element = (
    <Menu>
      <MenuItem icon="user" text="Profile" />
      <MenuDivider />
      <MenuItem icon="log-out" text="Log out" />
    </Menu>
  );
  const BREADCRUMBS: IBreadcrumbProps[] = [
    { href: "/users", icon: "folder-close", text: "Users" },
    { href: "/users/janet", icon: "folder-close", text: "Janet" },
    { icon: "document", text: "image.jpg" },
];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mainPart}>
          {/* drop box here */}
          <Popover content={exampleMenu} position={Position.BOTTOM_LEFT}>
            <Button className={styles.rightIntend} icon="menu" />
          </Popover>
          {/* breadcrumb here  */}
          <Breadcrumbs items={BREADCRUMBS}/>
        </div>
        
        {/* buttons on the right:
          - profile
          - settings
          - trash
         */}
         <div className={styles.rightSide}>
          <Popover content={profileMenu} position={Position.BOTTOM_RIGHT}>
           <Button icon="user" />
          </Popover>
         </div>
         
      </div>
    </div>
  );
};

export default ScreenHeader;