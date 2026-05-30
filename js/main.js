/* =====================================================
   SALEON — main.js  v2.0
===================================================== */

/* ============================================================
   i18n TRANSLATIONS
============================================================ */
const T = {
  ru: {
    'nav.features':  'Как работает',
    'nav.pricing':   'Тарифы',
    'nav.cases':     'Кейсы',
    'nav.contacts':  'Контакты',
    'nav.cta':       'Попробовать',

    'hero.eyebrow':      'Сэйлон – ИИ-Продавец',
    'hero.title':        'Познакомьтесь — это ваш новый <span class="hl-mark">сотрудник</span>.',
    'hero.lead':         'У него есть имя, характер и один единственный режим: работать. Не уволится, не заболеет, не нагрубит клиенту в пятницу вечером.',
    'hero.cta1':         'Познакомиться с Сэйлоном',
    'hero.cta2':         'Посмотреть, как это работает',
    'hero.works':        'Работает в:',
    'scribble.hero':     'отвечает за 3 секунды,<br>даже ночью',
    'scribble.price':    'берут чаще всего',
    'hero.ch.site':      'Сайт',
    'hero.visual.hint':  '+ ещё 3 персонажа с характером - ниже',

    'pain.title':       'Где бизнес теряет клиентов',
    'pain.p1.title':    'Заявки приходят ночью',
    'pain.p1.desc':     'Клиент написал в 23:00 - менеджер увидит утром. К тому времени он уже купил у конкурента.',
    'pain.p2.title':    '80% вопросов одинаковые',
    'pain.p2.desc':     'Цена, условия, как записаться - менеджер отвечает на одно и то же по кругу. Вместо продаж.',
    'pain.p3.title':    'Менеджер выгорает от рутины',
    'pain.p3.desc':     'Каждый день одни и те же вопросы. Хороший продавец начинает халтурить, потом уходит - и надо всё начинать заново.',
    'pain.p4.title':    'Настроили бот - не продаёт',
    'pain.p4.desc':     'Купили, подключили, разочаровались. Дело не в ботах - дело в том, что у них нет характера и понимания клиента.',
    'pain.p5.title':    'Живой менеджер - дорого и нестабильно',
    'pain.p5.desc':     'Нанять - дорого. Обучить - долго. Заболел, в отпуске, уволился - бизнес встаёт. Один точно не справится с потоком.',
    'pain.p6.title':    'Бот не различает клиентов',
    'pain.p6.desc':     'Холодному и горячему - один и тот же ответ. Горячий клиент чувствует равнодушие и уходит к конкуренту.',
    'pain.bridge':      'Сэйлон создаёт цифровых сотрудников с характером. Они понимают, на каком этапе находится клиент - и отвечают точно под момент.',

    'personas.eyebrow':       'Как работает Сэйлон?',
    'personas.title':         'Бот знает, что происходит с вашим клиентом',
    'personas.subtitle':      'Выберите персонажа и состояние - посмотрите, как бот с характером отвечает в нужный момент.',
    'personas.choose.bot':    'Выберите персонажа',
    'personas.choose.state':  'Состояние клиента',
    'personas.cta':           'Хочу такого бота для своего бизнеса',

    'how.title':        'Запуск за 3 дня',
    'how.step1.title':  'Вы описываете бизнес',
    'how.step1.desc':   'Рассказываете о продукте, клиентах и пути, который они проходят до покупки.',
    'how.step2.title':  'Задаёте имя и характер',
    'how.step2.desc':   'Придумываете, как зовут вашего бота и каким он должен быть - заботливым, уверенным, с юмором. Это ваш сотрудник.',
    'how.step3.title':  'Бот выходит на работу',
    'how.step3.desc':   'Запуск за 3 дня. Бот общается, понимает состояние клиента и ведёт его к покупке - без вашего участия.',

    'turnkey.title':  'Нет времени разбираться?',
    'turnkey.desc':   'Мы берем всё на себя: от брифа до запуска. Вы передаете информацию - через 3 дня бот работает.',
    'turnkey.alt':    'Или настройте сами по шаблону - без оплаты за внедрение.',
    'turnkey.cta':    'Обсудить подключение',

    'pain.eyebrow':     'Проблема',
    'how.eyebrow':      'Процесс',
    'usp.eyebrow':      'Отличия',
    'cases.eyebrow':    'Кейсы',
    'pricing.eyebrow':  'Тарифы',
    'team.eyebrow':     'Команда',
    'contact.eyebrow':  'Контакты',

    'usp.title':     'Чем Сэйлон отличается',
    'usp.u1.tag':    'Контекст',
    'usp.u1.title':  'Понимает, где клиент',
    'usp.u1.desc':   'Не один скрипт для всех. Бот видит состояние клиента - сомневается, думает, готов купить - и отвечает под него.',
    'usp.u1.detect': 'Бот видит: клиент сомневается',
    'usp.u1.msg1':   'Дороговато... не знаю, стоит ли?',
    'usp.u1.msg2':   'Понимаю — важное решение. Предлагаю попробовать без риска: если не подойдёт — просто не продолжаете.',
    'usp.u1.chip1':  'Что значит без риска?',
    'usp.u1.chip2':  'Что входит в цену?',
    'usp.u2.tag':    'Идентичность',
    'usp.u2.title':  'Имя и характер задаёте вы',
    'usp.u2.desc':   'Клиенты не разговаривают с "ботом". Они общаются с Леной, Максом или Артёмом - вашим цифровым сотрудником, которого придумали сами.',
    'usp.u3.tag':    'Простота',
    'usp.u3.title':  'Без программистов',
    'usp.u3.desc':   'Вы заполняете шаблон - мы настраиваем. Никакого кода, никаких технических знаний.',
    'usp.u3.item1':  'Заполнить бриф о бизнесе',
    'usp.u3.item2':  'Придумать имя и характер',
    'usp.u3.item3':  'Писать код или настраивать API',
    'usp.u3.item4':  'Нанимать разработчика',

    'cases.title':    'Реальные результаты',
    'cases.subtitle': 'Бизнесы, где уже работают наши боты',

    'pricing.title':     'Тарифы',
    'pricing.subtitle':  'Выберите подходящий план для вашего бизнеса',
    'pricing.rub':       'руб/мес',
    'pricing.select':    'Выбрать',
    'pricing.recommended': 'Рекомендуем',

    'plan1.name':  'Минимальный',
    'plan1.limit': 'до 20 обращений / день',
    'plan2.name':  'Средний',
    'plan2.limit': '20-50 обращений / день',
    'plan3.name':  'Премиум',
    'plan3.limit': '50-100 обращений / день',
    'plan3.support': 'Приоритетная поддержка',
    'plan.support':  'Поддержка в рабочее время',

    'pricing.opt.self.label':    'Самостоятельно',
    'pricing.opt.self.desc':     'Настройте сами по шаблону - платите только тариф. Без доплат за внедрение.',
    'pricing.opt.turnkey.label': 'Под ключ',
    'pricing.opt.turnkey.desc':  'Берём всё на себя: разбираемся в вашем бизнесе, настраиваем характер, сценарии и логику бота. Вы просто рассказываете - мы делаем.',
    'pricing.note':     'Больше 100 обращений в день - 1 руб. за сообщение. Напишите, рассчитаем.',

    'proof.v1':  '3 дня',
    'proof.l1':  'от брифа до запуска под ключ',
    'proof.v2':  '~3 сек',
    'proof.l2':  'среднее время первого ответа',
    'proof.l3':  'на связи без выходных и больничных',
    'proof.v4':  'до 80%',
    'proof.l4':  'обращений бот закрывает сам',

    'calc.label':  'Сколько обращений в день у вас сейчас?',
    'calc.unit':   'в&nbsp;день',
    'calc.fits':   'Вам подойдёт тариф',
    'calc.custom': 'Индивидуальный',
    'calc.byrequest': 'по запросу',

    'team.title':     'Кто делает Saleon',
    'team.subtitle':  'Люди, которые создают ваших цифровых сотрудников',
    'team.t.name':    'Татьяна',
    'team.t.role':    'Маркетолог, 25 лет в бизнесе. Автор продукта. Десятки ниш',
    'team.t.bio':     '25+ лет в маркетинге, десятки ниш: розница, услуги, b2b, b2g. 10 лет преподавала в вузе. Автор идеи продукта - знает на собственном опыте, где бизнес теряет клиентов и деньги.',
    'team.i.name':    'Игорь',
    'team.i.role':    'Технический директор. Программирует с 12 лет',
    'team.i.bio':     'Программирует с 12 лет - 8 лет реальной практики. В 20 лет руководит командой разработчиков. В портфеле - CRM-системы и мобильные приложения. Отвечает за стабильность и масштабируемость бота.',
    'team.d.name':    'Дима',
    'team.d.role':    'Дизайнер и разработчик. Сайты и визуал. 17 лет',
    'team.d.bio':     'Воплощает любые дизайн-решения - от фирменного стиля до полноценного сайта. Работает с ИИ-инструментами - быстрее и нестандартнее большинства опытных дизайнеров.',
    'team.a.name':    'Арина',
    'team.a.role':    'Архитектор клиентского пути. Прописывает сценарии бота',
    'team.a.bio':     '20 лет - и внимательный взгляд на детали. Прописывает каждый шаг клиентского пути, чтобы бот понимал контекст и отвечал в нужный момент. Благодаря ей боты ведут клиента к результату.',

    'faq.title':  'Частые вопросы',
    'faq.q1':  'Что такое "цифровой сотрудник"?',
    'faq.a1':  'Это ИИ-бот с именем и характером, который общается с клиентами в Telegram и ВКонтакте. Понимает, на каком этапе покупки клиент, и отвечает под ситуацию.',
    'faq.q2':  'Правда что запуск за 3 дня?',
    'faq.a2':  'Да, если у вас есть готовые материалы: прайс, описание услуг, ответы на частые вопросы. Нет готового - соберём вместе на созвоне.',
    'faq.q3':  'Что нужно от меня для старта?',
    'faq.a3':  'Прайс, описание услуг, ответы на частые вопросы и придуманный характер для бота. Созвон 30 минут - и мы всё соберём вместе.',
    'faq.q4':  'Можно настроить самостоятельно?',
    'faq.a4':  'Да. Есть подробный шаблон. В этом случае оплачивается только ежемесячный тариф.',
    'faq.q5':  'Бот может ответить неправильно?',
    'faq.a5':  'Бот отвечает только по вашей базе знаний - не придумывает. Перед запуском - тестирование всех сценариев. Менеджер может вмешаться в любой момент.',
    'faq.q6':  'Клиенты не любят ботов.',
    'faq.a6':  'Клиенты не любят скучных ботов. Наш отвечает мгновенно, говорит живо, подстраивается под тон.',
    'faq.q7':  'Где работает бот?',
    'faq.a7':  'Работает в CRM, Telegram, ВКонтакте, MAX и Instagram. Интегрируется с Bitrix24, amoCRM и другими системами.',

    'contact.title':   'Запишитесь на созвон',
    'contact.desc':    'Бесплатный созвон 30 минут - разберём вашу ситуацию, придумаем характер бота, покажем как это работает в вашей нише.',
    'contact.note':    '',
    'contact.alt':     'Или напишите нам в',
    'contact.alt.tg':  'Telegram',
    'contact.author.name': 'Татьяна',
    'contact.author.role': 'маркетолог, автор продукта',

    'form.name':          'Имя',
    'form.contact':       'Телефон или Telegram',
    'form.niche':         'Ниша бизнеса',
    'form.niche.default': 'Выберите...',
    'form.niche.other':   'Другое',
    'form.submit':        'Записаться на созвон',
    'form.privacy':       'Нажимая кнопку, вы соглашаетесь с ',
    'form.privacy.link':  'политикой конфиденциальности',
    'niche.beauty':       'Бьюти и салоны',
    'niche.fitness':      'Фитнес и спорт',
    'niche.food':         'Общепит',
    'niche.med':          'Медицина',
    'niche.edu':          'Образование',
    'niche.ecom':         'E-commerce',

    'widget.name':        'Saleon Bot',
    'widget.status':      'онлайн',
    'widget.placeholder': 'Написать...',

    'footer.tagline':      'Цифровые сотрудники с характером',
    'footer.sign':         'сделано с характером ✦',
    'footer.col.product':  'Продукт',
    'footer.col.company':  'Компания',
    'footer.col.contacts': 'Контакты',
    'footer.features':     'Как работает',
    'footer.pricing':      'Тарифы',
    'footer.usp':          'Отличия',
    'footer.team':         'О команде',
    'footer.cases':        'Кейсы',
    'footer.faq':          'FAQ',
    'footer.privacy':      'Политика конфиденциальности',
    'footer.offer':        'Публичная оферта',
    'footer.license':      'Лицензионный договор',

    'popup.title':  'Запишитесь на созвон',
    'popup.text':   'Бесплатный созвон 30 минут - покажем как это работает в вашей нише.',
    'popup.cta':    'Записаться бесплатно',
    'popup.skip':   'Нет, спасибо',

    'mobile.cta':   'Попробовать бесплатно',

    'case1.industry': 'Фотостудия',
    'case1.city':     'Брянск',
    'case1.name':     'Студия "Сам себе фотограф"',
    'case1.text':     'Собственник не успевал отвечать клиентам в ВКонтакте. СЭМ взял переписку на себя.',
    'case1.r1':       '80%',
    'case1.r1d':      'клиентов бот доводит до бронирования сам',
    'case1.r2':       '0',
    'case1.r2d':      'потерянных обращений в нерабочее время',
    'case2.industry': 'Падел-центр',
    'case2.city':     'Магнитогорск',
    'case2.name':     'Падел.Точка',
    'case2.text':     'ПАДИК объясняет правила, отвечает на вопросы и сразу записывает на слот.',
    'case2.r1':       '3 сек',
    'case2.r1d':      'среднее время первого ответа',
    'case2.r2':       '24/7',
    'case2.r2d':      'без выходных и праздников',
  },

  en: {
    'nav.features':  'How it works',
    'nav.pricing':   'Pricing',
    'nav.cases':     'Cases',
    'nav.contacts':  'Contact',
    'nav.cta':       'Try now',

    'hero.eyebrow':      'AI staff with personality',
    'hero.title':        'Meet your new<br><span class="hl-mark">team member</span>.',
    'hero.lead':         'They have a name, a personality, and one mode: work. Won\'t quit, won\'t get sick, won\'t snap at a customer on Friday night.',
    'hero.cta1':         'Meet Saleon',
    'hero.cta2':         'See how it works',
    'hero.works':        'Works in:',
    'scribble.hero':     'replies in 3 seconds,<br>even at night',
    'scribble.price':    'most people pick this',
    'hero.ch.site':      'Website',
    'hero.visual.hint':  '+ 3 more characters with personality - below',

    'pain.title':       'Where businesses lose clients',
    'pain.p1.title':    'Leads come in at night',
    'pain.p1.desc':     'A client messaged at 11 PM - the manager sees it in the morning. By then they bought from a competitor.',
    'pain.p2.title':    '80% of questions are the same',
    'pain.p2.desc':     'Price, terms, how to book - the manager answers the same thing over and over. Instead of selling.',
    'pain.p3.title':    'Managers burn out from routine',
    'pain.p3.desc':     'The same questions every day. A good salesperson starts to slack, then leaves - and you start all over again.',
    'pain.p4.title':    'Set up a bot - it doesn\'t sell',
    'pain.p4.desc':     'Bought it, connected it, disappointed. The problem isn\'t bots - it\'s that they have no personality or understanding of the client.',
    'pain.p5.title':    'A real manager is costly and unstable',
    'pain.p5.desc':     'Hire - costly. Train - time-consuming. Sick, on vacation, quit - business stops. One can\'t handle the load.',
    'pain.p6.title':    'The bot treats all clients the same',
    'pain.p6.desc':     'Cold and hot leads get the same response. Hot leads feel the indifference and leave to a competitor.',
    'pain.bridge':      'Saleon creates digital staff with personality. They understand where the client is in the journey - and respond at exactly the right moment.',

    'personas.eyebrow':       'HOW SALEON WORKS',
    'personas.title':         'The bot knows what\'s happening with your client',
    'personas.subtitle':      'Choose a character and client state - see how a bot with personality responds at the right moment.',
    'personas.choose.bot':    'Choose a character',
    'personas.choose.state':  'Client state',
    'personas.cta':           'I want a bot like this for my business',

    'how.title':        'Launch in 3 days',
    'how.step1.title':  'You describe your business',
    'how.step1.desc':   'Tell us about your product, clients, and the path they take to purchase.',
    'how.step2.title':  'Set the name and personality',
    'how.step2.desc':   'Decide what your bot is called and what kind of personality it has. This is your employee.',
    'how.step3.title':  'The bot starts working',
    'how.step3.desc':   'Launch in 3 days. The bot communicates, understands client state and guides them to purchase.',

    'turnkey.title':  'No time to figure it out?',
    'turnkey.desc':   'We handle everything: from brief to launch. You provide the information - in 3 days the bot is working.',
    'turnkey.alt':    'Or set it up yourself using a template - no implementation fee.',
    'turnkey.cta':    'Discuss onboarding',

    'pain.eyebrow':     'Pain points',
    'how.eyebrow':      'Process',
    'usp.eyebrow':      'Why us',
    'cases.eyebrow':    'Cases',
    'pricing.eyebrow':  'Pricing',
    'team.eyebrow':     'Team',
    'contact.eyebrow':  'Contact',

    'usp.title':     'What makes Saleon different',
    'usp.u1.tag':    'Context',
    'usp.u1.title':  'Understands where the client is',
    'usp.u1.desc':   'Not one script for everyone. The bot sees client state and responds accordingly.',
    'usp.u1.detect': 'Bot detects: client is hesitating',
    'usp.u1.msg1':   'It\'s a bit pricey... not sure if it\'s worth it.',
    'usp.u1.msg2':   'I understand — this is an important decision. Let me suggest a risk-free trial: if it doesn\'t work for you, just don\'t continue.',
    'usp.u1.chip1':  'What does risk-free mean?',
    'usp.u1.chip2':  'What\'s included?',
    'usp.u2.tag':    'Identity',
    'usp.u2.title':  'You set the name and personality',
    'usp.u2.desc':   'Clients don\'t talk to a "bot". They talk to your digital employee with a personality you designed.',
    'usp.u3.tag':    'Simplicity',
    'usp.u3.title':  'No developers needed',
    'usp.u3.desc':   'No code. You fill out a template - we set it up. No technical knowledge required.',
    'usp.u3.item1':  'Fill out a business brief',
    'usp.u3.item2':  'Choose a name and personality',
    'usp.u3.item3':  'Write code or configure an API',
    'usp.u3.item4':  'Hire a developer',

    'cases.title':    'Real results',
    'cases.subtitle': 'Businesses where our bots already work',

    'pricing.title':     'Pricing',
    'pricing.subtitle':  'Choose the right plan for your business',
    'pricing.rub':       'rub/mo',
    'pricing.select':    'Choose',
    'pricing.recommended': 'Recommended',

    'plan1.name':  'Starter',
    'plan1.limit': 'up to 20 requests / day',
    'plan2.name':  'Standard',
    'plan2.limit': '20-50 requests / day',
    'plan3.name':  'Premium',
    'plan3.limit': '50-100 requests / day',
    'plan3.support': 'Priority support',
    'plan.support':  'Business hours support',

    'pricing.opt.self.label':    'Self-setup',
    'pricing.opt.self.desc':     'Set it up yourself using our template - pay only the monthly fee. No setup fee.',
    'pricing.opt.turnkey.label': 'Done for you',
    'pricing.opt.turnkey.desc':  'We handle everything: understand your business, configure the personality, scenarios and logic. You just tell us - we take care of the rest.',
    'pricing.note':     'More than 100 requests/day - 1 rub per message. Write to us for a quote.',

    'proof.v1':  '3 days',
    'proof.l1':  'from brief to a turnkey launch',
    'proof.v2':  '~3 sec',
    'proof.l2':  'average first reply time',
    'proof.l3':  'online, no days off or sick leave',
    'proof.v4':  'up to 80%',
    'proof.l4':  'of requests the bot closes itself',

    'calc.label':  'How many requests a day do you get now?',
    'calc.unit':   'a&nbsp;day',
    'calc.fits':   'Your plan would be',
    'calc.custom': 'Custom',
    'calc.byrequest': 'on request',

    'team.title':     'Who makes Saleon',
    'team.subtitle':  'The people who create your digital employees',
    'team.t.name':    'Tatyana',
    'team.t.role':    'Marketer, 25 years in business. Product author. Dozens of niches',
    'team.t.bio':     'Over 25 years in marketing. Real experience across dozens of businesses: car shops, food service, entertainment centers, online and retail medical equipment, pharmacy distribution, dentistry, pharma education, children\'s consignment stores, manufacturing, children\'s education. Retail, services, wholesale, b2b, b2g - practically every format. 10 years of parallel university teaching. Author of the product idea: built it because she knows firsthand where businesses lose clients and money.',
    'team.i.name':    'Igor',
    'team.i.role':    'Technical Director. Coding since age 12',
    'team.i.bio':     'Coding since age 12 - 8 years of real practice already. At 20, leads a development team and brings the most unconventional technical ideas to life. Portfolio includes complex CRM systems and multifunctional mobile apps. Ensures the bot runs stably, flexibly and scales to any platform.',
    'team.d.name':    'Dima',
    'team.d.role':    'Designer and developer. Sites and visuals. 17 years old',
    'team.d.bio':     '17 years old - and already a real portfolio: websites and visual projects. Executes any design solution - from brand identity to a full website. Masterfully uses AI tools, delivering results faster and more originally than most experienced designers.',
    'team.a.name':    'Arina',
    'team.a.role':    'Customer journey architect. Scripts bot scenarios',
    'team.a.bio':     '20 years old - and a very attentive eye for detail. Works behind the scenes: carefully maps every step the client takes on the path to purchase, so the bot understands the context and knows exactly what to say at the right moment. It\'s her work that gives bots structured scenarios that lead clients to results.',

    'faq.title':  'Frequently asked',
    'faq.q1':  'What is a "digital employee"?',
    'faq.a1':  'An AI bot with a name and personality that communicates with clients in Telegram and VKontakte. Understands where the client is in the buying journey and responds accordingly.',
    'faq.q2':  'Is launch really in 3 days?',
    'faq.a2':  'Yes, if you have ready materials: price list, service descriptions, FAQ answers.',
    'faq.q3':  'What do I need to get started?',
    'faq.a3':  'Price list, service descriptions, FAQ answers, and a personality for the bot. A 30-minute call and we collect everything together.',
    'faq.q4':  'Can I set it up myself?',
    'faq.a4':  'Yes. There is a detailed template. In that case only the monthly fee is charged.',
    'faq.q5':  'Can the bot give a wrong answer?',
    'faq.a5':  'The bot only answers from your knowledge base - it doesn\'t make things up. All scenarios are tested before launch.',
    'faq.q6':  'Clients don\'t like bots.',
    'faq.a6':  'Clients don\'t like boring bots. Ours responds instantly, communicates naturally, adapts to the tone.',
    'faq.q7':  'Where does the bot work?',
    'faq.a7':  'Works in CRM, Telegram, VKontakte, MAX and Instagram. Integrates with Bitrix24, amoCRM and other systems.',

    'contact.title':   'Book your free call',
    'contact.desc':    'Free 30-minute call - we\'ll analyze your situation, design a bot personality, show how it works in your niche.',
    'contact.note':    '',
    'contact.alt':     'Or write to us on',
    'contact.alt.tg':  'Telegram',
    'contact.author.name': 'Tatyana',
    'contact.author.role': 'marketer, product author',

    'form.name':          'Name',
    'form.contact':       'Phone or Telegram',
    'form.niche':         'Business type',
    'form.niche.default': 'Select...',
    'form.niche.other':   'Other',
    'form.submit':        'Book a free call',
    'form.privacy':       'By clicking you agree to our ',
    'form.privacy.link':  'privacy policy',
    'niche.beauty':       'Beauty & salons',
    'niche.fitness':      'Fitness & sport',
    'niche.food':         'Food & restaurants',
    'niche.med':          'Medicine',
    'niche.edu':          'Education',
    'niche.ecom':         'E-commerce',

    'widget.name':        'Saleon Bot',
    'widget.status':      'online',
    'widget.placeholder': 'Write your question...',

    'footer.tagline':      'Digital staff with personality',
    'footer.sign':         'made with personality ✦',
    'footer.col.product':  'Product',
    'footer.col.company':  'Company',
    'footer.col.contacts': 'Contacts',
    'footer.features':     'How it works',
    'footer.pricing':      'Pricing',
    'footer.usp':          'Differences',
    'footer.team':         'About the team',
    'footer.cases':        'Cases',
    'footer.faq':          'FAQ',
    'footer.privacy':      'Privacy policy',
    'footer.offer':        'Public offer',
    'footer.license':      'License agreement',

    'popup.title':  'Book your free call',
    'popup.text':   'Free 30-minute call - we\'ll show how it works in your niche.',
    'popup.cta':    'Book for free',
    'popup.skip':   'No thanks',

    'mobile.cta':   'Try for free',

    'case1.industry': 'Photo studio',
    'case1.city':     'Bryansk',
    'case1.name':     'Studio "Take Your Own Photo"',
    'case1.text':     'The owner couldn\'t keep up with client messages on VKontakte. SAM took over the conversations.',
    'case1.r1':       '80%',
    'case1.r1d':      'of clients the bot converts to bookings on its own',
    'case1.r2':       '0',
    'case1.r2d':      'lost inquiries outside business hours',
    'case2.industry': 'Padel center',
    'case2.city':     'Magnitogorsk',
    'case2.name':     'Padel.Point',
    'case2.text':     'PADIK explains the rules, answers questions and immediately books a slot.',
    'case2.r1':       '3 sec',
    'case2.r1d':      'average first response time',
    'case2.r2':       '24/7',
    'case2.r2d':      'no days off or holidays',
  }
};

