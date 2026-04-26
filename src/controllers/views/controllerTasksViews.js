import Task from '../../models/modelTasks.js';
import Evaluation from '../../models/modelEvaluations.js';
import Project from '../../models/modelProjects.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      order: [['due_date', 'DESC']]
    });
    
    const message = req.query.message || null;
    const error = req.query.error || null;
    
    res.render('tasks/list', { 
      tasks, 
      user: req.session.user,
      message,
      error
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener tareas');
  }
};

export const getCreateTaskForm = (req, res) => {
  res.render('tasks/form', { 
    task: null, 
    user: req.session.user 
  });
};

export const createTask = async (req, res) => {
  try {
    const { task_name, when_created, due_date, ponderation, eval_available } = req.body;
    
    await Task.create({
      task_name,
      when_created,
      due_date,
      ponderation: parseInt(ponderation),
      eval_available: eval_available === 'true'
    });
    
    res.redirect('/tasks?message=Tarea creada exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear tarea');
  }
};

export const getEditTaskForm = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    
    if (!task) {
      return res.status(404).send('Tarea no encontrada');
    }
    
    res.render('tasks/form', { 
      task, 
      user: req.session.user 
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener tarea');
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task_name, when_created, due_date, ponderation, eval_available } = req.body;
    
    await Task.update(
      { 
        task_name, 
        when_created, 
        due_date, 
        ponderation: parseInt(ponderation), 
        eval_available: eval_available === 'true' 
      },
      { where: { task_id: id } }
    );
    
    res.redirect('/tasks?message=Tarea actualizada exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar tarea');
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    
    const projects = await Project.findAll({ where: { task_id: id } });
    
    if (projects.length > 0) {
      const projectIds = projects.map(p => p.project_id);
      const evaluationCount = await Evaluation.count({ 
        where: { project_id: projectIds } 
      });
      
      if (evaluationCount > 0) {
        return res.redirect(
          `/tasks?error=No se puede borrar. Tiene ${evaluationCount} evaluaciones asociadas.`
        );
      }
    }
    
    await Task.destroy({ where: { task_id: id } });
    res.redirect('/tasks?message=Tarea eliminada exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al borrar tarea');
  }
};