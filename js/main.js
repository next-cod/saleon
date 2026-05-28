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

    'hero.eyebrow':      'Цифровые сотрудники с характером',
    'hero.title':        'Познакомьтесь -<br>это ваш новый<br>сотрудник.',
    'hero.lead':         'У него есть имя, характер и один единственный режим: работать. Не уволится, не заболеет, не нагрубит клиенту в пятницу вечером.',
    'hero.cta1':         'Познакомиться с Сэйлоном',
    'hero.cta2':         'Посмотреть, как это работает',
    'hero.works':        'Работает в:',
    'hero.ch.site':      'Сайт',
    'hero.visual.hint':  '+ ещё 3 персонажа с характером - ниже',

    'pain.title':       'Узнаёте?',
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

    'personas.eyebrow':       'КАК РАБОТАЕТ СЭЙЛОН',
    'personas.title':         'Бот знает, что происходит с вашим клиентом',
    'personas.subtitle':      'Выберите персонажа и состояние - посмотрите, как бот с характером отвечает в нужный момент.',
    'personas.choose.bot':    'ВЫБЕРИТЕ ПЕРСОНАЖА',
    'personas.choose.state':  'СОСТОЯНИЕ КЛИЕНТА',
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

    'usp.title':     'Чем Сэйлон отличается',
    'usp.u1.title':  'Понимает, где клиент',
    'usp.u1.desc':   'Не один скрипт для всех. Бот видит состояние клиента - сомневается, думает, готов купить - и отвечает под него.',
    'usp.u2.title':  'Имя и характер задаёте вы',
    'usp.u2.desc':   'Клиенты не разговаривают с "ботом". Они общаются с Леной, Максом или Артёмом - вашим цифровым сотрудником, которого придумали сами.',
    'usp.u3.title':  'Без программистов',
    'usp.u3.desc':   'Вы заполняете шаблон - мы настраиваем. Никакого кода, никаких технических знаний.',

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
    'faq.a7':  'Telegram, ВКонтакте, чат на сайте. Интегрируется с Bitrix24, amoCRM и другими системами.',

    'contact.title':   'Придумайте имя своему боту',
    'contact.desc':    'Бесплатный созвон 30 минут - разберём вашу ситуацию, придумаем характер бота, покажем как это работает в вашей нише.',
    'contact.note':    'Без давления и обязательств.',
    'contact.alt':     'Или напишите нам в',
    'contact.alt.tg':  'Telegram',
    'contact.author.name': 'Татьяна',
    'contact.author.role': 'маркетолог, автор продукта',

    'form.name':          'Имя',
    'form.contact':       'Телефон или Telegram',
    'form.niche':         'Ниша бизнеса',
    'form.niche.default': 'Выберите...',
    'form.niche.other':   'Другое',
    'form.submit':        'Придумать имя своему боту',
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

    'popup.title':  'Придумаем имя вашему боту?',
    'popup.text':   'Бесплатный созвон 30 минут - покажем как это работает в вашей нише.',
    'popup.cta':    'Попробовать бесплатно',
    'popup.skip':   'Нет, спасибо',

    'mobile.cta':   'Познакомиться с Сэйлоном',

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
    'hero.title':        'Meet your new<br>team member.',
    'hero.lead':         'They have a name, a personality, and one mode: work. Won\'t quit, won\'t get sick, won\'t snap at a customer on Friday night.',
    'hero.cta1':         'Meet Saleon',
    'hero.cta2':         'See how it works',
    'hero.works':        'Works in:',
    'hero.ch.site':      'Website',
    'hero.visual.hint':  '+ 3 more characters with personality - below',

    'pain.title':       'Sound familiar?',
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
    'personas.choose.bot':    'CHOOSE A CHARACTER',
    'personas.choose.state':  'CLIENT STATE',
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

    'usp.title':     'What makes Saleon different',
    'usp.u1.title':  'Understands where the client is',
    'usp.u1.desc':   'Not one script for everyone. The bot sees client state and responds accordingly.',
    'usp.u2.title':  'You set the name and personality',
    'usp.u2.desc':   'Clients don\'t talk to a "bot". They talk to your digital employee with a personality you designed.',
    'usp.u3.title':  'No developers needed',
    'usp.u3.desc':   'No code. You fill out a template - we set it up. No technical knowledge required.',

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
    'faq.a7':  'Telegram, VKontakte, website chat. Integrates with Bitrix24, amoCRM and other systems.',

    'contact.title':   'Name your bot',
    'contact.desc':    'Free 30-minute call - we\'ll analyze your situation, create a bot personality, show how it works in your niche.',
    'contact.note':    'No pressure, no obligations.',
    'contact.alt':     'Or write to us on',
    'contact.alt.tg':  'Telegram',
    'contact.author.name': 'Tatyana',
    'contact.author.role': 'marketer, product author',

    'form.name':          'Name',
    'form.contact':       'Phone or Telegram',
    'form.niche':         'Business type',
    'form.niche.default': 'Select...',
    'form.niche.other':   'Other',
    'form.submit':        'Name my bot',
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

    'popup.title':  'Let\'s name your bot?',
    'popup.text':   'Free 30-minute call - we\'ll show how it works in your niche.',
    'popup.cta':    'Try for free',
    'popup.skip':   'No thanks',

    'mobile.cta':   'Meet Saleon',

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
    name: 'СЭМ',
    biz: 'Фотостудия',
    char: 'Творческий, вдохновляет клиента, говорит образно. Знает всё про свет и атмосферу.',
    color: '#D4537E',
    greet: 'красотка',
    emoji: 'С',
  },
  {
    id: 'padik',
    name: 'ПАДИК',
    biz: 'Падел-центр',
    char: 'Спортивный, заводной, говорит как свой в тусовке. Продвигает активный образ жизни.',
    color: '#1D9E75',
    greet: 'дружище',
    emoji: 'П',
  },
  {
    id: 'glasha',
    name: 'ГЛАША',
    biz: 'Цветочный магазин',
    char: 'Тёплая, заботливая, помогает выбрать цветы с душой. Знает значение каждого букета.',
    color: '#D85A30',
    greet: 'дорогая',
    emoji: 'Г',
  },
  {
    id: 'kirillych',
    name: 'КИРИЛЛЫЧ',
    biz: 'Автосервис',
    char: 'Надёжный, говорит просто и по делу. Как механик, которому доверяешь.',
    color: '#5F5E5A',
    greet: 'друг',
    emoji: 'К',
  },
  {
    id: 'lusya',
    name: 'ЛЮСЯ',
    biz: 'Салон красоты',
    char: 'Внимательная, заботливая, понимает клиента с полуслова. Эксперт по стилю и уходу.',
    color: '#993556',
    greet: 'подруга',
    emoji: 'Л',
  },
  {
    id: 'bars',
    name: 'БАРС',
    biz: 'Ветклиника',
    char: 'Спокойный, профессиональный, говорит с теплом. Знает, как успокоить переживающего хозяина.',
    color: '#0891B2',
    greet: 'друг',
    emoji: 'Б',
  },
  {
    id: 'maks',
    name: 'МАКС',
    biz: 'Фитнес-клуб',
    char: 'Мотивирующий, энергичный, верит в каждого клиента. Говорит коротко и по делу.',
    color: '#185FA5',
    greet: 'чемпион',
    emoji: 'М',
  },
];

