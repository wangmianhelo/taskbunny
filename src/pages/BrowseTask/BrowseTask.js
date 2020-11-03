import React from "react";
import styled from "styled-components";
import Task from "./components/Task";
import TaskDetail from "./components/TaskDetail";
import api from "../../api";


const BrowseTaskContainer = styled.div`
  margin: 3rem auto 2rem;
  width: 84rem;
  display: flex;
  flex-direction: row;
`;

const TaskContainer = styled.div`
  width: 23rem;
  height: calc(100vh - 214px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #FFFFFF;
  }
  &::-webkit-scrollbar-thumb {
    background: #5EDEFC;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #5EDEFC;
  }
`;

const TaskDetailContainer = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 214px);
  overflow: auto;
  padding: 1.375rem 2rem;
  width: 58rem;
`;

class BrowseTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      tasks: [],
      currentTask: null,
      currentTaskIndex: null,
    }
  }

  async getTask () {
    try {
      const response = await api.get('/task/tasks');
      console.log(response);
      this.setState({
        ...this.state,
        tasks: response.data.data,
        currentTask: response.data.data[this.state.currentTaskIndex || 0],
      });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.getTask()
  }

  render() {
    const { error, tasks, currentTask, } = this.state;
    const handleRefresh = () => {
      this.getTask();
    };
    return (
      <div>
        <BrowseTaskContainer>
          <TaskContainer>
              {tasks.map((task, index) => (
                <Task {...task}
                onClick={() => this.setState({...this.state, currentTaskIndex: index, currentTask: task})} />
              ))}
          </TaskContainer>
          <TaskDetailContainer>
            <TaskDetail {...currentTask}
              handleRefresh={handleRefresh} />
          </TaskDetailContainer>
        </BrowseTaskContainer>
      </div>
    );
  }
};


export default BrowseTask;