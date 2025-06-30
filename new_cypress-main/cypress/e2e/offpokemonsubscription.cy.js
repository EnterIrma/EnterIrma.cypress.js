describe('Проверка отключения премиума', function () {  
    it('e2e тест на отключение премиум подписки', function () {   
         cy.visit('https://pokemonbattle.ru/'); // переходим на сайт 
         cy.get('input[id="k_email"]').type('USER_LOGIN');  // вводим логин
         cy.get('input[id="k_password"]').type('USER_PASSWORD'); // вводим пароль
         cy.get('button[type="submit"]').click(); // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header_card_trainer').click(); // нажимаем на аву тренера
         cy.wait(2000);
         cy.get('.k_cart_trainer_premium').click(); // нажимаем кнопку Покупка премиума
         cy.get('.button_cansel_premium > .profile__button').click(); // Нажимаем "Отменить подписку"
         cy.get(':nth-child(2) > .profile__button').click(); // Подтверждаем отмену
         cy.get('.k_page_cansel_ok_premium > .profile-mobile-wrapper > .k_pre_title_premium').contains('Вы отменили подписку :(');// Вижу текст после авторизации
         cy.get('.k_page_cansel_ok_premium > .profile-mobile-wrapper > .k_pre_title_premium').should('be.visible'); // Текст виден пользователям
     });
 });
