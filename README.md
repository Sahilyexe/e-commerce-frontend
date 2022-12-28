# ECommerce

Aplicación demo de eccomerce en la que te registras, luego inicias sesión creas productos. Cuando un cliente ve los productos, selecciona uno y lo agrega al carrito luego procede a ingresar sus datos para crear su orden. En ese momento se invoca el state machiness


## Pre-requisite
To have a AWS account
- Run `npm install`
- Run command `npm install -g @aws-amplify/cli`
- Run command `amplify configure`
- Clona el repositorio y despliegalo a aws `https://github.com/Sahilyexe/e-commerce-backend` a traves de los comandos `sam build` y luego `sam deploy --guided --profile <profilename>`
- Copia el valor de la llave "WebEndpoint" en los archivos enviroments "enviroments/" en la variable "urlservicios" y el valor de la llave StateMachineEndPoint"" en "urlstatemashine". Estas llaves son las salidas de cuando despliegas el backend


## Deploy

- Run command `amplify init`
- Run command `amplidy add auth`
- Run command `amplify push`
- move the file file aws-export.js to the folder app
- rename the file from aws-export.ts
- Ejecuta `ng build --configuration=production --aot=true`
      - Ejecuta para subir al bucket `aws s3 cp ./dist/actualizacion-datos/ s3://<nombre bucket> --recursive`
      - Abre el archivo `index.html`  

## Delete enviroment Amplify in AWS

- Run command `amplify delete`
