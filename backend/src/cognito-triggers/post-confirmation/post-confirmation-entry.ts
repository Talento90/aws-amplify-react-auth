import {Callback, Context, PostConfirmationTriggerEvent} from 'aws-lambda';
import {adminAddUserToGroup} from './admin-add-user-to-group';

export async function main(
  event: PostConfirmationTriggerEvent,
  _context: Context,
  callback: Callback,
): Promise<void> {
  const {userPoolId, userName} = event;

  try {
    await adminAddUserToGroup({
      userPoolId,
      username: userName,
      groupName: 'Users',
    });

    return callback(null, event);
  } catch (error) {
    return callback(error, event);
  }
}
