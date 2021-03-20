import { memo, VFC, useEffect, useCallback } from "react";
import {
	Center,
	Spinner,
	useDisclosure,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";

import UserCard from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import UserDetailModal from "../organisms/user/UserDetailModal";
import { useLoginUser } from "../../hooks/useLoginUser";
import { isAbsolute } from "node:path";

const UserManagement: VFC = memo(() => {
	const { getUsers, users, loading } = useAllUsers();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { onSelectUser, selectedUser } = useSelectUser();
	const { loginUser } = useLoginUser();
	console.log(loginUser);

	useEffect(() => getUsers(), []);

	const onClickUser = useCallback(
		(id: number) => {
			onSelectUser({ id, users, onOpen });
		},
		[onSelectUser, onOpen, users]
	);

	return (
		<>
			{loading ? (
				<Center h="90vh">
					<Spinner />
				</Center>
			) : (
				<Wrap p={{ base: 4, md: 10 }}>
					{users.map((user) => (
						<WrapItem key={user.id} mx="auto">
							<UserCard
								id={user.id}
								imageUrl="https://source.unsplash.com/random"
								userName={user.username}
								fullName={user.name}
								onClick={onClickUser}
							/>
						</WrapItem>
					))}
				</Wrap>
			)}
			<UserDetailModal
				user={selectedUser}
				isOpen={isOpen}
				onClose={onClose}
				isAdmin={loginUser?.isAdmin}
			/>
		</>
	);
});

export default UserManagement;
