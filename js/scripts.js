
$( document ).ready(function() {

    AOS.init({
        duration: 1000,
        disable: 'mobile'
    })

    $(".collapse-button").click(function () {
        $(this).toggleClass('show')
        $('.collapse-content').slideToggle()
    });

    if (screen.width > 990) {
        $('.lang-select').select2();
    } else {
        $('.lang-select-mobile').select2();
    }


    //
    // var result = [];
    //
    // $.get( "https://dex.binance.org/api/v1/mini/ticker/24hr?symbol=VTBC-C26M_BNB", function( outerData ) {
    //     $.get( "https://dex.binance.org/api/v1/mini/ticker/24hr", function( data ) {
    //         $.get( "https://dex.binance.org/api/v1/mini/tokens", function( innerData ) {
    //             $.get( "https://dex.binance.org/api/v1/ticker/24hr", function( innerInnerData ) {
    //                 // console.log(data)
    //                 // console.log(innerData)
    //                 // console.log(innerInnerData)
    //                 var bnbToUsd = parseFloat(innerInnerData.find(x => x.symbol == 'BNB_BUSD-BD1').lastPrice);
    //                 var btbcToBnb = parseFloat(data.find(x => x.symbol == 'VTBC-C26M_BNB').lastPrice);
    //                 for (let i = 0; i < data.length; i++) {
    //                     var token = innerData.find(x => data[i].baseAssetName == x.symbol)
    //                     var totalSupply = null;
    //                     if (token) {
    //                         totalSupply = token.total_supply;
    //                     }
    //                     result.push({
    //                         capitalization: parseFloat(totalSupply) * parseFloat(data[i].lastPrice),
    //                         symbol: data[i].symbol
    //                     });
    //                 }
    //
    //                 result.sort((a, b) => (a.capitalization > b.capitalization) ? -1 : 1)
    //                 result = result.filter(x => x.capitalization > 0);
    //                 // console.log(result)
    //                 var rank = result.findIndex(x => x.symbol == 'VTBC-C26M_BNB') + 1;
    //                 $( "#global-rank" ).html( rank );
    //
    //                 $( "#price" ).html( '$' + parseFloat(bnbToUsd * btbcToBnb).toFixed(3) );
    //                 $( "#volume" ).html( parseFloat(outerData[0].quoteVolume).toFixed(3) + ' ' + 'BNB' );
    //                 $( "#total-market-cap" ).html( '$' + parseFloat(bnbToUsd * btbcToBnb * 1000000).toFixed(0) );
    //                 $( "#vtbc-key" ).html(parseFloat( 26 / (bnbToUsd * btbcToBnb)).toFixed(2) + ' ' + 'VTBC');
    //             });
    //         });
    //     });
    // });

    var dictionary = {
        EN: {
            menuItemOne: 'Products',
            menuItemTwo: 'Token',
            menuItemThree: 'Team',
            menuItemFour: 'About',
            menuItemFive: 'Contact us',
            tbccVPN: 'TBCC Wallet — blockchain wallet for everyone.',
            mainH2: 'Buy, store, send, exchange your cryptocurrency with an easy-to-use and convinient wallet.',
            mainCaptionOne: 'Are you in a search for the best cryptocurrency wallet?',
            mainPBlockOne: '6 reasons to choose TBCC Wallet',
            advItemOne: 'Track charts and prices within the wallet',
            advItemTwo: 'Buy crypto assets in several seconds',
            advItemThree: 'Your personal information is never collected',
            advItemFour: 'Keep your assets safe via TBCC VPN',
            advItemFive: 'Exchange your crypto without leaving the app',
            advItemSix: 'Own a possibility of voiting',
            mainCaptionTwo: 'Your wallet - your rules',
            rulesItemOne: 'Decentralized',
            rulesItemTwo: 'Convinient',
            rulesItemThree: 'Secure',
            rulesItemFour: 'Flexible',
            mainUlBlockLiOne: '• Simple and easy to use interface;',
            mainUlBlockLiTwo: '• More secure than centralized VPNs – be sure that all your data and transactions will be safe',
            mainUlBlockLiThree: '• TBCC VPN doesn’t collect logs',
            mainUlBlockLiFour: '• It has no single point of failure that is why it can’t be blocked;',
            mainUlBlockLiFive: '• TBCC VPN users can’t be identified by payments or traffic trace',
            mainUlBlockLiSix: '• Fast internet connection.',
            mainCaptionThree: 'Buy crypto assets with your credit card',
            mainPBlockTwo: 'Get as many cryptocurrency as you want in several seconds under the best rate',
            textButtonOne: 'Download now',
            textButtonTwo: 'Download now',
            textButtonThree: 'Try it now',
            textButtonFour: 'Try it now',
            textButtonFive: 'Get it now',
            textButtonSix: 'Buy',
            textButtonSeven: 'Buy',
            textButtonEight: 'Buy',
            mainCaptionFour: 'Decentralized trading',
            mainPBlockThree: 'The wallet works smoothly with the Binance DEX protocols, which allows you to make instant transactions on a decentralized exchange.',
            mainCaptionFive: 'Simple Exchange',
            mainPBlockFour: 'Exchange between any assets to diversify your portfolio Change your cryptocurrency at any time, in any place under the best rate.',
            mainCaptionSix: 'Safety and anonymity ',
            mainPBlock: '                        You are in control of all your digital assets. We will never get an access to your personal information or data.',
            mainH5One: 'Keep Your Data Private',
            mainH5Two: 'Private & Safe',
            mainH5Three: '24/7  Support',
            mainH5Four: 'Friendly interface',
            mainH5Five: 'One-click easy',
            mainPBlockFive: 'TBCC Wallet encrypts private keys and transaction data on your device and for your eyes only. Your data remains private - no account setup required. ',
            mainPBlockSix: 'Take your security to the next-level by using TBCC VPN. Even a supercomputer will not get your data. ',
            mainPBlockSeven: 'We won\'t leave you out on your own. TBCC Wallet provides an online 24/7 customer support to get your questions answered. ',
            mainPBlockEight: 'Interface of TBCC Wallet is absolutely easy-to use. Even if you have never worked with crypto assets before - you will not have problems with understanding of it with our app.',
            mainPBlockNine: 'Via TBCC Wallet you can manage your assets in several clicks. The app is absolutely convinient - you can do all necessary operation in one place. ',
            footerItemOne: 'Contact us',
            footerItemTwo: 'follow us',
            footerItemThree: 'Return Policy',
            footerItemFour: 'Terms of use',
            footerItemFive: 'Privacy Policy',
            footerItemSix: 'Complete description of services offered',
            tokenH1: 'Start to invest in TBCC Labs tokens and earn on it',
            tokenH2: 'Try our own tokens and learn its potential. You can buy them via TBCC Wallet app or through Binance DEX',
            tokenCaptionOne: 'Trade on Binance DEX',
            tokenPBlockOne: 'With TBCС (TBC), you can pay for products in partner stores, trade it on DEX, use it collateral on lending platforms, as well as in loyalty programs and voting. TBCC (TBC) works with BEP 2 protocol on Binance DEX.',
            tokenPBlockTwo: 'VTBC token is the new digital asset that is released by TBCC VPN. With VTBC token you can trade on Binance DEX in pair with BNB, use it to buy VPN key (to use the TBCC VPN app) and also receive it via AirDrop. It works smoothly with BEP 8 protocols on Binance DEX.',
            tokenPBlockThree: 'The main mission of VOTE mini token is to give users an opportunity of participating in voting. The mechanism of VOTE mini token usage is quite simple — when the voting is open, you need to open the official website with it and give your vote “for” or “against” with VOTE mini token.',
            foundedIn: 'Founded in',
            numberOfUsers: 'Number of users',
            tbccCoin: 'TBCC coin purchases',
            digitalAssets: 'Digital assets',
            productsH1: 'Full service wallet',
            productsH2: 'Now you no longer need to look for additional applications. Now you no longer need to look for additional applications. Find all needed services in one place',
            productsPBlockOne: 'Buy and sell cryptocurrency from any place in the world in several seconds with maximum comfort for you.',
            productsPBlockTwo: 'Send and receive crypto safely to other addresses without extra commission from wallet.',
            productsCaptionOne: 'Exchange. Anywhere. Anytime.',
            productsCaptionTwo: 'Send & Receive',
            productsCaptionThree: 'Trade on Binance DEX',
            productsCaptionFour: 'TBCC Wallet Market',
            productsCaptionFive: 'Available types of payments',
            productsCaptionSix: 'Contactless payments',
            productsCaptionSeven: 'QR-Code payments',
            productsPBlockThree: 'Trade on Binance DEX from TBCC Wallet in real time with easy-to-use interface.',
            productsPBlockFour: 'Via market you can buy keys for your TBCC VPN app, premium subscription, make online payments in partner stores via TBCC card',
            productsPBlockFive: 'Accept crypto payments and donations from your online customers.',
            productsPBlockSix: ' Accept Coins on your smartphone or tablet at your retail store or restaurant.',
            key: 'VPN key ',
            aboutH1: 'TBCC Wallet assists people to control and manage their wealth',
            aboutH2: 'TBCC VPN is one of the services that is provided to users by TBCC Labs. The mission of TBCC VPN is to provide safe and fast internet connection without any logs, spy or selling data. We want to help our users to forget about cyber borders, without compromising the safety of data. Our priority is to make all your transactions fast and secure.',
            globalServers: 'Global servers',
            aboutPBlockOne: 'At TBCC Wallet we pay attention to every detail, from pixel-perfect icons to full services, creating a cryptocurrency app that will fit everyone.',
            aboutCaptionOne: 'Buy, Trade, Manage, and Exchange cryptocurrency on your mobile phone in any time',
            keyBenefits: 'Key benefits',
            aboutCaptionTwo: 'Our key features',
            aboutPBlockTwo: 'Our goal is to make it fun and easy to learn, understand and use cryptocurrency.',
            aboutPBlockThree: 'No trivial outdated terms, that are hard to understand. No confusing steps — we think of comfort that you should have while using the app.',
            aboutItemOne: 'Safe',
            aboutItemTwo: 'Reliable',
            aboutItemThree: 'Trusted',
            aboutItemFour: 'Modern',
            aboutItemFive: 'Convinient',
            teamCaptionOne: 'We are TBCC Wallet',
            teamPBlockOne: 'TBCC Wallet is a blockchain wallet for everyone. Our mission is to make your work with crypto assets easy, convinient, safe and understandable. We are always in a search for new services to make the app better for you to use.',
            contactsCaptionOne: 'Contact Us',
            contactsPBlockOne: 'Fill in the form if you want to contact us',
            contactFormFName: 'First Name',
            contactFormLName: 'Last Name',
            contactFormEmail: 'Email',
            contactFormTopic: 'Topic',
            contactFormMessage: 'Message',
            contactsButton: 'Send'
        },
        RU: {
            menuItemOne: 'Продукты',
            menuItemTwo: 'Токен',
            menuItemThree: 'Команда',
            menuItemFour: 'О сервисе',
            menuItemFive: 'Контакты',
            tbccVPN: 'TBCC Wallet - блокчейн кошелек для каждого',
            mainH2: 'Покупайте, храните, отправляйте, обменивайте свою криптовалюту с помощью простого в использовании и удобного кошелька.',
            mainCaptionOne: 'Вы ищете лучший кошелек для криптовалюты?',
            mainPBlockOne: '6 причин для выбора TBCC Wallet',
            advItemOne: 'Следите за графиками и ценами в приложении мобильного кошелька',
            advItemTwo: 'Ваша личная информация никогда не будет собираться и записываться',
            advItemThree: 'Обменивайте свою криптовалюту, не выходя из приложения',
            advItemFour: 'Покупайте криптоактивы за несколько секунд',
            advItemFive: 'Защитите свои активы с помощью TBCC VPN',
            advItemSix: 'Возможность голосования',
            mainCaptionTwo: 'Ваш кошелек - Ваши правила',
            rulesItemOne: 'Децентрализованный',
            rulesItemTwo: 'Удобный',
            rulesItemThree: 'Безопасный',
            rulesItemFour: 'Свободный',
            mainCaptionThree: 'Покупайте криптоактивы с помощью кредитной или дебетовой карты.',
            mainPBlockTwo: 'Получите столько криптовалюты, сколько хотите, за несколько секунд по лучшему курсу',
            textButtonOne: 'Загрузить сейчас',
            textButtonTwo: 'Загрузить сейчас',
            textButtonThree: 'Начать работу',
            textButtonFour: 'Начать работу',
            textButtonFive: 'Установить сейчас',
            textButtonSix: 'Купить',
            textButtonSeven: 'Купить',
            textButtonEight: 'Купить',
            mainCaptionFour: 'Децентрализованная торговля',
            mainPBlockThree: 'Кошелек бесперебойно работает с протоколами Binance DEX, что позволяет совершать мгновенные транзакции или делать оперативные торги на децентрализованной бирже.',
            mainCaptionFive: 'Простой обмен',
            mainPBlockFour: 'Совершайте процесс обмена между любыми активами для диверсификации вашего портфеля. Меняйте свою криптовалюту в любое время и в любом месте по лучшему курсу.',
            mainCaptionSix: 'Безопасность и анонимность',
            mainPBlock: 'Вы контролируете все свои цифровые активы. Мы никогда не получим доступ к Вашей личной информации или данным.',
            mainH5One: 'Храните Ваши данные в тайне',
            mainH5Two: 'Частный и безопасный',
            mainH5Three: 'Поддержка пользователей 24/7 ',
            mainH5Four: 'Понятный интерфейс',
            mainH5Five: 'Легкость в один клик',
            mainPBlockFive: 'TBCC Wallet позволяет шифровать личные ключи и данные транзакций на Вашем устройстве и только для Ваших глаз. Ваши данные остаются конфиденциальными - настройка учетной записи не требуется.',
            mainPBlockSix: 'Поднимите свою безопасность на новый уровень с помощью приложения TBCC VPN. Даже суперкомпьютер не получит доступа к Вашим данным',
            mainPBlockSeven: 'Мы не оставим Вас в одиночку. TBCC Wallet предоставляет онлайн-службу круглосуточной поддержки клиентов, чтобы Вы могли получить ответы на Ваши вопросы ',
            mainPBlockEight: 'Интерфейс кошелька TBCC очень прост в использовании. Даже если Вы никогда раньше не работали с криптоактивами - у Вас не возникнет проблем с пониманием этого во время использования нашего приложения',
            mainPBlockNine: 'При помощи TBCC Wallet Вы можете управлять своими активами в несколько кликов. Приложение абсолютно удобное - все необходимые операции можно выполнять в одном месте.',
            footerItemOne: 'свяжитесь с нами',
            footerItemTwo: 'Следите и подписывайтесь на наши социальные сети',
            footerItemThree: 'Политика возврата',
            footerItemFour: 'Правила использования',
            footerItemFive: 'Политика конфиденциальности',
            footerItemSix: 'Полное описание предлагаемых сервисов',
            tokenH1: 'Начните инвестировать в токены, выпущенные TBCC Labs и зарабатывайте на этом',
            tokenH2: 'Попробуйте использовать наши собственные токены и узнайте их потенциал. Вы можете купить их через приложение TBCC Wallet или через Binance DEX.',
            tokenCaptionOne: 'VTBC - новый токен в блокчейн',
            tokenPBlockOne: 'С помощью TBCС (TBC) Вы можете оплачивать товары в магазинах-партнерах, торговать ими на DEX, использовать в качестве залога на платформах кредитования, а также в программах лояльности и для голосования. TBCC (TBC) работает с протоколом BEP 2 на платформе Binance DEX',
            tokenPBlockTwo: 'Токен VTBC - это новый цифровой актив, выпущенный TBCC VPN. С токеном VTBC Вы можете торговать на Binance DEX в паре с BNB, использовать его для покупки ключа VPN (для использования приложения TBCC VPN), а также получать его через AirDrop. Он беcперебойно работает с протоколами BEP 8 на Binance DEX.',
            tokenPBlockThree: 'Основная миссия мини-токена VOTE - дать пользователям возможность участвовать в голосовании. Механизм использования мини-токена VOTE достаточно прост - когда голосование открыто, вам нужно перейти на официальный сайт голосования и отдать свой голос  "за" или "против" при помощи мини токена VOTE.',
            foundedIn: 'Основан в',
            numberOfUsers: 'Количество пользователей',
            tbccCoin: 'Количество покупок TBCC Coin',
            digitalAssets: 'Цифровые активы',
            productsH1: 'Кошелек с полным набором услуг',
            productsH2: 'Теперь Вам больше не нужно искать дополнительные приложения. Найдите все необходимые услуги в одном месте.',
            productsPBlockOne: 'Покупайте и продавайте криптовалюту из любой точки мира за несколько секунд с максимальным комфортом для Вас.',
            productsPBlockTwo: 'Отправляйте и получайте криптовалюту безопасно на другие адреса без дополнительной комиссии со стороны кошелька.',
            productsCaptionOne: 'Совершайте обмен. В любом месте. В любое время.',
            productsCaptionTwo: 'Отправляйте и Получайте',
            productsCaptionThree: 'Совершайте торги на BINANCE DEX',
            productsCaptionFour: 'TBCC Wallet Маркет',
            productsCaptionFive: 'Доступные типы платежей',
            productsCaptionSix: 'Бесконтактные платежи',
            productsCaptionSeven: 'Платежи по QR-коду',
            productsPBlockThree: 'Осуществляйте торги на Binance DEX из приложения TBCC Wallet в реальном времени с помощью удобного интерфейса',
            productsPBlockFour: 'При помощи Маркета Вы можете купить ключи для своего TBCC VPN приложения, премиум-подписку, совершать онлайн-платежи в магазинах-партнерах с помощью карты TBCC.',
            productsPBlockFive: 'Принимайте криптовалютные платежи и пожертвования от ваших онлайн-клиентов.',
            productsPBlockSix: 'Принимайте токены на свой смартфон или планшет в розничном магазине или ресторане',
            aboutH1: 'TBCC Wallet помогает людям контролировать свое состояние и управлять им',
            aboutPBlockOne: 'В TBCC Wallet мы уделяем внимание каждой детали, от идеальных пиксельных иконок до готовых услуг, создавая криптовалютное приложение, которое будет удобно каждому.',
            aboutCaptionOne: 'Покупайте, участвуйте в торгах, управляйте и обменивайте криптовалюту на своем мобильном телефоне в любое время',
            keyBenefits: 'Основные преимущества',
            aboutCaptionTwo: 'Наши ключевые особенности',
            aboutPBlockTwo: 'Наша цель - сделать обучение, понимание и использование криптовалюты интересным и простым',
            aboutH3One: 'Расширенный интернет-серфинг',
            aboutH3Two: 'Полностью анонимный',
            aboutH3Three: 'Децентрализованный',
            aboutPBlockThree: 'Никаких тривиальных устаревших терминов, которые сложно понять. Никаких запутанных шагов - мы думаем о комфорте, который должен быть у Вас при использовании приложения.',
            aboutItemOne: 'Безопасный',
            aboutItemTwo: 'Заслуживающий доверия',
            aboutItemThree: 'Надежный',
            aboutItemFour: 'Современный',
            aboutItemFive: 'Удобный',
            teamCaptionOne: 'Мы - это TBCC Wallet',
            teamPBlockOne: 'TBCC Wallet - это блокчейн кошелек для всех. Наша миссия - сделать Вашу работу с криптоактивами простой, удобной, безопасной и понятной. Мы всегда находимся в поиске новых услуг, чтобы сделать приложение более удобным для Вас.',
            contactsCaptionOne: 'Свяжитесь с нами',
            contactsPBlockOne: 'Заполните форму ниже, если у вас есть вопросы и предложения',
            contactFormFName: 'Имя',
            contactFormLName: 'Фамилия',
            contactFormEmail: 'Электронный адрес',
            contactFormTopic: 'Тема',
            contactFormMessage: 'Ваше сообщение',
            contactsButton: 'Отправить',
        }
    }

    var language = 'EN';

    if(localStorage.getItem('todoLang')){
        $('.lang').val(localStorage.getItem('todoLang'));
        console.log('kdjdj')
        setLanguage(dictionary, localStorage.getItem('todoLang'));
        language = localStorage.getItem('todoLang');
    } else {
        setLanguage(dictionary, language);
    }

    $('.lang').change(function () {
        language = $(this).val();
        setLanguage(dictionary, language);
        localStorage.setItem('todoLang', language);
    });



});

