# Heroku
### Desplegar Proyecto
1. Iniciar sesión
2. Hacer click en ```Create New App```
3. Completar el nombre, seleccionar la region y crearla
4. Una vez creado, dejamos el Deplyment method en ```Heroku Git```
5. Revisamos con el comando ```heroku --version``` si tenemos el Heroku CLI intalado en esta pc, si no lo tenemos lo instalamos de https://devcenter.heroku.com/articles/heroku-cli
6. En la raiz del proyecto ejecutaremos ```heroku login``` tocamos cualquier tecla para confirmar el inicio de sesión en el navegador
***Opcional:*** si aun no tienes repositorio deberas de ejecutar ```git init```
7. Ejecutamos ```heroku git:remote -a new-app-name``` para enlazar el repositorio con heroku
8. Ejecutar comandos para hacer un push
```
-> git add .
-> git commit -am "commit para despliegue en heroku"
-> git checkout -b master
-> git push heroku master
```
Para revisar los logs de heroku en tiempo real ejecute ```heroku logs -n 1000 --tail```