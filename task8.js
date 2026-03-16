"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatTaskSummary(task) {
    switch (task.type) {
        case "coding": return "Coding task #" + task.id + " in " + task.language + ": " + task.status;
        case "testing": return "Testing task #" + task.id + " with " + task.framework + ": " + task.testCases + " test cases, status: " + task.status;
        case "doc": return "Documentation task #" + task.id + " (" + task.format + ") " + ": " + task.pages + " pages, status: " + task.status;
    }
}
function filterTasksByStatus(tasks, status) {
    return tasks.filter(task => task.status === status);
}
const tasks = [
    { type: "coding", id: 1, status: "pending", language: "TypeScript", linesOfCode: 150 },
    { type: "testing", id: 2, status: "in-progress", framework: "Jest", testCases: 25 },
    { type: "doc", id: 3, status: "pending", format: "markdown", pages: 5 },
    { type: "coding", id: 4, status: "completed", language: "Python", linesOfCode: 200 },
    { type: "testing", id: 5, status: "pending", framework: "Mocha", testCases: 10 }
];
const pendingTasks = filterTasksByStatus(tasks, "pending");
pendingTasks.forEach(task => console.log(formatTaskSummary(task)));
//# sourceMappingURL=task8.js.map