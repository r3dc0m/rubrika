BEGIN;

-- Usuarios ficticios (contraseña para todos: "password")
INSERT INTO users (name, email, password, role) VALUES
('Laura Martínez', 'laura.martinez@gmail.com', '$2b$10$hRxk1hm6jxOaXKFsUkTT3.YPFBom7QEKBerYVKu1/fvp.rGT2evaS', 'profesor'),
('Carlos Ruiz', 'carlos.ruiz@gmail.com', '$2b$10$hRxk1hm6jxOaXKFsUkTT3.YPFBom7QEKBerYVKu1/fvp.rGT2evaS', 'alumno'),
('Ana Torres', 'ana.torres@gmail.com', '$2b$10$hRxk1hm6jxOaXKFsUkTT3.YPFBom7QEKBerYVKu1/fvp.rGT2evaS', 'alumno'),
('David Sánchez', 'david.sanchez@gmail.com', '$2b$10$hRxk1hm6jxOaXKFsUkTT3.YPFBom7QEKBerYVKu1/fvp.rGT2evaS', 'alumno'),
('Elena Fernández', 'elena.fernandez@gmail.com', '$2b$10$hRxk1hm6jxOaXKFsUkTT3.YPFBom7QEKBerYVKu1/fvp.rGT2evaS', 'alumno'),
('Miguel Ramos', 'miguel.ramos@gmail.com', '$2b$10$hRxk1hm6jxOaXKFsUkTT3.YPFBom7QEKBerYVKu1/fvp.rGT2evaS', 'alumno');

-- Criterios de evaluación técnicos
INSERT INTO criteria (criteria_name) VALUES
('Calidad del código'),
('Documentación técnica'),
('Arquitectura del sistema'),
('Manejo de errores'),
('Tests automatizados'),
('Seguridad y validaciones'),
('Rendimiento y optimización'),
('Versionado con Git');

-- Tareas de programación
INSERT INTO tasks (task_name, when_created, due_date, ponderation, eval_available) VALUES
('API REST con Node.js y Express', '2025-04-01', '2025-04-28', 35, true),
('Microservicio de Autenticación JWT', '2025-03-15', '2025-04-15', 25, true),
('Sistema CRUD con PostgreSQL', '2025-04-05', '2025-04-25', 20, true),
('WebSocket Chat en Tiempo Real', '2025-03-20', '2025-04-18', 20, false);

-- Proyectos de programación
INSERT INTO projects (task_id, project_name, repo_link) VALUES
(1, 'TaskManager API RESTful', 'https://github.com/user/taskmanager-api'),
(1, 'ECommerce Backend GraphQL', 'https://github.com/user/ecommerce-graphql'),
(2, 'Auth Service Microservice', 'https://github.com/user/auth-microservice'),
(2, 'OAuth2 Provider Server', 'https://github.com/user/oauth2-server'),
(3, 'Blog Platform CRUD', 'https://github.com/user/blog-crud'),
(3, 'Inventory Management System', 'https://github.com/user/inventory-system'),
(4, 'Real-time Chat Socket.io', 'https://github.com/user/realtime-chat');

-- Asignación usuarios a proyectos
INSERT INTO user_projects (user_id, project_id) VALUES
(2, 1), -- Carlos: TaskManager API
(2, 3), -- Carlos: Auth Service
(3, 2), -- Ana: ECommerce GraphQL
(3, 5), -- Ana: Blog Platform
(4, 4), -- David: OAuth2 Provider
(4, 6), -- David: Inventory System
(5, 7), -- Elena: Real-time Chat
(5, 1), -- Elena: TaskManager API (colabora con Carlos)
(6, 2), -- Miguel: ECommerce GraphQL (colabora con Ana)
(6, 3); -- Miguel: Auth Service (colabora con Carlos)

-- Criterios para tareas
INSERT INTO task_criteria (task_id, criteria_id, weight) VALUES
-- Tarea 1: API REST
(1, 1, 25), -- Calidad código 25%
(1, 3, 20), -- Arquitectura 20%
(1, 4, 20), -- Manejo errores 20%
(1, 6, 20), -- Seguridad 20%
(1, 2, 15), -- Documentación 15%
-- Tarea 2: Microservicio Auth
(2, 6, 35), -- Seguridad 35%
(2, 1, 25), -- Calidad código 25%
(2, 5, 20), -- Tests 20%
(2, 3, 20), -- Arquitectura 20%
-- Tarea 3: CRUD PostgreSQL
(3, 1, 30), -- Calidad código 30%
(3, 4, 25), -- Manejo errores 25%
(3, 7, 25), -- Rendimiento 25%
(3, 8, 20), -- Git 20%
-- Tarea 4: WebSocket Chat
(4, 7, 30), -- Rendimiento 30%
(4, 3, 30), -- Arquitectura 30%
(4, 1, 25), -- Calidad código 25%
(4, 5, 15); -- Tests 15%

-- Evaluaciones de ejemplo
INSERT INTO evaluations (user_id, project_id, general_comment, when_created) VALUES
(2, 2, 'Excelente implementación de GraphQL. Resolvers bien estructurados y schema muy completo.', '2025-04-18 10:30:00'),
(3, 4, 'OAuth2 correctamente implementado. Falta mejorar el refresh token flow.', '2025-04-17 15:45:00'),
(4, 5, 'CRUD funcional y bien documentado. Añadir paginación a las queries sería ideal.', '2025-04-20 09:15:00'),
(5, 1, 'API REST con buenas prácticas. Endpoints RESTful y responses consistentes.', '2025-04-19 14:20:00');

-- Puntuaciones de evaluaciones
INSERT INTO evaluations_criteria (evaluation_id, criteria_id, mark) VALUES
-- Evaluación 1 (Carlos evaluando ECommerce GraphQL)
(1, 1, 5), -- Calidad código
(1, 3, 5), -- Arquitectura
(1, 2, 4), -- Documentación
(1, 6, 4), -- Seguridad
-- Evaluación 2 (Ana evaluando OAuth2)
(2, 6, 4), -- Seguridad
(2, 1, 4), -- Calidad código
(2, 5, 3), -- Tests
(2, 3, 4), -- Arquitectura
-- Evaluación 3 (David evaluando Blog CRUD)
(3, 1, 5), -- Calidad código
(3, 4, 4), -- Manejo errores
(3, 7, 3), -- Rendimiento
(3, 8, 5), -- Git
-- Evaluación 4 (Elena evaluando TaskManager)
(4, 1, 5), -- Calidad código
(4, 3, 4), -- Arquitectura
(4, 4, 5), -- Manejo errores
(4, 6, 4); -- Seguridad

-- Ajustar secuencias
SELECT setval(pg_get_serial_sequence('users', 'user_id'), COALESCE(MAX(user_id), 1)) FROM users;
SELECT setval(pg_get_serial_sequence('criteria', 'criteria_id'), COALESCE(MAX(criteria_id), 1)) FROM criteria;
SELECT setval(pg_get_serial_sequence('tasks', 'task_id'), COALESCE(MAX(task_id), 1)) FROM tasks;
SELECT setval(pg_get_serial_sequence('projects', 'project_id'), COALESCE(MAX(project_id), 1)) FROM projects;
SELECT setval(pg_get_serial_sequence('evaluations', 'evaluation_id'), COALESCE(MAX(evaluation_id), 1)) FROM evaluations;

COMMIT;