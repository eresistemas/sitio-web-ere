# Configuración Local (Ambiente de Desarrollo)

## 1. Descargar el proyecto

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```

Luego posicionarse en:

```text
\fuente-frontend
```

## 2. Instalar dependencias

Posicionarse mediante consola en la raíz del proyecto y ejecutar:

```bash
npm install --force
```

## 3. Ejecutar el sitio localmente

```bash
ng serve
```

La aplicación quedará disponible en:

```text
http://localhost:4200
```

# Build y Deploy para Ambiente de Producción

El código fuente a modificar se encuentra en:

```text
\fuente-frontend
```

A partir de este directorio se genera la compilación para producción.

## 1. Generar build

Posicionarse en:

```text
\fuente-frontend
```

y ejecutar:

```bash
ng build --prod
```

Esto generará los archivos compilados en:

```text
\fuente-frontend\dist
```

La carpeta `dist` se encuentra excluida del repositorio mediante `.gitignore`.

## 2. Publicación en GitHub Pages

Copiar el contenido generado dentro de `dist` y llevarlo a la raíz del repositorio para que pueda ser publicado mediante GitHub Pages.

El sitio se despliega desde el repositorio de GitHub de ERE.

Una vez realizado el merge/push en la rama `main`, la publicación se actualiza automáticamente y queda disponible en:

https://eresistemas.github.io/sitio-web-ere

# Anotaciones

El módulo de Contacto, que contiene el formulario de envío de consultas, utiliza un servicio web de envío de correos electrónicos ubicado en el backend del proyecto CobrosOnline.
Por este motivo, cualquier modificación relacionada con el envío de emails deberá realizarse sobre dicho backend.