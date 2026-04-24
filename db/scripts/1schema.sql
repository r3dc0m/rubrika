BEGIN;

-- Tabla users 
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(55) NOT NULL,
    email VARCHAR(55) NOT NULL UNIQUE,
    password VARCHAR(144) NOT NULL,
    role VARCHAR(13) NOT NULL CHECK (role IN ('alumno', 'profesor'))
);

-- Tabla tasks
CREATE TABLE IF NOT EXISTS tasks (
    task_id SERIAL PRIMARY KEY,
    task_name VARCHAR(55) NOT NULL,
    when_created DATE NOT NULL,
    due_date DATE NOT NULL,
    ponderation INTEGER NOT NULL,
    eval_available BOOLEAN NOT NULL DEFAULT false
);

-- Tabla projects
CREATE TABLE IF NOT EXISTS projects (
    project_id SERIAL PRIMARY KEY,
    task_id INTEGER NOT NULL,
    project_name VARCHAR(34) NOT NULL,
    repo_link VARCHAR(55),
    FOREIGN KEY (task_id) REFERENCES tasks(task_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla evaluations
CREATE TABLE IF NOT EXISTS evaluations (
    evaluation_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    project_id INTEGER NOT NULL,
    general_comment TEXT,
    when_created TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla criteria
CREATE TABLE IF NOT EXISTS criteria (
    criteria_id SERIAL PRIMARY KEY,
    criteria_name VARCHAR(144) NOT NULL
);

-- Tabla evaluations_criteria
CREATE TABLE IF NOT EXISTS evaluations_criteria (
    evaluation_id INTEGER NOT NULL,
    criteria_id INTEGER NOT NULL,
    mark INTEGER NOT NULL DEFAULT 0 CHECK (mark >= 1 AND mark <= 5),
    PRIMARY KEY (evaluation_id, criteria_id),
    FOREIGN KEY (evaluation_id) REFERENCES evaluations(evaluation_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (criteria_id) REFERENCES criteria(criteria_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla task_criteria
CREATE TABLE IF NOT EXISTS task_criteria (
    task_id INTEGER NOT NULL,
    criteria_id INTEGER NOT NULL,
    weight INTEGER NOT NULL,
    PRIMARY KEY (task_id, criteria_id),
    FOREIGN KEY (task_id) REFERENCES tasks(task_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (criteria_id) REFERENCES criteria(criteria_id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla user_projects
CREATE TABLE IF NOT EXISTS user_projects (
    user_id INTEGER NOT NULL,
    project_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, project_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE ON UPDATE CASCADE
);

COMMIT;