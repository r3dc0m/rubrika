BEGIN;


ALTER TABLE IF EXISTS public.evaluations DROP CONSTRAINT IF EXISTS evaluations_project_id_fkey;

ALTER TABLE IF EXISTS public.evaluations DROP CONSTRAINT IF EXISTS evaluations_user_id_fkey;

ALTER TABLE IF EXISTS public.evaluations_criteria DROP CONSTRAINT IF EXISTS evaluations_criteria_critertia_criteria_id_fkey;

ALTER TABLE IF EXISTS public.evaluations_criteria DROP CONSTRAINT IF EXISTS evaluations_criteria_evaluations_evaluation_id_fkey;

ALTER TABLE IF EXISTS public.projects DROP CONSTRAINT IF EXISTS project_tasks_task_id_fkey;

ALTER TABLE IF EXISTS public.task_criteria DROP CONSTRAINT IF EXISTS task_criteria_criteria_id_fkey;

ALTER TABLE IF EXISTS public.task_criteria DROP CONSTRAINT IF EXISTS task_criteria_task_id_fkey;

ALTER TABLE IF EXISTS public.user_projects DROP CONSTRAINT IF EXISTS user_project_project_id_fkey;

ALTER TABLE IF EXISTS public.user_projects DROP CONSTRAINT IF EXISTS user_project_user_id_fkey;



DROP TABLE IF EXISTS public.criteria;

CREATE TABLE IF NOT EXISTS public.criteria
(
    criteria_id integer NOT NULL,
    criteria_name character varying(144) COLLATE pg_catalog."default" NOT NULL DEFAULT 'Criterio vacío'::character varying,
    CONSTRAINT critertia_pkey PRIMARY KEY (criteria_id)
);

DROP TABLE IF EXISTS public.evaluations;

CREATE TABLE IF NOT EXISTS public.evaluations
(
    user_id integer NOT NULL,
    general_comment character varying(89) COLLATE pg_catalog."default",
    when_created date DEFAULT now(),
    project_id integer NOT NULL,
    evaluation_id integer NOT NULL,
    CONSTRAINT evaluations_pkey PRIMARY KEY (evaluation_id)
);

DROP TABLE IF EXISTS public.evaluations_criteria;

CREATE TABLE IF NOT EXISTS public.evaluations_criteria
(
    evaluation_id integer NOT NULL,
    criteria_id integer NOT NULL,
    mark integer NOT NULL DEFAULT 0
);

DROP TABLE IF EXISTS public.projects;

CREATE TABLE IF NOT EXISTS public.projects
(
    project_id integer NOT NULL,
    task_id integer NOT NULL,
    project_name character varying(34) COLLATE pg_catalog."default" NOT NULL,
    repo_link character varying(55) COLLATE pg_catalog."default",
    CONSTRAINT project_tasks_pkey PRIMARY KEY (project_id)
);

DROP TABLE IF EXISTS public.task_criteria;

CREATE TABLE IF NOT EXISTS public.task_criteria
(
    criteria_id integer NOT NULL,
    task_id integer NOT NULL,
    weight integer NOT NULL DEFAULT 100
);

DROP TABLE IF EXISTS public.tasks;

CREATE TABLE IF NOT EXISTS public.tasks
(
    task_id integer NOT NULL,
    task_name character varying(55) COLLATE pg_catalog."default" NOT NULL,
    when_created date NOT NULL DEFAULT now(),
    due_date date,
    ponderation integer NOT NULL DEFAULT 70,
    eval_available boolean NOT NULL DEFAULT false,
    CONSTRAINT tasks_pkey PRIMARY KEY (task_id)
);

DROP TABLE IF EXISTS public.user_projects;

CREATE TABLE IF NOT EXISTS public.user_projects
(
    user_id integer NOT NULL,
    project_id integer NOT NULL
);

DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    user_id integer NOT NULL,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default",
    role character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (user_id)
);

ALTER TABLE IF EXISTS public.evaluations
    ADD CONSTRAINT evaluations_project_id_fkey FOREIGN KEY (project_id)
    REFERENCES public.projects (project_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.evaluations
    ADD CONSTRAINT evaluations_user_id_fkey FOREIGN KEY (user_id)
    REFERENCES public.users (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.evaluations_criteria
    ADD CONSTRAINT evaluations_criteria_critertia_criteria_id_fkey FOREIGN KEY (criteria_id)
    REFERENCES public.criteria (criteria_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.evaluations_criteria
    ADD CONSTRAINT evaluations_criteria_evaluations_evaluation_id_fkey FOREIGN KEY (evaluation_id)
    REFERENCES public.evaluations (evaluation_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.projects
    ADD CONSTRAINT project_tasks_task_id_fkey FOREIGN KEY (task_id)
    REFERENCES public.tasks (task_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.task_criteria
    ADD CONSTRAINT task_criteria_criteria_id_fkey FOREIGN KEY (criteria_id)
    REFERENCES public.criteria (criteria_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.task_criteria
    ADD CONSTRAINT task_criteria_task_id_fkey FOREIGN KEY (task_id)
    REFERENCES public.tasks (task_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.user_projects
    ADD CONSTRAINT user_project_project_id_fkey FOREIGN KEY (project_id)
    REFERENCES public.projects (project_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.user_projects
    ADD CONSTRAINT user_project_user_id_fkey FOREIGN KEY (user_id)
    REFERENCES public.users (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

COMMIT;