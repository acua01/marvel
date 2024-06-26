# Prueba técnica React
La aplicación se encuentra desplegada en **GitHub Pages**: https://acua01.github.io/marvel

## Iniciar el proyecto

### Requisitos
- Tener instalado node y npm en sus últimas versiones estables.

### Instalación
1. Descargar el proyecto `git clone https://github.com/acua01/marvel.git`
2. Instalar las dependencias `npm i`

### Modo desarrollo
Ejecutar `npm run dev` y se inicializará el servidor de desarrollo en el puerto **5173**

### Modo producción
1. Ejecutar `npm run build`.
2. Una vez se haya creado la build del proyecto ejecutar `npm run serve` y se inicializará el servidor de producción en el puerto **5000**

### Testing
Para lanzar los tests se debe de ejecutar `npm run test`



# Tecnologías
- **React** junto a **TypeScript** debido a las ventajas que presenta sobe JavaScript como lo es el tipado, ya que con esto se evitan muchos errores en el desarrollo. Dentro de esta se han utilizado **Hooks** para los estados y **Custom Hooks** para la refactorización de la lógica, junto con la componetización.
- Para el entorno de desarrollo se ha utilizado **Vite** ya que es una herramienta que destaca por su rápida compilación y su experiencia de usuario.
- **React Router** para el enrutamiento de la aplicación.
- **Context** de la **API** de React para el estado global
- **Axios** junto con **TanStack Query** para gestionar las llamadas a la API, permitiendo un mejor control de errores evitando la reduncancia de datos y carga de tiempos mediante el uso de la caché.
- **SASS** junto a la metodología **BEMIT** o **BEM + ITCSS** para todo el estilado, animación y responsive de la aplicación.
- **Animate.css** para algunas animaciones.
- **Vitest** junto con **Testing Library** para los tests.

# Arquitectura
