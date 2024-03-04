# Back-End-desafio-2

## Requerimientos previos
### Versión de Node (17.9.1)
[![Node.js][Node.js]][Node-url]

Para poder ejecutar correctamente el proyecto es necesario contar con la versión **17.9.1** de Node. A continuación están los pasos a seguir en caso de no tenerla instalada: 

1. Instalamos la versión
   ```javascript
   nvm install 17.9.1
   ```
   >Nota: Si no instalamos ninguna otra versión de Node previamente, **la versión 17.9.1 se establecerá como versión por defecto**. Sin embargo, si ya instalamos alguna otra versión, la versión 17.9.1 se usará **sólo durante nuestra sesión actual**.
2. Cambiamos a la versión instalada
   ```javascript
   nvm use 17.9.1
   ```
   >*En caso de querer que esta versión sea nuestra versión por defecto, debemos ejecutar el siguiente comando:*
   ```javascript
   nvm alias default 17.9.1
   ```
### Descargar  PostgreSQL (v15.3)
[![PostgreSQL][PostgreSQL.com]][Postgres-url]

La base de datos que utilizaremos en el proyecto es **PostgreSQL** y es fundamental una correcta instalación de la misma para evitar conflictos a la hora de ejecutar el proyecto. Los pasos son los siguientes:

1. Ingresamos a **``https://www.enterprisedb.com/downloads/postgres-postgresql-downloads``**,  y descargamos la versión **15.3**.


2. Ejecutamos el instalador con permisos de administrador.

3. Seguimos los pasos dejando todo por defecto. En cuanto a la **contraseña**, podemos usar la misma que se usa en el proyecto para no tener que cambiarla en el archivo de forma manual. La misma es **``admin``**. 
   >En caso de tener contraseña propia, se explicarán más adelante los pasos a seguir

Una vez finalizada la instalación, se abrirá una ventana sugireindo abrir el Stack Builder, la cerramos.

#### *¿QUE HACER EN CASO DE ERROR?*
Es posible que en medio del proceso de instalación nos salte un error, de ser así, tendremos que llevar a cabo una serie de medidas para solucionarlo:
1. Desinstalamos Postgres.
2. Deshabilitamos el Firewall de Windows/macOS y el antivurus en caso de tener uno.
3. Volvemos a realizar la descarga.

### Descargar pgAdmin (v7.4)
pgAdmin es un software complementario de PostgreSQL, nos sirve para administrar las bases de datos mediante una interfaz gráfica. Para descargarlo hacemos lo siguiente:

1. Ingresamos a **``https://www.pgadmin.org/download/``**, seleccionamos nuestro sistema operativo y descargamos la versión **7.4**.
2. Ejecutamos el instalador con permisos de administrador y seguimos los pasos.

[Node.js]: https://img.shields.io/badge/Node.js-2fba2f?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/blog/release/v17.9.1
[PostgreSQL.com]:https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[Sequelize.js]: https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue
[Sequelize-url]: https://sequelize.org/
[Postman.com]: https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white
[Postman-url]: https://www.postman.com/downloads/
