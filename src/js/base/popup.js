class Popup {
  constructor() {
    this.popups = document.querySelectorAll('[popup]');
    this.btnsOpen = document.querySelectorAll('[popup-open]');
    this.btnsClose = document.querySelectorAll('[popup-close]');
    this.init();
  }
  init() {
    try {
      this.open();
      this.close();
    } catch (error) {
      console.log(`Attribute popup not found`);
    }
  }
  open() {
    this.btnsOpen.forEach(btn => {
      btn.addEventListener('click', () => {
        let openPopupBtn = btn.getAttribute('popup-open');
        this.toggle(openPopupBtn);
      });
    });
  }
  close() {
    this.btnsClose.forEach(btn => {
      btn.addEventListener('click', () => {
        let closePopupBtn = btn.getAttribute('popup-close');
        this.toggle(closePopupBtn);
      });
    });
  }
  toggle(attribyte) {
    document
      .querySelector(`[popup="${attribyte}"]`)
      .classList.toggle('popup__active');
  }
}

const poup = new Popup();
