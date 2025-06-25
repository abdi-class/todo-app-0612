import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Trash } from "lucide-react";

interface ITaskListProps {
  data: any;
  onBtDelete: (id: number) => void;
  onBtIsDone: (id: number) => void;
  onBtSelect: (data: any) => void;
}

function TaskList({
  data,
  onBtDelete,
  onBtIsDone,
  onBtSelect,
}: ITaskListProps) {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center gap-6">
        <Checkbox
          checked={data.isDone}
          className="rounded-full w-6 h-6 border-gray-400"
          onClick={() => onBtIsDone(data.id)}
        />
        <p className={data.isDone ? "line-through" : ""}>{data.task}</p>
      </div>
      <div>
        <Button
          type="button"
          className="p-0 w-8 h-8 rounded-full"
          onClick={() => onBtDelete(data.id)}
        >
          <Trash size={24} />
        </Button>
        <Button
          type="button"
          className="p-0 w-8 h-8 rounded-full"
          onClick={() => onBtSelect(data)}
        >
          <Edit size={24} />
        </Button>
      </div>
    </div>
  );
}
export default TaskList;
