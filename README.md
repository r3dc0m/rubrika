# Rubrika — Plataforma de evaluación educativa

> Plataforma web de evaluación educativa diseñada para que el profesorado gestione tareas, defina criterios de evaluación y califique proyectos de forma estructurada y transparente.

**Equipo:** Montse García · Saray Guillen · Olatz González · Jonathan Vélez
**Módulo:** Node.js — Proyecto Grupal de Backend · Bootcamp Full Stack  
**Repositorio:** [github.com/r3dc0m/rubrika](https://github.com/r3dc0m/rubrika)

---

## Descripción

Rubrika nace de la necesidad de simplificar el proceso de evaluación en entornos educativos. El profesorado puede crear tareas con criterios de evaluación personalizados, asociar proyectos del alumnado y realizar evaluaciones detalladas criterio a criterio. El alumnado accede a sus evaluaciones y al feedback recibido de forma clara y directa.

La aplicación está construida en Node.js + Express siguiendo el patrón **MVC** (Modelo-Vista-Controlador): los modelos gestionan los datos con Sequelize ORM y PostgreSQL, los controladores contienen la lógica de negocio, y las vistas se renderizan con el motor de plantillas Pug. Se ha priorizado la calidad del código, la seguridad y las buenas prácticas sobre la cantidad de funcionalidades.

---

## Funcionalidades

- **Gestión de tareas** — creación con nombre, fecha de entrega, ponderación y activación de evaluación
- **Criterios de evaluación** — definición de criterios personalizados con peso específico por tarea
- **Gestión de proyectos** — asociación de proyectos a tareas con enlace al repositorio
- **Evaluaciones detalladas** — calificación por criterio con comentarios generales
- **Autenticación** — registro y login con contraseña hasheada y sesiones seguras
- **Autorización por roles** — profesor/a con acceso completo y alumno/a con acceso a sus datos
- **API RESTful** — arquitectura de API independiente con endpoints para todas las entidades
- **Landing page** — presentación del proyecto con información de funcionalidades y roles
- **Diseño responsive y accesible** — cumple estándar AA de accesibilidad

---

## Páginas

| Página | Descripción |
|---|---|
| `/` | Landing page — presentación del proyecto |
| `/auth/login` | Inicio de sesión |
| `/auth/register/profesor` | Registro de profesorado |
| `/tasks` | Listado de tareas |
| `/tasks/new` | Crear nueva tarea (solo profesores) |
| `/tasks/:id/edit` | Editar tarea existente (solo profesores) |
| `/projects` | Listado de proyectos |
| `/evaluations` | Listado de evaluaciones |
| `/users` | Gestión de usuarios |
| `/criteria` | Gestión de criterios |

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| Node.js v24 | Runtime del servidor |
| Express 4 | Framework web |
| Sequelize | ORM para PostgreSQL |
| PostgreSQL 16 | Base de datos relacional |
| Pug | Motor de plantillas HTML |
| bcrypt | Hash de contraseñas |
| express-session | Gestión de sesiones |
| Docker + Docker Compose | Contenedores de BD y pgAdmin |
| pgAdmin 4 | Administración de la base de datos |
| nodemon | Servidor de desarrollo con recarga automática |

---

## Arquitectura — Modelos y relaciones

```
Users              Tasks              Criteria
─────              ─────              ────────
user_id            task_id            criteria_id
name               task_name          criteria_name
email              when_created
password           due_date
role               ponderation
                   eval_available

    │                   │                   │
    │                   │                   │
    ▼                   ▼                   ▼
Evaluations         Projects           TaskCriteria
───────────         ────────           ────────────
evaluation_id       project_id         task_id
user_id ──────►     task_id ──────►    criteria_id
project_id ────►    project_name       weight
general_comment     repo_link
when_created
         │
         ▼
EvaluationsCriteria
───────────────────
evaluation_id
criteria_id
mark
```

**Relaciones principales:**
- `Users` 1:M `Evaluations`
- `Projects` 1:M `Evaluations`
- `Tasks` 1:M `Projects`
- `Users` M:M `Projects` (via `UserProjects`)
- `Tasks` M:M `Criteria` (via `TaskCriteria`)
- `Evaluations` M:M `Criteria` (via `EvaluationsCriteria`)

---

## Estructura del proyecto

```
rubrika/
├── db/
│   ├── data/                          # Datos persistentes de PostgreSQL (ignorado en git)
│   └── scripts/
│       ├── ddl.sql                    # Creación de tablas
│       └── inserts.sql                # Datos iniciales
├── public/
│   ├── styles.css                     # Estilos globales y variables CSS
│   ├── landing.css                    # Estilos de la landing page
│   └── forms.css                      # Estilos de formularios
├── src/
│   ├── config/
│   │   └── db.js                      # Configuración de Sequelize
│   ├── controllers/
│   │   ├── api/                       # Controladores de la API REST
│   │   │   ├── controllerUser.js
│   │   │   ├── controllerTasks.js
│   │   │   ├── controllerProjects.js
│   │   │   ├── controllerEvaluation.js
│   │   │   ├── controllerCriteria.js
│   │   │   ├── controllerTaskCriteria.js
│   │   │   ├── controllerEvaluationCriteria.js
│   │   │   └── controllerUserProjects.js
│   │   └── views/                     # Controladores de vistas Pug
│   ├── models/                        # Modelos Sequelize
│   │   ├── associations.js
│   │   ├── modelUsers.js
│   │   ├── modelTasks.js
│   │   ├── modelProjects.js
│   │   ├── modelEvaluations.js
│   │   ├── modelCriteria.js
│   │   ├── modelTaskCriteria.js
│   │   ├── modelUserProjects.js
│   │   └── modelEvaluationsCriteria.js
│   ├── routes/
│   │   ├── apiRouter.js
│   │   ├── viewRouter.js
│   │   ├── api/                       # Rutas de la API REST
│   │   └── views/                     # Rutas de vistas
│   ├── utils/
│   │   └── errors/errors.js
│   ├── views/                         # Plantillas Pug
│   │   ├── layout.pug
│   │   ├── navbar.pug
│   │   ├── landing.pug
│   │   ├── login_form.pug
│   │   ├── register_profesor.pug
│   │   ├── error.pug
│   │   ├── users/
│   │   ├── tasks/
│   │   ├── projects/
│   │   ├── evaluations/
│   │   └── criteria/
│   └── index.js                       # Punto de entrada del servidor
├── docker-compose.yml
├── package.json
├── .env                               # Variables de entorno (no subir al repo)
└── .gitignore
```


---

## Instalación y ejecución

### Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [Docker](https://www.docker.com/) y Docker Compose
- [Git](https://git-scm.com/)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/r3dc0m/rubrika.git
cd rubrika

# 2. Instalar dependencias
npm install

# 3. Crear el archivo de variables de entorno
cp .env.example .env
# Edita el .env con tus valores

# 4. Levantar los contenedores de Docker
docker compose up -d

# 5. Arrancar el servidor en modo desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:3000`.

### Comandos útiles

```bash
# Ver logs de la base de datos
docker logs rubrika

# Parar los contenedores
docker compose down

# Reinicializar la base de datos (borra todos los datos)
docker compose down
sudo rm -rf db/data/*
docker compose up -d

# Liberar el puerto 3000 si está ocupado
kill $(lsof -t -i:3000)
```

### Acceder a pgAdmin

Abre `http://localhost:8080` con las credenciales del `.env` y conecta el servidor con:

- **Host**: `rubrika`
- **Port**: `5432`
- **Database**: valor de `DB_NAME`
- **Username**: valor de `DB_USER`
- **Password**: valor de `DB_PASSWORD`

---

## Roles de usuario

| Rol | Permisos |
|---|---|
| **Profesor/a** | Crear y gestionar tareas · Definir criterios · Gestionar proyectos · Evaluar · Ver historial |
| **Alumno/a** | Consultar sus proyectos · Ver evaluaciones recibidas · Acceder a comentarios · Seguir su progreso |

---

## Ramas del proyecto

| Rama | Descripción |
|---|---|
| `main` | Rama principal del proyecto |
| `dev` | Integración de todas las funcionalidades |
| `feature/forms` | Formularios de registro y login |
| `feature/tasks-views` | Vistas de tareas |
| `feature/crud-tareas` | CRUD completo de tareas con permisos por rol |
| `views` | Vistas generales de la aplicación |
| `feature/sql-setup` | Configuración de la base de datos |
| `styles` | Estilos CSS de la aplicación |

---

## Requisitos del proyecto

### ✅ Obligatorios

| Requisito | Estado |
|---|---|
| Repositorio GitHub con README | ✅ |
| Mínimo 3 tablas relacionadas | ✅ 8 tablas con relaciones 1:M y M:M |
| Sistema de autenticación (registro y login) | ✅ bcrypt + express-session |
| Sistema de autorización con roles | ✅ Roles `profesor` y `alumno` |
| Mínimo 3 endpoints operativos | ✅ Endpoints para users, tasks, projects, evaluations, criteria |
| Mínimo 2 endpoints con modificación en BD | ✅ POST, PUT y DELETE en todas las entidades |
| Vistas con motor de plantillas | ✅ Pug con layout, herencia y bloques |

### ✅ Recomendados

| Requisito | Estado |
|---|---|
| API RESTful independiente | ✅ Arquitectura de API separada de las vistas |
| ORM para gestión de datos | ✅ Sequelize con modelos y asociaciones |

---

## Equipo

**Montse García** — https://github.com/Montse-gj/
**Olatz González** — https://github.com/olatzglez
**Saray Guillen** — https://github.com/saragaby314
**Jonathan Vélez** — https://github.com/r3dc0m

Proyecto Grupal de Backend · Bootcamp Full Stack · 2026
