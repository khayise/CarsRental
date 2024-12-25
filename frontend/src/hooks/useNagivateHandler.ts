import { useNavigate } from 'react-router-dom';

export function useNavigateHandler() {
	const navigate = useNavigate();

	return (to: string) => {
		navigate(to);
	};
}
