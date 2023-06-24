import React from "react";
import { Stack, UnorderedList } from "@chakra-ui/react";
import TareaItem from "./Tarea";

function TareasList({ tareas,toggleTodo,deleteTarea,editarTarea }) { 
  return (
    <>
     <Stack direction="row" alignItems="center">
      <UnorderedList listStyleType="none" className="list-group">
      {tareas.map((tarea) => (
        <TareaItem
          key={tarea.id}
          tarea={tarea}
          toggleTodo={toggleTodo}
          deleteTarea={deleteTarea}
          editarTarea={editarTarea}
        />
      ))}
    </UnorderedList>
    </Stack>
    </>
  );
}

export default TareasList;
