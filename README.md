# Proyecto de Desarrollo Web

Este proyecto es una aplicación web desarrollada en Laravel, con fines educativos.

## Requisitos

- PHP >= 8.2
- Composer
- Laravel
- Node.js y npm

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/leoBonilla/desarrollo_web.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd desarrollo_web
    ```

3. Instala las dependencias de PHP:
    ```bash
    composer install
    ```

4. Crea y configura el archivo `.env`:
    - Copia el archivo `.env.example` a `.env`:
        ```bash
        cp .env.example .env
        ```
    - Configura la base de datos y otras variables de entorno en el archivo `.env`.

5. Genera la clave de la aplicación:
    ```bash
    php artisan key:generate
    ```

6. Instala las dependencias de npm:
    ```bash
    npm install
    ```

7. Compila los activos front-end:
    ```bash
    npm run dev
    ```

8. Inicia el servidor de desarrollo:
    ```bash
    php artisan serve
    ```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia [Creative Commons Attribution-NonCommercial (CC BY-NC)](https://creativecommons.org/licenses/by-nc/4.0/). Consulta el archivo `LICENSE` para más detalles.