/* ============================================================
   BOT PERSONAS DATA
============================================================ */
const BOTS = [
  {
    id: 'sem',
    name: 'СЭМ',       nameEn: 'SAM',
    biz: 'Фотостудия', bizEn: 'Photo Studio',
    char: 'Творческий, вдохновляет клиента, говорит образно. Знает всё про свет и атмосферу.',
    charEn: 'Creative, inspires clients, speaks vividly. Knows everything about light and atmosphere.',
    color: '#D4537E',
    greet: 'красотка', greetEn: 'gorgeous',
    emoji: 'С', icon: 'images/СЭМ.png',
  },
  {
    id: 'padik',
    name: 'ПАДИК',      nameEn: 'PAD',
    biz: 'Падел-центр', bizEn: 'Padel Center',
    char: 'Спортивный, заводной, говорит как свой в тусовке. Продвигает активный образ жизни.',
    charEn: 'Sporty, energetic, talks like a buddy. Promotes an active lifestyle.',
    color: '#1D9E75',
    greet: 'дружище', greetEn: 'buddy',
    emoji: 'П', icon: 'images/ПАДИК.png',
  },
  {
    id: 'glasha',
    name: 'ГЛАША',          nameEn: 'FLORA',
    biz: 'Цветочный магазин', bizEn: 'Flower Shop',
    char: 'Тёплая, заботливая, помогает выбрать цветы с душой. Знает значение каждого букета.',
    charEn: 'Warm, caring, helps choose flowers with heart. Knows the meaning of every bouquet.',
    color: '#D85A30',
    greet: 'дорогая', greetEn: 'dear',
    emoji: 'Г', icon: 'images/ГЛАША.png',
  },
  {
    id: 'kirillych',
    name: 'КИРИЛЛЫЧ', nameEn: 'CARL',
    biz: 'Автосервис', bizEn: 'Auto Service',
    char: 'Надёжный, говорит просто и по делу. Как механик, которому доверяешь.',
    charEn: 'Reliable, speaks simply and to the point. Like a mechanic you can trust.',
    color: '#5F5E5A',
    greet: 'друг', greetEn: 'friend',
    emoji: 'К', icon: 'images/КИРИЛЛЫЧ.png',
  },
  {
    id: 'lusya',
    name: 'ЛЮСЯ',        nameEn: 'LUCY',
    biz: 'Салон красоты', bizEn: 'Beauty Salon',
    char: 'Внимательная, заботливая, понимает клиента с полуслова. Эксперт по стилю и уходу.',
    charEn: 'Attentive, caring, understands clients intuitively. Expert in style and care.',
    color: '#993556',
    greet: 'подруга', greetEn: 'friend',
    emoji: 'Л', icon: 'images/ЛЮСЯ.png',
  },
  {
    id: 'bars',
    name: 'БАРС',    nameEn: 'BARLO',
    biz: 'Ветклиника', bizEn: 'Vet Clinic',
    char: 'Спокойный, профессиональный, говорит с теплом. Знает, как успокоить переживающего хозяина.',
    charEn: 'Calm, professional, speaks with warmth. Knows how to reassure a worried pet owner.',
    color: '#0891B2',
    greet: 'друг', greetEn: 'friend',
    emoji: 'Б', icon: 'images/БАРС.png',
  },
  {
    id: 'maks',
    name: 'МАКС',     nameEn: 'MAX',
    biz: 'Фитнес-клуб', bizEn: 'Fitness Club',
    char: 'Мотивирующий, энергичный, верит в каждого клиента. Говорит коротко и по делу.',
    charEn: 'Motivating, energetic, believes in every client. Speaks briefly and to the point.',
    color: '#185FA5',
    greet: 'чемпион', greetEn: 'champion',
    emoji: 'М', icon: 'images/МАКС.png',
  },
];

