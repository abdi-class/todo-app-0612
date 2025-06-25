"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Moon, Trash } from "lucide-react";
import { useRef, useState } from "react";
import TaskList from "./component/TaskList";

interface ITask {
  id: number;
  task: string;
  isDone: boolean;
}

function TodoPage() {
  // tate for store data task
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const inTaskRef = useRef<HTMLInputElement>(null);
  const inTaskEditRef = useRef<HTMLInputElement>(null);
  // store selected data
  const [selectedData, setSelectedData] = useState<ITask | null>(null);

  function onBtAdd() {
    // - Memastikan input sudah diisi
    if (inTaskRef.current && inTaskRef.current.value) {
      // - Duplikasi data taskList ke variable lain
      const temp: ITask[] = [...taskList];
      // Tambah data baru ke variable salinan
      temp.push({
        id: temp.length + 1,
        task: inTaskRef.current.value,
        isDone: false,
      });
      // Perbarui data state taskList dengan data dari temp
      setTaskList(temp);
      // Reset form input
      inTaskRef.current.value = "";
    } else {
      alert("Form task harus diisi");
    }
  }

  function onBtDelete(id: number) {
    // - duplikat data taskList ke variable lain
    const temp: ITask[] = [...taskList];
    // - mencari index data berdasarkan id
    const dataIdx = temp.findIndex((value: ITask) => value.id === id);
    // - menghapus data berdasarkan index
    temp.splice(dataIdx, 1);
    // - perbarui data task list
    setTaskList(temp);
  }

  function onBtIsDone(id: number) {
    // - duplikat data taskList ke variable lain
    const temp: ITask[] = [...taskList];
    // - mencari index data berdasarkan id
    const dataIdx = temp.findIndex((value: ITask) => value.id === id);
    // - Memperbarui nilai property isDone
    temp[dataIdx].isDone = !temp[dataIdx].isDone;
    // - perbarui data task list
    setTaskList(temp);
  }

  function onBtSaveEdit() {
    // - duplikat data taskList ke variable lain
    const temp: ITask[] = [...taskList];
    // - mencari index data berdasarkan id
    const dataIdx = temp.findIndex(
      (value: ITask) => value.id === selectedData?.id
    );
    if (inTaskEditRef.current) {
      // - Memperbarui nilai property task
      temp[dataIdx].task = inTaskEditRef.current.value;
      // - perbarui data task list
      setTaskList(temp);
      setSelectedData(null); // reset selectedData
    }
  }

  function printTaskList() {
    return taskList.map((value: ITask) => {
      if (value.id === selectedData?.id) {
        return (
          <li key={value.id} className="flex items-center gap-1">
            <Input
              type="text"
              defaultValue={selectedData.task}
              ref={inTaskEditRef}
            />
            <Button
              type="button"
              size="sm"
              onClick={() => setSelectedData(null)}
            >
              Cancel
            </Button>
            <Button type="button" size="sm" onClick={onBtSaveEdit}>
              Save
            </Button>
          </li>
        );
      } else {
        return (
          <li key={value.id}>
            <TaskList
              data={value}
              onBtDelete={onBtDelete}
              onBtIsDone={onBtIsDone}
              onBtSelect={setSelectedData}
            />
          </li>
        );
      }
    });
  }

  function onHandleTheme() {
    localStorage.setItem("mode", "dark");
  }

  return (
    <div>
      <div
        id="header"
        className="h-48 pt-12 relative bg-gradient-to-b from-purple-500"
      >
        <div className="w-[40rem] m-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">Todo</h1>
          <p>Theme mode: {localStorage.getItem("mode")}</p>
          <Button
            variant="ghost"
            className="cursor-pointer"
            size="icon"
            onClick={onHandleTheme}
          >
            <Moon size={24} color="white" />
          </Button>
        </div>
      </div>
      <div id="todo" className="w-[40rem] m-auto">
        <Card id="form-task">
          <CardContent>
            <div className="relative">
              <Input
                type="text"
                placeholder="Create a new todo..."
                className="py-6"
                ref={inTaskRef}
              />
              <Button
                type="button"
                size="sm"
                className="absolute right-4 top-1/6"
                onClick={onBtAdd}
              >
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card id="print-task">
          <CardContent>
            <ul>{printTaskList()}</ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default TodoPage;
