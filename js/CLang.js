var TEXT_GAMEOVER  = "CONGRATULATION! YOU WON!";
var TEXT_LOSE = "SORRY, THE PLAYER %s WON THIS GAME";
var TEXT_SCORE     = "YOUR SCORE";
var TEXT_RESTART   = "RESTART";
var TEXT_ARE_SURE = "ARE YOU SURE?";
var TEXT_SELECT_PLAYERS = "SELECT THE NUMBER OF PLAYERS!";
var TEXT_SELECT_COLOR = "SELECT A COLOR";
var TEXT_WELCOME = "WELCOME TO FOUR COLORS!";
var TEXT_TUTORIAL1 = "MATCH CARDS BY COLOR OR NUMBER AND BE THE FIRST TO GET RID OF THEM!\n\nTHE WINNER'S SCORE WILL BE THE SAME AS THE VALUE OF OTHER PLAYERS CARDS. REACH %s PTS TO WIN THE GAME!\n\nNUMBER CARDS VALUE: DIGIT ON THE CARD";
var TEXT_TUTORIAL2 = "ACTION CARDS WILL MIX THE GAME UP!\n\nDRAW TWO FORCES THE NEXT PLAYER TO PICK TWO CARDS AND FORFEIT THE TURN\n\nVALUE: +%s pts";
var TEXT_TUTORIAL3 = "SKIP CARD STOPS THE NEXT PLAYER\n\nVALUE: +%s pts";
var TEXT_TUTORIAL4 = "REVERSE CARD SWITCHES THE GAME WISE\n\nVALUE: +%s pts";
var TEXT_TUTORIAL5 = "THE WILD CARD CAN BE PLACED ON ANY CARD AT ANY TIME AND ALLOWS YOU TO CHANGE THE COLOR TO PLAY\n\nVALUE: +%s pts";
var TEXT_TUTORIAL6 = "THE WILD DRAW THREE IS A SPECIAL WILD THAT ALLOWS YOU TO CHANGE THE COLOR AND FORCES THE NEXT PLAYER TO PICK 3 CARDS. TO USE THIS CARD YOU MUST HAVE NO OTHER ALTERNATIVE CARDS TO PLAY\n\nVALUE: +%s pts";
var TEXT_TUTORIAL7 = "DO NOT FORGET TO PRESS THE ' 1 ' BUTTON WHEN YOU'LL HAVE ONLY ONE CARD LEFT OR YOU'LL PICK %s PENALTY CARDS!";
var TEXT_PLAYER_1 = "PLAYER 1";
var TEXT_PLAYER_2 = "PLAYER 2";
var TEXT_PLAYER_3 = "PLAYER 3";
var TEXT_PLAYER_4 = "PLAYER 4";
var TEXT_ALERT_1 = "YOU MUST PRESS ' 1 ' BUTTON WHEN YOU HAVE JUST ONE CARD LEFT. YOU GET %s PENALTY CARDS";
var TEXT_ALERT_2 = "%s GOT %s PENALTY CARDS FOR NOT SAYING ' 1 ' ";
var TEXT_PRELOADER_CONTINUE = "START";
var TEXT_DEVELOPED = "DEVELOPED BY";
var TEXT_SUMMARY = "SUMMARY";
var TEXT_PTS_TO_WINNER = "%s pts to winner";
var TEXT_WINNER = "WINNER!";
var TEXT_PLAYER_WON ="%s WON THE GAME!";


var TEXT_SHARE_IMAGE = "200x200.jpg";
var TEXT_SHARE_TITLE = "Congratulations!";
var TEXT_SHARE_MSG1 = "You collected <strong>";
var TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
var TEXT_SHARE_SHARE1 = "My score is ";
var TEXT_SHARE_SHARE2 = " points! Can you do better";

var userLang = navigator.language || navigator.userLanguage;

