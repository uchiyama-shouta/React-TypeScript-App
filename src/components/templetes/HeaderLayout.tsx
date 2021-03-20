import React, { memo, ReactNode, VFC } from "react";

import Header from "../organisms/layout/Header";

type Props = {
	children: ReactNode;
};

const HeaderLayout: VFC<Props> = memo(({ children }) => {
	return (
		<>
			<Header></Header>
			{children}
		</>
	);
});

export default HeaderLayout;
