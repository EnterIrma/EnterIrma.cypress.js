describe('Проверка авторизации', function () {

     it('Верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден для пользователя
        })

 it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
        cy.get('#pass').type('iLoveqastudio'); // Ввела неверный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден для пользователя
        })

        it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('gerrman@dolnikov.ru'); // Ввела верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввела неверный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден для пользователя
        })

         it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввела логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден для пользователя
        })

 it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').click(); // Нажала восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввела почту
        cy.get('#restoreEmailButton').click(); // Нажала "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден для пользователя
        })

it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#mail').type('geRman@dolnikov.ru'); // Ввела верный логин с буквой в верхнем регистре.
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click(); // Нажала войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Вижу текст после авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователям
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден для пользователя
        })
       
})


