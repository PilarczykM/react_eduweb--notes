import React from 'react';
import { DetailsTemplate } from '../../template/Details';
import { activeItemProps } from './types';

const initialActiveItemState: activeItemProps = {
	title: "",
	content: "",
	articleUrl: "",
	created: "",
	twitterName: ""
}

export const DetailsPage: React.FC = () => {
	const [activeItem, setActiveItem] = React.useState<activeItemProps>(initialActiveItemState);

	React.useEffect(() => {

	},[])

	return <DetailsTemplate title={activeItem.title}
		created={activeItem.created}
		content={activeItem.content}
		articleUrl={activeItem.articleUrl}
		twitterName={activeItem.twitterName} />;
}