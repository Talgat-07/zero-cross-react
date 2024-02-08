import React from "react";
import { ActionIcon, Card } from "@mantine/core";
import { Circle, X } from "tabler-icons-react";

const Square = ({ value, setArr, vin, ind }) => {
  return (
    <Card withBorder>
      {vin !== null ? (
        vin.includes(ind) ? (
          <ActionIcon color="red">
            {value === "x" ? <X /> : <Circle />}
          </ActionIcon>
        ) : value !== null ? (
          <ActionIcon color="blue">
            {value === "x" ? <X /> : <Circle />}
          </ActionIcon>
        ) : (
          <ActionIcon disabled onClick={setArr}>
            <Circle color="transparent" />
          </ActionIcon>
        )
      ) : value !== null ? (
        <ActionIcon color="blue">
          {value === "x" ? <X /> : <Circle />}
        </ActionIcon>
      ) : (
        <ActionIcon onClick={setArr}>
          <Circle color="transparent" />
        </ActionIcon>
      )}
    </Card>
  );
};

export default Square;
