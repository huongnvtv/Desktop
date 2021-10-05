// Đối tượng validator
function Validator(options) {
  // Hàm thực hiện validates
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector('.form-message');
    var errorMessage = rule.test(inputElement.value);
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add('invalid');
    } else {
      errorElement.innerText = '';
      inputElement.parentElement.classList.remove('invalid');
    }
  }
  var formElement = document.querySelector(options.form);
  if (formElement) {
    options.rules.forEach((rule) => {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
      }
    });
  }
}
// Định nghĩa các rules
// Nguyên tắc các rule :
// 1. khi có lỗi trả ra message lỗi
// 2. Khi không có lỗi không trả ra gì cả
Validator.isRequired = (selector) => {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : 'Vui lòng vào trường này';
    },
  };
};
Validator.isEmail = (selector) => {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
      return value.match(regex) ? undefined : 'Trường này phải là email';
    },
  };
};
