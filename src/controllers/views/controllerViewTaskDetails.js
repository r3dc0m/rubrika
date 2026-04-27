import tasksModel from '../../models/modelTasks.js';
import projectModel from '../../models/modelProjects.js';
import userModel from '../../models/modelUsers.js';
import criteriaModel from '../../models/modelCriteria.js';

async function getAllTasks() {
    try{
  const tasks = await tasksModel.findAll({
    include: [
      {
        model: criteriaModel,
        as: 'criteria',
        through: { attributes: [] },
        required: false
      },
      {
        model: projectModel,
        as: 'projects',
        required: false,
        include: [
          {
            model: userModel,
            as: 'users',
            through: { attributes: [] },
            required: false
          }
        ]
      }
    ],
    raw: false
  });

  return tasks.map(task => {
    const taskJson = task.toJSON();

    return {
      ...taskJson,
      criteria_list: taskJson.criteria?.map(c => c.criteria_name).join(' | ') || '',
      criteria_count: taskJson.criteria?.length || 0,
      students_count: taskJson.projects?.reduce((count, project) => 
        count + (project.users?.length || 0), 0
      ) || 0,
      students_list: [...new Set(
        taskJson.projects?.flatMap(project => 
          project.users?.map(u => u.name) || []
        ) || []
      )].join(' | ')
    };
  });
}catch(e)
{


}
}

async function getTaskDetail(taskId) {
  if (!taskId || isNaN(Number(taskId))) {
    return null;
  }

  const numericId = Number(taskId);

  const task = await tasksModel.findByPk(numericId, {
    include: [
      {
        model: criteriaModel,
        as: 'criteria',
        through: { attributes: [] },
        required: false
      },
      {
        model: projectModel,
        as: 'projects',
        required: false,
        include: [
          {
            model: userModel,
            as: 'users',
            through: { attributes: [] },
            required: false
          }
        ]
      }
    ],
    raw: false
  });

  if (!task) return null;

  return {
    ...task.toJSON(),
    criteria_list: task.criteria?.map(c => c.criteria_name).join(' | ') || '',
    criteria_count: task.criteria?.length || 0,
    students_count: task.projects?.reduce((count, project) => 
      count + (project.users?.length || 0), 0
    ) || 0,
    students_list: [...new Set(
      task.projects?.flatMap(project => 
        project.users?.map(u => u.name) || []
      ) || []
    )].join(' | ')
  };
}

export const functions = {
 getTaskDetail,
 getAllTasks
}

export default functions;