/* avatar HTML helper — PNG icon if available, else first letter */
function botAvHtml(b, size) {
  if (b.icon) {
    return '<img src="' + b.icon + '" alt="' + b.name + '" class="bot-av-icon" style="width:' + (size||'100%') + ';height:' + (size||'100%') + ';object-fit:cover;border-radius:50%;">';
  }
  return b.emoji;
}

/* ============================================================
   CLIENT STATES DATA
============================================================ */
const STATES = [
  {
    id: 'new',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6"/></svg>',
    name: 'Первый раз',    nameEn: 'First time',
    intent: 'Написал впервые. Ещё не знает, что предложить.',
    intentEn: 'First contact. Doesn\'t know what to expect yet.',
    uMsg: 'Привет, а что вы вообще предлагаете?',
    uMsgEn: 'Hi, what do you guys offer?',
    bMsg:   function(b) { return 'Привет, ' + b.greet + '! Я ' + b.name + ', твой помощник в ' + b.biz.toLowerCase() + '. Расскажи, что тебя интересует - подберу лучший вариант! Или хочешь, покажу, с чего обычно начинают?'; },
    bMsgEn: function(b) { return 'Hey, ' + b.greetEn + '! I\'m ' + b.nameEn + ', your assistant at ' + b.bizEn + '. Tell me what you\'re interested in - I\'ll find the best option! Or want me to show you how most people get started?'; },
    chips: ['Расскажи подробнее', 'Сколько стоит?', 'Как записаться?'],
    chipsEn: ['Tell me more', 'How much does it cost?', 'How to sign up?'],
    badge: 'Первый контакт', badgeEn: 'First contact',
  },
  {
    id: 'explore',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
    name: 'Изучает',    nameEn: 'Exploring',
    intent: 'Сравнивает варианты, задаёт вопросы о деталях.',
    intentEn: 'Comparing options, asking about details.',
    uMsg: 'А чем вы отличаетесь от конкурентов?',
    uMsgEn: 'How are you different from competitors?',
    bMsg:   function(b) { return 'Хороший вопрос, ' + b.greet + '! Главное отличие - мы подходим индивидуально. Большинство, кто сравнивал варианты, выбирают нас. Что для тебя важнее всего?'; },
    bMsgEn: function(b) { return 'Great question, ' + b.greetEn + '! The key difference is our individual approach. Most people who compare options end up choosing us. What matters most to you?'; },
    chips: ['Показать примеры', 'Узнать цены', 'Записаться на пробное'],
    chipsEn: ['Show examples', 'See pricing', 'Book a trial'],
    badge: 'Изучает варианты', badgeEn: 'Exploring options',
  },
  {
    id: 'doubt',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><circle cx="9" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="11" r="1" fill="currentColor" stroke="none"/></svg>',
    name: 'Сомневается', nameEn: 'Hesitates',
    intent: 'Почти готов, но есть возражения или страхи.',
    intentEn: 'Almost ready, but has objections or fears.',
    uMsg: 'Дороговато... Не знаю, стоит ли вообще?',
    uMsgEn: 'It\'s a bit pricey... Not sure if it\'s worth it?',
    bMsg:   function(b) { return 'Понимаю тебя, ' + b.greet + ' - это важное решение. Давай попробуем без риска. Если не подойдёт - просто не продолжаешь. Большинство, кто сомневался, потом говорят: "Надо было раньше!"'; },
    bMsgEn: function(b) { return 'I get it, ' + b.greetEn + ' - it\'s an important decision. Let\'s try without risk. If it doesn\'t fit - you just don\'t continue. Most people who hesitated say: "Should\'ve started sooner!"'; },
    chips: ['Что включено в цену?', 'Есть ли гарантия?', 'Можно попробовать?'],
    chipsEn: ['What\'s included?', 'Is there a guarantee?', 'Can I try first?'],
    badge: 'Сомневается', badgeEn: 'Hesitates',
  },
  {
    id: 'ready',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
    name: 'Готов купить', nameEn: 'Ready to buy',
    intent: 'Уже решил, хочет оформить быстро.',
    intentEn: 'Already decided, wants to proceed quickly.',
    uMsg: 'Окей, я готов. Как записаться?',
    uMsgEn: 'Okay, I\'m ready. How do I sign up?',
    bMsg:   function(b) { return 'Отлично, ' + b.greet + '! Рад, что выбрал нас. Выбери удобное время или оплати онлайн - и ты в деле. Оформляем?'; },
    bMsgEn: function(b) { return 'Awesome, ' + b.greetEn + '! Glad you chose us. Pick a convenient time or pay online - and you\'re in. Shall we proceed?'; },
    chips: ['Выбрать время', 'Оплатить онлайн', 'Нужна помощь с выбором'],
    chipsEn: ['Choose a time', 'Pay online', 'Need help choosing'],
    badge: 'Готов купить', badgeEn: 'Ready to buy',
  },
  {
    id: 'gone',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    name: 'Пропал',   nameEn: 'Gone silent',
    intent: 'Общался, но перестал отвечать. Потерял интерес или забыл.',
    intentEn: 'Was chatting, then stopped. Lost interest or forgot.',
    uMsg: '(молчит уже 3 дня)',
    uMsgEn: '(silent for 3 days)',
    bMsg:   function(b) { return b.greet.charAt(0).toUpperCase() + b.greet.slice(1) + ', это снова ' + b.name + '. Просто хотел спросить - всё в порядке? Если остались вопросы - напиши, разберёмся. Держу для тебя специальное предложение ещё пару дней.'; },
    bMsgEn: function(b) { return b.greetEn.charAt(0).toUpperCase() + b.greetEn.slice(1) + ', it\'s ' + b.nameEn + ' again. Just checking in - everything okay? If you have questions - write, we\'ll figure it out. I\'m holding a special offer for you for a couple more days.'; },
    chips: ['Да, хочу вернуться', 'Расскажи про предложение', 'Не актуально'],
    chipsEn: ['Yes, I\'m back', 'Tell me about the offer', 'Not relevant anymore'],
    badge: 'Реактивация', badgeEn: 'Reactivation',
  },
];

