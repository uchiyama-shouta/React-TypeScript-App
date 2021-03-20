import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
	id: number;
	imageUrl: string;
	userName: string;
	fullName: string;
	onClick: (id: number) => void;
};

const UserCard: VFC = memo((props: Props) => {
	const { imageUrl, userName, fullName, onClick, id } = props;
	return (
		<Box
			w="260px"
			h="260px"
			bg="white"
			borderRadius="10px"
			shadow="md"
			p={4}
			_hover={{ cursor: "pointer", opacity: "0.8" }}
			onClick={() => onClick(id)}
		>
			<Stack textAlign="center">
				<Image
					boxSize="160px"
					src={imageUrl}
					borderRadius="full"
					alt={userName}
					m="auto"
				/>
				<Text fontSize="lg" fontWeight="bold">
					{userName}
				</Text>
				<Text fontSize="sm" color="gray">
					{fullName}
				</Text>
			</Stack>
		</Box>
	);
});

export default UserCard;
