import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

function ModalContextProvider({ children }) {
	const [openModal, setOpenModal] = useState(false);
	const [openToast, setOpenToast] = useState(false);
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');
	const [modalTitle, setModalTitle] = useState('');
	const [modalMessage, setModalMessage] = useState('');
	const [modalAction, setModalAction] = useState('');

	return (
		<ModalContext.Provider
			value={{
				openModal,
				setOpenModal,
				openToast,
				setOpenToast,
				open,
				setOpen,
				message,
				setMessage,
				modalTitle,
				setModalTitle,
				modalMessage,
				setModalMessage,
				modalAction,
				setModalAction,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}

function useModalContext() {
	const context = useContext(ModalContext);

	if (context === undefined) throw new Error(Error);
	return context;
}

export { ModalContextProvider, useModalContext };