/* ============================================================
   PERSONA CHIP REPLIES  [botIdx][stateIdx].ru / .en
   States: 0=Первый раз, 1=Изучает, 2=Сомневается, 3=Готов купить, 4=Пропал
   Bots:   0=СЭМ, 1=ПАДИК, 2=ГЛАША, 3=КИРИЛЛЫЧ, 4=ЛЮСЯ, 5=БАРС, 6=МАКС
============================================================ */
var PERSONA_CHIP_REPLIES = [
  /* 0 – СЭМ (Фотостудия) */
  [
    { ru: { 'Расскажи подробнее': 'У нас два зала: белая циклорама — для чистых воздушных портретов, и тёмный лофт — для атмосферных съёмок. Реквизит, свет, гримёрка — всё включено!', 'Сколько стоит?': 'Час аренды от 1 500 руб. Если нужна команда — фотограф, визажист — добавим. Что планируешь снимать?', 'Как записаться?': 'Напиши дату, время и что будем снимать — я найду слот и оформлю. Когда удобно?' },
      en: { 'Tell me more': 'We have two studios: white cyclorama for clean airy portraits, and dark loft for atmospheric shoots. Props, lights, dressing room — all included!', 'How much does it cost?': 'One hour rental from $18. Need a crew — photographer, makeup? We\'ll add them. What are we shooting?', 'How to sign up?': 'Just tell me the date, time and what we\'re shooting — I\'ll find a slot and book it. When works for you?' } },
    { ru: { 'Показать примеры': 'Наши работы — в Telegram @sem_foto. Там портреты, бизнес-съёмки, детские и семейные. Какой жанр интересует?', 'Узнать цены': 'Час — 1 500 руб, 3 часа — 3 900 руб (выгоднее!). Свет и реквизит включены. Нужна команда — обговорим.', 'Записаться на пробное': 'Есть пробная сессия 30 минут — 600 руб. Познакомишься с залом, сделаем несколько кадров. Когда удобно?' },
      en: { 'Show examples': 'Our work is in Telegram @sem_foto. Portraits, business shoots, family sessions. What genre interests you?', 'See pricing': 'One hour — $18, three hours — $48 (better value!). Lights and props included. Need a crew — we\'ll discuss.', 'Book a trial': 'We have a 30-minute trial session — $7. You\'ll see the studio and we\'ll shoot a few frames. When works for you?' } },
    { ru: { 'Что включено в цену?': 'В аренду входит: студия, весь реквизит, профессиональный свет, гримёрка. Никаких скрытых доплат!', 'Есть ли гарантия?': 'Если съёмка не понравится — вернём деньги. За 3 года работы такого не было, но обещание твёрдое.', 'Можно попробовать?': 'Конечно! Есть пробная сессия 30 минут — минимальный риск, максимум впечатлений. Запишем?' },
      en: { 'What\'s included?': 'Rental includes: studio, all props, professional lighting, dressing room. No hidden fees!', 'Is there a guarantee?': 'If the shoot doesn\'t satisfy you — full refund. In 3 years it\'s never happened, but the promise stands.', 'Can I try first?': 'Of course! 30-minute trial session — minimum risk, maximum experience. Shall we book it?' } },
    { ru: { 'Выбрать время': 'Свободные слоты: завтра 14:00 и 17:00, послезавтра 11:00. Какой зал — светлый или тёмный лофт?', 'Оплатить онлайн': 'Принимаем карту онлайн или наличными. Напиши имя и дату — выставлю счёт прямо здесь.', 'Нужна помощь с выбором': 'Расскажи что снимаем — образ, тему, настроение — и я подберу зал, свет и реквизит под идею.' },
      en: { 'Choose a time': 'Open slots: tomorrow 2 PM and 5 PM, day after at 11 AM. Which studio — bright cyclorama or dark loft?', 'Pay online': 'We accept card online or cash. Send your name and date — I\'ll issue an invoice right here.', 'Need help choosing': 'Tell me what we\'re shooting — the look, theme, mood — and I\'ll match the studio, lighting and props to your idea.' } },
    { ru: { 'Да, хочу вернуться': 'Рад слышать! Твой слот ещё не занят. Что изменилось? Могу помочь с выбором зала или идеей съёмки.', 'Расскажи про предложение': 'Для тебя — скидка 20% на первую аренду. Работает ещё два дня. Час в лофте вместо 1 500 — за 1 200 руб. Берём?', 'Не актуально': 'Понял, бывает! Если вдруг захочется красивых кадров — я здесь. Удачи!' },
      en: { 'Yes, I\'m back': 'Great to hear! Your slot is still open. What changed? I can help with studio choice or shoot concept.', 'Tell me about the offer': 'For you — 20% off your first rental. Valid for two more days. One hour in the loft for $15 instead of $18. Deal?', 'Not relevant anymore': 'No worries! When you want some great shots — I\'m here. Take care!' } },
  ],
  /* 1 – ПАДИК (Падел-центр) */
  [
    { ru: { 'Расскажи подробнее': 'Падел — теннис + сквош, только круче и проще в освоении! 3 корта, инвентарь в аренду, тренеры. Уже через час будешь рубиться!', 'Сколько стоит?': 'Час корта — 1 200 руб. на 2–4 игрока, то есть от 300 руб с человека! Ракетка бесплатно. Абонемент ещё выгоднее.', 'Как записаться?': 'Напиши сколько вас, день и примерное время — подберу корт и запишу. Минута дел!' },
      en: { 'Tell me more': 'Padel is tennis + squash, but easier to pick up! 3 courts, rental gear, coaches. You\'ll be playing within an hour!', 'How much does it cost?': 'One court hour — $15 for 2–4 players, so from $4 per person! Racket free. Membership is even better value.', 'How to sign up?': 'Tell me how many, the day and rough time — I\'ll find a court and book you in. Done in a minute!' } },
    { ru: { 'Показать примеры': 'Глянь видосы в @padik_court — матчи, тренировки, атмосфера. Один просмотр — и сам захочешь!', 'Узнать цены': 'Час корта — 1 200 руб., абонемент 8 часов — 7 200 руб., тренировка с тренером — 1 800 руб/час. Первый час — 600 руб!', 'Записаться на пробное': 'Пробный час за 600 руб с ракеткой — для тех, кто не пробовал. Тренер покажет азы и сразу начнём играть. Когда?' },
      en: { 'Show examples': 'Check videos at @padik_court — matches, training, vibes. One look and you\'ll want to play!', 'See pricing': 'Court hour — $15, 8-hour membership — $90, coaching — $22/hour. First hour trial — just $7!', 'Book a trial': 'Trial hour for $7 with racket — for beginners. Coach shows the basics and we start playing immediately. When?' } },
    { ru: { 'Что включено в цену?': 'В аренду корта входит: корт, мячи, ракетки. Ничего лишнего не платишь. Обувь в аренду — 100 руб если нужно.', 'Есть ли гарантия?': 'Если после первого часа не понравится — вернём деньги, без вопросов. Но такого ещё не было!', 'Можно попробовать?': 'Конечно! Пробный час за 600 руб — лучший старт. Минимум трат, максимум кайфа. Запишу?' },
      en: { 'What\'s included?': 'Court rental includes: court, balls, rackets. Nothing extra. Shoe rental — $1.50 if needed.', 'Is there a guarantee?': 'If you don\'t enjoy your first hour — full refund, no questions. Never happened yet though!', 'Can I try first?': 'Of course! Trial hour for $7 — best start. Minimal cost, maximum fun. Book you in?' } },
    { ru: { 'Выбрать время': 'Свободно: сегодня 19:00, завтра 10:00 и 18:00, суббота 12:00. Вас сколько будет?', 'Оплатить онлайн': 'Картой онлайн или на кассе. Напиши имя и время — выставлю ссылку для оплаты!', 'Нужна помощь с выбором': 'Для новичков — пробный час с тренером, для опытных — просто аренда корта. Вы раньше играли в падел?' },
      en: { 'Choose a time': 'Open: today 7 PM, tomorrow 10 AM and 6 PM, Saturday 12 PM. How many players?', 'Pay online': 'Card online or at the desk. Send name and time — I\'ll send the payment link!', 'Need help choosing': 'For beginners — trial hour with coach; for experienced — just court rental. Have you played padel before?' } },
    { ru: { 'Да, хочу вернуться': 'Дружище, ждали! Корты свободны — назови время и забронируем. Что остановило в прошлый раз?', 'Расскажи про предложение': 'Для тебя — 2 часа по цене 1! Обычно 1 200 руб/час, сейчас 2 часа за 1 200. До конца недели. Берём?', 'Не актуально': 'Без проблем, дружище! Как захочется поиграть — возвращайся. Мы всегда рады!' },
      en: { 'Yes, I\'m back': 'Buddy, we missed you! Courts are open — give me a time and I\'ll book it. What stopped you last time?', 'Tell me about the offer': '2 hours for the price of 1! Usually $15/hour, now 2 hours for $15. Until end of week. Deal?', 'Not relevant anymore': 'No problem, buddy! When you want to play — come back. Always welcome!' } },
  ],
  /* 2 – ГЛАША (Цветочный магазин) */
  [
    { ru: { 'Расскажи подробнее': 'У нас живые цветы каждый день — пионы, розы, тюльпаны, экзотика. Делаем букеты под характер человека. Есть доставка. Что за повод?', 'Сколько стоит?': 'Букеты от 900 руб — небольшие нежные. Популярные варианты — 1 800–3 500 руб. Под бюджет подберу что-то настоящее. Сколько у нас?', 'Как записаться?': 'Напиши для кого, на какую дату и бюджет — соберу букет с душой. Самовывоз или доставка?' },
      en: { 'Tell me more': 'Fresh flowers every day — peonies, roses, tulips, exotic blooms. We make bouquets to match a person\'s personality. Delivery available. What\'s the occasion?', 'How much does it cost?': 'Bouquets from $11 — small and delicate. Popular options — $22–$43. Tell me your budget and I\'ll create something special.', 'How to sign up?': 'Tell me: for whom, what date, budget — I\'ll craft a bouquet with soul. Pickup or delivery?' } },
    { ru: { 'Показать примеры': 'Наши работы — в Instagram @glasha_flowers и Telegram. Много фото — портретные букеты, свадебные, для мам и подруг. Что ближе твоей идее?', 'Узнать цены': 'Маленький — от 900 руб, средний — 1 800–2 500, большой — от 3 500. Авторская упаковка и открытка — в подарок. Какой повод?', 'Записаться на пробное': 'Можно заехать и собрать букет самостоятельно с моей помощью! Платишь только за цветы. Хочешь попробовать?' },
      en: { 'Show examples': 'Our work is on Instagram @glasha_flowers and Telegram. Lots of photos — portrait bouquets, wedding, for moms and friends. Which style feels closest?', 'See pricing': 'Small — from $11, medium — $22–$30, large — from $43. Signature wrapping and card — gift included. What\'s the occasion?', 'Book a trial': 'You can come in and assemble a bouquet yourself with my guidance! You only pay for the flowers. Want to try?' } },
    { ru: { 'Что включено в цену?': 'В цену входит: цветы, авторская упаковка, зелень и декор, открытка. Доставка отдельно — 300 руб по городу. Всё честно!', 'Есть ли гарантия?': 'Цветы стоят минимум 5–7 дней при правильном уходе. Если завянут раньше — заменю. Всегда даю памятку по уходу.', 'Можно попробовать?': 'Начни с небольшого букета — от 900 руб. Увидишь качество и подход. Если понравится — вернёшься. Уверена!' },
      en: { 'What\'s included?': 'Price includes: flowers, signature wrapping, greenery and décor, card. Delivery extra — $4 citywide. All honest!', 'Is there a guarantee?': 'Flowers last at least 5–7 days with proper care. If they wilt sooner — I\'ll replace them. Always include care instructions.', 'Can I try first?': 'Start with a small bouquet — from $11. You\'ll see the quality and approach. If you like it — you\'ll be back. I\'m sure!' } },
    { ru: { 'Выбрать время': 'Скажи дату и примерное время — самовывоз или доставка? Букет соберу свежим к нужному моменту!', 'Оплатить онлайн': 'Принимаю карту, переводом или наличными. Напиши что заказываешь и дату — выставлю счёт!', 'Нужна помощь с выбором': 'Расскажи: для кого цветы, какой человек, какой повод — и я подберу букет с характером!' },
      en: { 'Choose a time': 'Tell me the date and rough time — pickup or delivery? I\'ll have the bouquet freshly made for the right moment!', 'Pay online': 'I accept card or transfer. Tell me what you\'re ordering and the date — I\'ll send an invoice!', 'Need help choosing': 'Tell me: who are the flowers for, what kind of person, what occasion — and I\'ll pick a bouquet with character!' } },
    { ru: { 'Да, хочу вернуться': 'Дорогая, рада слышать! Что интересует — тот же букет или что-то новое? Расскажи, подберу!', 'Расскажи про предложение': 'Для тебя — скидка 15% на следующий заказ и бесплатная открытка. До конца недели. Что будем делать?', 'Не актуально': 'Всё хорошо! Если понадобятся цветы с душой — я здесь. Хорошего дня!' },
      en: { 'Yes, I\'m back': 'Dear, so glad! Same bouquet as before or something new? Tell me and I\'ll get it ready!', 'Tell me about the offer': '15% off your next order plus a free card. Until end of week. What shall we create?', 'Not relevant anymore': 'All good! When you need flowers made with love — I\'m here. Have a lovely day!' } },
  ],
  /* 3 – КИРИЛЛЫЧ (Автосервис) */
  [
    { ru: { 'Расскажи подробнее': 'Делаем всё: ТО, диагностика, тормоза, подвеска, кузов. Опыт 12 лет, работаем с любыми марками. Без накруток. Что за машина и что беспокоит?', 'Сколько стоит?': 'Диагностика — бесплатно. ТО от 3 500 руб, ремонт — по факту. Назови что случилось — скажу честную цену.', 'Как записаться?': 'Напиши марку машины, что беспокоит и когда удобно приехать. Найдём время.' },
      en: { 'Tell me more': 'We do everything: servicing, diagnostics, brakes, suspension, bodywork. 12 years experience, all makes. No inflated prices. What\'s the car and what\'s wrong?', 'How much does it cost?': 'Diagnostics — free. Service from $43, repairs — after inspection. Tell me what happened — I\'ll give an honest price.', 'How to sign up?': 'Tell me your car make, what\'s wrong and when you can come. We\'ll find a time.' } },
    { ru: { 'Показать примеры': 'Отзывы — в ВКонтакте и Яндекс.Картах. Там же фото работ. 12 лет без рекламы — только сарафанное радио.', 'Узнать цены': 'ТО — от 3 500 руб, тормоза — от 1 800 руб, подвеска — от 2 500 руб. Диагностика бесплатно. Что нужно?', 'Записаться на пробное': 'Приезжай на бесплатную диагностику — 20 минут. Посмотрим машину, расскажем что есть, что срочно, что подождёт.' },
      en: { 'Show examples': 'Reviews on VK and 2GIS. Work photos there too. 12 years with no advertising — pure word of mouth.', 'See pricing': 'Service — from $43, brakes — from $22, suspension — from $30. Diagnostics free. What do you need?', 'Book a trial': 'Come for a free diagnostic — 20 minutes. We\'ll inspect the car and tell you what\'s there, what\'s urgent, what can wait.' } },
    { ru: { 'Что включено в цену?': 'В стоимость работ входит: сама работа, расходники. Скрытых доплат нет. После — показываю всё что сделал.', 'Есть ли гарантия?': 'Гарантия на работы — 6 месяцев. На запчасти — по гарантии производителя. Если что не так — переделаем бесплатно.', 'Можно попробовать?': 'Приезжай на бесплатную диагностику — посмотрим машину и поймёшь, как работаем. Ни к чему не обязывает.' },
      en: { 'What\'s included?': 'Price includes: labor and consumables. No hidden fees. Afterwards I show everything that was done.', 'Is there a guarantee?': 'Warranty on work — 6 months. On parts — manufacturer\'s warranty. If something\'s wrong — we redo it free.', 'Can I try first?': 'Come for a free diagnostic — you\'ll see how we work. No obligation.' } },
    { ru: { 'Выбрать время': 'Свободно: завтра с 9:00, в пятницу с 10:00. Что за работы нужны — скажи, найдём нужный слот.', 'Оплатить онлайн': 'Принимаем карту, наличные, перевод. Скажи что надо сделать — выставлю счёт после диагностики.', 'Нужна помощь с выбором': 'Приезжай на диагностику — сам всё покажу и объясню что срочно, что можно отложить. Честно.' },
      en: { 'Choose a time': 'Open: tomorrow from 9 AM, Friday from 10 AM. Tell me what needs doing — we\'ll find the right slot.', 'Pay online': 'Card, cash or transfer. Tell me what needs doing — I\'ll invoice after diagnostics.', 'Need help choosing': 'Come for diagnostics — I\'ll show and explain everything myself: what\'s urgent, what can wait. Straight talk.' } },
    { ru: { 'Да, хочу вернуться': 'Добро! Что с машиной — та же проблема или что-то новое? Найдём время.', 'Расскажи про предложение': 'Для тебя — бесплатная диагностика + скидка 10% на первый ремонт. До конца месяца. Записать?', 'Не актуально': 'Понял. Если понадобится — пиши, разберёмся быстро.' },
      en: { 'Yes, I\'m back': 'Good! Same issue with the car or something new? Let\'s find a time.', 'Tell me about the offer': 'For you — free diagnostics + 10% off first repair. Until end of month. Book it?', 'Not relevant anymore': 'Got it. If you need anything — write, we\'ll sort it fast.' } },
  ],
  /* 4 – ЛЮСЯ (Салон красоты) */
  [
    { ru: { 'Расскажи подробнее': 'Делаем стрижки, окрашивание, уходы, маникюр и педикюр. Мастера 5–10 лет опыта. Работаем без выходных с 9 до 21. Что тебя интересует?', 'Сколько стоит?': 'Стрижка от 1 200, окрашивание от 2 500, маникюр от 900. Скажи что нужно — назову точнее!', 'Как записаться?': 'Напиши что хочешь сделать и удобное время — подберу мастера и запишу. Всё просто!' },
      en: { 'Tell me more': 'We do haircuts, coloring, treatments, manicure and pedicure. Stylists with 5–10 years experience. Open every day 9 AM – 9 PM. What interests you?', 'How much does it cost?': 'Haircut from $15, coloring from $30, manicure from $11. Tell me what you need — I\'ll give you the exact price!', 'How to sign up?': 'Tell me what you want done and a convenient time — I\'ll match a stylist and book you in. Super easy!' } },
    { ru: { 'Показать примеры': 'Работы мастеров — в Instagram @lusya_beauty. Стрижки, окрашивания, укладки. Реальные клиенты!', 'Узнать цены': 'Стрижка от 1 200, балаяж от 4 500, ламинирование от 2 500, маникюр от 900. Хочешь полный прайс?', 'Записаться на пробное': 'Есть пробный уход за 590 руб — 20 минут, увлажнение и блеск. Идеально познакомиться с нашими мастерами.' },
      en: { 'Show examples': 'Stylist work on Instagram @lusya_beauty. Haircuts, coloring, styling. Real clients!', 'See pricing': 'Haircut from $15, balayage from $55, lamination from $30, manicure from $11. Want the full price list?', 'Book a trial': 'Trial treatment for $7 — 20 minutes, hydration and shine. Perfect way to meet our stylists.' } },
    { ru: { 'Что включено в цену?': 'В стоимость: работа мастера, профессиональные средства, мытьё и укладка. Без скрытых доплат!', 'Есть ли гарантия?': 'Если что-то не понравится — скажи сразу. Подправим бесплатно. Нам важно, чтобы ты вышла довольной!', 'Можно попробовать?': 'Запишись на стрижку или уход — сразу почувствуешь нашу работу. Страшно первый раз, но оно стоит!' },
      en: { 'What\'s included?': 'Price includes: stylist\'s work, professional products, wash and blow-dry. No hidden fees!', 'Is there a guarantee?': 'If anything doesn\'t look right — tell us right away. We\'ll fix it free. Your happiness is what matters!', 'Can I try first?': 'Book a haircut or treatment — you\'ll feel our work right away. First time is scary but worth it!' } },
    { ru: { 'Выбрать время': 'Свободно: завтра 11:00 и 15:30, послезавтра 10:00. К какому мастеру хочешь — или не важно?', 'Оплатить онлайн': 'Принимаем карту и переводом. Запишу и пришлю подтверждение. Имя и телефон?', 'Нужна помощь с выбором': 'Расскажи что хочешь изменить, какая сейчас длина и состояние волос — подберу мастера и процедуру!' },
      en: { 'Choose a time': 'Available: tomorrow 11 AM and 3:30 PM, day after at 10 AM. Do you have a preferred stylist?', 'Pay online': 'Card or transfer. I\'ll book you and send a confirmation. Your name and phone?', 'Need help choosing': 'Tell me what you want to change, current length and hair condition — I\'ll match the right stylist and treatment!' } },
    { ru: { 'Да, хочу вернуться': 'Рада слышать! У нас всё по-прежнему хорошо. Что хочешь сделать в этот раз?', 'Расскажи про предложение': 'Для тебя — скидка 20% на любую услугу. Только эта неделя. Хочешь — запишу прямо сейчас?', 'Не актуально': 'Хорошо, подруга! Если что — всегда здесь. Береги себя!' },
      en: { 'Yes, I\'m back': 'So glad! Everything\'s still great here. What are you thinking of doing this time?', 'Tell me about the offer': '20% off any service — this week only. Want me to book you right now?', 'Not relevant anymore': 'No worries, friend! Whenever you need us — we\'re here. Take care!' } },
  ],
  /* 5 – БАРС (Ветклиника) */
  [
    { ru: { 'Расскажи подробнее': 'Лечим кошек, собак, грызунов и птиц. Работаем с 8:00 до 22:00, есть выездная служба. Средний опыт врача — 7 лет. Что беспокоит питомца?', 'Сколько стоит?': 'Первичный осмотр — 600 руб, вакцинация — от 400 руб, выезд на дом — 800 руб + осмотр. Что нужно?', 'Как записаться?': 'Напиши какое животное, что беспокоит и когда удобно. Найдём время к нужному врачу.' },
      en: { 'Tell me more': 'We treat cats, dogs, rodents and birds. Open 8 AM – 10 PM, home visits available. Average vet experience — 7 years. What\'s concerning your pet?', 'How much does it cost?': 'First exam — $7, vaccination — from $5, home visit — $10 + exam fee. What do you need?', 'How to sign up?': 'Tell me the type of animal, the concern and when you\'re free. We\'ll find the right vet and time.' } },
    { ru: { 'Показать примеры': 'Отзывы клиентов — в ВКонтакте и 2ГИС. Там реальные истории и фото наших пациентов. Там тепло!', 'Узнать цены': 'Осмотр — 600 руб, анализы от 300 руб, вакцинация от 400 руб, операции от 3 000 руб. Диагностика помогает не переплачивать.', 'Записаться на пробное': 'Первичный осмотр — 600 руб. Врач посмотрит питомца, ответит на вопросы, даст рекомендации. Когда удобно?' },
      en: { 'Show examples': 'Client reviews on VK and 2GIS. Real stories and photos of our patients. Very heartwarming!', 'See pricing': 'Exam — $7, tests from $4, vaccination from $5, surgery from $37. A diagnostic prevents overpaying.', 'Book a trial': 'First exam — $7. The vet will check your pet, answer questions, give recommendations. When works for you?' } },
    { ru: { 'Что включено в цену?': 'В осмотр входит: осмотр, первичная консультация, рекомендации. Если нужны анализы — скажем заранее. Без сюрпризов.', 'Есть ли гарантия?': 'Отвечаем за качество лечения. Если стало хуже — повторный осмотр бесплатно. Здоровье питомца — наш приоритет.', 'Можно попробовать?': 'Запишитесь на первичный осмотр за 600 руб — посмотрим питомца, познакомимся. Решение можно принять потом.' },
      en: { 'What\'s included?': 'Exam includes: physical check, initial consultation, recommendations. If tests are needed — we tell you upfront. No surprises.', 'Is there a guarantee?': 'We stand behind our treatment quality. If the pet gets worse — free follow-up. Your pet\'s health is our priority.', 'Can I try first?': 'Book an initial exam for $7 — we\'ll check your pet and get acquainted. No commitment beyond that.' } },
    { ru: { 'Выбрать время': 'Свободно: сегодня 17:00 и 19:30, завтра с 10:00. Как зовут питомца и какое животное?', 'Оплатить онлайн': 'Принимаем карту на месте или переводом. После осмотра выставим счёт — ничего лишнего.', 'Нужна помощь с выбором': 'Расскажите что беспокоит питомца — подскажу к какому специалисту лучше записаться и что взять с собой.' },
      en: { 'Choose a time': 'Available: today 5 PM and 7:30 PM, tomorrow from 10 AM. What\'s your pet\'s name and species?', 'Pay online': 'Card on site or bank transfer. We\'ll invoice after the exam — nothing extra.', 'Need help choosing': 'Tell me what\'s concerning your pet — I\'ll advise which specialist to see and what to bring along.' } },
    { ru: { 'Да, хочу вернуться': 'Рады слышать! Как ваш питомец сейчас? Запишем на удобное время.', 'Расскажи про предложение': 'Для вас — бесплатный повторный осмотр, если лечение продолжается. Плюс скидка 10% на анализы. Актуально?', 'Не актуально': 'Хорошо. Если понадобится помощь — мы здесь. Здоровья вашему питомцу!' },
      en: { 'Yes, I\'m back': 'Glad to hear! How is your pet doing now? Let\'s find a convenient time.', 'Tell me about the offer': 'For you — free follow-up exam if treatment is ongoing. Plus 10% off lab tests. Does that help?', 'Not relevant anymore': 'Understood. If you need help — we\'re here. Wishing your pet good health!' } },
  ],
  /* 6 – МАКС (Фитнес-клуб) */
  [
    { ru: { 'Расскажи подробнее': 'У нас: тренажёрный зал, групповые программы, бассейн и персональные тренировки. Сертифицированные тренеры, топовое оборудование. Что хочешь прокачать?', 'Сколько стоит?': 'Месячный — 2 900 руб, 3 месяца — 6 900, годовой — 19 900. Персональная тренировка — 2 500 руб. Пробное занятие — бесплатно!', 'Как записаться?': 'Напиши когда хочешь прийти — утром или вечером. Оформим за минуту!' },
      en: { 'Tell me more': 'We have: gym floor, group classes, pool and personal training. Certified coaches, top-tier equipment. What do you want to work on?', 'How much does it cost?': 'Monthly — $35, 3 months — $85, annual — $240. Personal training — $30. Trial session — free!', 'How to sign up?': 'Tell me when you want to come — morning or evening. Done in a minute!' } },
    { ru: { 'Показать примеры': 'Загляни в Instagram @max_fitness — трансформации клиентов, тренировки, атмосфера зала. Там виден результат!', 'Узнать цены': 'Месячный — 2 900 руб, 3 месяца — 6 900 руб (экономия 900!), годовой — 19 900 руб. Пробное — бесплатно!', 'Записаться на пробное': 'Пробное — бесплатно! Потренируешься, познакомишься с тренером, посмотришь зал. Никаких обязательств. Когда приходишь?' },
      en: { 'Show examples': 'Check Instagram @max_fitness — client transformations, workouts, gym atmosphere. The results speak for themselves!', 'See pricing': 'Monthly — $35, 3 months — $85 (save $20!), annual — $240. Trial — free!', 'Book a trial': 'Trial session — FREE! Train, meet the coach, see the gym. Zero obligation. When are you coming?' } },
    { ru: { 'Что включено в цену?': 'В абонемент: всё оборудование, групповые занятия, раздевалка с душем. Персональный тренер — дополнительно. Никаких скрытых платежей!', 'Есть ли гарантия?': 'Если в первый месяц не понравится — вернём деньги. Без условий. Но уверен — ты останешься!', 'Можно попробовать?': 'Приходи на бесплатное пробное занятие — без денег, без обязательств. Одна тренировка — и всё поймёшь!' },
      en: { 'What\'s included?': 'Membership includes: all equipment, group classes, changing room with shower. Personal trainer extra. No hidden fees!', 'Is there a guarantee?': 'If you\'re not satisfied in the first month — full refund. No conditions. But I\'m confident you\'ll stay!', 'Can I try first?': 'Come for a free trial session — no payment, no obligation. One workout and you\'ll know!' } },
    { ru: { 'Выбрать время': 'Залетай: завтра утром 8:00 или вечером 19:00. Тренер тебя встретит. Имя для записи?', 'Оплатить онлайн': 'Картой онлайн или наличными на ресепшн. Напиши какой абонемент — выставлю ссылку!', 'Нужна помощь с выбором': 'Расскажи цель: похудеть, набрать мышцы, поддержать форму — подберу программу и тренера под тебя!' },
      en: { 'Choose a time': 'Come on: tomorrow morning 8 AM or evening 7 PM. The coach will meet you. Name for the booking?', 'Pay online': 'Card online or cash at the desk. Tell me which membership — I\'ll send the payment link!', 'Need help choosing': 'Tell me your goal: lose weight, build muscle, stay fit — I\'ll pick the right program and coach for you!' } },
    { ru: { 'Да, хочу вернуться': 'Чемпион, вернулся! Ждали! Прогресс никуда не делся. Когда заходишь?', 'Расскажи про предложение': 'Для тебя — месяц за 1 900 руб вместо 2 900! Специально, чтобы ты вернулся в ритм. Действует 48 часов. Оформляем?', 'Не актуально': 'Ок, чемпион! Когда захочешь вернуться в форму — мы здесь. Дверь открыта!' },
      en: { 'Yes, I\'m back': 'Champion, you\'re back! We waited! Your progress is still there. When are you coming?', 'Tell me about the offer': 'For you — one month for $22 instead of $35! Specially to get you back in the rhythm. Valid 48 hours. Deal?', 'Not relevant anymore': 'Ok, champion! When you want to get back in shape — we\'re here. Door\'s always open!' } },
  ],
];

