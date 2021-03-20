/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useCallback } from "react";
import axios from "axios";

import { User } from "../types/api/user";
import { useMessege } from "./useMessage";

export const useAllUsers = () => {
	const { showMessage } = useMessege();

	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState<User[]>([]);

	const getUsers = useCallback(() => {
		setLoading(true);
		axios
			.get<User[]>("https://jsonplaceholder.typicode.com/users")
			.then((res) => setUsers(res.data))
			.catch(() => {
				showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return { getUsers, users, loading };
};
