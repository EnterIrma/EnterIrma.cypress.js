describe('Проверка на подключение премиума', function () {  
    it('e2e тест на подключение премиум-подписки', function () {   
         cy.visit('https://pokemonbattle.ru/'); // переходим на сайт 
         cy.get('input[id="k_email"]').type('USER_LOGIN');  // вводим логин
         cy.get('input[id="k_password"]').type('USER_PASSWORD'); // вводим пароль
         cy.get('button[type="submit"]').click(); // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header_card_trainer').click(); // клик в шапке на аву тренера
         cy.wait(2000);
         cy.get('.k_cart_trainer_premium').click(); // нажимаем кнопку Покупка премиума
         cy.get('.auth__input').type('5'); // вводим количество дней
         cy.get('.auth__form > .button_to_down > .profile__button').click(); // Нажимаем "К оплате"
         cy.get('.card_number').type('4620869113632996'); // вводим номер карты
         cy.get('.card_csv').type('125'); // вводим CVV карты
         cy.get('.card_date').type('1226'); // вводим срок действия карты
         cy.get('.card_name').type('NAME'); // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456'); // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible'); // проверяем наличие и видимость сообщения об успешной покупке
     });
 });

