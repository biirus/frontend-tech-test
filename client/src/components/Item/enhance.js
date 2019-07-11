import { connect } from "react-redux";
import { getTaskItem } from "store/reducers/tasks/selectors";
import { change, remove } from "store/reducers/tasks/actions";

export default connect(
  (state, props) => {
    return {
      task: getTaskItem(state.tasks, props.taskID),
    };
  },
  {
    change,
    remove,
  }
);