/* ============================================================
   HERO CHAT DATA (7 bots)
============================================================ */
var HERO_CHATS = [
  { // СЭМ / SAM
    msgs: [
      { who:'in', text:'Привет! Хочу арендовать студию для съемки, что есть?' },
      { who:'out', text:'Привет, красотка! У нас два зала: белый циклорама и тёмный loft. Расскажи, что снимаем - подберу свет и время!' },
      { who:'in', text:'Портрет, хочу что-нибудь атмосферное' },
      { who:'out', text:'Тогда точно loft - там мягкое боковое освещение, идеально для портрета. Завтра есть 14:00 или 17:30. Бронируем?' },
    ],
    chips: ['Сколько стоит?', 'Посмотреть фото зала', 'Другое время'],
    chipReplies: {
      'Сколько стоит?': 'Час аренды — 2500 руб. Если нужна команда для съёмки, добавим 1000 руб. Для постоянных клиентов скидка 15%.',
      'Посмотреть фото зала': 'Конечно! Все фото есть в нашем Telegram-канале @sam_studio. Там же актуальное расписание.',
      'Другое время': 'Есть слоты: сегодня 19:00, послезавтра 10:00 и 15:00. Какой подходит?',
    },
    chipRepliesEn: {
      'How much?': 'One hour rental — $30. If you need a crew, add $12. Regular clients get 15% off.',
      'View studio photos': 'Of course! All photos are in our Telegram channel @sam_studio. Schedule is there too.',
      'Different time': 'Available: today at 7 PM, day after tomorrow at 10 AM and 3 PM. Which works?',
    },
    msgsEn: [
      { who:'in', text:'Hi! I\'d like to rent a studio for a shoot, what\'s available?' },
      { who:'out', text:'Hey gorgeous! We have two studios: white cyclorama and dark loft. Tell me what we\'re shooting - I\'ll match the light and time!' },
      { who:'in', text:'Portrait, I want something atmospheric' },
      { who:'out', text:'Then definitely the loft - soft side lighting, perfect for portraits. Tomorrow I have 2:00 PM and 5:30 PM. Booking?' },
    ],
    chipsEn: ['How much?', 'View studio photos', 'Different time'],
  },
  { // ПАДИК / PAD
    msgs: [
      { who:'in', text:'Привет, хочу попробовать падел. Я вообще новичок' },
      { who:'out', text:'Дружище, это лучшее решение! Падел - самый быстро усваиваемый вид спорта. Уже через час будешь рубиться. Есть пробный слот завтра в 18:00 - залетай!' },
      { who:'in', text:'А ракетку нужно свою брать?' },
      { who:'out', text:'Нет, у нас всё есть - ракетки, мячи, аренда обуви. Просто приходи и играй. Записать тебя на завтра?' },
    ],
    chips: ['Да, записать!', 'Другое время', 'Цены'],
    chipReplies: {
      'Да, записать!': 'Отлично! Записал тебя завтра в 18:00. Пришлю напоминание за 2 часа. Увидимся на корте!',
      'Другое время': 'Есть слоты: в эту субботу в 10:00, воскресенье в 12:00 и 16:00. Что подходит?',
      'Цены': 'Пробный час — 800 руб с ракеткой. Абонемент 8 часов — 5200 руб. Групповые тренировки — 600 руб/чел.',
    },
    chipRepliesEn: {
      'Yes, book me!': 'Awesome! Booked you for tomorrow at 6 PM. I\'ll send a reminder 2 hours before. See you on the court!',
      'Different time': 'Available: this Saturday at 10 AM, Sunday at 12 PM and 4 PM. Which works?',
      'Pricing': 'Trial hour — $10 with racket. 8-hour membership — $65. Group training — $8/person.',
    },
    msgsEn: [
      { who:'in', text:'Hi, I want to try padel. I\'m a total beginner' },
      { who:'out', text:'Buddy, best decision! Padel is the fastest sport to pick up. You\'ll be playing within an hour. Trial slot tomorrow at 6 PM - jump in!' },
      { who:'in', text:'Do I need to bring my own racket?' },
      { who:'out', text:'Nope, we have everything - rackets, balls, shoe rentals. Just show up and play. Book you for tomorrow?' },
    ],
    chipsEn: ['Yes, book me!', 'Different time', 'Pricing'],
  },
  { // ГЛАША / FLORA
    msgs: [
      { who:'in', text:'Добрый день! Нужен букет на день рождения подруге' },
      { who:'out', text:'Дорогая, какая хорошая идея! Расскажи немного о подруге - какой она человек, есть ли любимые цветы? Подберу букет с характером, а не просто набор цветов.' },
      { who:'in', text:'Она любит что-то нежное, пастельные тона' },
      { who:'out', text:'Тогда пионы и эустома в пыльно-розовом с веточками эвкалипта - это будет очень её. Бюджет примерно какой? Соберу под него.' },
    ],
    chips: ['До 2000 руб', 'До 3500 руб', 'Нужна доставка'],
    chipReplies: {
      'До 2000 руб': 'Отлично! В этом бюджете сделаю нежный букет из тюльпанов и альстромерий в пастельных тонах. Будет очень атмосферно! Самовывоз или доставка?',
      'До 3500 руб': 'Прекрасно! На 3500 соберу роскошный букет из пионов и эустомы с эвкалиптом — именно то, что описывала. Когда нужен?',
      'Нужна доставка': 'Доставляем по городу — 300 руб. Курьер привезёт в указанное время с открыткой. Адрес и время доставки?',
    },
    chipRepliesEn: {
      'Under $25': 'Perfect! In this budget I\'ll make a delicate bouquet of tulips and alstroemeria in pastel tones. Very atmospheric! Pickup or delivery?',
      'Under $45': 'Wonderful! For $45 I\'ll create a luxurious peony and lisianthus bouquet with eucalyptus — exactly what you described. When do you need it?',
      'Need delivery': 'We deliver citywide — $4. Courier arrives at your specified time with a card included. Address and delivery time?',
    },
    msgsEn: [
      { who:'in', text:'Hello! I need a bouquet for a friend\'s birthday' },
      { who:'out', text:'Dear, what a lovely idea! Tell me about your friend - what kind of person is she, any favorite flowers? I\'ll put together a bouquet with personality.' },
      { who:'in', text:'She likes something delicate, pastel tones' },
      { who:'out', text:'Then peonies and lisianthus in dusty pink with eucalyptus - it\'ll be very her. What\'s your budget? I\'ll work with it.' },
    ],
    chipsEn: ['Under $25', 'Under $45', 'Need delivery'],
  },
  { // КИРИЛЛЫЧ / CARL
    msgs: [
      { who:'in', text:'Здорово. Стучит что-то спереди при торможении' },
      { who:'out', text:'Понял, друг. Скорее всего тормозные колодки или суппорт. Это не срочно, но ездить долго не стоит. Когда сможешь заехать на диагностику?' },
      { who:'in', text:'Могу в субботу утром' },
      { who:'out', text:'Записал тебя на субботу в 9:00. Диагностика тормозов бесплатно, займёт минут 20. Марка и модель машины?' },
    ],
    chips: ['Отлично, жду', 'Другое время', 'Примерная цена ремонта'],
    chipReplies: {
      'Отлично, жду': 'Добро! Ждём тебя в субботу в 9:00. Адрес: ул. Механиков, 14. Позвони, если вдруг не найдёшь.',
      'Другое время': 'Без проблем. В воскресенье есть 10:00 и 12:00, в понедельник с 8:00. Что удобнее?',
      'Примерная цена ремонта': 'Если колодки — от 1800 руб с работой. Суппорт — от 3500 руб. Точнее скажу после диагностики, она бесплатная.',
    },
    chipRepliesEn: {
      'Great, see you then': 'Perfect! See you Saturday at 9 AM. Address: 14 Mechanics St. Call if you can\'t find us.',
      'Different time': 'No problem. Sunday has 10 AM and 12 PM, Monday from 8 AM. What works best?',
      'Estimated repair cost': 'Brake pads — from $22 including labor. Caliper — from $45. I\'ll give exact price after the free diagnosis.',
    },
    msgsEn: [
      { who:'in', text:'Hey. Something\'s knocking in the front when I brake' },
      { who:'out', text:'Got it, friend. Most likely brake pads or caliper. Not urgent, but don\'t drive too long. When can you come in for a check?' },
      { who:'in', text:'I can make it Saturday morning' },
      { who:'out', text:'Booked you for Saturday at 9 AM. Brake check is free, takes about 20 minutes. Make and model of your car?' },
    ],
    chipsEn: ['Great, see you then', 'Different time', 'Estimated repair cost'],
  },
  { // ЛЮСЯ / LUCY
    msgs: [
      { who:'in', text:'Привет! Хочу записаться на стрижку, есть что-нибудь на завтра?' },
      { who:'out', text:'Подруга, привет! Конечно есть - завтра у нас открыто 11:00 и 14:30. К кому хочешь - к Насте или Ирине?' },
      { who:'in', text:'К Насте! На 14:30' },
      { who:'out', text:'Записала тебя к Насте на завтра в 14:30. Напомню за час до визита. До встречи!' },
    ],
    chips: ['Перенести запись', 'Услуги и цены', 'Адрес'],
    chipReplies: {
      'Перенести запись': 'Конечно! Есть завтра в 11:00 и послезавтра в 10:00 и 15:00. Насте или к другому мастеру?',
      'Услуги и цены': 'Стрижка — от 1200 руб, окрашивание — от 2500, уход — от 800. Полный прайс пришлю в Telegram. Что интересует?',
      'Адрес': 'Мы на ул. Садовая, 23, вход со двора. Парковка бесплатная. Работаем с 9:00 до 21:00 без выходных.',
    },
    chipRepliesEn: {
      'Reschedule': 'Of course! Available tomorrow at 11 AM and the day after at 10 AM and 3 PM. With Nastya or another stylist?',
      'Services & prices': 'Haircut — from $15, coloring — from $30, treatment — from $10. Full price list in Telegram. What are you interested in?',
      'Address': 'We\'re at 23 Garden St, enter from the courtyard. Free parking. Open 9 AM – 9 PM every day.',
    },
    msgsEn: [
      { who:'in', text:'Hi! I\'d like to book a haircut, anything available tomorrow?' },
      { who:'out', text:'Hey friend! Of course - tomorrow we have 11:00 AM and 2:30 PM open. Who would you prefer - Nastya or Irina?' },
      { who:'in', text:'Nastya! At 2:30' },
      { who:'out', text:'Booked you with Nastya tomorrow at 2:30 PM. I\'ll send a reminder an hour before. See you!' },
    ],
    chipsEn: ['Reschedule', 'Services & prices', 'Address'],
  },
  { // БАРС / BARLO
    msgs: [
      { who:'in', text:'Здравствуйте, мой кот не ест второй день, что делать?' },
      { who:'out', text:'Здравствуй, друг. Понимаю, это тревожно. Скажи - кот вялый или активный? Пьёт воду? Это поможет понять срочность.' },
      { who:'in', text:'Вялый, воду пьёт немного' },
      { who:'out', text:'Рекомендую приехать сегодня - два дня без еды плюс вялость требуют осмотра. Есть время в 15:00 и 18:30. Как имя питомца?' },
    ],
    chips: ['Записать на 15:00', 'Записать на 18:30', 'Вызов на дом'],
    chipReplies: {
      'Записать на 15:00': 'Записал! Ждём вас сегодня в 15:00. Врач осмотрит кота и назначит лечение. Как зовут питомца?',
      'Записать на 18:30': 'Отлично! Записал на 18:30. Захватите предыдущие анализы, если есть. Как зовут кота?',
      'Вызов на дом': 'Выезжаем в пределах города, стоимость — 800 руб + стоимость осмотра. Когда удобно — сегодня или завтра? Адрес?',
    },
    chipRepliesEn: {
      'Book 3:00 PM': 'Booked! See you today at 3:00 PM. The vet will examine your cat and prescribe treatment. What\'s your pet\'s name?',
      'Book 6:30 PM': 'Great! Booked for 6:30 PM. Bring any previous test results if you have them. What\'s the cat\'s name?',
      'Home visit': 'We do home visits within the city — $10 + exam fee. When\'s convenient — today or tomorrow? Address?',
    },
    msgsEn: [
      { who:'in', text:'Hello, my cat hasn\'t eaten for two days, what should I do?' },
      { who:'out', text:'Hello, friend. I understand, that\'s worrying. Tell me - is the cat lethargic or active? Drinking water? This will help gauge urgency.' },
      { who:'in', text:'Lethargic, drinking a little water' },
      { who:'out', text:'I recommend coming in today - two days without food plus lethargy needs an exam. Available at 3:00 PM and 6:30 PM. What\'s your pet\'s name?' },
    ],
    chipsEn: ['Book 3:00 PM', 'Book 6:30 PM', 'Home visit'],
  },
  { // МАКС / MAX
    msgs: [
      { who:'in', text:'Сколько стоит абонемент?' },
      { who:'out', text:'Чемпион, привет! Месячный - 2900, три месяца - 6900, годовой - 19900. Но сначала рекомендую пробное занятие - бесплатно. Посмотришь зал, познакомишься с тренером.' },
      { who:'in', text:'Пробное - это как? Нужно что-то приносить?' },
      { who:'out', text:'Только себя и хорошее настроение! Форма и полотенце есть в прокате. Когда удобно прийти - утром или вечером?' },
    ],
    chips: ['Утром', 'Вечером', 'Купить абонемент сразу'],
    msgsEn: [
      { who:'in', text:'How much is a membership?' },
      { who:'out', text:'Champion, hey! Monthly - $35, three months - $85, annual - $240. But I recommend a free trial first - check out the gym, meet the trainer.' },
      { who:'in', text:'Trial - how does that work? Do I need to bring anything?' },
      { who:'out', text:'Just yourself and good energy! Workout clothes and towels available for rent. When\'s convenient - morning or evening?' },
    ],
    chipsEn: ['Morning', 'Evening', 'Buy membership now'],
    chipReplies: {
      'Утром': 'Отлично! Завтра в 8:00 тебя ждём. Форма и полотенце — в прокате. Имя для записи?',
      'Вечером': 'Записал на завтра в 19:00. Приходи бодрым — первое занятие бесплатно!',
      'Купить абонемент сразу': 'Уважаю решительность! Месячный — 2900 руб, три месяца — 6900. Как удобно оплатить: картой онлайн или на месте?',
    },
    chipRepliesEn: {
      'Morning': 'Perfect! Tomorrow at 8:00 AM. Gear and towels are available for rent. Name for the booking?',
      'Evening': 'Booked for tomorrow at 7:00 PM. Come energized — first session is free!',
      'Buy membership now': 'Love the decisiveness! Monthly — $35, three months — $85. Pay online by card or in person?',
    },
  },
];

