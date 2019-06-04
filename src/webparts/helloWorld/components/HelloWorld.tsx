import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
	public render(): React.ReactElement<IHelloWorldProps> {
		const item = [
			{ Title: 'Test One', Desc: 'This is long desc for testing.', Author: 'Me :D' },
			{ Title: 'Test Two', Desc: 'This is long desc for testing.', Author: 'Me :D' },
			{ Title: 'Test Three', Desc: 'This is long desc for testing.', Author: 'Me :D' },
			{ Title: 'Test Four', Desc: 'This is long desc for testing.', Author: 'Me :D' }
		];

		const itemMap = (item) => {
			return <div className={styles.itemContainer}>
				<div className={styles.title}>{item.Title}</div>
				<div>{item.Author}</div>
				<div className={styles.desc}>{item.Desc}</div>
			</div>
		};

		return (
			<div className={styles.rssApp}>
				{item.map(itemMap)}
			</div>
		);
	}
}
