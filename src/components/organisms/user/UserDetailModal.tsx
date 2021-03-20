import {
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
} from "@chakra-ui/react";
import { useEffect, memo, VFC, useState, ChangeEvent } from "react";

import { User } from "../../../types/api/user";
import PrimaryButton from "../../atoms/button/PrimaryButton";

type Props = {
	user: User | null;
	isOpen: boolean;
	onClose: () => void;
	isAdmin?: boolean;
};

const UserDetailModal: VFC<Props> = memo((props: Props) => {
	const { user, isOpen, onClose, isAdmin = false } = props;

	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	useEffect(() => {
		setUsername(user?.username ?? "");
		setName(user?.name ?? "");
		setEmail(user?.email ?? "");
		setPhone(user?.phone ?? "");
	}, [user]);

	const onClickUpdate = () => {
		alert("");
	};

	const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
		setUsername(e.target.value);
	const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
		setName(e.target.value);
	const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);
	const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
		setPhone(e.target.value);
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			motionPreset="slideInBottom"
			autoFocus={false}
		>
			<ModalOverlay />
			<ModalContent pb={2}>
				<ModalHeader>ユーザー詳細</ModalHeader>
				<ModalCloseButton />
				<ModalBody mx={4}>
					<Stack spacing={4}>
						<FormControl>
							<FormLabel>名前</FormLabel>
							<Input value={username} isReadOnly={!isAdmin} onChange={onChangeUsername} />
						</FormControl>
						<FormControl>
							<FormControl>
								<FormLabel>フルネーム</FormLabel>
								<Input value={name} isReadOnly={!isAdmin} onChange={onChangeName} />
							</FormControl>
							<FormLabel>Mail</FormLabel>
							<Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail} />
						</FormControl>
						<FormControl>
							<FormLabel>TEL</FormLabel>
							<Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone} />
						</FormControl>
					</Stack>
				</ModalBody>
				{isAdmin && (
					<ModalFooter>
						<PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
					</ModalFooter>
				)}
			</ModalContent>
		</Modal>
	);
});

export default UserDetailModal;
