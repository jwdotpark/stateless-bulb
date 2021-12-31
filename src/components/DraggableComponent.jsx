import React, { Component } from "react";
import Draggable from "react-draggable";
// import "./styles.css";
import assets from "../assets/assets";
import { Box, Image, Text } from "@chakra-ui/react";

class DraggableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0,
        y: 0,
      },
      controlledPosition: {
        x: -400,
        y: 200,
      },
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.adjustXPos = this.adjustXPos.bind(this);
    this.adjustYPos = this.adjustYPos.bind(this);
    this.onControlledDrag = this.onControlledDrag.bind(this);
    this.onControlledDragStop = this.onControlledDragStop.bind(this);
  }

  handleDrag(e, ui) {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  }

  onStart() {
    this.setState({ activeDrags: ++this.state.activeDrags });
  }

  onStop() {
    this.setState({ activeDrags: --this.state.activeDrags });
  }
  // For controlled component
  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  }

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  }

  onControlledDrag(e, position) {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  }

  onControlledDragStop(e, position) {
    this.onControlledDrag(e, position);
    this.onStop();
  }
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    return (
      <>
        <div>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <Box
              className="box"
              style={{
                background: `url(${assets[1].link})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box w="150px">
                <Text>
                  x: {deltaPosition.x.toFixed(0)} y:{" "}
                  {deltaPosition.y.toFixed(0)}
                </Text>
                <Text>{assets[1].alt}</Text>
              </Box>
            </Box>
          </Draggable>
        </div>

        <div>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <Box
              className="box"
              style={{
                background: `url(${assets[2].link})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box w="150px">
                <Text>
                  x: {deltaPosition.x.toFixed(0)} y:{" "}
                  {deltaPosition.y.toFixed(0)}
                </Text>
                <Text>{assets[2].alt}</Text>
              </Box>
            </Box>
          </Draggable>
        </div>
      </>
    );
  }
}

export default DraggableComponent;
