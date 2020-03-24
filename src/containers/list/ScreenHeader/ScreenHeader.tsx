import React from 'react';
import { Button, Menu, MenuDivider, MenuItem, Popover, Position, Breadcrumbs, IBreadcrumbProps} from "@blueprintjs/core";
import styles from './ScreenHeader.module.scss';
// import './styles.scss';

// interface ILayoutProps {
//   header: ReactNode,
//   body: ReactNode,
//   footer?: ReactNode,
// };

const ScreenHeader: React.FunctionComponent = () => {
  const exampleMenu: JSX.Element = (
    <Menu>
        <MenuItem icon="eye-open" text="Browse" />
        <MenuItem icon="trash" text="Deleted items" />
        <MenuDivider />
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
          <Popover content={exampleMenu} position={Position.BOTTOM}>
            <Button className={styles.rightIntend}icon="menu" />
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
          <Popover content={profileMenu} position={Position.BOTTOM}>
           <Button icon="user" />
          </Popover>
         </div>
         
      </div>
    </div>
  );
};

export default ScreenHeader;