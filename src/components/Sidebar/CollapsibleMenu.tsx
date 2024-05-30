import { ExpandMore } from "@mui/icons-material";
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Typography,
} from "@mui/material";
import React from "react";

interface Props {
   title: string;
   children: React.ReactNode;
}

const CollapsibleMenu: React.FC<Props> = ({ children, title }) => {
   return (
      <Accordion sx={{ bgcolor: "transparent", boxShadow: "none" }}>
         <AccordionSummary aria-controls="panel2-content" id="panel2-header">
            <Typography>{title}</Typography>
         </AccordionSummary>
         <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
   );
};

export default CollapsibleMenu;