function compare( a, b ) {
    if ( a.capitalization < b.capitalization ){
        return -1;
    }
    if ( a.capitalization > b.capitalization ){
        return 1;
    }
    return 0;
}

function setLanguage(dictionary, language)
{
    $('#menuItemOne').text(dictionary[language].menuItemOne);
    $('#menuItemTwo').text(dictionary[language].menuItemTwo);
    $('#menuItemThree').text(dictionary[language].menuItemThree);
    $('#menuItemFour').text(dictionary[language].menuItemFour);
    $('#menuItemFive').text(dictionary[language].menuItemFive);
    $('#tbccVPN').text(dictionary[language].tbccVPN);
    $('#mainH2').text(dictionary[language].mainH2);
    $('#mainCaptionOne').text(dictionary[language].mainCaptionOne);
    $('#mainPBlockOne').text(dictionary[language].mainPBlockOne);
    $('#advItemOne').text(dictionary[language].advItemOne);
    $('#advItemTwo').text(dictionary[language].advItemTwo);
    $('#advItemThree').text(dictionary[language].advItemThree);
    $('#advItemFour').text(dictionary[language].advItemFour);
    $('#advItemFive').text(dictionary[language].advItemFive);
    $('#advItemSix').text(dictionary[language].advItemSix);
    $('#mainCaptionTwo').text(dictionary[language].mainCaptionTwo);
    $('#rulesItemOne').text(dictionary[language].rulesItemOne);
    $('#rulesItemTwo').text(dictionary[language].rulesItemTwo);
    $('#rulesItemThree').text(dictionary[language].rulesItemThree);
    $('#rulesItemFour').text(dictionary[language].rulesItemFour);
    $('#mainCaptionThree').text(dictionary[language].mainCaptionThree);
    $('#mainCaptionFour').text(dictionary[language].mainCaptionFour);
    $('#mainCaptionFive').text(dictionary[language].mainCaptionFive);
    $('#mainCaptionSix').text(dictionary[language].mainCaptionSix);
    $('#mainPBlockTwo').text(dictionary[language].mainPBlockTwo);
    $('#mainPBlock').text(dictionary[language].mainPBlock);
    $('#textButtonOne').text(dictionary[language].textButtonOne);
    $('#textButtonTwo').text(dictionary[language].textButtonTwo);
    $('#textButtonThree').text(dictionary[language].textButtonTwo);
    $('#textButtonFour').text(dictionary[language].textButtonFour);
    $('#textButtonFive').text(dictionary[language].textButtonFive);
    $('#textButtonSix').text(dictionary[language].textButtonSix);
    $('#textButtonSeven').text(dictionary[language].textButtonSeven);
    $('#textButtonEight').text(dictionary[language].textButtonEight);
    $('#mainPBlockThree').text(dictionary[language].mainPBlockThree);
    $('#mainPBlockFour').text(dictionary[language].mainPBlockFour);
    $('#mainH5One').text(dictionary[language].mainH5One);
    $('#mainH5Two').text(dictionary[language].mainH5Two);
    $('#mainH5Three').text(dictionary[language].mainH5Three);
    $('#mainH5Four').text(dictionary[language].mainH5Four);
    $('#mainH5Five').text(dictionary[language].mainH5Five);
    $('#mainPBlockFive').text(dictionary[language].mainPBlockFive);
    $('#mainPBlockSix').text(dictionary[language].mainPBlockSix);
    $('#mainPBlockSeven').text(dictionary[language].mainPBlockSeven);
    $('#mainPBlockEight').text(dictionary[language].mainPBlockEight);
    $('#mainPBlockNine').text(dictionary[language].mainPBlockNine);
    $('#footerItemOne').text(dictionary[language].footerItemOne);
    $('#footerItemFour').text(dictionary[language].footerItemFour);
    $('#footerItemFive').text(dictionary[language].footerItemFive);
    $('#tokenH1').text(dictionary[language].tokenH1);
    $('#tokenH2').text(dictionary[language].tokenH2);
    $('#tokenCaptionOne').text(dictionary[language].tokenCaptionOne);
    $('#tokenPBlockOne').text(dictionary[language].tokenPBlockOne);
    $('#tokenPBlockTwo').text(dictionary[language].tokenPBlockTwo);
    $('#tokenPBlockThree').text(dictionary[language].tokenPBlockThree);
    $('#tokenPBlockFour').text(dictionary[language].tokenPBlockFour);
    $('#tokenCaptionTwo').text(dictionary[language].tokenCaptionTwo);
    $('#tokenPItemOne').text(dictionary[language].tokenPItemOne);
    $('#tokenPItemTwo').text(dictionary[language].tokenPItemTwo);
    $('#tokenPItemThree').text(dictionary[language].tokenPItemThree);
    $('#tokenCaptionThree').text(dictionary[language].tokenCaptionThree);
    $('#foundedIn').text(dictionary[language].foundedIn);
    $('#numberOfUsers').text(dictionary[language].numberOfUsers);
    $('#tbccCoin').text(dictionary[language].tbccCoin);
    $('#digitalAssets').text(dictionary[language].digitalAssets);
    $('#productsH1').text(dictionary[language].productsH1);
    $('#productsH2').text(dictionary[language].productsH2);
    $('#productsPBlockOne').text(dictionary[language].productsPBlockOne);
    $('#productsPBlockTwo').text(dictionary[language].productsPBlockTwo);
    $('#productsCaptionOne').text(dictionary[language].productsCaptionOne);
    $('#productsCaptionTwo').text(dictionary[language].productsCaptionTwo);
    $('#productsCaptionThree').text(dictionary[language].productsCaptionThree);
    $('#productsCaptionFour').text(dictionary[language].productsCaptionFour);
    $('#productsCaptionFive').text(dictionary[language].productsCaptionFive);
    $('#productsCaptionSix').text(dictionary[language].productsCaptionSix);
    $('#productsCaptionSeven').text(dictionary[language].productsCaptionSeven);
    $('#productsPBlockThree').text(dictionary[language].productsPBlockThree);
    $('#productsPBlockFour').text(dictionary[language].productsPBlockFour);
    $('#productsPBlockFive').text(dictionary[language].productsPBlockFive);
    $('#productsPBlockSix').text(dictionary[language].productsPBlockSix);
    $('#key').text(dictionary[language].key);
    $('#aboutH1').text(dictionary[language].aboutH1);
    $('#aboutPBlockOne').text(dictionary[language].aboutPBlockOne);
    $('#aboutCaptionOne').text(dictionary[language].aboutCaptionOne);
    $('#aboutUlBlockOne').text(dictionary[language].aboutUlBlockOne);
    $('#keyBenefits').text(dictionary[language].keyBenefits);
    $('#aboutCaptionTwo').text(dictionary[language].aboutCaptionTwo);
    $('#aboutPBlockTwo').text(dictionary[language].aboutPBlockTwo);
    $('#aboutPBlockThree').text(dictionary[language].aboutPBlockThree);
    $('#aboutItemOne').text(dictionary[language].aboutItemOne);
    $('#aboutItemTwo').text(dictionary[language].aboutItemTwo);
    $('#aboutItemThree').text(dictionary[language].aboutItemThree);
    $('#aboutItemFour').text(dictionary[language].aboutItemFour);
    $('#aboutItemFive').text(dictionary[language].aboutItemFive);
    $('#teamCaptionOne').text(dictionary[language].teamCaptionOne);
    $('#teamPBlockOne').text(dictionary[language].teamPBlockOne);
    $('#contactsCaptionOne').text(dictionary[language].contactsCaptionOne);
    $('#contactsPBlockOne').text(dictionary[language].contactsPBlockOne);
    $('#contact-form-f-name').attr('placeholder', dictionary[language].contactFormFName);
    $('#contact-form-l-name').attr('placeholder', dictionary[language].contactFormLName);
    $('#contact-form-topic').attr('placeholder', dictionary[language].contactFormTopic);
    $('#contact-form-message').text(dictionary[language].contactFormMessage);
    $('#contact-form-email').attr('placeholder', dictionary[language].contactFormEmail);
    $('#contacts-button').text(dictionary[language].contactsButton);

}
