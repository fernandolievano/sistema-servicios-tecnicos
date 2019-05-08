# sistema-servicios-tecnicos
Sistema para llevar el control de servicios técnicos de Ciber X-Games hecho con Laravel, Vue y Vuetify


# Instalación 
* El primer paso es clonar la aplicación en tu directorio web con el siguiente comando
```
git clone https://github.com/fernandolievano/sistema-servicios-tecnicos.git
```

* Desde la consola y ubicados en nuestro directorio principal ("sistema-servicios-tecnicos") instalamos composer ejecutando el siguiente comando
```
composer install
```

* Ahora duplicamos nuestro archivo .env.example que se encuentra en el directorio principal y lo renombramos como .env

* Continúamos con la configuración de nuestras variables y para obtener nuestra API KEY de Laravel con el comando 
```
php artisan key:generate
```

* Editamos nuestro archivo .env y agregamos las credenciales de la base de datos (asumiendo que ya creamos tenemos una)
```
DB_DATABASE=nombre_de_tu_db
DB_USERNAME=tu_usuario (generalmente es root)
DB_PASSWORD=_tu_contraseña (si tu usuario es root es probable que no tengas una contraseña, si es así, deja vacío este campo)
```

* Ahora desde la consola ejecutamos el siguiente comando para que las migraciones se lleven a cabo
```
php artisan migrate --seed
``` 

* Por último instalamos nuestras dependencias frontend con el comando
```
npm install
```

* La aplicación debería estar lista para correr, solo necesitas ejecutar el comando 
```
php artisan serve
```
Entra en tu navegador a la siguiente dirección y deberías ver la aplicación
```
localhost:8000
```
