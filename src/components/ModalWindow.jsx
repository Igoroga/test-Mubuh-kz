import React, { useState } from 'react';

const ModalWindow = ({
    taxSystems,
    refreshCompany,
    company,
    owner,
    onClose}) => {
    const [listCompany1, setListCompany] = useState({ ...company })
    const [ownerCompany1, setOwnerCompany] = useState({ ...owner })
    const [taxSystems1, setTaxSystems] = useState({ ...taxSystems })

    const handleRefreshCompany = () => {
        refreshCompany(listCompany1, ownerCompany1, taxSystems1)
        onClose()
      };

    return (
        <div className="modal">
            <div className="modal-content">
                <svg className="modal-close" onClick={onClose} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.01021 0.516222L8.00108 5.50421L12.9891 0.516222C13.6745 -0.172074 14.7976 -0.172074 15.4831 0.516222H15.4859C16.1714 1.20164 16.1714 2.3248 15.4859 3.01021L10.4951 8.00108L15.4859 12.9891C16.1714 13.6745 16.1714 14.7976 15.4859 15.4831V15.4859C14.7976 16.1714 13.6774 16.1714 12.9891 15.4859L8.00108 10.4951L3.01021 15.4859C2.3248 16.1714 1.20164 16.1714 0.516222 15.4859V15.4831C-0.172074 14.7976 -0.172074 13.6745 0.516222 12.9891L5.50421 8.00108L0.516222 3.01021C-0.169194 2.3248 -0.169194 1.20164 0.516222 0.516222C1.20164 -0.172074 2.3248 -0.172074 3.01021 0.516222Z" fill="#486377" />
                </svg>

                <h2 className="modal-name">Редактировать данные организации</h2>
                <div className="container">
                    <div onClick={() => setOwnerCompany({ ...ownerCompany1, short: 'ТОО' })} className={ownerCompany1.short === 'ТОО' ? 'inner-container-active' : 'inner-container'}>ТОО</div>
                    <div onClick={() => setOwnerCompany({ ...ownerCompany1, short: 'ИП' })} className={ownerCompany1.short === 'ИП' ? 'inner-container-active' : 'inner-container'}>ИП</div>
                    <div onClick={() => setOwnerCompany({ ...ownerCompany1, short: '' })} className={ownerCompany1.short !== 'ТОО' && ownerCompany1.short !== 'ИП' ? 'inner-container-active' : 'inner-container'}>Прочие</div>
                </div>
                <form>
                    {ownerCompany1.short !== 'ТОО' && ownerCompany1.short !== 'ИП' && (
                   <div>
                   <div className="checkbox-label-container">
                     <input
                       className={taxSystems1.code !== 'chp' && taxSystems1.code !== 'fiz' ? 'checkbox checked' : 'checkbox'}
                       onChange={() => setTaxSystems({ ...taxSystems1, code: 'ur' })}
                       type="checkbox"
                       name="entityType"
                       value="legal"
                       checked={taxSystems1.code !== 'chp' && taxSystems1.code !== 'fiz'}
                     />
                     <label className="selector-check">Юридические лица</label>
                   </div>
                   <div className="checkbox-label-container">
                     <input
                       className={taxSystems1.code === 'chp' ? 'checkbox checked' : 'checkbox'}
                       onChange={() => setTaxSystems({ ...taxSystems1, code: 'chp' })}
                       type="checkbox"
                       name="entityType"
                       value="private"
                       checked={taxSystems1.code === 'chp'}
                     />
                     <label className="selector-check">Частная практика</label>
                   </div>
                   <div className="checkbox-label-container">
                     <input
                       className={taxSystems1.code === 'fiz' ? 'checkbox checked' : 'checkbox'}
                       onChange={() => setTaxSystems({ ...taxSystems1, code: 'fiz' })}
                       type="checkbox"
                       name="entityType"
                       value="individual"
                       checked={taxSystems1.code === 'fiz'}
                     />
                     <label className="selector-check">Физические лица</label>
                   </div>
                 </div>)}
                 {taxSystems1.code !== 'fiz' && ownerCompany1.short !== 'ТОО' && ownerCompany1.short !== 'ИП' && (<div className="input-container">
                        <label className="selector-text" htmlFor="taxSystem">Выберите форму собственности</label>
                        <select id="taxSystem" value={taxSystems} onChange={(event) => setOwnerCompany({...ownerCompany1, full: event.target.value})}  className="select-field">
                            <option value="{ownerCompany1.full}">{ownerCompany1.full}</option>
                            <option value="ОТоварищество с ограниченной ответственностью">ОТоварищество с ограниченной ответственностью</option>
                            <option value="Полное товарищество">Полное товарищество</option>
                            <option value="Товарищество с дополнительной ответственностью">Товарищество с дополнительной ответственностью</option>
                            <option value="Акционерное общество">Акционерное общество</option>
                            <option value="Производственный кооператив">Производственный кооператив</option>
                        </select>
                    </div>)}
                    {taxSystems1.code !== 'chp' && taxSystems1.code !== 'fiz' &&(
                    <div className="input-container">
                        <label className="selector-text" htmlFor="taxSystem">Выберите систему налогообложения:</label>
                        <select id="taxSystem" value={taxSystems} onChange={(event) => setTaxSystems({...taxSystems1, full: event.target.value})}  className="select-field">
                            <option value="{taxSystems1.full}">{taxSystems1.full}</option>
                            <option value="Общеустановленный режим налогообложения">Общеустановленный режим налогообложения</option>
                            <option value="СНР с фиксированным вычетом">СНР с фиксированным вычетом</option>
                            <option value="СНР для крестьянских хозяйств">СНР для крестьянских хозяйств</option>
                            <option value="СНР для сельхозпроизводителей">СНР для сельхозпроизводителей</option>
                            <option value="Розничный налог">Розничный налог</option>
                        </select>
                    </div>)}
                    <div className="input-container">
                        <label className="selector-text" htmlFor="iin">Введите ИИН/БИН:</label>
                        <input type="text" id="iin" value={listCompany1.company_tin} onChange={(event) => setListCompany({...listCompany1, company_tin: event.target.value})} className="input-field" />
                    </div>
                    <div className="input-container">
                        <label className="selector-text" htmlFor="companyName">Введите название компании:</label>
                        <div className="input-wrapper">
                            <input type="text" id="input1" onChange={(event) => setOwnerCompany({...ownerCompany1, short: event.target.value})} value={ownerCompany1.short} className="input-ip" />
                            <input type="text" id="input2" onChange={(event) => setListCompany({...listCompany1, company_name: event.target.value})} value={listCompany1.company_name} className="input-name-company" />
                        </div>
                    </div>
                    <button onClick={handleRefreshCompany} className="save-button" type="button">Сохранить</button>
                </form>
            </div>
        </div>
    );
};

export default ModalWindow;