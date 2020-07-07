export class UserInfo {
    constructor({profileName, job}) {
      this._name = profileName.textContent;
      this._job = job.textContent;
    }
    // Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo() {
      const data = {}
  
      data.name = this._name;
      data.job = this._job;
  
      return data
  
    }
    // Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo(data) {
      this._name = data.name;
      this._job = data.job;
      
    }
  }