if(userLang=="ru-RU"){
    TEXT_GAMEOVER = "ПОЗДРАВЛЯЕМ! ВЫ ПОБЕДИЛИ!";
    TEXT_LOSE = "ИЗВИНИТЕ, ИГРОК %s ВЫИГРАЛ ЭТУ ИГРУ";
    TEXT_SCORE = "ВАШ СЧЕТ";
    TEXT_RESTART = "ПЕРЕЗАПУСК";
    TEXT_ARE_SURE = "ВЫ УВЕРЕНЫ?";
    TEXT_SELECT_PLAYERS = "ВЫБЕРИТЕ КОЛИЧЕСТВО ИГРОКОВ!";
    TEXT_SELECT_COLOR = "ВЫБЕРИТЕ ЦВЕТ";
    TEXT_WELCOME = "ДОБРО ПОЖАЛОВАТЬ В ЧЕТЫРЕ ЦВЕТА!";
    TEXT_TUTORIAL1 = "СОСТАВЬТЕ КАРТОЧКИ ПО ЦВЕТУ ИЛИ НОМЕРУ И ИЗБАВЬТЕСЬ ОТ НИХ ПЕРВЫМ!\n\nСЧЕТ ПОБЕДИТЕЛЯ БУДЕТ РАВЕН КАК СТОИМОСТЬ КАРТ ДРУГИХ ИГРОКОВ. НАБИРАЙТЕ %s БОЧКОВ, ЧТОБЫ ВЫИГРАТЬ!\n\ nЧИСЛО КАРТ ЗНАЧЕНИЕ: ЦИФРА НА КАРТЕ";
    TEXT_TUTORIAL2 = "КАРТЫ ДЕЙСТВИЙ СМЕШАЮТ ИГРУ!\n\nВЫБРАТЬ ДВЕ ЗАСТАВКИ СЛЕДУЮЩЕМУ ИГРОКУ ВЫБРАТЬ ДВЕ КАРТЫ И ПОТЕРЯТЬ ХОД\n\nСТОИМОСТЬ: +%s очков";
    TEXT_TUTORIAL3 = "ПРОПУСК КАРТЫ ОСТАНАВЛИВАЕТ СЛЕДУЮЩЕГО ИГРОКА\n\nЗНАЧЕНИЕ: +%s очков";
    TEXT_TUTORIAL4 = "ОБРАТНАЯ КАРТА ПЕРЕКЛЮЧАЕТ ИГРУ\n\nЗНАЧЕНИЕ: +%s очков";
    TEXT_TUTORIAL5 = "ДАЛЬНЯЯ КАРТА МОЖЕТ БЫТЬ ПОМЕЩЕНА НА ЛЮБУЮ КАРТУ В ЛЮБОЕ ВРЕМЯ И ПОЗВОЛЯЕТ ВАМ ИЗМЕНИТЬ ЦВЕТ ДЛЯ ИГРЫ\n\nЦЕННОСТЬ: +%s очков";
    TEXT_TUTORIAL6 = "ДЖОКЕР DRAW THREE – ЭТО СПЕЦИАЛЬНЫЙ ДОМИК, КОТОРЫЙ ПОЗВОЛЯЕТ ИЗМЕНИТЬ ЦВЕТ И ЗАСТАВЛЯЕТ СЛЕДУЮЩЕГО ИГРОКА ВЫБРАТЬ 3 КАРТЫ. ДЛЯ ИСПОЛЬЗОВАНИЯ ЭТОЙ КАРТЫ У ВАС НЕ ДОЛЖНО БЫТЬ ДРУГИХ АЛЬТЕРНАТИВНЫХ КАРТ ДЛЯ ИГРЫ\n\nЗНАЧЕНИЕ: +%s оч.";
    TEXT_TUTORIAL7 = "НЕ ЗАБУДЬТЕ НАЖАТЬ КНОПКУ ' 1 ', КОГДА У ВАС ОСТАЕТСЯ ТОЛЬКО ОДНА КАРТА, ИНАЧЕ ВЫ ВЫБЕРЕТЕ %s ШТРАФНЫХ КАРТ!";
    TEXT_PLAYER_1 = "ИГРОК 1";
    TEXT_PLAYER_2 = "ИГРОК 2";
    TEXT_PLAYER_3 = "ИГРОК 3";
    TEXT_PLAYER_4 = "ИГРОК 4";
    TEXT_ALERT_1 = "ВЫ ДОЛЖНЫ НАЖАТЬ КНОПКУ ' 1 ', КОГДА У ВАС ОСТАЕТСЯ ТОЛЬКО ОДНА КАРТА. ВЫ ПОЛУЧИТЕ %s ШТРАФНЫХ КАРТ";
    TEXT_ALERT_2 = "%s ПОЛУЧИЛ %s ШТРАФНЫХ КАРТ ЗА НЕ СКАЗАНУЮ '1' ";
    TEXT_PRELOADER_CONTINUE = "СТАРТ";
    TEXT_DEVELOPED = "РАЗРАБОТАН";
    TEXT_SUMMARY = "РЕЗЮМЕ";
    TEXT_PTS_TO_WINNER = "%s очков победителю";
    TEXT_WINNER = "ПОБЕДИТЕЛЬ!";
    TEXT_PLAYER_WON ="%s ВЫИГРАЛ ИГРУ!";
   
   
    TEXT_SHARE_IMAGE = "200x200.jpg";
    TEXT_SHARE_TITLE = "Поздравляем!";
    TEXT_SHARE_MSG1 = "Вы собрали <strong>";
    TEXT_SHARE_MSG2 = " баллы</strong>!<br><br>Поделитесь своим счетом с друзьями!";
    TEXT_SHARE_SHARE1 = "Мой счет ";
    TEXT_SHARE_SHARE2 = " Баллы! Можете ли вы сделать лучше";


}