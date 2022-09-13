import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

interface ITrashBinProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Trash = styled.div<ITrashBinProps>`
  position: relative;
  margin-top: 130px;
  background-color: ${(props) => (props.isDraggingOver ? "red" : "white")};
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 40px;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  span {
    position: absolute;
    top: 3px;
  }
`;

function TrashBin() {
  return (
    <Droppable droppableId={"trashBin"}>
      {(magic, info) => (
        <Trash
          isDraggingOver={info.isDraggingOver}
          isDraggingFromThis={Boolean(info.draggingFromThisWith)}
          ref={magic.innerRef}
          {...magic.droppableProps}
        >
          <span>{"♻️"}</span>
          {magic.placeholder}
        </Trash>
      )}
    </Droppable>
  );
}

export default TrashBin;