/* ============================================================
   CLIENT STATES DATA
============================================================ */
const STATES = [
  {
    id: 'new',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    name: 'Первый раз',
    intent: 'Написал впервые. Ещё не знает, что предложить.',
    uMsg: 'Привет, а что вы вообще предлагаете?',
    bMsg: function(b) { return 'Привет, ' + b.greet + '! Я ' + b.name + ', твой помощник в ' + b.biz.toLowerCase() + '. Расскажи, что тебя интересует - подберу лучший вариант! Или хочешь, покажу, с чего обычно начинают?'; },
    chips: ['Расскажи подробнее', 'Сколько стоит?', 'Как записаться?'],
    badge: 'Первый контакт',
  },
  {
    id: 'explore',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    name: 'Изучает',
    intent: 'Сравнивает варианты, задаёт вопросы о деталях.',
    uMsg: 'А чем вы отличаетесь от конкурентов?',
    bMsg: function(b) { return 'Хороший вопрос, ' + b.greet + '! Главное отличие - мы подходим индивидуально. Большинство, кто сравнивал варианты, выбирают нас. Что для тебя важнее всего?'; },
    chips: ['Показать примеры', 'Узнать цены', 'Записаться на пробное'],
    badge: 'Изучает варианты',
  },
  {
    id: 'doubt',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/></svg>',
    name: 'Сомневается',
    intent: 'Почти готов, но есть возражения или страхи.',
    uMsg: 'Дороговато... Не знаю, стоит ли вообще?',
    bMsg: function(b) { return 'Понимаю тебя, ' + b.greet + ' - это важное решение. Давай попробуем без риска. Если не подойдёт - просто не продолжаешь. Большинство, кто сомневался, потом говорят: "Надо было раньше!"'; },
    chips: ['Что включено в цену?', 'Есть ли гарантия?', 'Можно попробовать?'],
    badge: 'Сомневается',
  },
  {
    id: 'ready',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    name: 'Готов купить',
    intent: 'Уже решил, хочет оформить быстро.',
    uMsg: 'Окей, я готов. Как записаться?',
    bMsg: function(b) { return 'Отлично, ' + b.greet + '! Рад, что выбрал нас. Выбери удобное время или оплати онлайн - и ты в деле. Оформляем?'; },
    chips: ['Выбрать время', 'Оплатить онлайн', 'Нужна помощь с выбором'],
    badge: 'Готов купить',
  },
  {
    id: 'gone',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    name: 'Пропал',
    intent: 'Общался, но перестал отвечать. Потерял интерес или забыл.',
    uMsg: '(молчит уже 3 дня)',
    bMsg: function(b) { return b.greet.charAt(0).toUpperCase() + b.greet.slice(1) + ', это снова ' + b.name + '. Просто хотел спросить - всё в порядке? Если остались вопросы - напиши, разберёмся. Держу для тебя специальное предложение ещё пару дней.'; },
    chips: ['Да, хочу вернуться', 'Расскажи про предложение', 'Не актуально'],
    badge: 'Реактивация',
  },
];