var heroActivePill = -1;

function renderHeroChat(idx) {
  var mock = document.querySelector('.hero__chat-mock');
  if (!mock) return;
  var b = BOTS[idx];
  var chat = HERO_CHATS[idx];
  var isEn = currentLang === 'en';

  // set bot color CSS variable for message bubbles
  mock.style.setProperty('--hcm-bot-color', b.color);

  // header
  var head = mock.querySelector('.hcm__head');
  if (head) {
    var av = head.querySelector('.hcm__av');
    if (b.icon) { av.innerHTML = '<img src="' + b.icon + '" alt="' + b.name + '" class="bot-av-icon">'; }
    else { av.textContent = b.emoji; }
    head.querySelector('.hcm__av').style.background = b.color;
    head.querySelector('.hcm__head-info strong').textContent = isEn ? b.nameEn : b.name;
    var infoSpan = head.querySelector('.hcm__head-info span');
    infoSpan.textContent = isEn ? b.bizEn : b.biz;
  }

  // update pill labels
  document.querySelectorAll('.hero__bot-pill').forEach(function(p, i) {
    var spans = p.querySelectorAll('span');
    if (spans.length >= 2 && BOTS[i]) {
      spans[1].textContent = isEn ? BOTS[i].nameEn : BOTS[i].name;
    }
  });

  // messages
  var msgs = (isEn && chat.msgsEn) ? chat.msgsEn : chat.msgs;
  var body = mock.querySelector('.hcm__body');
  if (body) {
    body.innerHTML = '';
    msgs.forEach(function(m, i) {
      var d = document.createElement('div');
      d.className = 'hcm__msg hcm__msg--' + m.who + ' hcm__msg--delay-' + (i + 1);
      d.textContent = m.text;
      body.appendChild(d);
    });
    // typing indicator
    var t = document.createElement('div');
    t.className = 'hcm__typing hcm__msg--delay-' + (msgs.length + 1);
    t.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(t);
  }

  // chips
  var chips = (isEn && chat.chipsEn) ? chat.chipsEn : chat.chips;
  var replies = (isEn && chat.chipRepliesEn) ? chat.chipRepliesEn : (chat.chipReplies || {});
  var chipsEl = mock.querySelector('.hcm__chips');
  if (chipsEl) {
    chipsEl.innerHTML = chips.map(function(c) {
      return '<button class="hcm__chip" style="color:' + b.color + ';border-color:' + b.color + '">' + c + '</button>';
    }).join('');

    chipsEl.querySelectorAll('.hcm__chip').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var chipText = btn.textContent.trim();
        btn.remove();

        // user message
        var userMsg = document.createElement('div');
        userMsg.className = 'hcm__msg hcm__msg--in';
        userMsg.textContent = chipText;
        body.appendChild(userMsg);

        // remove old typing, add new
        var oldTyping = body.querySelector('.hcm__typing');
        if (oldTyping) oldTyping.remove();
        var typing = document.createElement('div');
        typing.className = 'hcm__typing';
        typing.innerHTML = '<span></span><span></span><span></span>';
        body.appendChild(typing);
        body.scrollTop = body.scrollHeight;

        // bot reply
        var replyText = replies[chipText] || '..';
        setTimeout(function() {
          typing.remove();
          var botMsg = document.createElement('div');
          botMsg.className = 'hcm__msg hcm__msg--out';
          botMsg.textContent = replyText;
          body.appendChild(botMsg);
          body.scrollTop = body.scrollHeight;
        }, 1200);
      });
    });
  }

  // active pill
  heroActivePill = idx;
  document.querySelectorAll('.hero__bot-pill').forEach(function(p, i) {
    var isActive = i === idx;
    p.classList.toggle('hero__bot-pill--active', isActive);
    if (isActive) {
      p.style.borderColor = b.color;
      p.style.background = b.color + '18';
      p.style.color = b.color;
    } else {
      p.style.borderColor = '';
      p.style.background = '';
      p.style.color = '';
    }
  });
}

