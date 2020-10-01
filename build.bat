call npm ci
call npm run minify-input-css
call npm run uglifyjs-modules
call npm run uglifyjs-pages
call eslint cypress/integration
call eslint GapsWeb/src/main/resources/static/js
call mvn clean install
del GapsOnWindows\*.jar
del GapsOnWindows\README.md
copy GapsWeb\target\GapsWeb-0.8.2.jar GapsOnWindows\gaps.jar
copy README.md GapsOnWindows\
cd GapsOnWindows
makensis gaps.nsi