/* ============================================================
   HERO CHAT DATA (7 bots)
============================================================ */
var HERO_CHATS = [
  { // СЭМ
    msgs: [
      { who:'in', text:'Привет! Хочу арендовать студию для съемки, что есть?' },
      { who:'out', text:'Привет, красотка! У нас два зала: белый циклорама и тёмный loft. Расскажи, что снимаем - подберу свет и время!' },
      { who:'in', text:'Портрет, хочу что-нибудь атмосферное' },
      { who:'out', text:'Тогда точно loft - там мягкое боковое освещение, идеально для портрета. Завтра есть 14:00 или 17:30. Бронируем?' },
    ],
    chips: ['Сколько стоит?', 'Посмотреть фото зала', 'Другое время'],
  },
  { // ПАДИК
    msgs: [
      { who:'in', text:'Привет, хочу попробовать падел. Я вообще новичок' },
      { who:'out', text:'Дружище, это лучшее решение! Падел - самый быстро усваиваемый вид спорта. Уже через час будешь рубиться. Есть пробный слот завтра в 18:00 - залетай!' },
      { who:'in', text:'А ракетку нужно своё брать?' },
      { who:'out', text:'Нет, у нас всё есть - ракетки, мячи, аренда обуви. Просто приходи и играй. Записать тебя на завтра?' },
    ],
    chips: ['Да, записать!', 'Другое время', 'Цены'],
  },
  { // ГЛАША
    msgs: [
      { who:'in', text:'Добрый день! Нужен букет на день рождения подруге' },
      { who:'out', text:'Дорогая, какая хорошая идея! Расскажи немного о подруге - какой она человек, есть ли любимые цветы? Подберу букет с характером, а не просто набор цветов.' },
      { who:'in', text:'Она любит что-то нежное, пастельные тона' },
      { who:'out', text:'Тогда пионы и эустома в пыльно-розовом с веточками эвкалипта - это будет очень её. Бюджет примерно какой? Соберу под него.' },
    ],
    chips: ['До 2000 руб', 'До 3500 руб', 'Нужна доставка'],
  },
  { // КИРИЛЛЫЧ
    msgs: [
      { who:'in', text:'Здорово. Стучит что-то спереди при торможении' },
      { who:'out', text:'Понял, друг. Скорее всего тормозные колодки или суппорт. Это не срочно, но ездить долго не стоит. Когда сможешь заехать на диагностику?' },
      { who:'in', text:'Могу в субботу утром' },
      { who:'out', text:'Записал тебя на субботу в 9:00. Диагностика тормозов бесплатно, займёт минут 20. Марка и модель машины?' },
    ],
    chips: ['Отлично, жду', 'Другое время', 'Примерная цена ремонта'],
  },
  { // ЛЮСЯ
    msgs: [
      { who:'in', text:'Привет! Хочу записаться на стрижку, есть что-нибудь на завтра?' },
      { who:'out', text:'Подруга, привет! Конечно есть - завтра у нас открыто 11:00 и 14:30. К кому хочешь - к Насте или Ирине?' },
      { who:'in', text:'К Насте! На 14:30' },
      { who:'out', text:'Записала тебя к Насте на завтра в 14:30. Напомню за час до визита. До встречи!' },
    ],
    chips: ['Перенести запись', 'Услуги и цены', 'Адрес'],
  },
  { // БАРС
    msgs: [
      { who:'in', text:'Здравствуйте, мой кот не ест второй день, что делать?' },
      { who:'out', text:'Здравствуй, друг. Понимаю, это тревожно. Скажи - кот вялый или активный? Пьёт воду? Это поможет понять срочность.' },
      { who:'in', text:'Вялый, воду пьёт немного' },
      { who:'out', text:'Рекомендую приехать сегодня - два дня без еды плюс вялость требуют осмотра. Есть время в 15:00 и 18:30. Как имя питомца?' },
    ],
    chips: ['Записать на 15:00', 'Записать на 18:30', 'Вызов на дом'],
  },
  { // МАКС
    msgs: [
      { who:'in', text:'Сколько стоит абонемент?' },
      { who:'out', text:'Чемпион, привет! Месячный - 2900, три месяца - 6900, годовой - 19900. Но сначала рекомендую пробное занятие - бесплатно. Посмотришь зал, познакомишься с тренером.' },
      { who:'in', text:'Пробное - это как? Нужно что-то приносить?' },
      { who:'out', text:'Только себя и хорошее настроение! Форма и полотенце есть в прокате. Когда удобно прийти - утром или вечером?' },
    ],
    chips: ['Утром', 'Вечером', 'Купить абонемент сразу'],
  },
];

