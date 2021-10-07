// Đối tượng validator
function Validator(options) {
  var selectorRules = {};

  // Hàm thực hiện validates
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
    var errorMessage;
    // Lấy ra cá rule của selector
    var rules = selectorRules[rule.selector];
    // Lặp qua từng rules và kiểm tra
    for (var i = 0; i < rules.length; i++) {
      errorMessage = rules[i](inputElement.value);
      // Nếu có lỗi thì dừng kiểm tra
      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add('invalid');
    } else {
      errorElement.innerText = '';
      inputElement.parentElement.classList.remove('invalid');
    }
    return !errorMessage;
  }
  var formElement = document.querySelector(options.form);
  if (formElement) {
    // Khi submit form thay hành vi mặc định bằng validate tất cả các rule
    formElement.onsubmit = (e) => {
      e.preventDefault();
      var isFormValid = true;

      // lặp qua từng rule và validate
      options.rules.forEach((rule) => {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });
      if (isFormValid) {
        if (typeof options.onsubmit === 'function') {
          var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
        }
      }
    };
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