function initHeroChat() {
  var pills = document.querySelectorAll('.hero__bot-pill');
  if (!pills.length) return;
  // random bot on load
  var startIdx = Math.floor(Math.random() * BOTS.length);
  renderHeroChat(startIdx);

  pills.forEach(function(pill, i) {
    pill.style.cursor = 'pointer';
    pill.addEventListener('click', function() {
      if (heroActivePill === i) return;
      renderHeroChat(i);
    });
  });
}

/* ============================================================
   PERSONAS INTERACTIVE SECTION
============================================================ */
var curBot = 0;
var curState = 0;

function renderBotSelector() {
  var el = document.getElementById('botSelector');
  if (!el) return;
  var isEn = currentLang === 'en';
  el.innerHTML = BOTS.map(function(b, i) {
    var bName = isEn ? b.nameEn : b.name;
    var bBiz  = isEn ? b.bizEn  : b.biz;
    return '<button class="bot-btn' + (i === curBot ? ' is-active' : '') + '" style="--bot-color:' + b.color + '" data-bot="' + i + '" aria-pressed="' + (i === curBot) + '" aria-label="' + bName + ' - ' + bBiz + '">' +
      '<span class="bot-btn__av" style="background:' + b.color + '">' + botAvHtml(b) + '</span>' +
      '<span class="bot-btn__name">' + bName + '</span>' +
      '<span class="bot-btn__biz">' + bBiz + '</span>' +
      '</button>';
  }).join('');

  el.querySelectorAll('.bot-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      curBot = +btn.dataset.bot;
      renderBotSelector();
      renderBotCharDesc();
      renderPersonaDetail();
    });
  });
}

function renderBotCharDesc() {
  var el = document.getElementById('botCharDesc');
  if (!el) return;
  var b = BOTS[curBot];
  var isEn = currentLang === 'en';
  el.innerHTML =
    '<span class="bot-char-desc__av" style="background:' + b.color + '">' + botAvHtml(b) + '</span>' +
    '<div class="bot-char-desc__text">' +
      '<strong>' + (isEn ? b.nameEn : b.name) + '</strong>' +
      '<span class="bot-char-desc__biz">- ' + (isEn ? b.bizEn : b.biz) + '</span>' +
      '<span class="bot-char-desc__char">' + (isEn ? b.charEn : b.char) + '</span>' +
    '</div>';
}

function renderStateSelector() {
  var el = document.getElementById('stateSelector');
  if (!el) return;
  var isEn = currentLang === 'en';
  el.innerHTML = STATES.map(function(s, i) {
    var sName = isEn ? s.nameEn : s.name;
    return '<button class="state-btn' + (i === curState ? ' is-active' : '') + '" data-state="' + i + '" aria-pressed="' + (i === curState) + '" aria-label="' + sName + '">' +
      '<span class="state-btn__icon">' + s.icon + '</span>' +
      '<span class="state-btn__name">' + sName + '</span>' +
      '</button>';
  }).join('');

  el.querySelectorAll('.state-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      curState = +btn.dataset.state;
      renderStateSelector();
      renderPersonaDetail();
    });
  });
}

function renderPersonaDetail() {
  var el = document.getElementById('personaDetail');
  if (!el) return;
  var b = BOTS[curBot];
  var s = STATES[curState];
  var isEn = currentLang === 'en';

  var bName   = isEn ? b.nameEn : b.name;
  var bBiz    = isEn ? b.bizEn  : b.biz;
  var badge   = isEn ? s.badgeEn  : s.badge;
  var intent  = isEn ? s.intentEn : s.intent;
  var uMsg    = isEn ? s.uMsgEn   : s.uMsg;
  var bMsgFn  = isEn ? s.bMsgEn   : s.bMsg;
  var chips   = isEn ? s.chipsEn  : s.chips;
  var sitLabel = isEn ? 'Situation:' : 'Ситуация:';
  var onlineLabel = isEn ? 'online' : 'онлайн';

  el.innerHTML =
    '<div class="persona-card">' +
      '<div class="persona-card__top" style="--bot-color:' + b.color + '">' +
        '<div class="persona-card__top-left">' +
          '<div class="persona-card__av" style="background:' + b.color + '">' + botAvHtml(b) + '</div>' +
          '<div>' +
            '<div class="persona-card__name">' + bName + '</div>' +
            '<div class="persona-card__biz">' + bBiz + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="persona-card__badge">' + badge + '</div>' +
      '</div>' +
      '<div class="persona-card__intent">' +
        '<span class="persona-card__intent-label">' + sitLabel + '</span> ' + intent +
      '</div>' +
      '<div class="persona-chat">' +
        '<div class="persona-chat__header">' +
          '<div class="persona-chat__av" style="background:' + b.color + '">' + botAvHtml(b) + '</div>' +
          '<div>' +
            '<div class="persona-chat__bot-name">' + bName + '</div>' +
            '<div class="persona-chat__status">' + onlineLabel + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="persona-chat__body">' +
          '<div class="persona-msg persona-msg--user"><span>' + uMsg + '</span></div>' +
          '<div class="persona-msg persona-msg--bot" style="--bot-color:' + b.color + '"><span>' + bMsgFn(b) + '</span></div>' +
        '</div>' +
        '<div class="persona-chat__chips">' +
          chips.map(function(c) {
            return '<button class="persona-chip" style="border-color:' + b.color + ';color:' + b.color + '">' + c + '</button>';
          }).join('') +
        '</div>' +
      '</div>' +
    '</div>';

  // Add click handlers to persona chips
  var chatBody = el.querySelector('.persona-chat__body');
  var chipsContainer = el.querySelector('.persona-chat__chips');
  var botRepliesObj = PERSONA_CHIP_REPLIES[curBot] && PERSONA_CHIP_REPLIES[curBot][curState]
    ? (isEn ? PERSONA_CHIP_REPLIES[curBot][curState].en : PERSONA_CHIP_REPLIES[curBot][curState].ru)
    : {};

  if (chipsContainer && chatBody) {
    chipsContainer.querySelectorAll('.persona-chip').forEach(function(chip) {
      chip.addEventListener('click', function() {
        var chipText = chip.textContent.trim();
        chip.remove();

        // user message
        var userMsg = document.createElement('div');
        userMsg.className = 'persona-msg persona-msg--user';
        userMsg.innerHTML = '<span>' + chipText + '</span>';
        chatBody.appendChild(userMsg);

        // typing indicator
        var typing = document.createElement('div');
        typing.className = 'hcm__typing';
        chatBody.appendChild(typing);
        typing.innerHTML = '<span></span><span></span><span></span>';
        chatBody.scrollTop = chatBody.scrollHeight;

        // bot reply after delay
        var replyText = botRepliesObj[chipText] || (isEn ? 'Good question! Let me help you.' : 'Хороший вопрос! Сейчас расскажу.');
        setTimeout(function() {
          typing.remove();
          var botMsg = document.createElement('div');
          botMsg.className = 'persona-msg persona-msg--bot';
          botMsg.innerHTML = '<span>' + replyText + '</span>';
          chatBody.appendChild(botMsg);
          chatBody.scrollTop = chatBody.scrollHeight;
        }, 1200);
      });
    });
  }
}

