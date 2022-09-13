import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";

const AddInput = styled.input`
  text-align: center;
  padding: 5px 0px;
  border-radius: 5px;
  width: 200px;
  border: none;
`;

interface ITask {
  task: string;
}

function TaskInput() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<ITask>();
  const onValid = ({ task }: ITask) => {
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [task]: [],
      };
    });
    setValue("task", "");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <AddInput {...register("task")} placeholder="Add Your Catogory !" />
    </form>
  );
}

export default TaskInput;
