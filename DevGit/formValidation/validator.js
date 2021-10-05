// Đối tượng validator
function Validator(options) {
  var selectorRules = {};

  // Hàm thực hiện validates
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
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
      // lưu lại rule cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      var inputElement = formElement.querySelector(rule.selector);
      // Xử lí trường hợp blur khỏi input
      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
      }
      // Xử lí mỗi khi người dùng nhập vào input
      inputElement.oninput = function () {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        errorElement.innerText = '';
        inputElement.parentElement.classList.remove('invalid');
      };
    });
  }
}
// Định nghĩa các rules
// Nguyên tắc các rule :
// 1. khi có lỗi trả ra message lỗi
// 2. Khi không có lỗi không trả ra gì cả
Validator.isRequired = (selector, message) => {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message || 'Vui lòng vào trường này';
    },
  };
};
Validator.isEmail = (selector) => {
  return {
    selector: selector,
    test: function (value) {
      // Kiểm tra xem có phải là email hay không  nguồn stackoverflow
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase()) ? undefined : 'Trường này phải là email';
    },
  };
};
Validator.minLength = (selector, min) => {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
    },
  };
};
Validator.isConfirmed = (selector, getComfirmValue, message) => {
  return {
    selector: selector,
    test: function (value) {
      return value === getComfirmValue()
        ? undefined
        : message || 'Giá trị nhập vào không chính xác';
    },
  };
};
