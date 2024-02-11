import React, { useState } from "react";
import { ActionIcon, Center, SimpleGrid, Text } from "@mantine/core";
import Square from "./Square";
import { Moon, Refresh, Sun } from "tabler-icons-react";
import "./Board.sass";

const Board = ({ changeTheme, theme }) => {
  let yes = false;
  const [isArr, setArr] = useState(Array(9).fill(null));
  const [isPlayer, setPlayer] = useState("x");

  const vin = () => {
    const vinArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const el of vinArr) {
      const [a, b, c] = el;
      if (isArr[a] && isArr[a] === isArr[b] && isArr[b] === isArr[c]) {
        yes = true;
        return el;
      }
    }
    return null;
  };

  const changeArr = (i) => {
    const newArr = isArr.slice();
    newArr[i] = isPlayer;
    setArr(newArr);
    setPlayer(isPlayer === "x" ? "o" : "x");
  };

  return (
    <Center className="glCenter" sx={{ height: "100vh" }}>
      <ActionIcon color="blue" onClick={changeTheme}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </ActionIcon>
      <SimpleGrid sx={{ margin: "50px" }} cols={3}>
        {isArr.map((e, i) => (
          <Square
            key={i}
            value={e}
            setArr={() => changeArr(i)}
            ind={i}
            vin={vin()}
          />
        ))}
      </SimpleGrid>
      <Center sx={{ width: "100px", height: "50px" }}>
        {yes ? (
          <center>
            Winner {isPlayer === "x" ? "O" : "X"}
            <ActionIcon color="blue" onClick={() => window.location.reload()}>
              <Refresh />
            </ActionIcon>
          </center>
        ) : isArr.includes(null) ? (
          <Text>Next - {isPlayer.toUpperCase()}</Text>
        ) : (
          <center>
            <Text>Not whose</Text>
            <ActionIcon color="blue" onClick={() => window.location.reload()}>
              <Refresh />
            </ActionIcon>
          </center>
        )}
      </Center>
    </Center>
  );
};

export default Board;
