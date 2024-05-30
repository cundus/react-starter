import { Box } from "@mui/material";
import React from "react";
import { NAV_ITEM } from "./NAV_ITEM";
import { NavLink } from "react-router-dom";
import CollapsibleMenu from "./CollapsibleMenu";

const Sidebar = () => {
   return (
      <Box display={"flex"} flexDirection={"column"}>
         {NAV_ITEM.map((item, index) => (
            <NavLink
               to={item.path}
               key={index}
               style={{ textDecoration: "none" }}
            >
               {({ isActive }) => (
                  <div style={{ color: isActive ? "red" : "green" }}>
                     {!item.children ? (
                        item.name
                     ) : (
                        <CollapsibleMenu title={item.name}>
                           {item.children.map((item, index) => (
                              <NavLink
                                 to={item.path}
                                 key={index}
                                 style={{ textDecoration: "none" }}
                              >
                                 {item.name}
                              </NavLink>
                           ))}
                        </CollapsibleMenu>
                     )}
                  </div>
               )}
            </NavLink>
         ))}
      </Box>
   );
};

export default Sidebar;
