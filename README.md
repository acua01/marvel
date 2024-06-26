# Prueba técnica React
La aplicación se encuentra desplegada en **GitHub Pages**: [Marvel App](https://acua01.github.io/marvel)

## Iniciar el proyecto

### Requisitos
- Tener instalado node y npm en sus últimas versiones estables.

### Instalación
1. Descargar el proyecto `git clone https://github.com/acua01/marvel.git`
2. Instalar las dependencias `npm i`

### Modo desarrollo
Ejecutar `npm run dev` y se inicializará el servidor de desarrollo en el puerto **5173**

### Modo producción
1. Ejecutar `npm run build`
2. Una vez se haya creado la build del proyecto ejecutar `npm run serve` y se inicializará el servidor de producción en el puerto **5000**

### Testing
Para lanzar los tests se debe de ejecutar `npm run test`


# Tecnologías
- **React** junto a **TypeScript** debido a las ventajas que presenta sobe JavaScript como lo es el tipado, ya que con esto se evitan muchos errores en el desarrollo. Dentro de esta se han utilizado **Hooks** para los estados y **Custom Hooks** para la refactorización de la lógica, junto con la componetización.
- **NPM** para la gestión de paquetes.
- Para el entorno de desarrollo se ha utilizado **Vite** ya que es una herramienta que destaca por su rápida compilación y su experiencia de usuario.
- **React Router** para el enrutamiento de la aplicación.
- **Context** de la **API** de React para el estado global
- **Axios** junto con **TanStack Query** para gestionar las llamadas a la API, permitiendo un mejor control de errores evitando la reduncancia de datos y carga de tiempos mediante el uso de la caché.
- **SASS** junto a la metodología **BEMIT** o **BEM + ITCSS** para todo el estilado, animación y responsive de la aplicación.
- **Animate.css** para algunas animaciones.
- **Vitest** junto con **Testing Library** para los tests.

# Arquitectura
El proyecto ha sido estructurado con la "Clean Architecture" con el fin de tener un código limpio, fácil de entender y mantenible. Esta arquitectura es similar a la hexagonal ya que es representada con capas, de tal manera que la lógica de negocio queda separada de la implementación ayudando así a tener más facilidad y flexibilidad a la hora de implementar cambios. Estas son las capas con las que se suele trabajar en esta arquitectura:
- **Entidades**: Reglas de negocio más generales y de alto nivel.
- **Casos de uso**: Lógica de la aplicación, operaciones que se pueden realizar en las entidades.
- **Interfaces o adaptadores**: Aquí se adaptan los datos de los casos de uso y entidades para ser utilizados en capas superiores.
- **Frameworks y Drivers**: Código y estructuras del propio framework, librerías u otros servicios con los que se está trabajando.

La estructuración de directorios del proyecto aplicando esta arquitectura, con la que a nivel personal he trabajado más cómodamente es la siguiente.
- **src**
  - **models**
  - **adapters**
  - **constants**
  - **utils**
  - **frameworks**
    - tests
    - api
    - tanstackQuery
    - ui
      - components
      - context
      - hooks
      - icons
      - layouts
      - pages
      - routes
      - styles

  - **models**: Entidades de la aplicación.
  - **adapters**: Representa las capas de casos de uso y de interfaces. En este caso se ha omitido un directorio "useCases" para evitar redundancia de código ya que dentro de este se puede ver claramente las operaciones pertenecientes a las entidades.
  - **constants**: Constantes globales.
  - **utils**: Funciones globales reutilizables.
  - **frameworks**: Todo lo referente a librerías.

Dentro de **frameworks** se encuentra el directorio **ui** que contiene todos los componentes, vistas y layouts de React. En la raíz se encuentra los componentes y hooks globales que se reutilizan en la aplicación; y luego cada componente, vista o layout contiene sus propios componentes, funciones y hooks.

A la hora de escribir el código se han empleado algunos de los principios **SOLID** con el mismo fin comentado anteriormente de lograr un mejor código. También se ha utilizado un patrón de diseño en el que dentro de una página o componente se separa la lógica de lo que es la interfaz gráfica. La lógica queda en un hook al que llamo controlador ya que se encarga de manejarla.

Y por último, los estilos quedan centralizados en el directorio **styles** estructurados mediante la metodología **ITCSS** e implementados mediante clases siguiendo la metodología **BEM**.
