# Trading App

Esta es una aplicación de trading desarrollada en React Native con Expo y TypeScript.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (recomendado: última versión LTS)
- [Expo CLI](https://docs.expo.dev/get-started/installation/):
  ```sh
  npm install -g expo-cli
  ```
- [EAS CLI](https://docs.expo.dev/build/setup/):
  ```sh
  npm install -g eas-cli
  ```
- Un gestor de paquetes: **npm** o **yarn**
  - Para usar **Yarn**, instálalo con:
    ```sh
    npm install -g yarn
    ```

## Instalación

Clona el repositorio y navega al directorio del proyecto:

```sh
 git clone https://github.com/MatiiAutalan/trading-app.git
 cd trading-app
```

Luego, instala las dependencias:

```sh
npm install
# O si usas Yarn
yarn install
```

## Scripts disponibles

Puedes ejecutar los siguientes scripts para desarrollar y compilar la aplicación:

### Iniciar la aplicación en modo desarrollo

```sh
npm start
# O con Yarn
yarn start
```

### Ejecutar en un emulador o dispositivo físico

- **Android**:
  ```sh
  npm run android:dev
  # O con Yarn
  yarn android:dev
  ```
- **iOS** (requiere macOS con Xcode instalado):
  ```sh
  npm run ios:dev
  # O con Yarn
  yarn ios:dev
  ```

### Ejecutar en el navegador

```sh
npm run web
# O con Yarn
yarn web
```

### Compilar la aplicación con EAS Build

- **Android**:
  ```sh
  npm run android:eas
  # O con Yarn
  yarn android:eas
  ```
- **iOS**:
  ```sh
  npm run ios:eas
  # O con Yarn
  yarn ios:eas
  ```

### Ejecutar linters

```sh
npm run lint
# O con Yarn
yarn lint
```

### Ejecutar pruebas unitarias

```sh
npm run test
# O con Yarn
yarn test
```

Para obtener un reporte de cobertura:

```sh
npm run test:coverage
# O con Yarn
yarn test:coverage
```

## Decisiones Técnicas

Durante el desarrollo de esta app, tomé algunas decisiones pensando en la simplicidad y la eficiencia:

- **Creación del proyecto**: Usé `create-expo-app` porque me permite empezar rápido sin preocuparme por configuraciones complicadas.
- **Navegación**: Me decidí por `@react-navigation/native` por que para el tamaño de la app me parecio más sencilla de manejar.
- **Linting y formato de código**: Configuré `eslint` y `prettier` para asegurarme de que el código se mantenga ordenado y sin errores innecesarios.
- **Peticiones HTTP**: Usé `axios` para hacer requests a las APIs, porque su sintaxis es más amigable.
- **Formularios y validaciones**: Implementé `formik` y `yup`, ya que juntos hacen que manejar formularios y validaciones sea mucho más fácil.
- **Gestión del estado global**: Elegí usar `zustand` en lugar de `Redux` o `Context API`, ya que esta app es pequeña y `zustand` es ligero y fácil de configurar.
- **Estructura del proyecto**: Organicé la app en carpetas para mantener un código limpio y fácil de escalar:
  - `api/`: Llamadas a servicios externos.
  - `assets/`: Imágenes y otros recursos estáticos.
  - `components/`: Componentes reutilizables como items, modales y loaders.
  - `hooks/`: Hooks personalizados para manejar lógica reutilizable.
  - `navigation/`: Configuración de la navegación de la app.
  - `screens/`: Pantallas principales de la aplicación, organizadas en subcarpetas.
  - `services/`: Lógica de negocio y peticiones a la API.
  - `store/`: Gestión del estado global con `zustand`.
  - `types/`: Tipados globales para TypeScript.
  - `utils/`: Funciones auxiliares reutilizables.
