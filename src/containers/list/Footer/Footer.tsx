import React from 'react';
import { Breadcrumbs, IBreadcrumbProps} from "@blueprintjs/core";
import styles from './Footer.module.scss';
// import './styles.scss';

// interface ILayoutProps {
//   header: ReactNode,
//   body: ReactNode,
//   footer?: ReactNode,
// };

const Footer: React.FunctionComponent = () => {
  const QUEUE_BREADCRUMB: IBreadcrumbProps[] = [
    { href: "/users", text: "Queue: 105" },
  ];
  const TOTAL_BREADCRUMB: IBreadcrumbProps[] = [
    { href: "/users", text: "Total: 1205" },
  ];
  const LEARNT_BREADCRUMB: IBreadcrumbProps[] = [
    { href: "/users", text: "Learnt: 302" },
  ];
  return (
    <div className={styles.container}>
      <Breadcrumbs className={styles.rightIntend} items={QUEUE_BREADCRUMB} />
      <Breadcrumbs className={styles.rightIntend} items={TOTAL_BREADCRUMB} />
      <Breadcrumbs items={LEARNT_BREADCRUMB} />
    </div>
  );
};

export default Footer;