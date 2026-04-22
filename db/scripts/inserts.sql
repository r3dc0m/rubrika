BEGIN;

-- 1) Users
INSERT INTO public.users (user_id, name, password, email, role) VALUES
(1,  'Profesor Uno', 'prof123', 'admin@admin.com',  'profesor'),
(2,  'Alumno 1',  'alumno1',  'user1@admin.com','alumno'),
(3,  'Alumno 2',     'alumno2',  'user2@admin.com','alumno'),
(4,  'Alumno 3',     'alumno3', 'user3@admin.com', 'alumno'),
(5,  'Alumno 4',     'alumno4', 'user4@admin.com', 'alumno'),
(6,  'Alumno 5',     'alumno5', 'user5@admin.com', 'alumno'),
(7,  'Alumno 6',     'alumno6', 'user6@admin.com', 'alumno'),
(8,  'Alumno 7',     'alumno7', 'user7@admin.com', 'alumno'),
(9,  'Alumno 8',     'alumno8', 'user8@admin.com', 'alumno'),
(10, 'Alumno 9',     'alumno9', 'user9@admin.com', 'alumno');

-- 2) Tasks
INSERT INTO public.tasks (task_id, task_name, when_created, due_date, ponderation, eval_available) VALUES
(1, 'individual JS',  '2026-04-15', '2026-04-30', 70, true),
(2, 'grupal JS',      '2026-04-15', '2026-05-07', 80, true),
(3, 'grupal backend', '2026-04-15', '2026-05-14', 90, false);

-- 3) Criteria
INSERT INTO public.criteria (criteria_id, criteria_name) VALUES
(1, 'Claridad del código'),
(2, 'Funcionalidad'),
(3, 'Uso correcto de JS'),
(4, 'Trabajo en equipo'),
(5, 'Backend y persistencia'),
(6, 'Buenas prácticas'),
(7, 'Entrega a tiempo');

-- 4) Task-Criteria
INSERT INTO public.task_criteria (criteria_id, task_id, weight) VALUES
(1, 1, 20),
(2, 1, 30),
(3, 1, 30),
(7, 1, 20),

(1, 2, 15),
(2, 2, 25),
(3, 2, 25),
(4, 2, 20),
(6, 2, 15),

(1, 3, 10),
(2, 3, 20),
(5, 3, 40),
(6, 3, 20),
(7, 3, 10);

-- 5) Projects
INSERT INTO public.projects (project_id, task_id, project_name, repo_link) VALUES
(1, 1, 'Proyecto individual JS', 'https://github.com/demo/individual-js'),
(2, 2, 'Proyecto grupal JS A',   'https://github.com/demo/grupal-js-1'),
(3, 2, 'Proyecto grupal JS B',   'https://github.com/demo/grupal-js-2'),
(4, 2, 'Proyecto grupal JS C',   'https://github.com/demo/grupal-js-3'),
(5, 3, 'Proyecto backend grupo', 'https://github.com/demo/grupal-backend');

-- 6) User-Projects
INSERT INTO public.user_projects (user_id, project_id) VALUES
(2, 1),
(2, 2), (3, 2), (4, 2),
(5, 3), (6, 3), (7, 3),
(8, 4), (9, 4), (10, 4),
(2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (8, 5), (9, 5), (10, 5);

-- 7) Evaluations
INSERT INTO public.evaluations (evaluation_id, user_id, general_comment, when_created, project_id) VALUES
(1, 1, 'Buen trabajo general. Ajustar detalles menores.', '2026-04-16', 1),
(2, 1, 'Entrega correcta, buena coordinación del grupo.', '2026-04-17', 2),
(3, 1, 'Código limpio, pero faltan validaciones.', '2026-04-18', 3),
(4, 1, 'Muy buen avance en la parte backend.', '2026-04-19', 5);

-- 8) Evaluations-Criteria
INSERT INTO public.evaluations_criteria (evaluation_id, criteria_id, mark) VALUES
(1, 1, 18),
(1, 2, 26),
(1, 3, 28),
(1, 7, 19),

(2, 1, 14),
(2, 2, 22),
(2, 3, 23),
(2, 4, 18),
(2, 6, 14),

(3, 1, 12),
(3, 2, 21),
(3, 3, 20),
(3, 4, 15),
(3, 6, 13),

(4, 1, 9),
(4, 2, 17),
(4, 5, 35),
(4, 6, 18),
(4, 7, 9);

COMMIT;