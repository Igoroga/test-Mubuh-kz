import { useEffect, useState } from 'react';
import noneLogo  from "../img/noneLogo.png";
import reduct  from "../img/Vector.png";
import deleteButton  from "../img/vectorDelete.png";
import ModalWindow from './ModalWindow';
import DeleteModal from './DeleteModal';


const ListCompany = ({ company, owner, taxSystems, onDeleteCompany, refreshCompany  }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const openDelete = () => {
    setIsDeleteOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDeleteOpen(false);
  };

    return (
      <>
      {isDeleteOpen && (
        <DeleteModal onDeleteCompany={() => onDeleteCompany(company.company_id)} company={company} owner={owner} taxSystems={taxSystems} onClose={closeModal} />
      )}
      {isModalOpen && (
        <ModalWindow refreshCompany={refreshCompany} company={company} owner={owner} taxSystems={taxSystems} onClose={closeModal} />
      )}
      <div className='company-container'>
      <img className='logoCompany' src={company.logo || noneLogo} alt="Company Logo" />
      <div className="companyNameInn">
        <p className="companyName">{owner.short} {company.company_name}</p>
        <p className="companyName iin">ИИН/БИН {company.company_tin}</p>
      </div>
      <img className="reductButton" src={reduct} alt="reduct" onClick={openModal} />
      <img className="deleteButton" src={deleteButton} alt="deleteButton" onClick={openDelete}/>
    </div>
    </>
    );
  };

export default ListCompany;