import { connect } from "react-redux";
import {
  fetchList,
  changeFilter,
  socketConnect,
  socketDisconnect,
} from "store/reducers/tasks/actions";
import { getFilter, getTasksList } from "store/reducers/tasks/selectors";

export default connect(
  state => {
    return {
      filter: getFilter(state.tasks),
      tasks: getTasksList(state.tasks),
    };
  },
  { fetchList, changeFilter, socketConnect, socketDisconnect }
);
