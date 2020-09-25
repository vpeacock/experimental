const joyErrorMessages = {
  requiredFormField: '{#label} \u{261E} \u{26A0} Обязательное поле формы ͡(ಠ_ಠ)',
  emptyParam: '{#label} \u{261E} \u{26A0} Поле не может быть пустым ┐( ˘_˘ )┌',
  incorrectEmail: '{#label} \u{261E} \u{26A0} Не корректный адрес электронной почты ┐( ˘_˘ )┌',
  passwordMin: '{#label} \u{261E} \u{26A0} Пароль должен иметь не менее {#limit} знаков ┐( ˘_˘ )┌',
  nameValidation: '{#label} \u{261E} \u{26A0} Имя не должно содержать цифры ┐( ˘_˘ )┌',
  nameMax: '{#label} \u{261E} \u{26A0} Имя должно состоять не более чем из {#limit} знаков ┐( ˘_˘ )┌',
  nameMin: '{#label} \u{261E} \u{26A0} Имя должно состоять не менее чем из {#limit} знаков ┐( ˘_˘ )┌',
  incorrectUrl: '{#label} \u{261E} \u{26A0} Не корректный формат ссылки ┐( ˘_˘ )┌',
};

const statusMessages = {
  unauthorizedError: 'Необходима авторизация ┌(ಠ_ಠ)┘',
  successfulAuthorization: 'Успешная авторизация(✿´‿`)',
  invalidUserData: '\u{261E} \u{26A0} Данные пользователя введены некорректно ┐( ˘_˘ )┌',
  userEmailBusy: '\u{261E} \u{26A0} Пользователь с таким e-mail уже зарегистрирован ͡๏̯͡๏',
  badRequest: '\u{261E} \u{26A0} Неверный запрос (ಠ_ಠ)',
  forbiddenDeleteArticle: '\u{261E} \u{26A0} Запрещено, удалить можно только свою статью ╮(︶▽︶)╭',
  articleNotFound: '\u{261E} \u{26A0} Статья с таким id не существует ┐( ˘_˘ )┌',
  invalidIdFormat: '\u{261E} \u{26A0} Некорректный формат ID ┐( ˘_˘ )┌',
  serverError: '\u{261E} \u{26A0} На сервере произошла ошибка ٩(͡๏̯͡๏)۶',
  emptyParams: (property) => `${property.value} Поле должно быть заполнено`,
  invalidUrlFormat: (property) => `${property.value} Некорректная ссылка`,
  nameMinLength: '\u{261E} \u{26A0} Минимальная длина имени должна быть не менее 2 символов ╮(︶▽︶)╭',
  nameMaxLength: '\u{261E} \u{26A0} Максимальная длина имени должна быть не более 30 символов ╮(︶▽︶)╭',
  invalidEmailFormat: '\u{261E} \u{26A0} Введён не корректный формат почты ┐( ˘_˘ )┌',
  invalidAuthDataError: '\u{261E} \u{26A0} Неверная почта или пароль ┌(ಠ_ಠ)┘',
};

module.exports = { joyErrorMessages, statusMessages };
