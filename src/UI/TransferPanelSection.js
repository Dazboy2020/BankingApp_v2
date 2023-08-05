import React from 'react';
import styles from './TransferPanelSection.module.css';

const TransferPanelSection = ({ children }) => {
	return <div className={styles.transfer__panel__section}>{children}</div>;
};

export default TransferPanelSection;
