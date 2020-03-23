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
        <MenuItem icon="graph" text="Graph" />
        <MenuItem icon="map" text="Map" />
        <MenuItem icon="th" text="Table" shouldDismissPopover={false} />
        <MenuItem icon="zoom-to-fit" text="Nucleus" disabled={true} />
        <MenuDivider />
        <MenuItem icon="cog" text="Settings...">
            <MenuItem icon="add" text="Add new application" disabled={true} />
            <MenuItem icon="remove" text="Remove application" />
        </MenuItem>
    </Menu>
  );
  const BREADCRUMBS: IBreadcrumbProps[] = [
    { href: "/users", icon: "folder-close", text: "Users" },
    { href: "/users/janet", icon: "folder-close", text: "Janet" },
    { icon: "document", text: "image.jpg" },
];
  return (
    <div className="lists-screen-header">
      <div className={styles.container}>
        {/* drop box here */}
        <Popover content={exampleMenu} position={Position.RIGHT_BOTTOM}>
          <Button icon="double-chevron-right" />
        </Popover>
        {/* breadcrumb here  */}
        <Breadcrumbs items={BREADCRUMBS}/>
        {/* buttons on the right:
          - profile
          - settings
          - trash
         */}
         <Button icon="user" />
         <Button icon="cog" />
         <Button icon="trash" />
      </div>
    </div>
  );
};

export default ScreenHeader;