const React = require('react');

function Layout({ title, children, API_KEY }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD'
          crossOrigin='anonymous'
        />

        <script
          defer
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN'
          crossOrigin='anonymous'
        ></script>

        <link rel='icon' type='image/x-icon' href='/assets/favicon.ico' />
        <link rel='stylesheet' href='/css/publicStyles.css' />
        <link rel='stylesheet' href='/css/homeStyle.css' />
        <script defer src='/js/publicScript.js' />

        <script
          src={`https://api-maps.yandex.ru/2.1/?apikey=${API_KEY}&lang=ru_RU`}
          type='text/javascript'
        />

        <title>{title}</title>
      </head>
      <body>
        <h1>Project X</h1>
        <div id='map'></div>
        <div className='container'>{children}</div>
        <footer>footer</footer>
      </body>
    </html>
  );
}

module.exports = Layout;
