import React, { ReactNode } from 'react';
import { Button, Menu, MenuDivider, MenuItem, Popover, Position } from "@blueprintjs/core";
// import './styles.scss';

// interface ILayoutProps {
//   header: ReactNode,
//   body: ReactNode,
//   footer?: ReactNode,
// };

const ScreenHeader: any = () => {
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
  return (
    <div className="lists-screen-header">
      <div className="container">
        {/* drop box here */}
        <Popover content={exampleMenu} position={Position.RIGHT_BOTTOM}>
          <Button icon="share" text="Open in..." />
        </Popover>
        {/* breadcrumb here  */}
        {/* buttons on the right:
          - profile
          - settings
          - trash
         */}
      </div>
    </div>
  );
};

export default ScreenHeader;