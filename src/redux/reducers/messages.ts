import { MessagesActionType, TodoActionType } from '../actions';

export default function (state = '', action: any) {
  switch (action.type) {
    case MessagesActionType.MESSAGE_SHOW:
      return action.payload;
    case TodoActionType.TODO_ADD:
      return '';
    case TodoActionType.TODOS_LOAD:
      return '';
    case TodoActionType.TODO_REPLACE: //kad zavrsi todo replace da izbrise poruku
      return '';
    case TodoActionType.TODO_REMOVE:
      return '';
    default:
      return state;
  }
}
