import criteriaModel from "./modelCriteria.js";
import evaluationModel from "./modelEvaluations.js";
import projectModel from "./modelProjects.js";
import tasksModel from "./modelTasks.js";
import userModel from "./modelUsers.js";
import taskCriteriaModel from "./modelTaskCriteria.js";
import userProjectsModel from "./modelUserProjects.js";
import evaluationCriteriaModel from "./modelEvaluationsCriteria.js";


// Tasks 1:M Projects
tasksModel.hasMany(projectModel, { foreignKey: "task_id", as: "projects" });
projectModel.belongsTo(tasksModel, { foreignKey: "task_id", as: "task" });

// Users 1:M Evaluations  
userModel.hasMany(evaluationModel, { foreignKey: "user_id", as: "evaluations" });
evaluationModel.belongsTo(userModel, { foreignKey: "user_id", as: "user" });

// Projects 1:M Evaluations
projectModel.hasMany(evaluationModel, { foreignKey: "project_id", as: "evaluations" });
evaluationModel.belongsTo(projectModel, { foreignKey: "project_id", as: "project" });

// Users M:M Projects (via user_projects)

projectModel.belongsToMany(userModel, {
    through: userProjectsModel,
    foreignKey: "project_id",
    otherKey: "user_id",
    as: "users"
});

userModel.belongsToMany(projectModel, {
    through: userProjectsModel,
    foreignKey: "user_id",
    otherKey: "project_id",
    as: "projects"
});
// Tasks M:M Criteria (via task_criteria)

criteriaModel.belongsToMany(tasksModel, {
    through: taskCriteriaModel,
    foreignKey: "criteria_id",
    otherKey: "task_id",
    as: "tasks"
});

tasksModel.belongsToMany(criteriaModel, {
    through: taskCriteriaModel,
    foreignKey: "task_id",
    otherKey: "criteria_id",
    as: "criteria"
});
// Evaluations M:M Criteria (via evaluations_criteria)

criteriaModel.belongsToMany(evaluationModel, {
    through: evaluationCriteriaModel,
    foreignKey: "criteria_id",
    otherKey: "evaluation_id",
    as: "evaluations"
});

evaluationModel.belongsToMany(criteriaModel, {
    through: evaluationCriteriaModel,
    foreignKey: "evaluation_id",
    otherKey: "criteria_id",
    as: "criteria"
});
