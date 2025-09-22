import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ListChecks } from "lucide-react";

interface AgentTask {
  id: number;
  title: string;
  completed: boolean;
}

const AgentTaskManager = () => {
  const [tasks, setTasks] = useState<AgentTask[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask) return;
    setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
    setShowAdd(false);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-primary" />
          Task Management
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button size="sm" className="mb-4" onClick={() => setShowAdd(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Task
        </Button>
        <ul className="space-y-2">
          {tasks.length === 0 && <li className="text-muted-foreground">No tasks assigned.</li>}
          {tasks.map(task => (
            <li key={task.id} className="flex items-center gap-2 p-2 rounded bg-secondary/30">
              <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
              <span className={task.completed ? "line-through text-muted-foreground" : ""}>{task.title}</span>
            </li>
          ))}
        </ul>
        {showAdd && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-card p-6 rounded shadow-lg w-full max-w-md relative">
              <Button size="sm" className="absolute top-2 right-2" onClick={() => setShowAdd(false)}>
                Close
              </Button>
              <h3 className="font-bold mb-2">Add Task</h3>
              <input
                className="w-full border rounded px-2 py-1 mb-2"
                placeholder="Task Title"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
              />
              <Button size="sm" onClick={handleAddTask}>
                Save Task
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AgentTaskManager;
