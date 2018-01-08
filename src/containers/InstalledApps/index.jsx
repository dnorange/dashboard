import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import ManageTabs from 'components/ManageTabs';
import Button from 'components/Base/Button';
import { Search } from 'components/Base/Input';
import styles from './index.scss';

@inject('rootStore')
@observer
export default class InstalledApps extends Component {
  render() {
    return (
      <div className={styles.apps}>
        <ManageTabs />

        <div className={styles.container}>
          <div className={styles.toolbar}>
            <Button className={styles.dropdown}>All types</Button>
            <Search className={styles.search} placeholder="Search App Name"/>
          </div>
        </div>
      </div>
    );
  }
}
