import { useEffect, useState } from 'react';
import './App.css';
import ListCompany from './components/ListCompany';
import UserService from './api/fetchCompany';
import Spinner from './components/Spiner';


function App() {
const [listCompany, setListCompany] = useState([])
const [ownerCompany, setOwnerCompany] = useState([])
const [taxSystems, setTaxSystems] = useState([])
const [isLoading, setisLoading] = useState(true)

useEffect(() => {
  Promise.all([
    UserService.fetchCompany(setListCompany),
    UserService.fetchOwnerships(setOwnerCompany),
    UserService.fetchTaxSystems(setTaxSystems),
  ]) .then(() => setisLoading(false))
  .catch(error => {
    console.log('error');
    setisLoading(true);
  });
}, []);

const deleteCompany = (idCom) => {
setListCompany(listCompany.filter((company) => company.company_id !== idCom));
console.log(listCompany);
}


// Функция которая будет перезаписовать состояния когда мы сохраним наши изменения в редакторе
const refreshCompany = (listCompany1, ownerCompany1, taxSystems1) => {
  setListCompany(listCompany.map((company) => {
    if (company.company_id === listCompany1.company_id) {
      return {
        ...listCompany1
      };
    }
    return company;
  }));

  setOwnerCompany(ownerCompany.map((owner) => {
    if (owner.id === ownerCompany1.id) {
      return {
        ...ownerCompany1
      };
    }
    return owner;
  }));

  setTaxSystems(taxSystems.map((system) => {
    if (system.id === taxSystems1.id) {
      return {
        ...taxSystems1
      };
    }
    return system;
    
  }));
  console.log(listCompany);
};


if (isLoading) {
  return (
    <div className="App">
      <Spinner/>
    </div>
  );
}

return (
  <div className="body-list">
  <h1 className="myOrganization">Мои организации</h1>
  <div className="company-list">
  {listCompany.map((company,index) => (
  <ListCompany key={company.company_id}
  company={company}
  owner={ownerCompany.find(obj => obj.id === company.company_id)}
  taxSystems={taxSystems.find(obj => obj.id === company.company_id)}
  onDeleteCompany={() => deleteCompany(company.company_id)}
  refreshCompany={refreshCompany}
  />
))}
  </div>
  </div>
);
}

export default App;
