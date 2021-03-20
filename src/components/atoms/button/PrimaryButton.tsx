import { ReactNode, memo, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
	children: ReactNode;
	disabled?: boolean;
	loading?: boolean;
	onClick: () => void;
};

const PrimaryButton: VFC = memo((props: Props) => {
	const { children, onClick, disabled = false, loading = false } = props;
	return (
		<Button
			bg="teal.400"
			color="white"
			_hover={{ opacity: 0.8 }}
			_focus={{ outline: "none" }}
			onClick={onClick}
			disabled={disabled}
			isLoading={loading}
		>
			{children}
		</Button>
	);
});

export default PrimaryButton;
