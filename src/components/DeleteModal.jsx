import React, { useState } from 'react';

const DeleteModal = ({
    onDeleteCompany,
    taxSystems,
    company,
    owner,
    onClose }) => {
    const [listCompany1, setListCompany] = useState({ ...company })
    const [ownerCompany1, setOwnerCompany] = useState({ ...owner })
    const [taxSystems1, setTaxSystems] = useState({ ...taxSystems })


    return (
        <div className="modal">
            <div className="modal-content-delete">
                <svg className="modal-close" onClick={onClose} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.01021 0.516222L8.00108 5.50421L12.9891 0.516222C13.6745 -0.172074 14.7976 -0.172074 15.4831 0.516222H15.4859C16.1714 1.20164 16.1714 2.3248 15.4859 3.01021L10.4951 8.00108L15.4859 12.9891C16.1714 13.6745 16.1714 14.7976 15.4859 15.4831V15.4859C14.7976 16.1714 13.6774 16.1714 12.9891 15.4859L8.00108 10.4951L3.01021 15.4859C2.3248 16.1714 1.20164 16.1714 0.516222 15.4859V15.4831C-0.172074 14.7976 -0.172074 13.6745 0.516222 12.9891L5.50421 8.00108L0.516222 3.01021C-0.169194 2.3248 -0.169194 1.20164 0.516222 0.516222C1.20164 -0.172074 2.3248 -0.172074 3.01021 0.516222Z" fill="#486377" />
                </svg>
                <h2 className="modal-name">Удаление организации</h2>
                <h2 className="modal-name-delete">Вы уверены, что хотите удалить организацию из списка?</h2>
                <div className="button-container-delete">
                    <button onClick={onClose} className="button-otmena">Отмена</button>
                    <button onClick={onDeleteCompany} className="button-delete">Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;