function initPersonas() {
  var section = document.getElementById('personas');
  if (!section) return;
  renderBotSelector();
  renderBotCharDesc();
  renderStateSelector();
  renderPersonaDetail();
}

/* ============================================================
   CASES CAROUSEL
============================================================ */
function initCasesCarousel() {
  var track = document.querySelector('.cases-track');
  if (!track) return;

  var btnPrev = document.getElementById('casesPrev');
  var btnNext = document.getElementById('casesNext');
  var dotsEl  = document.getElementById('casesDots');
  var items   = track.querySelectorAll('.case-card');
  if (!items.length) return;

  var cur = 0;
  var startX = 0;
  var isDragging = false;

  function getVisible() {
    return 1;
  }

  function maxIdx() { return Math.max(0, items.length - getVisible()); }

  function go(idx) {
    cur = Math.max(0, Math.min(idx, maxIdx()));
    var itemW = items[0].getBoundingClientRect().width;
    var gap = parseFloat(getComputedStyle(track).gap) || 20;
    track.style.transform = 'translateX(-' + (cur * (itemW + gap)) + 'px)';
    if (dotsEl) {
      dotsEl.querySelectorAll('.case-dot, .cases-dot').forEach(function(d, i) {
        d.classList.toggle('is-active', i === cur);
      });
    }
    if (btnPrev) btnPrev.disabled = cur === 0;
    if (btnNext) btnNext.disabled = cur >= maxIdx();
  }

  if (btnPrev) btnPrev.addEventListener('click', function() { go(cur - 1); });
  if (btnNext) btnNext.addEventListener('click', function() { go(cur + 1); });

  if (dotsEl) {
    dotsEl.querySelectorAll('.case-dot, .cases-dot').forEach(function(d, i) {
      d.addEventListener('click', function() { go(i); });
    });
  }

  /* touch support */
  track.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; isDragging = true; }, { passive: true });
  track.addEventListener('touchend', function(e) {
    if (!isDragging) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1));
    isDragging = false;
  });

  track.addEventListener('mousedown', function(e) { startX = e.clientX; isDragging = true; e.preventDefault(); });
  document.addEventListener('mouseup', function(e) {
    if (!isDragging) return;
    var dx = e.clientX - startX;
    if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1));
    isDragging = false;
  });

  window.addEventListener('resize', function() { go(Math.min(cur, maxIdx())); });
  go(0);
}

/* ============================================================
   FAQ ACCORDION
============================================================ */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(function(item) {
    var btn  = item.querySelector('.faq-item__q');
    var body = item.querySelector('.faq-item__a');
    if (!btn || !body) return;

    btn.addEventListener('click', function() {
      var isOpen = item.classList.contains('is-open');
      /* close all */
      document.querySelectorAll('.faq-item.is-open').forEach(function(other) {
        other.classList.remove('is-open');
        var ob = other.querySelector('.faq-item__a');
        if (ob) { ob.style.maxHeight = '0'; ob.style.paddingBottom = '0'; }
        var oa = other.querySelector('.faq-item__q');
        if (oa) oa.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        body.style.maxHeight = (body.scrollHeight + 32) + 'px';
        body.style.paddingBottom = '20px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ============================================================
   CONTACT FORM
============================================================ */
function initForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  var submitBtn = form.querySelector('[type="submit"]');

  function validateField(input) {
    var val = input.value.trim();
    var ok = true;
    if (input.required && !val) ok = false;
    if (input.type === 'tel' && val && !/[0-9+\-\s()]{6,}/.test(val)) ok = false;
    if (input.tagName === 'SELECT' && input.required && !val) ok = false;
    var group = input.closest('.form-field');
    if (group) group.classList.toggle('is-error', !ok);
    return ok;
  }

  form.querySelectorAll('input, textarea, select').forEach(function(inp) {
    inp.addEventListener('blur', function() { validateField(inp); });
    inp.addEventListener('change', function() { validateField(inp); });
    inp.addEventListener('input', function() {
      if (inp.closest('.form-field') && inp.closest('.form-field').classList.contains('is-error')) {
        validateField(inp);
      }
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var valid = true;
    form.querySelectorAll('input[required], textarea[required], select[required]').forEach(function(inp) {
      if (!validateField(inp)) valid = false;
    });
    if (!valid) return;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = '...';
    }

    setTimeout(function() {
      /* show success */
      form.style.display = 'none';
      var contactWrap = form.closest('.contact-form-wrap');
      if (contactWrap) {
        var msg = document.createElement('div');
        msg.className = 'form-success';
        msg.innerHTML = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#EBF4FF"/><path d="M14 24l8 8 12-14" stroke="#185FA5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg><p>Спасибо! Свяжемся с вами в течение часа.</p>';
        contactWrap.appendChild(msg);
      }
    }, 800);
  });
}

/* ============================================================
   CHAT TRIGGER PLACEHOLDER
   TODO: подключить реальный чат (Next.js / Telegram / etc.)
============================================================ */
function initChatWidget() {
  /* placeholder — реальный чат подключается отдельно */
  var btn = document.getElementById('chatTriggerBtn');
  if (btn) {
    btn.addEventListener('click', function() {
      /* TODO: открыть реальный чат */
      var anchor = document.getElementById('contacts');
      if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

/* ============================================================
   MOBILE CTA
============================================================ */
function initMobileCTA() {
  var bar = document.getElementById('mobileCta');
  if (!bar) return;
  var contacts = document.getElementById('contacts');
  if (!contacts) return;

  var io = new IntersectionObserver(function(entries) {
    bar.classList.toggle('is-visible', !entries[0].isIntersecting);
  }, { threshold: 0 });
  io.observe(contacts);
}

/* ============================================================
   SCROLL REVEAL
============================================================ */
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.classList.add('is-visible');
      io.unobserve(el);

      /* cascade children for a light, staggered entrance */
      if (el.hasAttribute('data-stagger')) {
        var kids = el.children;
        var n = kids.length;
        for (var i = 0; i < n; i++) {
          kids[i].style.transitionDelay = (i * 0.075) + 's';
        }
        /* clear delays after entrance so hover stays snappy */
        setTimeout(function() {
          for (var j = 0; j < n; j++) { kids[j].style.transitionDelay = ''; }
        }, 800 + n * 75 + 120);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function(el) { io.observe(el); });
}

/* ============================================================
   HEADER: scroll shadow + burger + active nav
============================================================ */
function initHeader() {
  var header = document.getElementById('header');
  var burger = document.getElementById('headerBurger');
  var nav    = document.getElementById('headerNav');
  if (!header) return;

  var prevY = 0;
  window.addEventListener('scroll', function() {
    var y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 10);
    if (y > prevY + 10 && y > 80) {
      header.classList.add('is-hidden');
    } else if (y < prevY || y < 80) {
      header.classList.remove('is-hidden');
    }
    prevY = y;
  }, { passive: true });

  if (burger && nav) {
    burger.addEventListener('click', function() {
      var open = nav.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        nav.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function(e) {
      if (!header.contains(e.target)) {
        nav.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* active nav highlight — tracks which section covers the viewport centre */
  var navSectionIds = ['personas', 'pricing', 'faq', 'contacts'];
  var navLinks = document.querySelectorAll('.header__nav-link');
  function updateActiveNav() {
    var mid = window.scrollY + window.innerHeight * 0.45;
    var active = null;
    navSectionIds.forEach(function(id) {
      var el = document.getElementById(id);
      if (!el) return;
      var top = el.offsetTop - 80;
      if (mid >= top) active = id;
    });
    navLinks.forEach(function(l) {
      l.classList.toggle('is-active', l.getAttribute('href') === '#' + active);
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
}

/* ============================================================
   SMOOTH SCROLL
============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var offset = 72;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   i18n ENGINE
============================================================ */
var currentLang = localStorage.getItem('saleon_lang') || 'ru';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('saleon_lang', lang);
  document.documentElement.lang = lang;

  var dict = T[lang] || T.ru;

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });

  var ru = document.getElementById('langRu');
  var en = document.getElementById('langEn');
  if (ru) ru.classList.toggle('is-active', lang === 'ru');
  if (en) en.classList.toggle('is-active', lang === 'en');

  /* re-render all dynamic sections with new language */
  if (document.getElementById('botSelector')) {
    renderBotSelector();
    renderBotCharDesc();
    renderStateSelector();
    renderPersonaDetail();
  }
  if (heroActivePill >= 0) {
    renderHeroChat(heroActivePill);
  }
  if (document.getElementById('calcRange')) {
    updateCalc();
  }
}

function initLangToggle() {
  var toggle = document.getElementById('langToggle');
  if (!toggle) return;
  toggle.addEventListener('click', function() {
    applyLang(currentLang === 'ru' ? 'en' : 'ru');
  });
  applyLang(currentLang);
}

/* ============================================================
   POPUP / MODAL
============================================================ */
function initPopup() {
  var popup   = document.getElementById('popupOverlay');
  var skip    = document.getElementById('popupSkip');
  var closBtn = document.getElementById('popupClose');
  if (!popup) return;

  function openPopup() {
    popup.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closePopup() {
    popup.hidden = true;
    document.body.style.overflow = '';
  }

  if (skip)    skip.addEventListener('click', closePopup);
  if (closBtn) closBtn.addEventListener('click', closePopup);

  popup.addEventListener('click', function(e) { if (e.target === popup) closePopup(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closePopup(); });

  /* auto-show after 40s on first visit */
  if (!sessionStorage.getItem('popup_shown')) {
    setTimeout(function() {
      if (!popup.hidden) return; /* already shown somehow */
      openPopup();
      sessionStorage.setItem('popup_shown', '1');
    }, 40000);
  }
}

/* ============================================================
   SCROLL HINT — fade out on scroll
============================================================ */
function initScrollHint() {
  var hint = document.querySelector('.hero__scroll-hint');
  if (!hint) return;
  window.addEventListener('scroll', function() {
    var gone = window.scrollY > 60;
    hint.style.opacity  = gone ? '0' : '';
    hint.style.pointerEvents = gone ? 'none' : '';
  }, { passive: true });
}

/* ============================================================
   STAT COUNTERS — animate from 0 to target when in viewport
============================================================ */
function initStatCounters() {
  var nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;

  var observed = new Set();

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      if (observed.has(el)) return;
      observed.add(el);

      var target = parseInt(el.getAttribute('data-target'), 10);
      var duration = 1200; /* ms */
      var start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        /* ease-out cubic */
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });

  nums.forEach(function(el) { observer.observe(el); });
}

/* ============================================================
   PRICING CALCULATOR — slider picks the matching plan
============================================================ */
function updateCalc() {
  var range = document.getElementById('calcRange');
  if (!range) return;
  var valEl   = document.getElementById('calcVal');
  var planEl  = document.getElementById('calcPlan');
  var priceEl = document.getElementById('calcPrice');
  var rubEl   = document.getElementById('calcRub');
  var cards   = document.querySelectorAll('.pricing-card[data-plan]');
  var dict    = T[currentLang] || T.ru;

  var v = parseInt(range.value, 10);
  var plan, name, price, custom = false;
  if (v <= 20)       { plan = 'min';  name = dict['plan1.name']; price = '10 000'; }
  else if (v <= 50)  { plan = 'mid';  name = dict['plan2.name']; price = '20 000'; }
  else if (v <= 100) { plan = 'prem'; name = dict['plan3.name']; price = '30 000'; }
  else               { plan = 'prem'; name = dict['calc.custom']; custom = true; }

  if (valEl)   valEl.textContent = (v >= 120 ? '120+' : v);
  if (planEl)  planEl.textContent = name;
  if (priceEl) priceEl.textContent = custom ? dict['calc.byrequest'] : price;
  if (rubEl)   rubEl.style.display = custom ? 'none' : '';

  cards.forEach(function(c) {
    c.classList.toggle('pricing-card--match', c.dataset.plan === plan);
  });

  var pct = (v - range.min) / (range.max - range.min) * 100;
  range.style.setProperty('--calc-pct', pct + '%');
}

function initCalc() {
  var range = document.getElementById('calcRange');
  if (!range) return;
  range.addEventListener('input', updateCalc);
  updateCalc();
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  initCalc();
  initHeader();
  initLangToggle();
  initReveal();
  initHeroChat();
  initPersonas();
  initCasesCarousel();
  initFAQ();
  initForm();
  initChatWidget();
  initMobileCTA();
  initSmoothScroll();
  initPopup();
  initStatCounters();
  initScrollHint();
});
