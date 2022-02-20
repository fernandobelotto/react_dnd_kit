import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';

import { Droppable } from './Droppable';
import { Draggable } from './Draggable';
import { Box, Text } from '@chakra-ui/react';

export default function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>
      <Box alignItems={'center'} display={'flex'} justifyContent={'center'} m={5} w={100} h={100} bg='gray.300' rounded={'lg'} >
        <Text>drag me</Text>
      </Box>
    </Draggable>
  );

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>
          <Box alignItems={'center'} display={'flex'} justifyContent={'center'} m={5} w={300} h={300} border='2px solid' rounded='lg'>
            {isDropped ? draggableMarkup : 'Drop here!'}
          </Box>
        </Droppable>
      </DndContext>
    </>
  );

  function handleDragEnd(event: any) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
}
