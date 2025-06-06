<template>
  <div>
    <!-- Хедер -->
    <header class="gradient-bg py-4 sticky top-0">
      <nav class="container mx-auto flex items-center justify-between px-4">
        <h1 class="text-2xl font-bold">{{ translations[lang].name }}</h1>
        <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <img src="https://flagcdn.com/h24/ru.png" alt="Флаг России" class="flag-icon cursor-pointer" @click="setLanguage('ru')">
          <img src="https://flagcdn.com/h24/us.png" alt="Флаг США" class="flag-icon cursor-pointer" @click="setLanguage('en')">
        </div>
        <a href="../index.html" class="text-white-300 hover:underline ml-auto">{{ translations[lang].back }}</a>
      </nav>
    </header>

    <!-- Основной контент -->
    <main class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold mb-6 text-center">{{ translations[lang].title }}</h2>
      <div class="bg-gray-800 p-6 rounded-lg">
        <p class="mb-4">{{ translations[lang].description }}</p>
        <div class="space-y-2">
          <p><strong>{{ translations[lang].github }}:</strong> <a href="https://github.com/SharpShrk/AnimeQuiz" class="text-blue-400 hover:underline"> {{ translations[lang].gitlink }}</a></p>
          <p><strong>{{ translations[lang].play }}:</strong> <a href="https://yandex.ru/games/app/439915?draft=true&lang=ru" class="text-blue-400 hover:underline"> Yandex Games</a></p>
          <p><strong>{{ translations[lang].tools }}:</strong> <span> Unity, C#, OOP, SOLID, JSON, CSV, Figma, Photoshop, DOTween, HLSL</span></p>
          <p><strong>{{ translations[lang].details }}:</strong><br/> <span class="whitespace-pre-line">{{ translations[lang].detailsText }}</span></p>
        </div>
        <h3 class="text-xl font-semibold mt-6">{{ translations[lang].screenshots }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src="/images/anime-quiz/1.png" alt="Скриншот 1" class="rounded-lg">
          <img src="/images/anime-quiz/4.png" alt="Скриншот 2" class="rounded-lg">
          <img src="/images/anime-quiz/3.png" alt="Скриншот 3" class="rounded-lg">
        </div>
      </div>
    </main>

    <!-- Футер -->
    <footer class="gradient-bg py-4">
      <div class="container mx-auto text-center">
        <p><span>{{ translations[lang].footer }}</span></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: localStorage.getItem('lang') || 'ru',
      translations: {
        en: {
          title: 'AnimeQuiz',
          name: 'Oleg Gaidukov',
          back: 'Back to Home',
          description: 'A quiz game for anime fans, featuring three exciting game modes to test your knowledge.',
          github: 'GitHub',
          gitlink: ' Repo link',
          play: 'Play',
          tools: 'Tools Used',
          details: 'Description',
          detailsText: 'Quiz offers several modes, including quizzes, character identification and plot questions, created for anime lovers. There are 3 modes in total. The first is a classic one - answer questions from different anime. The second is to guess which anime the screenshot is from. The third is an audio quiz, where you need to guess which anime the opening is from. When developing the third mode, I had to face and solve a problem related to the fact that WebGL does not support obtaining an audio spectrum from an AudioSource. To solve this problem, I developed a solution that took a spectrogram from an audio recording and saved it in JSON. Then, at runtime, data was obtained from JSON and the spectrum visualizer was launched. Unfortunately, this solution was not included in the final build, since a more elegant and ready-made solution was found that allowed using AudioSource.GetSpectrumData() in WebGL. In total, the quiz contains more than 200 questions in two languages, and new questions can be uploaded in 1 click via a custom-written CSV parser, allowing you to convert an existing quiz into a new one in just a couple of clicks.',
          screenshots: 'Screenshots',
          footer: '© 2025 Oleg Gaidukov. All rights reserved.'
        },
        ru: {
          title: 'AnimeQuiz',
          name: 'Олег Гайдуков',
          back: 'На главную',
          description: 'Квиз для поклонников аниме с тремя увлекательными режимами для проверки знаний.',
          github: 'GitHub',
          gitlink: ' Ссылка на репозиторий',
          play: 'Играть',
          tools: 'Используемые инструменты',
          details: 'Описание',
          detailsText: 'Квиз предлагает несколько режимов, включая викторины, идентификацию персонажей и вопросы по сюжетам, созданные для любителей аниме. Всего есть 3 режима. Первый классический - ответить на вопросы из разных аниме. Второй - угадать из какого аниме скриншот. Третий - аудио квиз, где нужно угадать из какого аниме опенинг. При разработке третьего режима пришлось столкнуться и решить проблему, которая связана с тем, что WebGL не поддерживает работу получения аудиоспектра с AudioSource. Для решения этой проблемы мною было разработано решение, которое снимало спектрограмму с аудиозаписи и сохраняло её в JSON. Затем в рантайме производилось получение данных с JSON и запускалась работа визуализатора спектра. К сожалению в финальный билд решение не вошло, так как было найдено более изящное и готовое решение, которое позволяло использовать AudioSource.GetSpectrumData() в WebGL. Суммарно в квизе более 200 вопросов на двух языках и новые вопросы при желании можно загрузить в 1 клик через самописный CSV парсер, тем самым позволяя переделать существующий квиз в новый буквально за пару кликов.',
          screenshots: 'Скриншоты',
          footer: '© 2025 Олег Гайдуков. Все права защищены.'
        }
      }
    };
  },
  methods: {
    setLanguage(lang) {
      this.lang = lang;
      localStorage.setItem('lang', lang);
    }
  }
}
</script>