var heroActivePill = -1;

function renderHeroChat(idx) {
  var mock = document.querySelector('.hero__chat-mock');
  if (!mock) return;
  var b = BOTS[idx];
  var chat = HERO_CHATS[idx];

  // header
  var head = mock.querySelector('.hcm__head');
  if (head) {
    head.querySelector('.hcm__av').textContent = b.emoji;
    head.querySelector('.hcm__av').style.background = b.color;
    head.querySelector('.hcm__head-info strong').textContent = b.name;
    var infoSpan = head.querySelector('.hcm__head-info span');
    infoSpan.innerHTML = b.biz + ' &nbsp;·&nbsp; <span class="hcm__online">онлайн</span>';
  }

  // messages
  var body = mock.querySelector('.hcm__body');
  if (body) {
    body.innerHTML = '';
    chat.msgs.forEach(function(m, i) {
      var d = document.createElement('div');
      d.className = 'hcm__msg hcm__msg--' + m.who + ' hcm__msg--delay-' + (i + 1);
      d.textContent = m.text;
      body.appendChild(d);
    });
    // typing indicator
    var t = document.createElement('div');
    t.className = 'hcm__typing hcm__msg--delay-' + (chat.msgs.length + 1);
    t.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(t);
  }

  // chips
  var chipsEl = mock.querySelector('.hcm__chips');
  if (chipsEl) {
    chipsEl.innerHTML = chat.chips.map(function(c) {
      return '<button class="hcm__chip" style="color:' + b.color + ';border-color:' + b.color + '">' + c + '</button>';
    }).join('');
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
  el.innerHTML = BOTS.map(function(b, i) {
    return '<button class="bot-btn' + (i === curBot ? ' is-active' : '') + '" style="--bot-color:' + b.color + '" data-bot="' + i + '" aria-pressed="' + (i === curBot) + '" aria-label="' + b.name + ' - ' + b.biz + '">' +
      '<span class="bot-btn__av" style="background:' + b.color + '">' + b.emoji + '</span>' +
      '<span class="bot-btn__name">' + b.name + '</span>' +
      '<span class="bot-btn__biz">' + b.biz + '</span>' +
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
  el.innerHTML =
    '<span class="bot-char-desc__av" style="background:' + b.color + '">' + b.emoji + '</span>' +
    '<div class="bot-char-desc__text">' +
      '<strong>' + b.name + '</strong>' +
      '<span class="bot-char-desc__biz">- ' + b.biz + '</span>' +
      '<span class="bot-char-desc__char">' + b.char + '</span>' +
    '</div>';
}

function renderStateSelector() {
  var el = document.getElementById('stateSelector');
  if (!el) return;
  el.innerHTML = STATES.map(function(s, i) {
    return '<button class="state-btn' + (i === curState ? ' is-active' : '') + '" data-state="' + i + '" aria-pressed="' + (i === curState) + '" aria-label="' + s.name + '">' +
      '<span class="state-btn__icon">' + s.icon + '</span>' +
      '<span class="state-btn__name">' + s.name + '</span>' +
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

  el.innerHTML =
    '<div class="persona-card">' +
      '<div class="persona-card__top" style="--bot-color:' + b.color + '">' +
        '<div class="persona-card__top-left">' +
          '<div class="persona-card__av" style="background:' + b.color + '">' + b.emoji + '</div>' +
          '<div>' +
            '<div class="persona-card__name">' + b.name + '</div>' +
            '<div class="persona-card__biz">' + b.biz + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="persona-card__badge">' + s.badge + '</div>' +
      '</div>' +
      '<div class="persona-card__intent">' +
        '<span class="persona-card__intent-label">Ситуация:</span> ' + s.intent +
      '</div>' +
      '<div class="persona-chat">' +
        '<div class="persona-chat__header">' +
          '<div class="persona-chat__av" style="background:' + b.color + '">' + b.emoji + '</div>' +
          '<div>' +
            '<div class="persona-chat__bot-name">' + b.name + '</div>' +
            '<div class="persona-chat__status">онлайн</div>' +
          '</div>' +
        '</div>' +
        '<div class="persona-chat__body">' +
          '<div class="persona-msg persona-msg--user"><span>' + s.uMsg + '</span></div>' +
          '<div class="persona-msg persona-msg--bot" style="--bot-color:' + b.color + '"><span>' + s.bMsg(b) + '</span></div>' +
        '</div>' +
        '<div class="persona-chat__chips">' +
          s.chips.map(function(c) { return '<button class="persona-chip">' + c + '</button>'; }).join('') +
        '</div>' +
      '</div>' +
    '</div>';
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
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
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

  /* active nav highlight on scroll */
  var sections = ['personas', 'pricing', 'cases', 'contacts'];
  var links    = document.querySelectorAll('.header__nav-link');
  if (links.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          links.forEach(function(l) {
            l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { threshold: 0.3 });
    sections.forEach(function(id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }
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

  /* re-render personas with translated UI if needed */
  if (document.getElementById('botSelector')) {
    renderStateSelector();
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
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', function() {
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
});
