
export default class UserService {
  static async fetchCompany(setListCompany) {
    try {
      const response = await fetch('./dataset/companies.json');
      const data = await response.json();
      setListCompany(data);
      } catch (error) {
      console.log('Error occurred while executing the request:', error);
    }
  }

  static async fetchFormToSystem(setFormToSystem) {
    try {
      const response = await fetch('./dataset/form-to-system.json');
      const data = await response.json();
      return data;
      setFormToSystem(data)
    } catch (error) {
      console.log('Error occurred while executing the request:', error);
    }
  }

  static async fetchOwnerships(setOwnerships) {
    try {
      const response = await fetch('./dataset/ownerships.json');
      const data = await response.json();
      setOwnerships(data);
    } catch (error) {
      console.log('Error occurred while executing the request:', error);
    }
  }

  static async fetchTaxSystems(setTaxSystems) {
    try {
      const response = await fetch('./dataset/tax-systems.json');
      const data = await response.json();
      console.log(data);
      setTaxSystems(data)
    } catch (error) {
      console.log('Error occurred while executing the request:', error);
    }
  }

}