import { Box } from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable(props: any) {
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    });


    return (
        <Box ref={setNodeRef} color={isOver ? 'green.500' : undefined}>
            {props.children}
        </Box>
    );
}