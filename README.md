# Navigation App

Una aplicación móvil moderna construida con React Native, Expo y TypeScript que demuestra un sistema completo de navegación con gestión de estado.

https://github.com/user-attachments/assets/7201fc39-55e3-4237-9169-842b34d1cf3e

## 🎯 Características

- ✨ Navegación por pestañas (Bottom Tab Navigation)
- 📱 Stack Navigation (Expo Router)
- 🎨 Interfaz de usuario moderna con Tailwind CSS y NativeWind
- 💾 Gestión de estado con Store personalizado
- 🔐 TypeScript para seguridad de tipos
- 📦 Gestión de productos con navegación dinámica
- 👤 Perfiles de usuario y configuración
- ⚡ Cross-platform (iOS, Android, Web)

## 🚀 Requisitos Previos

- **Node.js** (version 18 o superior)
- **npm** o **yarn**
- **Expo CLI** instalado globalmente
- **Xcode** (para iOS en macOS)
- **Android Studio** (para Android)

## 📥 Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/UrgedAsp/navigation-app.git
   cd navigation-app
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   yarn install
   ```

3. **Iniciar la aplicación**
   ```bash
   npm start
   ```

## 🎮 Scripts Disponibles

| Comando                 | Descripción                              |
| ----------------------- | ---------------------------------------- |
| `npm start`             | Inicia el servidor de desarrollo de Expo |
| `npm run ios`           | Ejecuta la app en iOS                    |
| `npm run android`       | Ejecuta la app en Android                |
| `npm run web`           | Ejecuta la app en el navegador web       |
| `npm run lint`          | Analiza el código con ESLint             |
| `npm run reset-project` | Reinicia el proyecto a su estado inicial |

## 📁 Estructura del Proyecto

```
navigation-app/
├── app/                           # Aplicación principal
│   ├── _layout.tsx               # Layout raíz
│   ├── global.css                # Estilos globales
│   ├── index.tsx                 # Pantalla principal
│   └── (stack)/                  # Grupo de stack
│       ├── _layout.tsx           # Layout del stack
│       ├── home/                 # Pantalla de inicio
│       │   └── index.tsx
│       ├── products/             # Pantalla de productos
│       │   ├── index.tsx         # Lista de productos
│       │   └── [id].tsx          # Detalles de producto
│       ├── profile/              # Pantalla de perfil
│       │   └── index.tsx
│       └── settings/             # Pantalla de configuración
│           └── index.tsx
├── components/
│   └── shared/                   # Componentes compartidos
│       └── CustomButton.tsx
├── store/
│   └── products.store.ts         # Gestión de estado de productos
├── assets/
│   ├── fonts/                    # Fuentes tipográficas
│   └── images/                   # Imágenes e iconos
├── tailwind.config.js            # Configuración de Tailwind CSS
├── tsconfig.json                 # Configuración de TypeScript
├── babel.config.js               # Configuración de Babel
├── metro.config.js               # Configuración de Metro Bundler
├── app.json                      # Configuración de Expo
└── package.json                  # Dependencias del proyecto
```

## 🛠️ Tecnologías Utilizadas

### Framework y Herramientas

- **React Native** - Framework para aplicaciones móviles
- **Expo** - Plataforma para desarrollar aplicaciones React Native
- **Expo Router** - Sistema de ruteo para navegación
- **TypeScript** - Lenguaje tipado

### Navegación

- **React Navigation** - Sistema de navegación robusto
- **Bottom Tab Navigation** - Navegación por pestañas inferior
- **Stack Navigation** - Navegación mediante pilas

### Estilo

- **Tailwind CSS** - Framework de utilidades CSS
- **NativeWind** - Integración de Tailwind con React Native
- **Expo Icons** - Biblioteca de iconos

### Gestión de Estado

- Store personalizado en [app/store](store/)

### Desarrollo

- **ESLint** - Linter para JavaScript/TypeScript
- **Prettier** - Formateador de código

## 📱 Plataformas Soportadas

- ✅ **iOS** - Dispositivos y emuladores iPhone
- ✅ **Android** - Dispositivos y emuladores Android

## 📚 Recursos Útiles

- [Documentación de Expo](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/routing/introduction/)
- [React Navigation](https://reactnavigation.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NativeWind](https://www.nativewind.dev/)
