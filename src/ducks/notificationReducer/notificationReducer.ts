import { RootState } from '../index';
export enum NotificationLevel {
  Success = "SUCCESS",
  Error = "ERROR",
  Warning = "WARNING",
  Info = "INFO"
}

export interface Notification {
  id: string;
  message: string;
  level: NotificationLevel;
  read: boolean;
}

enum NotificationActionTypes {
  ADD_NOTIFICATION = "ADD_NOTIFICATION",
  TOGGLE_NOTIFICATION_READ = "TOGGLE_NOTIFICATION_READ"
}

export const addNotification = (errorMessage: any, level: NotificationLevel) => ({
  type: NotificationActionTypes.ADD_NOTIFICATION,
  errorMessage,
  level
});

export const toggleNotificationRead = (id: string) => ({
  type: NotificationActionTypes.TOGGLE_NOTIFICATION_READ,
  id
});

const initialState : Notification[] = [];

let nextTodoId = 0;
const notifications = (state: Array<Notification> = initialState, action: any) => {
  switch(action.type) {
    case NotificationActionTypes.ADD_NOTIFICATION:
    const notification: Notification = {
      id: '' + nextTodoId++,
      message: action.errorMessage,
      level: action.level,
      read: false,
    };
    state.push(notification);
    return state;
    
    case NotificationActionTypes.TOGGLE_NOTIFICATION_READ:
    const newNotifications = state.map(notification => {
      if(notification.id === action.id) {
        notification.read = !notification.read
      }
      return notification;
    });
    return newNotifications;
    default: 
    return initialState;
  }
}
export const selectUnreadNotifications = (): (state: RootState) => Notification[] => {
  return (state: RootState): Notification[] => state.notifications.filter((notification: Notification) => !notification.read)
}

export default notifications;

